'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProjectDialog } from '@/components/project-dialog';
import { Laptop } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { useRouter } from 'next/navigation';

const menuItems = [
  { href: '#start', label: 'Start' },
  { href: '#ueber-mich', label: 'Über Mich' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#kontakt', label: 'Kontakt' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of the fixed header plus some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-poppins font-semibold text-base sm:text-lg mr-auto"
        >
          <Laptop className="h-6 w-6 text-primary" />
          <span>Laobi Webdesign</span>
        </Link>

        {/* Theme Toggle (Always Visible) */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 min-h-[44px] min-w-[44px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-foreground"></span>
              <span className="block w-8 h-0.5 bg-foreground"></span>
              <span className="block w-8 h-0.5 bg-foreground"></span>
            </div>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button onClick={() => setIsProjectDialogOpen(true)}>
            Projekt starten
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-background border-t z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-lg font-medium hover:text-primary transition-colors min-h-[44px] flex items-center"
              >
                {item.label}
              </Link>
            ))}
            <Button 
              className="w-full min-h-[44px]"
              onClick={() => setIsProjectDialogOpen(true)}
              style={{ marginBottom: '0.5rem' }}
            >
              Projekt starten
            </Button>
          </div>
        </div>
      )}
      <ProjectDialog
        isOpen={isProjectDialogOpen}
        onClose={() => setIsProjectDialogOpen(false)}
      />
    </header>
  );
}