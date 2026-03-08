import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/find", label: "Find an Interventionist" },
    { to: "/join", label: "Join the Network" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="The Interventionist Network" className="h-10 lg:h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.to
                    ? "text-accent"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:5418386009" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <Phone className="w-4 h-4" />
              (541) 838-6009
            </a>
            <Button variant="gold" size="sm" asChild>
              <Link to="/help">Get Help Now</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden border-t border-border pb-4">
            <nav className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2.5 text-sm font-medium rounded-md ${
                    location.pathname === link.to
                      ? "text-accent bg-accent/10"
                      : "text-foreground/80 hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 px-3 flex flex-col gap-2">
                <a href="tel:5418386009" className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  (541) 838-6009
                </a>
                <Button variant="gold" size="sm" asChild>
                  <Link to="/help">Get Help Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
