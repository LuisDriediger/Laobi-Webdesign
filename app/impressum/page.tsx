'use client';

import { motion } from 'framer-motion';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Impressum</h1>
          
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
              <p>Laobi Webdesign</p>
              <p>Luis Laobi</p>
              <p>Musterstraße 123</p>
              <p>50354 Hürth</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
              <p>Telefon: +49 123 456789</p>
              <p>E-Mail: kontakt@laobi.de</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p>DE XXX XXX XXX</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Berufshaftpflichtversicherung</h2>
              <p>Name und Sitz des Versicherers:</p>
              <p>Muster Versicherung AG</p>
              <p>Versicherungsstraße 1</p>
              <p>12345 Versicherungsstadt</p>
              <p>Geltungsbereich: Deutschland</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Streitschlichtung</h2>
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a></p>
              <p className="mt-4">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}