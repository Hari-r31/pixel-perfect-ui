import { ArrowRight, Phone } from "lucide-react";

interface CtaSectionProps {
  heading?: string;
  description?: string;
  primaryButton?: string;
  secondaryButton?: string;
}

const CtaSection = ({
  heading = "Enhance Productivity And Efficiency With Expert SaaS Guidance You Can Trust",
  description = "Lorem ipsum dolor sit amet consectetur. Gravida fermentum amet aliquet ultrices nulla at ipsum consectetur. Aenean morbi nulla.",
  primaryButton = "Book A Call",
  secondaryButton = "Get Started For Free",
}: CtaSectionProps) => {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
      <div
        className="relative overflow-hidden rounded-3xl px-8 py-14 text-center md:px-16 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, hsl(24 95% 53%), hsl(350 80% 60%))",
        }}
      >
        <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-primary-foreground md:text-[40px] md:leading-[1.2]">
          {heading}
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/75">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 bg-transparent px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
            <Phone className="h-4 w-4" />
            {primaryButton}
          </button>
          <button className="flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary-foreground/90">
            <ArrowRight className="h-4 w-4" />
            {secondaryButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
