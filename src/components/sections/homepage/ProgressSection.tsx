import { Link } from "react-router-dom";
import { ArrowRight, Command, Zap } from "lucide-react";

const ProgressSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div>
            <div className="sub-heading-pill mb-5 inline-flex">How It Works</div>
            <h2 className="font-heading text-h2 lg:text-h1 text-foreground mb-6 leading-tight">
              Our Proven Process For
              <br />
              <span className="text-primary">Delivering Results</span>
            </h2>
            <p className="text-muted-foreground text-body mb-10 leading-relaxed max-w-lg">
              We begin by understanding your business inside-out, then build solutions aligned to your goals — and measure every outcome to ensure continued growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
                  <Command size={22} className="text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-body text-foreground mb-2">Business Understanding & Planning</h4>
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  We analyse your objectives, workflows, and market position to create a tailored technology roadmap.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
                  <Zap size={22} className="text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-body text-foreground mb-2">Digital Growth & SEO</h4>
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  We promote your brand through targeted digital marketing strategies that drive qualified traffic and conversions.
                </p>
              </div>
            </div>

            <Link to="/services" className="btn-dark">
              <ArrowRight size={16} />
              Explore More
            </Link>
          </div>

          {/* Right visual - composite image/chart area */}
          <div className="relative">
            <div className="bg-accent/10 rounded-3xl p-8 min-h-[500px] relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full border border-accent/20" />
              <div className="absolute top-1/3 right-1/3 w-[200px] h-[200px] rounded-full border border-accent/10" />

              {/* Person placeholder */}
              <div className="absolute top-4 right-4 w-48 h-64 bg-accent/20 rounded-2xl" />

              {/* Chart card */}
              <div className="absolute bottom-20 left-4 right-4 bg-card rounded-xl shadow-float p-5">
                <p className="font-heading font-semibold text-body text-foreground mb-3">Application Development Output</p>
                <div className="flex items-center gap-6">
                  <div className="relative w-20 h-20">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--accent))" strokeWidth="3" strokeDasharray="60, 100" strokeLinecap="round" />
                      <circle cx="18" cy="18" r="12" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="40, 100" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="font-heading font-bold text-body-sm text-foreground">98%</span>
                        <p className="text-[8px] text-muted-foreground">Delivered</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 text-caption">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">Web Apps</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-foreground">Mobile</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-primary/50" />
                      <span className="text-foreground">CRM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Woman image placeholder */}
              <div className="absolute bottom-0 left-1/4 w-40 h-56 bg-primary/20 rounded-t-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
