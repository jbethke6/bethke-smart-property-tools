import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/7c8eae15-1470-48a0-8ceb-1ddf732aef62.png";


const navItems = [
  { label: "Startseite", href: "/" },
  {
    label: "Smart Tools",
    children: [
      { label: "BGF-Held", href: "/bgf-held" },
      { label: "Förder-Held", href: "/foerder-held" },
      { label: "Individuelle Tools", href: "/individuelle-tools" },
    ],
  },
  {
    label: "Immobilien-Services",
    children: [
      { label: "Grundriss & BGF", href: "/grundriss-service" },
      { label: "3D-360°-Tour", href: "/3d-tour" },
      { label: "Immobilien-Website", href: "/immobilien-website" },
    ],
  },
  { label: "Smart Tools Demo", href: "/smart-tools-demo" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Bethke Smart Immo Services Logo" className="h-10 w-10 rounded-md object-cover" />
          <span className="text-lg font-bold text-foreground hidden sm:inline">
            Bethke <span className="text-primary">–</span> Smart Immo
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full w-56 rounded-lg border bg-card p-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                          location.pathname === child.href
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                to={item.href!}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden rounded-md p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t bg-background lg:hidden">
          <div className="container py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="space-y-1">
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-6 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href!}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
