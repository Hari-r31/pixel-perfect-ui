const stats = [
  { value: "35+", label: "Years In Business" },
  { value: "26", label: "Awards Received" },
  { value: "3K", label: "Projects Completed" },
  { value: "98%", label: "Customer Satisfaction" },
];

const AboutStats = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="sub-heading-pill mb-5 inline-flex">Company History</div>
            <h2 className="font-heading text-h2 lg:text-h1 text-foreground mb-4 leading-tight">
              We Have More Than 35+ Years Tech Experience
            </h2>
            <p className="text-muted-foreground text-body leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sit et aliquet faucibus eros. Donec dignissim tempus consectetur aliquet tellus facilisis.
            </p>
          </div>

          {/* Right stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-2xl p-6 shadow-card text-center">
                <p className="font-heading font-bold text-h2 text-primary mb-2">{stat.value}</p>
                <p className="text-body-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
