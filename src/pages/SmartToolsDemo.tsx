import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { Calculator, Search } from "lucide-react";

function BgfDemo() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Demo gestartet!", description: "Ihr Grundriss wurde gespeichert. Wir erstellen Ihnen gerne ein Angebot." });
  };

  if (submitted) {
    return (
      <div className="rounded-lg border bg-accent/50 p-6 text-center">
        <p className="text-lg font-semibold">Danke!</p>
        <p className="text-sm text-muted-foreground">Ihr Grundriss wurde gespeichert. Ich erstelle Ihnen gerne ein persönliches Angebot.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-sm font-medium">Grundriss-Bild hochladen</label>
        <Input type="file" accept="image/*,.pdf" required />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">Maßstab (optional)</label>
        <Input placeholder="z.B. 1:100" />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">E-Mail *</label>
        <Input type="email" required placeholder="Für Ihr persönliches Angebot" />
      </div>
      <Button type="submit">Demo starten</Button>
    </form>
  );
}

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Demo gestartet!", description: "Ihre Daten wurden gespeichert. Wir melden uns mit einem Angebot." });
  };

  if (submitted) {
    return (
      <div className="rounded-lg border bg-accent/50 p-6 text-center">
        <p className="text-lg font-semibold">Danke!</p>
        <p className="text-sm text-muted-foreground">Ihre Daten wurden gespeichert. Ich erstelle Ihnen gerne ein persönliches Angebot.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Baujahr *</label>
          <Input required type="number" placeholder="z.B. 1975" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">PLZ *</label>
          <Input required placeholder="z.B. 10115" maxLength={5} />
        </div>
      </div>
      <div>
        <label className="mb-3 block text-sm font-medium">Geplante Maßnahmen</label>
        <div className="grid gap-3 sm:grid-cols-2">
          {massnahmen.map((m) => (
            <label key={m} className="flex items-center gap-2 text-sm">
              <Checkbox />
              {m}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">E-Mail *</label>
        <Input type="email" required placeholder="Für Ihr persönliches Angebot" />
      </div>
      <Button type="submit">Demo starten</Button>
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
            Testen Sie meine Tools in einer Demo-Version. Laden Sie Ihren Grundriss hoch oder geben Sie Ihre Gebäudedaten ein – ich melde mich mit einem persönlichen Angebot.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border bg-card p-6 lg:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calculator className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold">BGF-Assistent (Demo)</h2>
            </div>
            <BgfDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border bg-card p-6 lg:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Search className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold">Förder-Check (Demo)</h2>
            </div>
            <FoerderDemo />
          </motion.div>
        </div>
      </div>
    </div>
  </Layout>
);

export default SmartToolsDemo;
