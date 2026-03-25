import { Layout } from "@/components/Layout";
import { DetailPageHero } from "@/components/DetailPageHero";
import toolsImage from "@/assets/tools-section.jpg";

const GrundrissService = () => (
  <Layout>
    <DetailPageHero
      title="Grundriss & BGF"
      subtitle="Immobilien-Service"
      description="CAD-genaue Grundrisse für Ihre Immobilie – mit optionaler Vor-Ort-Vermessung. Professionelle Pläne für Makler, Hausverwaltungen und Energieberater."
      image={toolsImage}
      benefits={[
        "Professionelle CAD-Grundrisse",
        "Vor-Ort-Vermessung auf Wunsch",
        "BGF-Berechnung nach DIN 277 inklusive",
        "Schnelle Lieferung als PDF und DXF",
      ]}
      buttonText="Angebot anfragen"
    />
  </Layout>
);

export default GrundrissService;
