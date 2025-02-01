'use client';

import { motion } from 'framer-motion';

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-medium mb-2">Allgemeine Hinweise</h3>
              <p className="mb-4">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-lg font-medium mb-2">Datenschutz</h3>
              <p className="mb-4">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">3. Datenerfassung auf dieser Website</h2>
              <h3 className="text-lg font-medium mb-2">Cookies</h3>
              <p className="mb-4">Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
              <p className="mb-4">Einige Cookies sind "Session-Cookies." Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">4. Projektanfragen und Kontaktformular</h2>
              <p className="mb-4">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">5. Newsletter</h2>
              <p className="mb-4">Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6. Hosting und Content Delivery Networks (CDN)</h2>
              <p className="mb-4">Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">7. Ihre Rechte</h2>
              <p className="mb-4">Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}