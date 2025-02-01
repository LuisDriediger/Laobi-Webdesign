import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Laptop, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/5 border-t">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Laptop className="h-6 w-6 text-primary" />
              <span className="font-poppins font-semibold">Laobi Webdesign</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professionelles Webdesign für dein Business. Modern, innovativ und
              persönlich.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="min-h-[44px] flex items-center">
                <Link href="#portfolio" className="text-sm hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li className="min-h-[44px] flex items-center">
                <Link href="#leistungen" className="text-sm hover:text-primary">
                  Leistungen
                </Link>
              </li>
              <li className="min-h-[44px] flex items-center">
                <Link href="#kontakt" className="text-sm hover:text-primary">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li className="min-h-[44px] flex items-center">
                <Link href="/impressum" className="text-sm hover:text-primary">
                  Impressum
                </Link>
              </li>
              <li className="min-h-[44px] flex items-center">
                <Link href="/datenschutz" className="text-sm hover:text-primary">
                  Datenschutz
                </Link>
              </li>
              <li className="min-h-[44px] flex items-center">
                <Link href="/agb" className="text-sm hover:text-primary">
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Bleibe auf dem Laufenden über neue Projekte und Angebote.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="w-full min-h-[44px]"
              />
              <Button className="w-full min-h-[44px]">Anmelden</Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Laobi Webdesign. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-primary min-h-[44px] min-w-[44px] flex items-center justify-center">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary min-h-[44px] min-w-[44px] flex items-center justify-center">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary min-h-[44px] min-w-[44px] flex items-center justify-center">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}