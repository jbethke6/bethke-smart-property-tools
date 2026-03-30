import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { Search, CheckCircle2, ArrowRight } from "lucide-react";
import foerderHero from "@/assets/foerder-hero.jpg";

const FORM_EMAIL = "bethke.ftr@gmail.com";

const massnahmen = [
  "Dämmung Außenwand",
  "Dachdämmung",
  "Kellerdeckendämmung",
  "Fenster-Austausch",
  "Heizungstausch (Wärmepumpe)",
  "Heizungstausch (Pellet/Biomasse)",
  "Solaranlage (Photovoltaik)",
  "Solarthermie",
  "Lüftungsanlage mit Wärmerückgewinnung",
  "Komplettsanierung zum Effizienzhaus",
];

function FoerderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [baujahr, setBaujahr] = useState("");
  const [plz, setPlz] = useState("");
  const [bgf, setBgf] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [anmerkungen, setAnmerkungen] = useState("");

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
    formData.append("Anmerkungen", anmerkungen || "Keine");

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
      <div className="rounded-xl border bg-accent/50 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-primary" />
        <p className="text-xl font-semibold">Vielen Dank, {name}!</p>
        <p className="mt-2 text-muted-foreground">Ihre Daten wurden übermittelt. Ich erstelle Ihnen zeitnah eine umfassende Förder-Übersicht mit allen passenden Programmen und Antragslinks.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-semibold">Baujahr *</label>
          <Input required type="number" placeholder="z.B. 1975" value={baujahr} onChange={(e) => setBaujahr(e.target.value)} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold">PLZ *</label>
          <Input required placeholder="z.B. 10115" maxLength={5} value={plz} onChange={(e) => setPlz(e.target.value)} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold">BGF (m²)</label>
          <Input placeholder="optional" value={bgf} onChange={(e) => setBgf(e.target.value)} />
        </div>
      </div>
      <div>
        <label className="mb-3 block text-sm font-semibold">Geplante Maßnahmen</label>
        <div className="grid gap-3 sm:grid-cols-2">
          {massnahmen.map((m) => (
            <label key={m} className="flex items-center gap-2 text-sm cursor-pointer">
              <Checkbox checked={selected.includes(m)} onCheckedChange={() => toggleMassnahme(m)} />
              {m}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-semibold">Anmerkungen (optional)</label>
        <Input placeholder="z.B. Denkmalschutz, besondere Anforderungen..." value={anmerkungen} onChange={(e) => setAnmerkungen(e.target.value)} />
      </div>
      <Button type="submit" size="lg" className="w-full">
        <Search className="mr-2 h-4 w-4" />
        Förder-Check absenden
      </Button>
    </form>
  );
}

const ablaufSchritte = [
  { step: "1", title: "Daten eingeben", description: "Geben Sie Baujahr, PLZ, Fläche und Ihre geplanten Sanierungsmaßnahmen ein – je genauer, desto besser das Ergebnis." },
  { step: "2", title: "Automatische Auswertung", description: "Mein Tool durchsucht alle relevanten Förderprogramme von KfW, BAFA, Landesbanken und kommunalen Stellen." },
  { step: "3", title: "Persönliche Prüfung", description: "Ich prüfe die Ergebnisse, ergänze ggf. regionale Sonderprogramme und optimiere die Kombination der Förderungen." },
  { step: "4", title: "Förder-Übersicht erhalten", description: "Sie erhalten eine klare Übersicht aller Fördermöglichkeiten mit Förderhöhe, Bedingungen und direkten Antragslinks." },
];

const FoerderCheck = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-secondary/30 py-16 lg:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Smart Tool
            </span>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Förder-Held</h1>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              Bei der energetischen Sanierung gibt es zahlreiche Förderprogramme – von der KfW über BAFA bis hin zu Landes- und Kommunalförderungen. Der Förder-Held durchsucht automatisch alle relevanten Programme basierend auf Ihren Gebäudedaten und geplanten Maßnahmen. So verpassen Sie keine Zuschüsse und sparen bares Geld.
            </p>
            <div className="space-y-3">
              {[
                "KfW, BAFA, Landes- und Kommunalförderungen auf einen Blick",
                "Automatische Auswertung aller relevanten Programme",
                "Übersichtliche Zusammenfassung mit Förderhöhe und Antragslinks",
                "Persönliche Prüfung und Optimierung der Förderkombination",
                "Ideal für Eigentümer, Energieberater und Hausverwaltungen",
              ].map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 inline-flex items-baseline gap-1 rounded-xl bg-primary/10 px-5 py-3">
              <span className="text-2xl font-bold text-primary">ab 29 €</span>
              <span className="text-sm text-muted-foreground">pro Auswertung</span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground italic">
              Arbeitshilfe – eine verbindliche Beratung durch Fachpersonal ersetzen wir nicht.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <img src={foerderHero} alt="Förderprogramme und energetische Sanierung" className="rounded-xl shadow-lg" width={1280} height={720} />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Ablauf */}
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">So funktioniert's</h2>
          <p className="text-muted-foreground">In vier einfachen Schritten zu Ihrer individuellen Förder-Übersicht – transparent, schnell und zuverlässig.</p>
        </div>
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
                <Search className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Jetzt Förder-Check starten</h2>
                <p className="text-sm text-muted-foreground">Füllen Sie das Formular aus – ich melde mich mit Ihren individuellen Fördermöglichkeiten</p>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm lg:p-8">
              <FoerderForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default FoerderCheck;
