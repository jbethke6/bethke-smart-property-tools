import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Calculator, CheckCircle2, ArrowRight } from "lucide-react";
import { BgfOrderForm } from "@/components/BgfOrderForm";
import bgfHero from "@/assets/bgf-hero.jpg";

const ablaufSchritte = [
  { step: "1", title: "Grundriss hochladen", description: "Laden Sie Ihren Grundriss als Bild oder PDF über das Formular hoch. Auch mehrere Dateien gleichzeitig sind möglich." },
  { step: "2", title: "Automatische Analyse", description: "Mein Tool analysiert Ihren Grundriss und berechnet die Bruttogrundfläche (BGF) nach DIN 277 automatisch." },
  { step: "3", title: "Persönliche Prüfung", description: "Ich überprüfe jedes Ergebnis manuell und korrigiere bei Bedarf – so ist höchste Genauigkeit garantiert." },
  { step: "4", title: "Professionelles PDF", description: "Sie erhalten ein druckfertiges PDF mit allen Flächenberechnungen, Raumaufteilungen und der BGF-Zusammenfassung." },
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
              Die Bruttogrundfläche (BGF) ist eine zentrale Kennzahl in der Immobilienbewertung, bei Energieausweisen und für Baugenehmigungen. Mit dem BGF-Held laden Sie einfach Ihren Grundriss hoch – mein Tool berechnet die BGF automatisch nach DIN 277 und ich prüfe das Ergebnis persönlich, bevor Sie ein professionelles PDF erhalten.
            </p>
            <div className="space-y-3">
              {[
                "Schnelle, präzise Berechnung nach DIN 277",
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
            <div className="mt-8 inline-flex items-baseline gap-1 rounded-xl bg-primary/10 px-5 py-3">
              <span className="text-2xl font-bold text-primary">ab 29 €</span>
              <span className="text-sm text-muted-foreground">pro Grundriss</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <img src={bgfHero} alt="BGF-Berechnung am Schreibtisch mit Grundriss und Tablet" className="rounded-xl shadow-lg" width={1280} height={720} />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Ablauf */}
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">So funktioniert's</h2>
          <p className="text-muted-foreground">In nur vier Schritten von Ihrem Grundriss zur fertigen BGF-Berechnung – schnell, transparent und zuverlässig.</p>
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
                <p className="text-sm text-muted-foreground">Laden Sie Ihre Datei(en) hoch – ich melde mich mit einem persönlichen Angebot</p>
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
