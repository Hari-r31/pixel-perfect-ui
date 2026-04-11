import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />

      <div className="section-container pt-16 lg:pt-24 pb-8 lg:pb-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Pill badge */}
          <div className="sub-heading-pill mb-6">
            Technology For The Future
          </div>

          {/* Heading */}
          <h1 className="font-heading text-display leading-tight mb-6">
            Redefining{" "}
            <span className="text-primary">Technology</span>{" "}
            For A Better Tomorrow
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-body-lg max-w-xl mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt Posuere semper ut donec vel..
          </p>

          {/* CTA */}
          <a href="#" className="btn-dark">
            <ArrowRight size={16} />
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
