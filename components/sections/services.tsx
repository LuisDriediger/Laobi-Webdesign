'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectDialog } from '@/components/project-dialog';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const packages = [
  {
    title: 'Basic',
    description: 'Perfekt für kleine Unternehmen',
    price: 'ab 799€',
    features: [
      'Responsive Design',
      'bis zu 5 Unterseiten',
      'Kontaktformular',
      'SEO Grundoptimierung',
      'SSL-Verschlüsselung',
    ],
  },
  {
    title: 'Business',
    description: 'Ideal für wachsende Unternehmen',
    price: 'ab 1.499€',
    features: [
      'Alles aus Basic',
      'bis zu 10 Unterseiten',
      'Content Management System',
      'Google Analytics Integration',
      'Performance Optimierung',
      'Social Media Integration',
    ],
    popular: true,
  },
  {
    title: 'Premium',
    description: 'Für maximalen Online-Erfolg',
    price: 'ab 2.499€',
    features: [
      'Alles aus Business',
      'Unbegrenzte Unterseiten',
      'E-Commerce Integration',
      'Individuelle Funktionen',
      'Premium Support',
      'Monatliche Reports',
    ],
  },
];

export function Services() {
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>();
  const [hoveredPackage, setHoveredPackage] = useState<string>();
  const [clickedPackage, setClickedPackage] = useState<string>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Prüfe, ob der Klick außerhalb einer Card war
      if (!target.closest('[role="button"]')) {
        setClickedPackage(undefined);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleCardClick = (packageName: string) => {
    // Verhindere Bubbling zum Body-Click-Handler
    event?.stopPropagation();
    setClickedPackage(packageName);
  };

  const handlePackageSelect = (e: React.MouseEvent, packageName: string) => {
    // Verhindere, dass der Click-Event auf den Button zum Card-Click führt
    e.stopPropagation();
    setClickedPackage(packageName);
    // Verzögerung vor dem Öffnen des Dialogs für die Animation
    setTimeout(() => {
      setSelectedPackage(packageName.toLowerCase());
      setIsProjectDialogOpen(true);
    }, 300);
  };

  const handlePackageHover = (packageName: string | undefined) => {
    setHoveredPackage(packageName);
  };

  return (
    <section id="leistungen" className="section bg-secondary/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "tween",
            ease: "easeOut"
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">
            Meine Leistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wähle das passende Paket für dein Projekt. Alle Pakete sind individuell
            anpassbar und werden nach deinen Bedürfnissen optimiert.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => handlePackageHover(pkg.title)}
              onHoverEnd={() => handlePackageHover(undefined)}
              animate={clickedPackage === pkg.title ? {
                scale: 1.05,
                zIndex: 10
              } : {
                scale: 1,
                zIndex: 1
              }}
              
            >
              <Card 
                className={cn(
                  'transition-all duration-300',
                  pkg.popular ? 'border-primary shadow-lg' : '',
                  hoveredPackage === pkg.title ? 'border-primary shadow-xl transform -translate-y-1' : '',
                  hoveredPackage && hoveredPackage !== pkg.title ? 'opacity-75 sm:opacity-75' : '',
                  clickedPackage === pkg.title ? 'border-primary border-2 shadow-2xl ring-4 ring-primary/20' : '',
                  clickedPackage && clickedPackage !== pkg.title ? 'opacity-50 scale-95 sm:opacity-50' : ''
                )}
                onClick={() => handleCardClick(pkg.title)}
                style={{ minHeight: '420px' }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCardClick(pkg.title);
                  }
                }}
              >
                <CardHeader>
                  {pkg.popular && (
                    <div className="text-primary text-sm font-medium mb-2">
                      Meist gewählt
                    </div>
                  )}
                  <CardTitle>{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-6">{pkg.price}</div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={feature} className="flex items-center gap-2">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.1, duration: 0.3 }}
                        >
                          <Check className={cn(
                            "h-5 w-5",
                            hoveredPackage === pkg.title ? 'text-primary scale-110' : 'text-primary'
                          )} />
                        </motion.div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={pkg.popular || hoveredPackage === pkg.title ? 'default' : 'outline'}
                    size="lg"
                    style={{ minHeight: '44px' }}
                    onClick={(e) => handlePackageSelect(e, pkg.title)}
                  >
                    Paket wählen
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectDialog
        isOpen={isProjectDialogOpen}
        onClose={() => setIsProjectDialogOpen(false)}
        selectedPackage={selectedPackage}
      />
    </section>
  );
}