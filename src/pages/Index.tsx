import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Calculator, Search, Wrench, PenTool, Camera, Globe, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Moderner Arbeitsplatz" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.75)]" />
        </div>
        <div className="container relative z-10 flex min-h-[600px] flex-col items-center justify-center py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-[hsl(0,0%,100%)] md:text-5xl lg:text-6xl">
              Bethke <span className="text-primary">–</span> Smart Immo Services
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-[hsl(0,0%,85%)] md:text-xl">
              Digitale Immobilienlösungen & maßgeschneiderte Tools – alles aus einer Hand.
              Grundrisse, BGF, Förder-Check, 3D-Touren, Websites und mehr.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/kontakt">Jetzt unverbindlich anfragen</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Smart Tools */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Das Herzstück</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Smart Tools</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Ich entwickle intelligente Tools, die Immobilienprofis Zeit und Nerven sparen. Meine beiden Hauptwerkzeuge:
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon={Calculator}
              title="BGF-Assistent"
              description="Automatisierte Bruttogrundflächenberechnung aus Grundriss-Bildern – mit manueller Endprüfung für höchste Genauigkeit."
              href="/bgf-assistent"
            />
            <ServiceCard
              icon={Search}
              title="Förder-Check"
              description="Automatische Auswertung von KfW, BAFA, Landes- und Kommunalförderungen. Alle passenden Programme auf einen Blick."
              href="/foerder-check"
            />
            <ServiceCard
              icon={Wrench}
              title="Individuelle Tools für Sie"
              description="Ich erstelle kundenspezifische Automatisierungen – von n8n-Workflows über React-Frontends bis hin zu Datenbank-Lösungen."
              href="/individuelle-tools"
              buttonText="Beratung anfragen"
              variant="accent"
            />
          </div>
        </div>
      </section>

      {/* Immobilien Services */}
      <section className="border-t bg-secondary/30 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Alles aus einer Hand</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Immobilien-Services</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon={PenTool}
              title="Grundriss & BGF"
              description="CAD-genaue Grundrisse mit optionaler Vor-Ort-Vermessung. Professionelle Pläne für Makler, Verwalter und Energieberater."
              href="/grundriss-service"
            />
            <ServiceCard
              icon={Camera}
              title="3D-360°-Tour"
              description="Immersive Touren mit Ricoh Theta X – gehostet auf Panoee. Ideal für Online-Besichtigungen."
              href="/3d-tour"
            />
            <ServiceCard
              icon={Globe}
              title="Immobilien-Website"
              description="Moderne, individuelle Websites inkl. aller Inhalte – Grundriss, Tour, Exposé. Alles aus einer Hand."
              href="/immobilien-website"
            />
          </div>
        </div>
      </section>

      {/* Demo-Referenzen Placeholder */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">Referenzen</h2>
            <p className="text-muted-foreground">Hier erscheinen bald echte Projektbeispiele.</p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {["Grundriss-Projekt", "3D-Tour Wohnung", "Immobilien-Website"].map((title, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border bg-muted/50 p-8 text-center"
              >
                <div className="mb-4 text-3xl text-muted-foreground/40">🖼️</div>
                <h3 className="mb-1 font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">Demo-Beispiel</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-primary py-16">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Haben Sie ein Projekt oder brauchen ein individuelles Tool?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Lassen Sie uns sprechen – unverbindlich und kostenfrei.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base font-semibold"
            >
              <Link to="/kontakt">
                Kontakt aufnehmen <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
