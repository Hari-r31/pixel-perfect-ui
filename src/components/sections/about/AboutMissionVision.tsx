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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-8">
            {items.slice(0, 2).map((item, i) => (
              <div key={item.title} className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-muted to-muted/50 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            {items.slice(2).map((item) => (
              <div key={item.title} className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
