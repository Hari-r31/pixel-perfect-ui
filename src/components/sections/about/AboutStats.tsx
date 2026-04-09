const stats = [
  { value: "35+", label: "Years In Business" },
  { value: "26", label: "Awards Received" },
  { value: "3K", label: "Projects Completed" },
  { value: "98%", label: "Customer Satisfaction" },
];

const AboutStats = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block border border-foreground/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground mb-4">
              Company History
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
              We Have More Than 35+ Years Tech Experience
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sit et aliquet faucibus eros. Donec dignissim tempus consectetur aliquet tellus facilisis. Sit consectetur euismod laoreet dictum nisl egeti.
            </p>
          </div>

          {/* Right stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-background rounded-2xl p-6 text-center shadow-sm border border-border/50"
              >
                <p className="text-3xl lg:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
