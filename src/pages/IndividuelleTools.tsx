import { Layout } from "@/components/Layout";
import { DetailPageHero } from "@/components/DetailPageHero";
import individuelleHero from "@/assets/individuelle-tools-hero.jpg";

const IndividuelleTools = () => (
  <Layout>
    <DetailPageHero
      title="Individuelle Tools"
      subtitle="Maßgeschneidert für Sie"
      description="Sie haben einen wiederkehrenden manuellen Prozess, der Sie Zeit und Nerven kostet? Ich entwickle für Sie maßgeschneiderte Automatisierungen und digitale Werkzeuge – von n8n-Workflows über individuelle React-Frontends bis hin zu kompletten Datenbank-Lösungen mit Supabase. Ob automatische Rechnungserstellung, CRM-Schnittstellen oder ein eigenes kleines Web-Tool für Ihre Kunden: Gemeinsam finden wir die passende Lösung."
      image={individuelleHero}
      benefits={[
        "Automatisierte Workflows (z.B. Rechnungen aus Excel generieren)",
        "Schnittstellen zwischen CRM, DMS und anderen Systemen",
        "Eigene Web-Tools für Ihre Kunden oder Ihr Team",
        "n8n-Workflows, React-Frontends und Datenbank-Lösungen",
        "Persönliche Beratung und transparente Umsetzung",
      ]}
      buttonText="Beratung anfragen"
    />
  </Layout>
);

export default IndividuelleTools;
