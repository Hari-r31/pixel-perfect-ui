import { Check } from "lucide-react";

const features = [
  {
    title: "Real-Time Updates",
    description: "Lorem ipsum dolor sit amet consectetur. Purus id accumsan et eget. Commodo odio lorem a aliquet vitae dolor risus vel.",
  },
  {
    title: "Align Your Money & Goals",
    description: "Lorem ipsum dolor sit amet consectetur. Purus id accumsan et eget. Commodo odio lorem a aliquet vitae dolor risus vel.",
  },
  {
    title: "Quietly Powerful",
    description: "Lorem ipsum dolor sit amet consectetur. Purus id accumsan et eget. Commodo odio lorem a aliquet vitae dolor risus vel.",
  },
];

const AboutMission = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
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
            {/* Floating stat */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-lg">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-xs opacity-80">Years Experience</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block border border-foreground/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
              Evolving Technologies, Empowering Lives
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Purus id accumsan et eget. Commodo odio lorem a aliquet vitae dolor risus vel fusce vitae et natoque amet
            </p>

            <div className="space-y-5">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
