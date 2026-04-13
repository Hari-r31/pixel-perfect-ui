import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="py-4">
      <div className="section-container">
        <div className="gradient-banner rounded-3xl px-8 lg:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-h3 lg:text-h2 text-primary-foreground mb-2 max-w-lg leading-tight">
              Ready To Transform Your IT & Grow Your Business With TechGigz?
            </h2>
            <p className="text-primary-foreground/70 text-body-sm">
              Contact us today for a free consultation and let's build something great together.
            </p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="inline-flex items-center gap-2 bg-primary-foreground text-foreground rounded-full px-6 py-3 text-body-sm font-semibold hover:bg-primary-foreground/90 transition-colors whitespace-nowrap">
              <ArrowRight size={16} /> Book A Call
            </a>
            <a href="#" className="btn-outline-light whitespace-nowrap">
              <ArrowRight size={16} /> Book A Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
