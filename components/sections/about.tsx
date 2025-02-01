'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Gauge, Search } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'Design',
    description: 'Moderne und intuitive Designs, die deine Marke perfekt repräsentieren.',
  },
  {
    icon: Code2,
    title: 'Entwicklung',
    description: 'Clean Code und modernste Technologien für optimale Performance.',
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Optimierung für Suchmaschinen, damit dich deine Kunden finden.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    description: 'Schnelle Ladezeiten und optimale Nutzererfahrung auf allen Geräten.',
  },
];

export function About() {
  return (
    <section id="ueber-mich" className="section bg-secondary/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">
            Über Mich
          </h2>
          <p className="text-lg text-muted-foreground">
            Als junger Webdesigner bringe ich frische Perspektiven und moderne
            Lösungen in dein Projekt. Meine Leidenschaft für Design und Technologie
            treibt mich an, außergewöhnliche digitale Erlebnisse zu schaffen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg p-6 shadow-lg"
            >
              <skill.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}