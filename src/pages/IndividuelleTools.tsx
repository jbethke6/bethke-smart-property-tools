import { Layout } from "@/components/Layout";
import { DetailPageHero } from "@/components/DetailPageHero";

const IndividuelleTools = () => (
  <Layout>
    <DetailPageHero
      title="Individuelle Tools"
      subtitle="Maßgeschneidert für Sie"
      description="Sie haben einen wiederkehrenden manuellen Prozess? Ich entwickle für Sie maßgeschneiderte Automatisierungen – von n8n-Workflows über React-Frontends bis hin zu kompletten Datenbank-Lösungen."
      benefits={[
        "Automatische Rechnungserstellung aus Excel",
        "Schnittstellen zwischen CRM und DMS",
        "Eigene kleine Web-Tools für Ihre Kunden",
        "n8n-Workflows und React-Frontends",
      ]}
      buttonText="Beratung anfragen"
    />
  </Layout>
);

export default IndividuelleTools;
