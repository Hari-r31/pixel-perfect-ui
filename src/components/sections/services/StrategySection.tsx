import { Rocket, Brain, Target } from "lucide-react";
import strategyImg from "@/assets/strategy-section.jpg";

const strategyCards = [
  {
    icon: Rocket,
    title: "Custom CRM & Business Automation",
    description:
      "We build tailored CRM systems that map your customer journey, automate workflows, and connect every department for maximum efficiency.",
  },
  {
    icon: Brain,
    title: "IT Infrastructure & Security",
    description:
      "We install, monitor, and maintain your IT environment — including antivirus, backups, cloud migration, and Microsoft 365 administration.",
  },
  {
    icon: Target,
    title: "Digital Marketing That Converts",
    description:
      "From SEO and keyword research to social media and link building, we grow your online presence and deliver qualified traffic to your business.",
  },
];

const StrategySection = () => {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left - Content */}
        <div>
          <span className="badge-outline">Our Strategy</span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-[44px] md:leading-[1.15]">
            What Sets TechGigz Apart — Our{" "}
            <span className="text-accent-orange underline-orange">Core Capabilities</span>
          </h2>

          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            We don't just consult — we build, manage, and grow alongside you. Our end-to-end capabilities mean you never have to juggle multiple vendors again.
          </p>

          <div className="mt-8 space-y-5">
            {strategyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{card.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right - Image */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src={strategyImg}
            alt="Strategy team"
            className="h-[400px] w-full object-cover md:h-[500px]"
            loading="lazy"
            width={640}
            height={480}
          />
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
