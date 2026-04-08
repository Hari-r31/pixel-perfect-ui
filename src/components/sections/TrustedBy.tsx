const logos = ["ZeroTech", "FutureEdge", "RealWave", "CloudStack", "DataSync", "NeoVault"];

const TrustedBy = () => {
  return (
    <section className="py-12 lg:py-16 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8">
          Our Customers Trust Us
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-muted-foreground/40 text-lg font-bold tracking-wider hover:text-muted-foreground/60 transition-colors cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
