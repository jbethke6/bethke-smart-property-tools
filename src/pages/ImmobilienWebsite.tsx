import { Layout } from "@/components/Layout";
import { DetailPageHero } from "@/components/DetailPageHero";
import websiteHero from "@/assets/immobilien-website-hero.jpg";

const ImmobilienWebsite = () => (
  <Layout>
    <DetailPageHero
      title="Immobilien-Website"
      subtitle="Immobilien-Service"
      description="Eine professionelle Immobilien-Website ist mehr als nur eine digitale Visitenkarte – sie ist Ihr stärkstes Vermarktungstool. Wir erstellen für Sie moderne, mobiloptimierte Websites, die alle relevanten Inhalte bündeln: Grundrisse, 3D-Touren, Exposé-Texte, Bildergalerien und Kontaktformulare. Von der Konzeption über das Design bis zur technischen Umsetzung – alles aus einer Hand. Unsere Websites sind SEO-optimiert, laden schnell und machen auf jedem Endgerät einen professionellen Eindruck. In der Regel ist Ihre Website innerhalb weniger Tage online."
      image={websiteHero}
      benefits={[
        "Individuelles, modernes Design – vollständig mobiloptimiert",
        "Integration von Grundrissen, 3D-Touren und Exposé-Inhalten",
        "SEO-optimiert für bessere Auffindbarkeit bei Google",
        "Schnelle Umsetzung – in der Regel innerhalb weniger Tage online",
        "Inklusive Hosting-Beratung und technischem Support",
        "Kontaktformular und Call-to-Action für maximale Anfragen",
        "Preis: Individuelles Angebot – abhängig von Umfang und Funktionen",
      ]}
      buttonText="Angebot anfragen"
    />
  </Layout>
);

export default ImmobilienWebsite;
