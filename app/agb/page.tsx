'use client';

import { motion } from 'framer-motion';

export default function AGBPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">§1 Geltungsbereich</h2>
              <p className="mb-4">Diese Allgemeinen Geschäftsbedingungen gelten für alle zwischen Laobi Webdesign (nachfolgend "Auftragnehmer") und dem Auftraggeber abgeschlossenen Verträge ausschließlich. Entgegenstehende oder von diesen AGB abweichende Bedingungen werden nicht Vertragsbestandteil, es sei denn, der Auftragnehmer hat deren Geltung ausdrücklich schriftlich zugestimmt.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">§2 Vertragsgegenstand</h2>
              <p className="mb-4">2.1 Gegenstand des Vertrages ist die Gestaltung und Entwicklung von Websites und damit verbundenen Dienstleistungen.</p>
              <p className="mb-4">2.2 Die detaillierte Beschreibung der zu erbringenden Leistungen erfolgt im jeweiligen Einzelauftrag.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">§3 Vertragsabschluss</h2>
              <p className="mb-4">3.1 Die Angebote des Auftragnehmers sind freibleibend und unverbindlich.</p>
              <p className="mb-4">3.2 Ein Vertrag kommt erst mit schriftlicher Auftragsbestätigung oder Beginn der Auftragsdurchführung zustande.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">§4 Vergütung und Zahlungsbedingungen</h2>
              <p className="mb-4">4.1 Die Vergütung für die zu erbringenden Leistungen ergibt sich aus dem jeweiligen Einzelauftrag.</p>
              <p className="mb-4">4.2 Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.</p>
              <p className="mb-4">4.3 Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">§5 Mitwirkungspflichten des Auftraggebers</h2>
              <p className="mb-4">5.1 Der Auftraggeber stellt dem Auftragnehmer alle für die Durchführung des Projekts benötigten Daten und Unterlagen unentgeltlich zur Verfügung.</p>
              <p className="mb-4">5.2 Der Auftraggeber wird im Zusammenhang mit diesem Projekt Hinweise des Auftragnehmers zu Mitwirkungspflichten beachten.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">§6 Nutzungsrechte</h2>
              <p className="mb-4">6.1 Der Auftragnehmer überträgt dem Auftraggeber mit vollständiger Bezahlung alle für den jeweiligen Zweck erforderlichen Nutzungsrechte an den erstellten Arbeiten.</p>
              <p className="mb-4">6.2 Die Übertragung der Nutzungsrechte erfolgt, soweit nicht anders vereinbart, für das Gebiet der Bundesrepublik Deutschland.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">§7 Gewährleistung und Haftung</h2>
              <p className="mb-4">7.1 Der Auftragnehmer führt alle Arbeiten mit größtmöglicher Sorgfalt und unter Beachtung allgemeiner branchenüblicher Grundsätze durch.</p>
              <p className="mb-4">7.2 Die Haftung des Auftragnehmers ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">§8 Kündigung</h2>
              <p className="mb-4">8.1 Der Vertrag kann von beiden Seiten nur aus wichtigem Grund gekündigt werden.</p>
              <p className="mb-4">8.2 Jede Kündigung bedarf zu ihrer Wirksamkeit der Schriftform.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">§9 Schlussbestimmungen</h2>
              <p className="mb-4">9.1 Erfüllungsort und Gerichtsstand ist der Sitz des Auftragnehmers.</p>
              <p className="mb-4">9.2 Es gilt das Recht der Bundesrepublik Deutschland.</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}