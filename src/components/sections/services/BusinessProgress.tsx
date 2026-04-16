import businessImg from "@/assets/business-progress.jpg";

const steps = [
  {
    number: "01",
    title: "Business Understanding & Planning",
    description:
      "We start by listening. Our team analyses your goals, workflows, and pain points to design a tailored IT and software strategy aligned with your objectives.",
  },
  {
    number: "02",
    title: "Application Development & Deployment",
    description:
      "We build web apps, mobile apps, CRM systems, and integrations with precision — embedding your business logic and ensuring quality at every module.",
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
            Our Process Turns Your Ideas Into Technology That{" "}
            <span className="text-accent-orange underline-orange">Works</span>
          </h2>

          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            From the first conversation to go-live and beyond — TechGigz follows a structured, transparent process to deliver solutions that meet your exact business needs.
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
        </div>
      </div>
    </section>
  );
};

export default BusinessProgress;
