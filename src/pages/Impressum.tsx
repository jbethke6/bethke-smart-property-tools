import { Layout } from "@/components/Layout";

const Impressum = () => (
  <Layout>
    <div className="container py-16">
      <h1 className="mb-8 text-3xl font-bold">Impressum</h1>
      <div className="prose max-w-2xl text-muted-foreground">
        <h2 className="text-lg font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
        <p>
          Justin Bethke<br />
          Bethke – Smart Immo Services<br />
          [Adresse wird ergänzt]<br />
          [PLZ Ort]
        </p>
        <h2 className="mt-6 text-lg font-semibold text-foreground">Kontakt</h2>
        <p>
          E-Mail: info@smartimmo.solutions
        </p>
        <h2 className="mt-6 text-lg font-semibold text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Justin Bethke<br />
          [Adresse wird ergänzt]
        </p>
      </div>
    </div>
  </Layout>
);

export default Impressum;
