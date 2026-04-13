const stats = [
  { value: "7+", label: "Years In Business" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Active Clients" },
  { value: "96%", label: "Customer Satisfaction" },
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
              Building Technology Solutions Since 2018
            </h2>
            <p className="text-muted-foreground text-body leading-relaxed">
              From our base in Bentley, WA, TechGigz has grown into a trusted technology partner for businesses across Australia — delivering software, IT, and digital marketing with expertise and care.
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
