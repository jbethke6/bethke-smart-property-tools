import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Calculator, Search, Wrench, PenTool, Camera, Globe, ArrowRight, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";
import tourImage from "@/assets/tour-3d.jpg";
import websiteImage from "@/assets/website-service.jpg";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Moderner Arbeitsplatz" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,20%,6%,0.85)] via-[hsl(210,20%,10%,0.75)] to-[hsl(199,56%,20%,0.6)]" />
        </div>
        <div className="container relative z-10 flex min-h-[640px] flex-col items-center justify-center py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block rounded-full border border-[hsl(0,0%,100%,0.15)] bg-[hsl(0,0%,100%,0.08)] px-4 py-1.5 text-sm font-medium text-[hsl(0,0%,90%)] backdrop-blur"
            >
              Digitale Immobilienlösungen aus einer Hand
            </motion.div>
            <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-[hsl(0,0%,100%)] md:text-5xl lg:text-6xl">
              Digitale Immobilienlösungen <span className="text-primary">&</span> maßgeschneiderte Tools
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[hsl(0,0%,82%)] md:text-xl">
              Grundrisse, BGF-Berechnung, Förder-Check, 3D-Touren, Websites und maßgeschneiderte Tools für die Immobilienbranche.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/kontakt">Jetzt unverbindlich anfragen</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[hsl(0,0%,100%,0.2)] text-[hsl(0,0%,100%)] hover:bg-[hsl(0,0%,100%,0.1)]">
                <Link to="/smart-tools-demo">Smart Tools live erleben</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Smart Tools */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Das Herzstück</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Smart Tools</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Intelligente Werkzeuge, die Immobilienprofis Zeit und Nerven sparen.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon={Calculator}
              title="BGF-Held"
              description="Automatisierte Bruttogrundflächenberechnung aus Grundriss-Bildern – mit manueller Endprüfung für höchste Genauigkeit."
              href="/bgf-held"
            />
            <ServiceCard
              icon={Search}
              title="Förder-Held"
              description="Automatische Auswertung von KfW, BAFA, Landes- und Kommunalförderungen. Alle passenden Programme auf einen Blick."
              href="/foerder-held"
            />
            <ServiceCard
              icon={Wrench}
              title="Individuelle Tools für Sie"
              description="Maßgeschneiderte Automatisierungen – von n8n-Workflows über React-Frontends bis hin zu Datenbank-Lösungen."
              href="/individuelle-tools"
              buttonText="Beratung anfragen"
              variant="accent"
            />
          </div>
        </div>
      </section>

      {/* Immobilien Services */}
      <section className="border-t bg-secondary/30 py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Alles aus einer Hand</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Immobilien-Services</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon={PenTool}
              title="Grundriss & BGF"
              description="CAD-genaue Grundrisse mit optionaler Vor-Ort-Vermessung. Professionelle Pläne für Makler und Energieberater."
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

      {/* Referenzen */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Portfolio</p>
            <h2 className="mb-4 text-3xl font-bold">Referenzen</h2>
            <p className="mx-auto max-w-xl text-muted-foreground">Ausgewählte Beispiele meiner Arbeit.</p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Grundriss Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img src={tourImage} alt="Grundriss-Projekt" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="mb-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">Grundriss</span>
                <h3 className="mb-1 font-semibold">Grundriss-Projekt</h3>
                <p className="text-sm text-muted-foreground">Beispiel wird nachgereicht</p>
              </div>
            </motion.div>

            {/* 3D-Tour */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <iframe
                  src="https://tour.panoee.net/690b95d2e809147c6889591c/690b97de7ab449737fdb87e0"
                  title="3D-Tour Beispiel"
                  className="h-full w-full border-0"
                  allow="fullscreen"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="mb-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">3D-Tour</span>
                <h3 className="mb-1 font-semibold">360°-Tour Beispiel</h3>
                <a
                  href="https://tour.panoee.net/690b95d2e809147c6889591c/690b97de7ab449737fdb87e0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Vollbild öffnen <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>

            {/* Website */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img src={websiteImage} alt="SafeCycle Website" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="mb-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">Website</span>
                <h3 className="mb-1 font-semibold">SafeCycle</h3>
                <a
                  href="https://safecycle.team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  safecycle.team besuchen <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-primary py-16 lg:py-20">
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
