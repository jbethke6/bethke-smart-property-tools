import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const COOKIE_KEY = "cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = (value: string) => {
    localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur p-4 shadow-lg">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground max-w-2xl">
          Wir verwenden Cookies um die Nutzererfahrung zu verbessern. Mit der Nutzung dieser Website stimmen Sie der Verwendung von Cookies gemäß unserer{" "}
          <Link to="/datenschutz" className="text-primary underline hover:text-primary/80">
            Datenschutzerklärung
          </Link>{" "}
          zu.
        </p>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline" size="sm" onClick={() => accept("necessary")}>
            Nur notwendige
          </Button>
          <Button size="sm" onClick={() => accept("all")}>
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}
