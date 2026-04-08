import { Monitor, Zap, Settings } from "lucide-react";

const items = [
  { icon: Monitor, title: "Digitalization", description: "Transform your operations with digital-first strategies." },
  { icon: Zap, title: "Factors Driving Better", description: "Key elements that accelerate business performance." },
  { icon: Settings, title: "Solutions That Simplify", description: "Making complex processes simple and efficient." },
];

const GradientStrip = () => {
  return (
    <section className="py-16 lg:py-24 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-background mb-4">
            Transforming Challenges Into Opportunities
          </h2>
          <p className="text-background/60 max-w-xl mx-auto">
            We turn complex problems into streamlined solutions that drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl border border-background/10 hover:border-background/20 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-background mb-2">{item.title}</h3>
                <p className="text-sm text-background/50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GradientStrip;
