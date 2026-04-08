import { ArrowRight, Cpu, Database, Globe, Layers, Lightbulb } from "lucide-react";

const services = [
  { icon: Cpu, title: "Tech Improvement", description: "Upgrading existing systems with modern technology for better performance and reliability." },
  { icon: Database, title: "Advanced Information", description: "Leveraging data-driven insights to make smarter business decisions and strategies." },
  { icon: Globe, title: "Better Technologies", description: "Implementing next-gen solutions that keep you ahead of the competition." },
  { icon: Layers, title: "Optimized Systems", description: "Streamlining operations through intelligent automation and optimization." },
  { icon: Lightbulb, title: "Smart Intelligence", description: "AI-powered tools that learn and adapt to your unique business needs." },
];

const Services = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Breaking Barriers With Tech Solutions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Comprehensive technology services designed to transform your business operations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
