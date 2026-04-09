import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-[#7C3AED] rounded-3xl px-8 lg:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-2 max-w-lg">
              Start Your Journey To Seamless Efficiency With Our SaaS Solutions Today
            </h2>
            <p className="text-primary-foreground/70 text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors whitespace-nowrap"
          >
            Book A Call <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
