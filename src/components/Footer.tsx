import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="The Interventionist Network" className="h-10 w-auto mb-3 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/60 mb-4">
              Trusted Interventionists. Zero Referral Fees. One Mission.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:5418386009" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                (541) 838-6009
              </a>
              <a href="mailto:matt@theinterventionistnetwork.com" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                matt@theinterventionistnetwork.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/find", label: "Find an Interventionist" },
                { to: "/join", label: "Join the Network" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
                { to: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Families */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">For Families</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Get Help Now</Link></li>
              <li><Link to="/find" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Browse Interventionists</Link></li>
              <li><Link to="/about" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Our Standards</Link></li>
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">For Professionals</h4>
            <ul className="space-y-2">
              <li><Link to="/join" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Membership Plans</Link></li>
              <li><Link to="/apply" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Apply Now</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-primary-foreground/40 text-center md:text-left">
              <p>Founded by Matt Brown | <a href="https://freedominterventions.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Freedom Interventions</a></p>
              <p className="mt-1">A division of Freedom Interventions, LLC</p>
            </div>
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} The Interventionist Network. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
