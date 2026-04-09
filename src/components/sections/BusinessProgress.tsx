import { ArrowRight } from "lucide-react";
import businessImg from "@/assets/business-progress.jpg";

const steps = [
  {
    number: "01",
    title: "Innovative Technology",
    description:
      "Maecenas varius sem dui. Vestibulum semper ante a viverra posuere. Maecenas eleifend fermentum tristique eros.",
  },
  {
    number: "02",
    title: "Advanced Automation",
    description:
      "Aecenas varius sem dui. Vestibulum semper ante a viverra posuere. Maecenas eleifend fermentum tristique eros.",
  },
];

const BusinessProgress = () => {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left - Image */}
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={businessImg}
            alt="Business progress"
            className="h-[400px] w-full object-cover md:h-[480px]"
            loading="lazy"
            width={640}
            height={480}
          />
        </div>

        {/* Right - Content */}
        <div>
          <span className="badge-outline">Business Progress</span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-[44px] md:leading-[1.15]">
            Discover The Power Of Technology That{" "}
            <span className="text-accent-orange underline-orange">Delivers</span>
          </h2>

          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur. Et enim metus massa elementum. Ornare fermentum viverra tincidunt ultrices vel rhoncus massa quis.
          </p>

          <div className="mt-8 space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent">
            Learn More <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessProgress;
