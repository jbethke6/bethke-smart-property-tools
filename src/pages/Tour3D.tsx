import { Layout } from "@/components/Layout";
import { DetailPageHero } from "@/components/DetailPageHero";
import tourImage from "@/assets/tour-3d.jpg";

const Tour3D = () => (
  <Layout>
    <DetailPageHero
      title="3D-360°-Tour"
      subtitle="Immobilien-Service"
      description="Immersive 360°-Touren mit der Ricoh Theta X – professionell gehostet auf Panoee. Ideal für Online-Besichtigungen und Exposés."
      image={tourImage}
      benefits={[
        "Professionelle 360°-Aufnahmen vor Ort",
        "Hosting auf Panoee – schnell, mobil-optimiert",
        "Perfekt für Exposés und Immobilienportale",
        "Einbettbar in jede Website",
      ]}
      buttonText="Angebot anfragen"
    />
  </Layout>
);

export default Tour3D;
