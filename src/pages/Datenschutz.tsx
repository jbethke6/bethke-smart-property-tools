import { Layout } from "@/components/Layout";

const Datenschutz = () => (
  <Layout>
    <div className="container py-16">
      <h1 className="mb-8 text-3xl font-bold">Datenschutzerklärung</h1>
      <div className="prose max-w-2xl text-muted-foreground space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-foreground">1. Datenschutz auf einen Blick</h2>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Die Datenschutzerklärung wird in Kürze mit den vollständigen Inhalten ergänzt.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">2. Verantwortlicher</h2>
          <p>
            Justin Bethke<br />
            Bethke – Smart Immo Services<br />
            E-Mail: info@smartimmo.solutions
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">3. Datenerfassung auf dieser Website</h2>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
        </section>
      </div>
    </div>
  </Layout>
);

export default Datenschutz;
