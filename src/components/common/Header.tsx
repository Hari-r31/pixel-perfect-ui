import { ChevronDown, ShoppingBag, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", hasDropdown: true, href: "/" },
  { label: "About", hasDropdown: false, href: "/about" },
  { label: "Service", hasDropdown: true, href: "/service" },
  { label: "Service Mobile", hasDropdown: true, href: "/service-mobile" },
  { label: "Contact", hasDropdown: false, href: "/contact" },
];

const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Zap size={18} className="text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Teknify</span>
        </a>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md"
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
          <a
            href="#"
            className="hidden md:flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors"
          >
            Get Started <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
