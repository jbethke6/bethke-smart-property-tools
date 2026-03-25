import { Layout } from "@/components/Layout";
import { DetailPageHero } from "@/components/DetailPageHero";
import toolsImage from "@/assets/tools-section.jpg";

const BgfAssistent = () => (
  <Layout>
    <DetailPageHero
      title="BGF-Assistent"
      subtitle="Smart Tool"
      description="Laden Sie Ihren Grundriss hoch – mein Tool berechnet automatisch die Bruttogrundfläche (BGF) nach DIN 277. Ich prüfe das Ergebnis manuell und liefere Ihnen ein professionelles PDF."
      image={toolsImage}
      benefits={[
        "Schnell, präzise, persönliche Nachkontrolle",
        "Ideal für Makler, Energieberater, Hausverwaltungen",
        "Auch für komplexe Grundrisse geeignet",
      ]}
      buttonText="Angebot anfragen"
    />
  </Layout>
);

export default BgfAssistent;
