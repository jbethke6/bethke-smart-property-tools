import { Layout } from "@/components/Layout";

const Datenschutz = () => (
  <Layout>
    <div className="container py-16">
      <h1 className="mb-8 text-3xl font-bold">Datenschutzerklärung</h1>
      <div className="prose max-w-2xl text-muted-foreground space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-foreground">1. Verantwortlicher</h2>
          <p>
            Justin Bethke<br />
            Ortenberger Str. 22<br />
            63674 Altenstadt<br />
            E-Mail: bethke@smartimmo.solutions
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p>
            Beim Besuch unserer Website werden automatisch technische Daten erfasst (z.B. IP-Adresse, Browsertyp, Zugriffszeit). Diese Daten werden zur Sicherstellung des technischen Betriebs und zur Verbesserung unseres Angebots verwendet. Wenn Sie uns über ein Kontaktformular oder per E-Mail kontaktieren, werden Ihre Angaben (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert. Eine Weitergabe an Dritte erfolgt nicht ohne Ihre ausdrückliche Einwilligung.
          </p>
          <p>
            Im Rahmen der Nutzung unserer kostenpflichtigen Services (z.B. Grundrissheld) werden zusätzlich die von Ihnen hochgeladenen Dateien, Ihr Name und Ihre E-Mail-Adresse zur Auftragsbearbeitung verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">3. Verwendung von Cookies</h2>
          <p>
            Unsere Website verwendet Cookies, um die Nutzererfahrung zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Wir verwenden technisch notwendige Cookies sowie – mit Ihrer Einwilligung – Cookies zur Analyse und Verbesserung unseres Angebots. Sie können Ihre Cookie-Einstellungen jederzeit über Ihren Browser ändern. Das Deaktivieren von Cookies kann die Funktionalität der Website einschränken.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">4. Zahlungsdienstleister – Stripe</h2>
          <p>
            Für die Abwicklung von Zahlungen nutzen wir den Dienst Stripe (Stripe Inc., 354 Oyster Point Blvd, South San Francisco, CA 94080, USA). Bei einer Zahlung werden Ihre Zahlungsdaten (z.B. Kreditkartennummer, Name, E-Mail) direkt an Stripe übermittelt und dort verarbeitet. Stripe ist nach dem PCI DSS Level 1 zertifiziert. Weitere Informationen finden Sie in der{" "}
            <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              Datenschutzerklärung von Stripe
            </a>.
          </p>
          <p>
            Die Datenübermittlung in die USA erfolgt auf Grundlage von Standardvertragsklauseln der EU-Kommission. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">5. Datenbankdienstleister – Supabase</h2>
          <p>
            Wir nutzen Supabase (Supabase Inc., 970 Toa Payoh North, #07-04, Singapore 318992) als Datenbank- und Speicherdienstleister. Hochgeladene Dateien und Auftragsdaten werden auf Servern von Supabase gespeichert. Supabase setzt auf eine PostgreSQL-Datenbank und bietet verschlüsselte Datenübertragung (TLS). Weitere Informationen finden Sie in der{" "}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              Datenschutzerklärung von Supabase
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">6. Ihre Rechte</h2>
          <p>Sie haben gemäß DSGVO folgende Rechte:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Auskunftsrecht (Art. 15 DSGVO)</strong> – Sie können Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten verlangen.</li>
            <li><strong>Recht auf Berichtigung (Art. 16 DSGVO)</strong> – Sie können die Berichtigung unrichtiger Daten verlangen.</li>
            <li><strong>Recht auf Löschung (Art. 17 DSGVO)</strong> – Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
            <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</strong> – Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.</li>
            <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</strong> – Sie können verlangen, dass wir Ihnen Ihre Daten in einem strukturierten, gängigen Format übermitteln.</li>
            <li><strong>Widerspruchsrecht (Art. 21 DSGVO)</strong> – Sie können jederzeit Widerspruch gegen die Verarbeitung Ihrer Daten einlegen.</li>
          </ul>
          <p className="mt-3">
            Darüber hinaus haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">7. Kontakt für Datenschutzanfragen</h2>
          <p>
            Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:<br />
            E-Mail: bethke@smartimmo.solutions
          </p>
        </section>

        <section>
          <p className="text-sm italic">Stand: April 2026</p>
        </section>
      </div>
    </div>
  </Layout>
);

export default Datenschutz;
