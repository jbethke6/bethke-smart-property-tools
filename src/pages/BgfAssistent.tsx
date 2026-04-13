import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Calculator, CheckCircle2, ArrowRight, PenTool } from "lucide-react";
import { BgfOrderForm } from "@/components/BgfOrderForm";
import bgfHero from "@/assets/bgf-hero.jpg";
import detailImg1 from "@/assets/grundriss-detail-1.jpg";
import detailImg2 from "@/assets/grundriss-detail-2.jpg";
import detailImg3 from "@/assets/grundriss-detail-3.jpg";

const ablaufSchritte = [
  { step: "1", title: "Grundriss hochladen", description: "Laden Sie Ihren Grundriss als Bild oder PDF über das Formular hoch. Auch mehrere Dateien gleichzeitig sind möglich." },
  { step: "2", title: "Services wählen", description: "Wählen Sie BGF-Berechnung, CAD-Digitalisierung oder beides – der Preis wird automatisch nach Etagenanzahl berechnet." },
  { step: "3", title: "Sicher bezahlen", description: "Bezahlen Sie bequem und sicher über Stripe. Erst nach erfolgreicher Zahlung wird Ihr Auftrag bearbeitet." },
  { step: "4", title: "Ergebnis per E-Mail", description: "Sie erhalten Ihr professionelles PDF mit allen Berechnungen und Zeichnungen direkt per E-Mail zugestellt." },
];

const BgfAssistent = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-secondary/30 py-16 lg:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Smart Tools
            </span>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Grundrissheld</h1>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              Zwei leistungsstarke Services rund um Ihren Grundriss – einzeln oder kombiniert buchbar. Unser KI-gestütztes System lernt mit jedem Auftrag dazu und wird kontinuierlich präziser.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mb-6">
              <div className="rounded-xl border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">BGF-Berechnung</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Unser KI-gestütztes System analysiert Ihre Grundrisse und berechnet die Brutto-Grundfläche nach DIN 277. Jede Berechnung wird von uns geprüft und verbessert das Modell für zukünftige Aufträge.</p>
                <p className="text-sm font-semibold text-primary">ab 29,00 € / Etage</p>
              </div>
              <div className="rounded-xl border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <PenTool className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">CAD-Digitalisierung</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Wir digitalisieren Ihre handgezeichneten oder eingescannten Grundrisse in präzise CAD-Dateien. KI-Vorverarbeitung beschleunigt den Prozess, unsere Experten garantieren die Qualität.</p>
                <p className="text-sm font-semibold text-primary">ab 59,00 € / Etage</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "KI-gestützte Berechnung nach DIN 277 – mit jedem Auftrag präziser",
                "Persönliche Nachkontrolle durch Fachpersonal",
                "Ideal für Makler, Energieberater & Hausverwaltungen",
                "Auch für komplexe Mehrgeschoss-Grundrisse geeignet",
                "Ergebnis als druckfertiges PDF inkl. Raumaufteilung",
              ].map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <img src={bgfHero} alt="BGF-Berechnung am Schreibtisch mit Grundriss und Tablet" className="rounded-xl shadow-lg" width={1280} height={720} />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Detail Images */}
    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-xl border bg-card shadow-sm">
            <img src={detailImg1} alt="Grundriss auf Schreibtisch" className="h-40 w-full object-cover" loading="lazy" width={768} height={512} />
            <div className="p-4">
              <p className="text-sm text-muted-foreground">Professionelle Grundrissanalyse – von der Papiervorlage zum digitalen Ergebnis.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="overflow-hidden rounded-xl border bg-card shadow-sm">
            <img src={detailImg2} alt="CAD-Digitalisierung am Monitor" className="h-40 w-full object-cover" loading="lazy" width={768} height={512} />
            <div className="p-4">
              <p className="text-sm text-muted-foreground">Präzise CAD-Digitalisierung – maßstabsgetreu und sofort weiterverarbeitbar.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="overflow-hidden rounded-xl border bg-card shadow-sm">
            <img src={detailImg3} alt="KI-Analyse von Gebäudedaten" className="h-40 w-full object-cover" loading="lazy" width={768} height={512} />
            <div className="p-4">
              <p className="text-sm text-muted-foreground">KI-gestützte Analyse – unser System wird mit jedem Auftrag besser.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Ablauf */}
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">So funktioniert's</h2>
          <p className="text-muted-foreground">In nur vier Schritten von Ihrem Grundriss zum fertigen Ergebnis – schnell, transparent und zuverlässig.</p>
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
                <Calculator className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Jetzt Grundriss einreichen</h2>
                <p className="text-sm text-muted-foreground">Wählen Sie Ihre Services, laden Sie Dateien hoch und bezahlen Sie sicher über Stripe.</p>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm lg:p-8">
              <BgfOrderForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default BgfAssistent;
