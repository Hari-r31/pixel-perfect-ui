const items = [
  {
    title: "Our Mission & Vision",
    description: "Lorem ipsum dolor sit amet consectetur. Vitae non vitae quam enim id enim venenatis cras blandit libero vitae et nisl ornare.",
  },
  {
    title: "Digital Advisors",
    description: "Lorem ipsum dolor sit amet consectetur. Vitae non vitae quam enim id enim venenatis cras blandit libero vitae et nisl ornare.",
  },
  {
    title: "Strategic Insights",
    description: "Lorem ipsum dolor sit amet consectetur. Vitae non vitae quam enim id enim venenatis cras blandit libero vitae et nisl ornare.",
  },
];

const AboutMissionVision = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-8">
            {items.slice(0, 2).map((item) => (
              <div key={item.title} className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h3 className="font-heading font-semibold text-h5 text-foreground mb-2">{item.title}</h3>
                <p className="text-body-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {items.slice(2).map((item) => (
              <div key={item.title} className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h3 className="font-heading font-semibold text-h5 text-foreground mb-2">{item.title}</h3>
                <p className="text-body-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
