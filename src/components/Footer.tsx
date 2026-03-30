import { Link } from "react-router-dom";
import logo from "@/assets/7c8eae15-1470-48a0-8ceb-1ddf732aef62.png";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <img src={logo} alt="smartimmo.solutions Logo" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-sm text-muted-foreground">
              Digitale Immobilienlösungen & maßgeschneiderte Tools – alles aus einer Hand.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Smart Tools</h4>
            <div className="space-y-2">
              <Link to="/bgf-held" className="block text-sm text-muted-foreground hover:text-primary transition-colors">BGF-Held</Link>
              <Link to="/foerder-held" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Förder-Held</Link>
              <Link to="/individuelle-tools" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Individuelle Tools</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Services</h4>
            <div className="space-y-2">
              <Link to="/grundriss-service" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Grundriss & BGF</Link>
              <Link to="/3d-tour" className="block text-sm text-muted-foreground hover:text-primary transition-colors">3D-360°-Tour</Link>
              <Link to="/immobilien-website" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Immobilien-Website</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Justin Bethke – Bethke Smart Immo Services
          </p>
          <div className="flex gap-4">
            <Link to="/impressum" className="text-xs text-muted-foreground hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-xs text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
