import { Layout } from "@/components/Layout";
import { DetailPageHero } from "@/components/DetailPageHero";

const FoerderCheck = () => (
  <Layout>
    <DetailPageHero
      title="Förder-Check"
      subtitle="Smart Tool"
      description="Auf Basis von Baujahr, PLZ, BGF und geplanten Maßnahmen ermittelt mein Tool alle passenden Förderprogramme – von KfW und BAFA über Landes- bis hin zu kommunalen Töpfen. Sie erhalten eine übersichtliche Zusammenfassung mit Antragslinks."
      benefits={[
        "Automatische Auswertung aller relevanten Förderprogramme",
        "KfW, BAFA, Landes- und Kommunalförderungen",
        "Übersichtliche Zusammenfassung mit direkten Antragslinks",
      ]}
      note="Arbeitshilfe – eine verbindliche Beratung durch Fachpersonal ersetzen wir nicht."
      buttonText="Förder-Check anfragen"
    />
  </Layout>
);

export default FoerderCheck;
