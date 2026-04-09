import { ArrowRight, Rocket, Brain, Target } from "lucide-react";
import strategyImg from "@/assets/strategy-section.jpg";

const strategyCards = [
  {
    icon: Rocket,
    title: "Tech-Driven Growth Strategies",
    description:
      "Lorem ipsum dolor sit amet consectetur. Varius sed odio Condimentum eu elementum penatibus.",
  },
  {
    icon: Brain,
    title: "Harnessing The Power Of AI",
    description:
      "Lorem ipsum dolor sit amet consectetur. Varius sed odio Condimentum eu elementum penatibus.",
  },
  {
    icon: Target,
    title: "Tech Solutions That Deliver",
    description:
      "Lorem ipsum dolor sit amet consectetur. Varius sed odio Condimentum eu elementum penatibus.",
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
            Leading Innovation Through{" "}
            <span className="text-accent-orange underline-orange">Technology</span> Strategy
          </h2>

          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

          <button className="mt-8 flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground/90">
            <ArrowRight className="h-4 w-4" />
            Learn More
          </button>
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
