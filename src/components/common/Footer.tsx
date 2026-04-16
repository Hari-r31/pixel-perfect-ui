import { Zap, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const usefulLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

const quickLinks = [
  { label: "Support", href: "/contact" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "IT Support", href: "/services/it-support" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-background">TechGigz Solutions</span>
            </Link>
            <p className="text-background/50 text-sm leading-relaxed mb-4">
              TechGigz Solutions delivers custom software, digital marketing, and practical IT support for businesses across Western Australia.
            </p>
            <div className="flex gap-3">
              {["X", "in", "f", "ig"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-colors text-xs font-bold"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-4">Useful Links</h4>
            <ul className="space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-background/50 hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-background/50 hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:solutions@techgigz.com.au" className="text-sm text-background/50 hover:text-primary transition-colors">solutions@techgigz.com.au</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+61386839983" className="text-sm text-background/50 hover:text-primary transition-colors">(08) 6383 9983</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=Suite+11b/5+Cressall+Rd,+Balcatta+WA+6021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/50 hover:text-primary transition-colors"
                >
                  Suite 11b/5 Cressall Rd, Balcatta WA 6021, Australia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">© 2026 TechGigz Solutions. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/contact" className="text-xs text-background/40 hover:text-background/60 transition-colors">Contact</Link>
            <Link to="/" className="text-xs text-background/40 hover:text-background/60 transition-colors">Home</Link>
            <a href="https://wa.me/61403499150" target="_blank" rel="noopener noreferrer" className="text-xs text-background/40 hover:text-background/60 transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
