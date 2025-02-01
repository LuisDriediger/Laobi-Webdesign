'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProjectDialog } from '@/components/project-dialog';
import { motion } from 'framer-motion';

export function Hero() {
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);

  return (
    <section id="start" className="min-h-[80vh] sm:min-h-screen flex items-center pt-12 sm:pt-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left px-2 sm:px-6 max-w-xl mx-auto lg:mx-0"
          >
            <h1 suppressHydrationWarning className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-poppins mb-3 sm:mb-6">
              Moderne Websites für dein Business
              <span className="text-primary block mt-1 sm:mt-2">Laobi Webdesign</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Hi, ich bin Luis – 16 Jahre alt und entwickle maßgeschneiderte Websites,
              die dein Business auf das nächste Level bringen.
            </p>
            <Button 
              size="lg" 
              className="w-full sm:w-auto min-h-[44px] text-sm sm:text-base"
              onClick={() => setIsProjectDialogOpen(true)}
            >
              Kostenloses Erstgespräch vereinbaren
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 mx-4 sm:mx-6 lg:mx-0 hidden lg:block"
          >
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
              alt="Coding Setup"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
      <ProjectDialog
        isOpen={isProjectDialogOpen}
        onClose={() => setIsProjectDialogOpen(false)}
      />
    </section>
  );
}