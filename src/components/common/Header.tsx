import { ChevronDown, ShoppingBag, ArrowRight, Zap, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { serviceCategories } from "@/data/serviceCategories";
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from "@/components/ui/craft-button";

const navItems = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

const desktopNavLinkClass =
  "group relative flex items-center gap-1 px-3.5 py-2 text-body-md font-medium " +
  "text-foreground/80 transition-colors rounded-md hover:text-foreground " +
  "after:absolute after:left-1/2 after:bottom-1 after:h-0.5 after:w-[calc(100%-1.75rem)] " +
  "after:-translate-x-1/2 after:origin-center after:scale-x-0 after:rounded-full " +
  "after:bg-gradient-to-r after:from-orange-500 after:via-white after:to-orange-500 " +
  "after:transition-transform after:duration-300 after:ease-out " +
  "hover:after:scale-x-100";

/* ── Services dropdown panel ─────────────────────────────────────────── */
const ServicesDropdown = ({ onClose }: { onClose: () => void }) => (
  <div
    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] max-w-[95vw]
               bg-background border border-border/60 rounded-2xl shadow-2xl
               animate-float-in overflow-hidden z-50"
  >
    {/* header strip */}
    <div className="px-6 py-4 border-b border-border/40 flex items-center justify-between">
      <p className="text-sm font-semibold text-foreground">Our Services</p>
      <Link
        to="/services"
        onClick={onClose}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
      >
        View all <ArrowRight size={12} />
      </Link>
    </div>

    {/* grid of service categories */}
    <div className="grid grid-cols-2 gap-px bg-border/30 p-px">
      {serviceCategories.map((cat) => {
        const Icon = cat.icon;
        return (
          <Link
            key={cat.slug}
            to={`/services/${cat.slug}`}
            onClick={onClose}
            className="group flex items-start gap-3 bg-background px-5 py-4
                       hover:bg-primary/5 transition-colors duration-150"
          >
            <div
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center
                         rounded-lg bg-primary/10 group-hover:bg-primary
                         transition-colors duration-150"
            >
              <Icon
                size={16}
                className="text-primary group-hover:text-primary-foreground transition-colors duration-150"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary
                            transition-colors duration-150 leading-snug">
                {cat.shortTitle}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-0.5 line-clamp-2">
                {cat.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
);

/* ── Header ──────────────────────────────────────────────────────────── */
const Header = () => {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen]   = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  /* Keep dropdown alive while the cursor moves between trigger and panel */
  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  return (
    <header className="w-full bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
      <div className="section-container flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold text-foreground">TechGigz<span className="text-primary">.</span> </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            if (item.label !== "Services") {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={desktopNavLinkClass}
                >
                  {item.label}
                </Link>
              );
            }

            /* Services nav item with hover dropdown */
            return (
              <div
                key="Services"
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Click → /services   |   Hover → dropdown */}
                <button
                  onClick={() => { navigate("/services"); setDropdownOpen(false); }}
                  className={`${desktopNavLinkClass}
                              ${dropdownOpen
                                ? "text-primary after:scale-x-100"
                                : "text-foreground/80 hover:text-foreground"}`}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`text-muted-foreground transition-transform duration-200
                                ${dropdownOpen ? "rotate-180 text-primary" : ""}`}
                  />
                </button>

                {/* Dropdown panel */}
                {dropdownOpen && (
                  <ServicesDropdown onClose={() => setDropdownOpen(false)} />
                )}
              </div>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">

          <Link to="/contact" className="hidden md:inline-flex">
            <CraftButton className="rounded-full">
              <CraftButtonLabel>Get Started</CraftButtonLabel>
              <CraftButtonIcon>
                <ArrowRight className="size-4 stroke-2 transition-transform duration-500 group-hover:rotate-45" />
              </CraftButtonIcon>
            </CraftButton>
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
        <nav className="lg:hidden border-t border-border bg-background px-4 py-3 space-y-0.5">
          {navItems.map((item) => {
            if (item.label !== "Services") {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-body font-medium text-foreground/80
                             hover:text-foreground rounded-md hover:bg-muted transition-colors"
                >
                  {item.label}
                </Link>
              );
            }

            /* Mobile Services: accordion */
            return (
              <div key="Services">
                <div className="flex items-center">
                  {/* tap label → navigate */}
                  <Link
                    to="/services"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 px-3 py-2.5 text-body font-medium text-foreground/80
                               hover:text-foreground rounded-md hover:bg-muted transition-colors"
                  >
                    Services
                  </Link>
                  {/* tap chevron → expand sub-list */}
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-2.5 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Toggle service sub-menu"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200
                                  ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {/* Sub-list */}
                {mobileServicesOpen && (
                  <div className="ml-4 mt-1 mb-2 border-l-2 border-primary/20 pl-3 space-y-0.5">
                    {serviceCategories.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <Link
                          key={cat.slug}
                          to={`/services/${cat.slug}`}
                          onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                          className="flex items-center gap-2.5 px-2 py-2 rounded-md
                                     text-sm text-foreground/70 hover:text-primary
                                     hover:bg-primary/5 transition-colors"
                        >
                          <Icon size={14} className="text-primary shrink-0" />
                          {cat.shortTitle}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
