import { Zap, Mail, Phone, MapPin } from "lucide-react";

const usefulLinks = ["About Us", "Our Services", "Case Studies", "Pricing", "FAQs"];
const quickLinks = ["Blog", "Careers", "Support", "Privacy Policy", "Terms of Service"];

const Footer = () => {
  return (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap size={18} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background">TechGigz</span>
            </a>
            <p className="text-background/50 text-sm leading-relaxed mb-4">
              TechGigz is a Perth-based IT consulting firm delivering software development, digital marketing, and managed IT services since 2018.
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
                <li key={link}>
                  <a href="#" className="text-sm text-background/50 hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-background/50 hover:text-primary transition-colors">{link}</a>
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
                <span className="text-sm text-background/50">solutions@techgigz.com.au</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-background/50">(08) 6383 9983</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-background/50">Unit 7/4 Queen St, Bentley WA 6102, Australia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">© 2025 TechGigz. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-background/40 hover:text-background/60 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-background/40 hover:text-background/60 transition-colors">Terms</a>
            <a href="#" className="text-xs text-background/40 hover:text-background/60 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
