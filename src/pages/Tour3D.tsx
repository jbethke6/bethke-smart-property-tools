import { Layout } from "@/components/Layout";
import { DetailPageHero } from "@/components/DetailPageHero";
import tourImage from "@/assets/tour-3d.jpg";

const Tour3D = () => (
  <Layout>
    <DetailPageHero
      title="3D-360°-Tour"
      subtitle="Immobilien-Service"
      description="Ermöglichen Sie Ihren Interessenten eine immersive Online-Besichtigung – jederzeit und von überall. Mit der Ricoh Theta X erstelle ich hochauflösende 360°-Aufnahmen Ihrer Immobilie. Die fertige Tour wird professionell auf Panoee gehostet und lässt sich nahtlos in Exposés, Immobilienportale und Ihre eigene Website einbetten. Perfekt für Makler, Bauträger und Hausverwaltungen."
      image={tourImage}
      benefits={[
        "Professionelle 360°-Aufnahmen vor Ort mit der Ricoh Theta X",
        "Hosting auf Panoee – schnell, mobiloptimiert, DSGVO-konform",
        "Einbettbar in jede Website, Exposé oder Immobilienportal",
        "Ideal für Online-Besichtigungen und Ferninteressenten",
        "Steigerung der Verweildauer und Anfragequote",
      ]}
      buttonText="Angebot anfragen"
    />
  </Layout>
);

export default Tour3D;
