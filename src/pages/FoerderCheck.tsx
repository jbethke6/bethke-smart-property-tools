import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HardHat } from "lucide-react";

const FoerderCheck = () => (
  <Layout>
    <section className="py-24 lg:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-xl text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
            <HardHat className="h-10 w-10 text-primary" />
          </div>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Förderheld – Kommt bald</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wir entwickeln gerade ein intelligentes Tool zur automatischen Erkennung von Förderprogrammen für Ihre Immobilie. Seien Sie gespannt.
          </p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default FoerderCheck;
