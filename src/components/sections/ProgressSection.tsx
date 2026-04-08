import { Check, Wifi, BarChart3 } from "lucide-react";

const features = [
  "Intelligent process automation",
  "Seamless third-party integrations",
  "Enterprise-grade security standards",
];

const ProgressSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/8 via-muted to-teknify-purple/8 rounded-3xl aspect-square flex items-center justify-center">
              <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/15 rounded-full flex items-center justify-center">
                  <BarChart3 size={48} className="text-primary" />
                </div>
              </div>
            </div>

            {/* Floating stat - top right */}
            <div className="absolute top-6 right-6 bg-card rounded-xl shadow-lg border border-border/60 p-3">
              <div className="relative w-16 h-16">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="85, 100" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-foreground">85%</span>
                </div>
              </div>
            </div>

            {/* Floating card - bottom left */}
            <div className="absolute bottom-6 left-6 bg-card rounded-xl shadow-lg border border-border/60 p-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-teknify-purple/10 rounded-lg flex items-center justify-center">
                <Wifi size={14} className="text-teknify-purple" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground">Connectivity</p>
                <p className="text-xs font-bold text-foreground">98.9%</p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Progress</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6 leading-tight">
              Powering Progress Through Technology
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our platform continuously evolves, incorporating the latest advancements to deliver measurable results for every client.
            </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
