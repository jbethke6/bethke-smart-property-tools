import { Layout } from "@/components/Layout";
import { DetailPageHero } from "@/components/DetailPageHero";
import grundrissHero from "@/assets/grundriss-hero.jpg";

const GrundrissService = () => (
  <Layout>
    <DetailPageHero
      title="Grundriss & BGF"
      subtitle="Immobilien-Service"
      description="Professionelle, CAD-genaue Grundrisse für Ihre Immobilie – ob für Exposés, Energieausweise oder Baugenehmigungen. Auf Wunsch kommen wir direkt vor Ort, vermessen Ihre Räume und erstellen einen maßstabsgetreuen Grundriss inklusive BGF-Berechnung nach DIN 277. Der gesamte Prozess ist transparent: Nach der Vermessung erhalten Sie die fertigen Pläne als druckfertiges PDF und optional als DXF-Datei für die Weiterverarbeitung in Ihrer CAD-Software. Wir arbeiten schnell, präzise und zuverlässig – damit Sie sich auf die Vermarktung konzentrieren können."
      image={grundrissHero}
      benefits={[
        "Professionelle CAD-Grundrisse – maßstabsgetreu und detailliert",
        "Vor-Ort-Vermessung auf Wunsch in der gesamten Region",
        "BGF-Berechnung nach DIN 277 inklusive",
        "Lieferung als druckfertiges PDF und optional als DXF",
        "Ideal für Makler, Hausverwaltungen und Energieberater",
        "Schnelle Bearbeitungszeit – in der Regel innerhalb weniger Tage",
        "Preis: Auf Anfrage – individuelles Angebot je nach Objektgröße",
      ]}
      buttonText="Angebot anfragen"
    />
  </Layout>
);

export default GrundrissService;
