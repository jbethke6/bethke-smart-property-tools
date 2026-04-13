import { Layout } from "@/components/Layout";
import { DetailPageHero } from "@/components/DetailPageHero";
import individuelleHero from "@/assets/individuelle-tools-hero.jpg";

const IndividuelleTools = () => (
  <Layout>
    <DetailPageHero
      title="Individuelle Tools"
      subtitle="Maßgeschneidert für Sie"
      description="Sie haben einen wiederkehrenden manuellen Prozess, der Sie Zeit und Nerven kostet? Wir analysieren gemeinsam mit Ihnen Ihren Bedarf und entwickeln maßgeschneiderte Automatisierungen und digitale Werkzeuge – von n8n-Workflows über individuelle React-Frontends bis hin zu kompletten Datenbank-Lösungen. Unser Ansatz: Wir verstehen zuerst Ihr Problem, entwickeln dann die passende Lösung und begleiten Sie bei der Einführung. Sie sparen Zeit, reduzieren Fehler und können sich auf Ihr Kerngeschäft konzentrieren. Ob automatische Rechnungserstellung, CRM-Schnittstellen, Datenimporte oder ein eigenes kleines Web-Tool für Ihre Kunden – wir setzen es um."
      image={individuelleHero}
      benefits={[
        "Persönliche Bedarfsanalyse – wir verstehen Ihr Problem zuerst",
        "Automatisierte Workflows (z.B. Rechnungen, Datenimporte, Reports)",
        "Schnittstellen zwischen CRM, DMS und anderen Systemen",
        "Eigene Web-Tools für Ihre Kunden oder Ihr Team",
        "n8n-Workflows, React-Frontends und Datenbank-Lösungen",
        "Transparente Umsetzung mit regelmäßigem Feedback",
        "Sie sparen Zeit und Geld – ab dem ersten Einsatz",
        "Preis: Auf Anfrage – individuelles Angebot nach Bedarfsanalyse",
      ]}
      buttonText="Beratung anfragen"
    />
  </Layout>
);

export default IndividuelleTools;
