import { Check } from "lucide-react";

const features = [
  {
    title: "Custom Solutions For Every Business",
    description: "We don't believe in one-size-fits-all. Every solution — from CRM to cloud — is purpose-built to meet your specific business needs and objectives.",
  },
  {
    title: "Scalability Built In From Day One",
    description: "Whether you're a small business or scaling enterprise, our software and IT solutions are architected to grow with you without requiring a full rebuild.",
  },
  {
    title: "Reliability You Can Depend On",
    description: "Proactive monitoring, regular maintenance, and rapid response ensure your systems are always running — so you can focus on running your business.",
  },
];

const AboutMission = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-muted to-muted/50 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="w-20 h-20 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <div className="sub-heading-pill mb-5 inline-flex">Our Mission</div>
            <h2 className="font-heading text-h2 lg:text-h1 text-foreground mb-6 leading-tight">
              Empowering Businesses Through <span className="text-primary">Smart Technology</span>
            </h2>
            <p className="text-muted-foreground text-body mb-8 leading-relaxed">
              TechGigz is a team of creative, collaborative consultants who work side-by-side with your business — crafting IT strategy, developing software, and managing the infrastructure that keeps you moving forward.
            </p>

            <div className="space-y-5">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-muted-foreground/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-body text-foreground mb-1">{feature.title}</h4>
                    <p className="text-body-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
