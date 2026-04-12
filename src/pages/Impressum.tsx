import { Layout } from "@/components/Layout";

const Impressum = () => (
  <Layout>
    <div className="container py-16">
      <h1 className="mb-8 text-3xl font-bold">Impressum</h1>
      <div className="prose max-w-2xl text-muted-foreground space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
          <p>
            SmartImmo Solutions<br />
            Ortenberger Str. 22<br />
            63674 Altenstadt
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">Kontakt</h2>
          <p>
            E-Mail: info@smartimmo.solutions<br />
            Website: www.smartimmo.solutions
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">Umsatzsteuer-ID</h2>
          <p>wird nachgereicht</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            SmartImmo Solutions<br />
            Ortenberger Str. 22<br />
            63674 Altenstadt
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir keine Gewähr. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </div>
  </Layout>
);

export default Impressum;
