'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="kontakt" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">
            Lass uns sprechen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bereit dein Projekt zu starten? Kontaktiere mich für ein kostenloses
            Erstgespräch und lass uns gemeinsam deine Vision umsetzen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Kontaktformular</CardTitle>
                  <CardDescription>
                    Fülle das Formular aus und ich melde mich innerhalb von 24
                    Stunden bei dir.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Dein Name" className="min-h-[44px]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail</Label>
                      <Input id="email" type="email" placeholder="deine@email.de" className="min-h-[44px]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Nachricht</Label>
                      <Textarea
                        id="message"
                        placeholder="Beschreibe kurz dein Projekt..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full min-h-[44px]">Nachricht senden</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="grid gap-6">
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <Phone className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-muted-foreground">+49 123 456789</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <Mail className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">E-Mail</h3>
                    <p className="text-muted-foreground">
                      kontakt@webdesign-huerth.de
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <Clock className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">Reaktionszeit</h3>
                    <p className="text-muted-foreground">
                      Antwort innerhalb von 24 Stunden
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}