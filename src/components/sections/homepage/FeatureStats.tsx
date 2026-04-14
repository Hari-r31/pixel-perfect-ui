const FeatureStats = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="sub-heading-pill mb-4 inline-flex">Our Performance</div>
          <h2 className="font-heading text-h2 lg:text-h1 text-foreground mb-4">
            Measurable Results With <span className="text-primary">Proven</span> Technology
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Software Built Around Your Workflow",
              description:
                "We design and develop websites, apps, and internal systems that match the way your business already operates.",
            },
            {
              title: "Marketing That Supports Growth",
              description:
                "SEO, paid campaigns, and content planning are aligned with your commercial goals instead of vanity metrics.",
            },
            {
              title: "Reliable Day-To-Day IT Support",
              description:
                "From Microsoft 365 and backups to device support and security, we help keep your operations moving.",
            },
          ].map((card) => (
            <div key={card.title} className="bg-card rounded-2xl border border-border/60 p-6 shadow-card hover:shadow-card-hover transition-shadow">
              <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-primary via-accent to-primary mb-5" />
              <h3 className="font-heading text-h5 text-foreground mb-3">{card.title}</h3>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStats;
