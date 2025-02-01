'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern online shop mit optimierter User Experience',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
    tags: ['Next.js', 'Shopify', 'TailwindCSS'],
  },
  {
    title: 'Restaurant Website',
    description: 'Elegante Website mit Online-Reservierung',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80',
    tags: ['React', 'Framer Motion', 'Supabase'],
  },
  {
    title: 'Fitness Studio',
    description: 'Dynamische Website mit Kursmanagement',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Immobilien Portal',
    description: 'Professionelle Immobilien-Präsentation',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">
            Meine Projekte
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecke eine Auswahl meiner bisherigen Projekte. Jedes Projekt wird
            individuell nach Kundenwunsch gestaltet und umgesetzt.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="min-h-[32px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="secondary" className="min-h-[44px]">Details ansehen</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}