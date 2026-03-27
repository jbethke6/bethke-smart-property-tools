import { useState, useCallback } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { Calculator, Search, Upload, X, FileImage } from "lucide-react";

const FORM_EMAIL = "bethke.ftr@gmail.com";

/* ─── BGF-Held Demo ─── */
function BgfDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const dropped = Array.from(e.dataTransfer.files).filter(
      (f) => f.type.startsWith("image/") || f.type === "application/pdf"
    );
    setFiles((prev) => [...prev, ...dropped]);
  }, []);

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      toast({ title: "Bitte laden Sie mindestens einen Grundriss hoch.", variant: "destructive" });
      return;
    }

    // Send via FormSubmit
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("_subject", `Neuer BGF-Held Auftrag von ${name}`);
    formData.append("_template", "table");
    formData.append("Anzahl Grundrisse", String(files.length));
    formData.append("Dateinamen", files.map((f) => f.name).join(", "));
    files.forEach((f, i) => formData.append(`attachment_${i + 1}`, f));

    try {
      await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: "POST",
        body: formData,
      });
    } catch {
      // Silently continue — form will show success either way
    }

    setSubmitted(true);
    toast({ title: "Auftrag gesendet!", description: "Ich melde mich zeitnah mit Ihrem Angebot." });
  };

  if (submitted) {
    return (
      <div className="rounded-lg border bg-accent/50 p-6 text-center">
        <div className="mb-2 text-3xl">✅</div>
        <p className="text-lg font-semibold">Vielen Dank, {name}!</p>
        <p className="text-sm text-muted-foreground">Ihre Grundrisse wurden übermittelt. Ich erstelle Ihnen zeitnah ein persönliches Angebot.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Drag & Drop Zone */}
      <div>
        <label className="mb-1.5 block text-sm font-medium">Grundriss hochladen *</label>
        <div
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={onDrop}
          className={`relative flex min-h-[140px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 transition-colors ${
            dragActive
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50 hover:bg-accent/30"
          }`}
          onClick={() => document.getElementById("bgf-file-input")?.click()}
        >
          <Upload className="mb-2 h-8 w-8 text-muted-foreground" />
          <p className="text-sm font-medium text-muted-foreground">
            Dateien hierher ziehen oder <span className="text-primary underline">durchsuchen</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground/70">Bilder (JPG, PNG) oder PDF</p>
          <input
            id="bgf-file-input"
            type="file"
            accept="image/*,.pdf"
            multiple
            onChange={onFileSelect}
            className="hidden"
          />
        </div>
        {files.length > 0 && (
          <div className="mt-3 space-y-2">
            {files.map((f, i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-sm">
                <FileImage className="h-4 w-4 text-primary" />
                <span className="flex-1 truncate">{f.name}</span>
                <button type="button" onClick={() => removeFile(i)} className="text-muted-foreground hover:text-destructive">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Ihr Name *</label>
          <Input required placeholder="Max Mustermann" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">E-Mail *</label>
          <Input type="email" required placeholder="ihre@email.de" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <Button type="submit" size="lg" className="w-full">
        <Calculator className="mr-2 h-4 w-4" />
        BGF-Auftrag absenden
      </Button>
    </form>
  );
}

/* ─── Förder-Held Demo ─── */
const massnahmen = [
  "Dämmung Außenwand",
  "Dachdämmung",
  "Fenster-Austausch",
  "Heizungstausch",
  "Solaranlage",
  "Lüftungsanlage",
];

function FoerderDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [baujahr, setBaujahr] = useState("");
  const [plz, setPlz] = useState("");
  const [bgf, setBgf] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const toggleMassnahme = (m: string) => {
    setSelected((prev) => prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("_subject", `Neuer Förder-Held Auftrag von ${name}`);
    formData.append("_template", "table");
    formData.append("Baujahr", baujahr);
    formData.append("PLZ", plz);
    formData.append("BGF (m²)", bgf || "Nicht angegeben");
    formData.append("Maßnahmen", selected.length > 0 ? selected.join(", ") : "Keine ausgewählt");

    try {
      await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: "POST",
        body: formData,
      });
    } catch {
      // Silently continue
    }

    setSubmitted(true);
    toast({ title: "Auftrag gesendet!", description: "Ich melde mich zeitnah mit Ihren Fördermöglichkeiten." });
  };

  if (submitted) {
    return (
      <div className="rounded-lg border bg-accent/50 p-6 text-center">
        <div className="mb-2 text-3xl">✅</div>
        <p className="text-lg font-semibold">Vielen Dank, {name}!</p>
        <p className="text-sm text-muted-foreground">Ihre Daten wurden übermittelt. Ich erstelle Ihnen zeitnah eine Förder-Übersicht.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Ihr Name *</label>
          <Input required placeholder="Max Mustermann" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">E-Mail *</label>
          <Input type="email" required placeholder="ihre@email.de" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Baujahr *</label>
          <Input required type="number" placeholder="z.B. 1975" value={baujahr} onChange={(e) => setBaujahr(e.target.value)} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">PLZ *</label>
          <Input required placeholder="z.B. 10115" maxLength={5} value={plz} onChange={(e) => setPlz(e.target.value)} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">BGF (m²)</label>
          <Input placeholder="optional" value={bgf} onChange={(e) => setBgf(e.target.value)} />
        </div>
      </div>
      <div>
        <label className="mb-3 block text-sm font-medium">Geplante Maßnahmen</label>
        <div className="grid gap-3 sm:grid-cols-2">
          {massnahmen.map((m) => (
            <label key={m} className="flex items-center gap-2 text-sm cursor-pointer">
              <Checkbox checked={selected.includes(m)} onCheckedChange={() => toggleMassnahme(m)} />
              {m}
            </label>
          ))}
        </div>
      </div>
      <Button type="submit" size="lg" className="w-full">
        <Search className="mr-2 h-4 w-4" />
        Förder-Check absenden
      </Button>
    </form>
  );
}

const SmartToolsDemo = () => (
  <Layout>
    <div className="py-16 lg:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Ausprobieren</p>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Smart Tools live erleben</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Testen Sie meine Tools direkt. Laden Sie Ihren Grundriss hoch oder geben Sie Ihre Gebäudedaten ein – ich melde mich mit einem persönlichen Angebot.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border bg-card p-6 shadow-sm lg:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">BGF-Held</h2>
                <p className="text-xs text-muted-foreground">Bruttogrundfläche berechnen</p>
              </div>
            </div>
            <BgfDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border bg-card p-6 shadow-sm lg:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Search className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Förder-Held</h2>
                <p className="text-xs text-muted-foreground">Förderprogramme finden</p>
              </div>
            </div>
            <FoerderDemo />
          </motion.div>
        </div>
      </div>
    </div>
  </Layout>
);

export default SmartToolsDemo;
