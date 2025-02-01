'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Cookie-Einstellungen</CardTitle>
          <CardDescription>
            Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Wir verwenden Cookies, um die Websitenutzung zu analysieren und Ihnen
            ein optimales Nutzererlebnis zu bieten.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => setShowConsent(false)}>
            Ablehnen
          </Button>
          <Button onClick={acceptCookies}>Akzeptieren</Button>
        </CardFooter>
      </Card>
    </div>
  );
}