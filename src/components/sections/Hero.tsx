import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/3 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-16 lg:pt-24 pb-8 lg:pb-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium text-foreground/70">Technology For The Future</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Redefining{" "}
            <span className="text-primary">Technology</span>{" "}
            For A Better Tomorrow
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-base lg:text-lg max-w-xl mb-8 leading-relaxed">
            Empowering businesses with innovative solutions that drive growth, enhance efficiency, and unlock new possibilities in the digital age.
          </p>

          {/* CTA */}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors"
          >
            Get Started Today <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
