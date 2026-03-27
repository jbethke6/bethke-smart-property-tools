import { useState, useCallback } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { Calculator, Upload, X, FileImage, CheckCircle2, ArrowRight } from "lucide-react";
import toolsImage from "@/assets/tools-section.jpg";

const FORM_EMAIL = "bethke.ftr@gmail.com";

function BgfForm() {
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
      // Silently continue
    }

    setSubmitted(true);
    toast({ title: "Auftrag gesendet!", description: "Ich melde mich zeitnah mit Ihrem Angebot." });
  };

  if (submitted) {
    return (
      <div className="rounded-xl border bg-accent/50 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-primary" />
        <p className="text-xl font-semibold">Vielen Dank, {name}!</p>
        <p className="mt-2 text-muted-foreground">Ihre Grundrisse wurden übermittelt. Ich erstelle Ihnen zeitnah ein persönliches Angebot.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
          <label className="mb-1.5 block text-sm font-semibold">Ihr Name *</label>
          <Input required placeholder="Max Mustermann" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold">E-Mail *</label>
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

const ablaufSchritte = [
  { step: "1", title: "Grundriss hochladen", description: "Laden Sie Ihren Grundriss als Bild oder PDF hoch." },
  { step: "2", title: "Automatische Berechnung", description: "Mein Tool berechnet die BGF nach DIN 277." },
  { step: "3", title: "Manuelle Prüfung", description: "Ich prüfe das Ergebnis persönlich auf Korrektheit." },
  { step: "4", title: "Ergebnis erhalten", description: "Sie erhalten ein professionelles PDF mit allen Daten." },
];

const BgfAssistent = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-secondary/30 py-16 lg:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Smart Tool
            </span>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">BGF-Held</h1>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              Laden Sie Ihren Grundriss hoch – mein Tool berechnet automatisch die Bruttogrundfläche (BGF) nach DIN 277. Ich prüfe das Ergebnis manuell und liefere Ihnen ein professionelles PDF.
            </p>
            <div className="space-y-3">
              {["Schnell, präzise, persönliche Nachkontrolle", "Ideal für Makler, Energieberater, Hausverwaltungen", "Auch für komplexe Grundrisse geeignet"].map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 inline-flex items-baseline gap-1 rounded-xl bg-primary/10 px-5 py-3">
              <span className="text-2xl font-bold text-primary">ab 29 €</span>
              <span className="text-sm text-muted-foreground">pro Grundriss</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <img src={toolsImage} alt="BGF-Berechnung" className="rounded-xl shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Ablauf */}
    <section className="py-16 lg:py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">So funktioniert's</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ablaufSchritte.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl border bg-card p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {s.step}
              </div>
              <h3 className="mb-2 font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
              {i < ablaufSchritte.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 text-muted-foreground/40 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Formular */}
    <section className="border-t bg-secondary/30 py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Calculator className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Jetzt Grundriss einreichen</h2>
                <p className="text-sm text-muted-foreground">Ich melde mich mit einem persönlichen Angebot</p>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm lg:p-8">
              <BgfForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default BgfAssistent;
