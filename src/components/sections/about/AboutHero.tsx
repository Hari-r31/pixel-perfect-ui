import { ArrowRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative pt-20 pb-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />

      <div className="relative section-container text-center">
        {/* Badge */}
        <div className="sub-heading-pill mb-6 inline-flex">About Us</div>

        {/* Heading */}
        <h1 className="font-heading text-display leading-tight max-w-4xl mx-auto mb-6">
          We Are TechGigz — Your Trusted{" "}
          <span className="text-primary italic">IT & Digital Partner</span>
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-body max-w-2xl mx-auto mb-12 leading-relaxed">
          TechGigz Solutions works with businesses across Western Australia on custom software, digital marketing, and dependable IT support built around real operational needs.
        </p>

        {/* Decorative text */}
        <div className="absolute right-8 lg:right-20 top-1/3 hidden lg:block">
          <p className="font-handwritten text-body font-medium text-foreground/80 rotate-[-15deg] leading-snug">
            Built in Perth,<br />
            Serving All Of Australia
          </p>
          <svg className="w-8 h-12 mt-1 ml-8" viewBox="0 0 30 50" fill="none">
            <path d="M15 0 C15 30, 25 35, 25 45" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
            <path d="M20 40 L25 47 L28 38" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Image composition */}
        <div className="relative max-w-5xl mx-auto mt-4">
          {/* Left floating card - Real Time Users */}
          <div className="absolute -left-4 lg:-left-12 top-8 bg-background rounded-2xl shadow-float p-5 z-10 w-56 hidden md:block">
            <p className="font-heading font-semibold text-body-sm text-foreground mb-1">What We Deliver</p>
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-heading text-h5 font-bold text-foreground">Software, IT, Marketing</span>
            </div>
            <svg viewBox="0 0 200 60" className="w-full h-12">
              <path d="M0 45 Q25 30 50 35 T100 20 T150 30 T200 15" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.3" />
              <path d="M0 40 Q25 20 50 28 T100 15 T150 25 T200 10" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" />
            </svg>
          </div>

          {/* Center image placeholder */}
          <div className="mx-auto w-full max-w-lg lg:max-w-2xl aspect-[4/3] rounded-2xl bg-gradient-to-br from-foreground/80 to-foreground overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-background/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-background/40" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-background/30 text-body-sm">Team collaboration</p>
              </div>
            </div>
          </div>

          {/* Right floating card - John Anderson */}
          <div className="absolute -right-2 lg:-right-8 top-4 bg-background rounded-full shadow-float px-5 py-3 flex items-center gap-3 z-10 hidden md:flex">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-caption font-bold text-primary">WA</div>
            <span className="font-heading text-body-sm font-semibold text-foreground">Balcatta Office</span>
            <span className="text-body-sm text-muted-foreground">Local support</span>
            <ArrowRight size={16} className="text-muted-foreground" />
          </div>

          {/* Right floating card - Project Management */}
          <div className="absolute -right-2 lg:-right-8 top-28 bg-background rounded-2xl shadow-float p-5 z-10 w-56 hidden md:block">
            <p className="font-heading text-body-sm font-semibold text-foreground mb-3">Support Focus</p>
            <div className="relative w-32 h-32 mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="12" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--accent))" strokeWidth="12" strokeDasharray="184 67" strokeLinecap="round" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="12" strokeDasharray="0 184 42 25" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-body font-bold text-foreground">Tailored</span>
              </div>
            </div>
          </div>

          {/* Bottom left floating card */}
          <div className="absolute -left-4 lg:-left-12 bottom-0 bg-foreground rounded-2xl shadow-float p-5 z-10 w-60 hidden md:block">
            <p className="font-heading text-body-sm font-semibold text-background mb-4">
              Our Delivery<br />Approach
            </p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-caption text-background/60 mb-1">
                  <span>Discovery</span><span>Clear scope</span>
                </div>
                <div className="h-2 bg-background/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "98%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-caption text-background/60 mb-1">
                  <span>Delivery</span><span>Ongoing support</span>
                </div>
                <div className="h-2 bg-background/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "99%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom right card */}
          <div className="absolute -right-2 lg:-right-8 bottom-0 bg-background rounded-2xl shadow-float p-5 z-10 w-52 hidden md:block">
            <p className="font-heading text-body-sm font-semibold text-foreground mb-3">Service Coverage</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-caption text-muted-foreground w-16">Web</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "75%" }} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-caption text-muted-foreground w-16">Systems</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "60%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
