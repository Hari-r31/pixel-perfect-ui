const logos = [
  { name: "DD Carpet Cleaning", subtitle: "Digital Marketing" },
  { name: "Retail Client", subtitle: "Web Development" },
  { name: "SME Partner", subtitle: "Managed IT" },
  { name: "Healthcare Client", subtitle: "App Development" },
  { name: "Startup Partner", subtitle: "Cloud Migration" },
];

const TrustedBy = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="section-container">
        <p className="text-center text-body-sm font-semibold text-foreground mb-10">
          Trusted By Businesses Across Australia Since 2018
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-body-sm">
                  {logo.name[0]}
                </span>
              </div>
              <div>
                <p className="text-body-sm font-heading font-semibold text-foreground">{logo.name}</p>
                <p className="text-caption text-muted-foreground">{logo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
