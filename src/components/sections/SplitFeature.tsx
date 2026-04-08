import { Check, ArrowRight } from "lucide-react";

const features = [
  "Automated workflows that save time",
  "Real-time collaboration tools",
  "Advanced security and data protection",
  "Scalable infrastructure for growth",
];

const SplitFeature = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6 leading-tight">
              Building Smarter Systems For The Future
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We combine cutting-edge technology with deep industry expertise to create solutions that transform how businesses operate and grow.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
            >
              Learn More <ArrowRight size={16} />
            </a>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 via-teknify-purple/10 to-primary/5 rounded-3xl p-8 lg:p-10">
              <div className="bg-card rounded-2xl shadow-lg border border-border/60 p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-bold">T</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Dashboard Analytics</p>
                    <p className="text-xs text-muted-foreground">Real-time monitoring</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">Users</p>
                    <p className="text-lg font-bold text-foreground">2,847</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">Revenue</p>
                    <p className="text-lg font-bold text-foreground">$34K</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg border border-border/60 p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                <Check size={18} className="text-green-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Task Completed</p>
                <p className="text-sm font-bold text-foreground">+24 today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitFeature;
