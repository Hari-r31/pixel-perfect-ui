import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-4 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl lg:rounded-3xl px-8 lg:px-16 py-10 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground text-center lg:text-left max-w-lg">
            Start Your Journey To Seamless Efficiency
          </h2>
          <a
            href="#"
            className="w-14 h-14 bg-primary-foreground rounded-full flex items-center justify-center hover:bg-primary-foreground/90 transition-colors flex-shrink-0"
          >
            <ArrowRight size={22} className="text-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
