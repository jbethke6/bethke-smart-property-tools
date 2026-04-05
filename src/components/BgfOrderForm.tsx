import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Upload, X, FileImage, Loader2, CreditCard } from "lucide-react";
import { FileWithPages, countPages, calculatePrice, formatPrice, validateFile } from "@/lib/bgf-utils";
import { supabase } from "@/lib/supabase";
import { N8N_WEBHOOK_URL } from "@/lib/config";

export function BgfOrderForm() {
  const [files, setFiles] = useState<FileWithPages[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [counting, setCounting] = useState(false);

  const totalFloors = files.reduce((sum, f) => sum + f.pages, 0);
  const price = calculatePrice(totalFloors);

  const addFiles = useCallback(async (newFiles: File[]) => {
    setCounting(true);
    const results: FileWithPages[] = [];
    for (const file of newFiles) {
      const error = validateFile(file);
      if (error) {
        toast({ title: error, variant: "destructive" });
        continue;
      }
      try {
        const pages = await countPages(file);
        results.push({ file, pages });
      } catch {
        toast({ title: `Fehler beim Lesen von ${file.name}`, variant: "destructive" });
      }
    }
    setFiles((prev) => [...prev, ...results]);
    setCounting(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    addFiles(Array.from(e.dataTransfer.files));
  }, [addFiles]);

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(Array.from(e.target.files));
  };

  const removeFile = (idx: number) => setFiles((prev) => prev.filter((_, i) => i !== idx));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      toast({ title: "Bitte laden Sie mindestens einen Grundriss hoch.", variant: "destructive" });
      return;
    }
    setLoading(true);

    try {
      // 1. Create order ID
      const orderId = crypto.randomUUID();

      // 2. Upload files to Supabase Storage
      const uploadedPaths: string[] = [];
      for (const { file } of files) {
        const path = `${orderId}/${file.name}`;
        const { error } = await supabase.storage
          .from("temp_uploads")
          .upload(path, file, { upsert: true });
        if (error) throw new Error(`Upload fehlgeschlagen: ${error.message}`);
        uploadedPaths.push(path);
      }

      // 3. Save order metadata to temp_orders
      const { error: dbError } = await supabase.from("temp_orders").insert({
        id: orderId,
        customer_name: name,
        customer_email: email,
        floors: totalFloors,
        price_cents: price,
        file_paths: uploadedPaths,
        status: "pending",
      });
      if (dbError) throw new Error(`Bestellung speichern fehlgeschlagen: ${dbError.message}`);

      // 4. Redirect to Stripe Checkout via n8n webhook
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id: orderId,
          customer_name: name,
          customer_email: email,
          floors: totalFloors,
          price_cents: price,
          file_paths: uploadedPaths,
          return_url: window.location.origin + "/bgf-held?status=success",
          cancel_url: window.location.origin + "/bgf-held?status=cancel",
        }),
      });

      const data = await res.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        toast({ title: "Zahlung konnte nicht initiiert werden.", description: "Bitte versuchen Sie es erneut.", variant: "destructive" });
      }
    } catch (err: any) {
      console.error(err);
      toast({ title: "Fehler", description: err.message || "Unbekannter Fehler", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  // Check for return from Stripe
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("status") === "success") {
      toast({ title: "Zahlung erfolgreich!", description: "Ihre BGF-Berechnung wird jetzt erstellt. Sie erhalten das Ergebnis per E-Mail." });
      window.history.replaceState({}, "", "/bgf-held");
    } else if (params.get("status") === "cancel") {
      toast({ title: "Zahlung abgebrochen", description: "Die Bestellung wurde nicht abgeschlossen.", variant: "destructive" });
      window.history.replaceState({}, "", "/bgf-held");
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Upload area */}
      <div>
        <label className="mb-2 block text-sm font-semibold">Grundriss hochladen *</label>
        <div
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={onDrop}
          className={`relative flex min-h-[160px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 transition-all ${
            dragActive
              ? "border-primary bg-primary/5 scale-[1.01]"
              : "border-border hover:border-primary/50 hover:bg-accent/30"
          }`}
          onClick={() => document.getElementById("bgf-file-input")?.click()}
        >
          <Upload className="mb-3 h-10 w-10 text-muted-foreground" />
          <p className="text-sm font-medium text-muted-foreground">
            Dateien hierher ziehen oder <span className="text-primary underline">durchsuchen</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground/70">JPG, PNG, WebP oder PDF – max. 10 MB pro Datei</p>
          <input
            id="bgf-file-input"
            type="file"
            accept="image/jpeg,image/png,image/webp,.pdf"
            multiple
            onChange={onFileSelect}
            className="hidden"
          />
        </div>

        {counting && (
          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Seiten werden gezählt…
          </div>
        )}

        {files.length > 0 && (
          <div className="mt-3 space-y-2">
            {files.map((f, i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-sm">
                <FileImage className="h-4 w-4 text-primary" />
                <span className="flex-1 truncate">{f.file.name}</span>
                <span className="text-xs text-muted-foreground">{f.pages} {f.pages === 1 ? "Etage" : "Etagen"}</span>
                <button type="button" onClick={() => removeFile(i)} className="text-muted-foreground hover:text-destructive">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pricing display */}
      {totalFloors > 0 && (
        <div className="rounded-xl border bg-accent/50 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">{totalFloors} {totalFloors === 1 ? "Etage" : "Etagen"} erkannt</p>
              <p className="text-xs text-muted-foreground">
                29,00 € Grundpreis{totalFloors > 1 ? ` + ${totalFloors - 1} × 15,00 € weitere Etagen` : ""}
              </p>
            </div>
            <p className="text-2xl font-bold text-primary">{formatPrice(price)}</p>
          </div>
        </div>
      )}

      {/* Contact fields */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold">Ihr Name *</label>
          <Input required placeholder="Max Mustermann" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold">E-Mail *</label>
          <Input type="email" required placeholder="ihre@email.de" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={loading || files.length === 0}>
        {loading ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Wird verarbeitet…</>
        ) : (
          <><CreditCard className="mr-2 h-4 w-4" /> Jetzt bezahlen – {totalFloors > 0 ? formatPrice(price) : "ab 29,00 €"}</>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Sichere Zahlung über Stripe. Nach der Bezahlung erhalten Sie Ihre BGF-Berechnung per E-Mail.
      </p>
    </form>
  );
}
