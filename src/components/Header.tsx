import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const memberLinks = [
  { to: "/training", label: "Training Library" },
  { to: "/resources", label: "Resources" },
  { to: "/community", label: "Community" },
  { to: "/forum", label: "Discussion Forum" },
  { to: "/coaching", label: "Business Coaching" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMembersOpen, setIsMembersOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsMembersOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/help", label: "Get Matched" },
    { to: "/find", label: "Browse Interventionists" },
    { to: "/join", label: "Join the Network" },
  ];

  const trailingLinks = [
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  const isMemberPage = memberLinks.some((l) => location.pathname.startsWith(l.to));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="The Interventionist Network" className="h-14 lg:h-16 w-auto" />
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

            {/* Members Dropdown */}
            <div className="relative" onMouseEnter={() => setIsMembersOpen(true)} onMouseLeave={() => setIsMembersOpen(false)}>
              <button
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                  isMemberPage ? "text-accent" : "text-foreground/80 hover:text-foreground hover:bg-muted"
                }`}
              >
                Members <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {isMembersOpen && (
                <div className="absolute top-full left-0 pt-1 z-50">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                    {memberLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          location.pathname === link.to
                            ? "text-accent bg-accent/10"
                            : "text-foreground/80 hover:bg-muted"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {trailingLinks.map((link) => (
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
            <a href="tel:5418386009" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
              <Phone className="w-4 h-4" />
              Call (541) 838-6009
            </a>
            <Button variant="gold" size="sm" asChild>
              <Link to="/help">Get Matched Now</Link>
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

              {/* Mobile Members Expandable */}
              <button
                onClick={() => setIsMembersOpen(!isMembersOpen)}
                className={`px-3 py-2.5 text-sm font-medium rounded-md flex items-center justify-between ${
                  isMemberPage ? "text-accent bg-accent/10" : "text-foreground/80 hover:bg-muted"
                }`}
              >
                Members
                <ChevronDown className={`w-4 h-4 transition-transform ${isMembersOpen ? "rotate-180" : ""}`} />
              </button>
              {isMembersOpen && (
                <div className="pl-4">
                  {memberLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block px-3 py-2 text-sm rounded-md ${
                        location.pathname === link.to
                          ? "text-accent bg-accent/10"
                          : "text-foreground/70 hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {trailingLinks.map((link) => (
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
                <a href="tel:5418386009" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  Call (541) 838-6009
                </a>
                <Button variant="gold" size="sm" asChild>
                  <Link to="/help">Get Matched Now</Link>
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
