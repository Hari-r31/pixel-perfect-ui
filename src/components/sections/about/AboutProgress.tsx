import { Check } from "lucide-react";

const features = [
  {
    title: "Discovery & Strategy First",
    description: "We start with understanding your business goals, pain points, and workflows. Through workshops and consultations, we develop a clear technology roadmap aligned with your objectives.",
  },
  {
    title: "Agile Development & Testing",
    description: "Our iterative approach means you see progress early and often. We test continuously, incorporate your feedback, and deliver working software in manageable phases.",
  },
  {
    title: "Ongoing Support & Optimization",
    description: "Post-launch, we monitor performance, provide technical support, and proactively optimize your systems to ensure maximum uptime and efficiency.",
  },
  {
    title: "Business-First Thinking",
    description: "We don't build for technology's sake. Every decision is guided by your business outcomes, budget, and timeline — delivering real ROI.",
  },
];

const AboutProgress = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=700&fit=crop"
                  alt="Strategy & Planning Sessions"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-card mt-8">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=700&fit=crop"
                  alt="Development & Technical Implementation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background rounded-2xl shadow-float p-4 flex items-center gap-4">
              <div className="relative w-16 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="8" strokeDasharray="235 18" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-body-sm font-bold text-foreground">98%</span>
                </div>
              </div>
              <div>
                <p className="font-heading text-body-sm font-semibold text-foreground">Client Success</p>
                <p className="text-caption text-muted-foreground">Project delivery on time & budget</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="sub-heading-pill mb-5 inline-flex">Our Methodology</div>
            <h2 className="font-heading text-h2 lg:text-h1 text-foreground mb-4 leading-tight">
              How We Deliver <span className="text-primary">Technology That Works</span>
            </h2>
            <p className="text-muted-foreground text-body mb-8 leading-relaxed">
              Our four-step approach ensures every project aligns with your business goals. From initial strategy through ongoing support, we're focused on delivering measurable results and long-term partnership.
            </p>

            <div className="space-y-5">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-primary" />
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

export default AboutProgress;
