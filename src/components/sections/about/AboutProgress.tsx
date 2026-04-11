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
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-muted to-muted/50" />
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 mt-8" />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background rounded-2xl shadow-float p-4 flex items-center gap-4">
              <div className="relative w-16 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="8" strokeDasharray="213 38" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-body-sm font-bold text-foreground">85%</span>
                </div>
              </div>
              <div>
                <p className="font-heading text-body-sm font-semibold text-foreground">Growth Rate</p>
                <p className="text-caption text-muted-foreground">Year over year</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="sub-heading-pill mb-5 inline-flex">Our Progress</div>
            <h2 className="font-heading text-h2 lg:text-h1 text-foreground mb-4 leading-tight">
              Intelligent Systems For Every Industry
            </h2>
            <p className="text-muted-foreground text-body mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="space-y-5">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-body text-foreground mb-1">{feature.title}</h4>
                    <p className="text-body-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
