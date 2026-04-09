import { Check } from "lucide-react";

const features = [
  {
    title: "Engaging Group Discussion",
    description: "Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Customizable Workflow",
    description: "Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const AboutProgress = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-muted to-muted/50 overflow-hidden" />
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden mt-8" />
            </div>
            {/* Floating stat */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background rounded-2xl shadow-lg p-4 flex items-center gap-4">
              <div className="relative w-16 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="8" strokeDasharray="213 38" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">85%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Growth Rate</p>
                <p className="text-xs text-muted-foreground">Year over year</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block border border-foreground/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground mb-4">
              Our Progress
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
              Intelligent Systems For Every Industry
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="space-y-5">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProgress;
