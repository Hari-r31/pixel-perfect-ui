import { ChevronDown, ShoppingBag, ArrowRight, Zap, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { label: "Home", hasDropdown: false, href: "/" },
  { label: "About", hasDropdown: false, href: "/about" },
  { label: "Services", hasDropdown: true, href: "/services" },
  { label: "Projects", hasDropdown: false, href: "/projects" },
  { label: "Contact", hasDropdown: false, href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Zap size={18} className="text-primary-foreground" />
          </div>
          <span className="text-xl font-heading font-bold text-foreground">Teknify</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-center gap-1 px-3.5 py-2 text-body-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={14} className="text-muted-foreground" />}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-muted rounded-md transition-colors">
            <ShoppingBag size={20} className="text-foreground" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex btn-dark"
          >
            Get Started <ArrowRight size={16} />
          </Link>
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-body font-medium text-foreground/80 hover:text-foreground rounded-md hover:bg-muted transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
