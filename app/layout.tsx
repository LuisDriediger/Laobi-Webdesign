import './globals.css';
import type { Metadata } from 'next';
import { inter, poppins } from './fonts';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { CookieConsent } from '@/components/cookie-consent';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Webdesign aus Hürth | Moderne Websites für dein Business',
  description: 'Junger Webdesigner aus Hürth entwickelt maßgeschneiderte Websites. Professionell, innovativ und persönlich. Jetzt kostenloses Erstgespräch vereinbaren!',
  keywords: ['Webdesign Hürth', 'Webentwicklung', 'Website Erstellung', 'Junger Webdesigner'],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Laobi Webdesign',
  description: 'Professionelles Webdesign und Webentwicklung in Hürth',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hürth',
    addressRegion: 'NRW',
    addressCountry: 'DE',
  },
  url: 'https://laobi.de',
  telephone: '+49123456789',
  priceRange: '€€',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}