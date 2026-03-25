import { Layout } from "@/components/Layout";
import { DetailPageHero } from "@/components/DetailPageHero";
import websiteImage from "@/assets/website-service.jpg";

const ImmobilienWebsite = () => (
  <Layout>
    <DetailPageHero
      title="Immobilien-Website"
      subtitle="Immobilien-Service"
      description="Moderne, individuelle Websites für Ihre Immobilie – inklusive aller Inhalte: Grundriss, 3D-Tour, Exposé-Texte und Bilder. Alles aus einer Hand, sofort einsatzbereit."
      image={websiteImage}
      benefits={[
        "Individuelles Design, mobile-optimiert",
        "Integration von Grundrissen und 3D-Touren",
        "SEO-optimiert für bessere Sichtbarkeit",
        "Schnelle Umsetzung – in wenigen Tagen online",
      ]}
      buttonText="Angebot anfragen"
    />
  </Layout>
);

export default ImmobilienWebsite;
