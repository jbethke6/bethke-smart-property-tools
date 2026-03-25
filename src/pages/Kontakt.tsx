import { Layout } from "@/components/Layout";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const Kontakt = () => (
  <Layout>
    <div className="py-16 lg:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Kontakt</p>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Sprechen Sie mich an</h1>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Beschreiben Sie kurz Ihr Projekt – ich melde mich innerhalb von 24 Stunden mit einem unverbindlichen Angebot.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="rounded-xl border bg-card p-6">
              <h3 className="mb-4 font-semibold">Direkt erreichen</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>justin@bethke-smartimmo.de</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>Auf Anfrage</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl border bg-accent/50 p-6">
              <h3 className="mb-2 font-semibold">Schnelle Antwort</h3>
              <p className="text-sm text-muted-foreground">
                Ich melde mich in der Regel innerhalb von 24 Stunden. Bei dringenden Anfragen nutzen Sie bitte die Telefonnummer.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Kontakt;
