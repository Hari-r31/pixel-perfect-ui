const logos = [
  { name: "ZenoTech", subtitle: "Tech Solutions" },
  { name: "FutureEdge", subtitle: "Digital Realm" },
  { name: "InnoByte", subtitle: "Digital Solutions" },
  { name: "CloudStack", subtitle: "Cloud Platform" },
  { name: "DataSync", subtitle: "Data Services" },
];

const TrustedBy = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="section-container">
        <p className="text-center text-body-sm font-semibold text-foreground mb-10">
          15k+ Customers Trust Us
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
