import { Link } from "react-router-dom";
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
            IT Consulting &amp; Digital Growth
          </div>

          {/* Heading */}
          <h1 className="font-heading text-display leading-tight mb-6">
            Custom Software &amp;{" "}
            <span className="text-primary">IT Solutions</span>{" "}
            That Drive Real Results
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-body-lg max-w-xl mb-8 leading-relaxed">
            TechGigz helps businesses grow through custom software development, data-driven digital marketing, and reliable managed IT services — all under one roof.
          </p>

          {/* CTA */}
          <Link to="/contact" className="btn-dark">
            <ArrowRight size={16} />
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
