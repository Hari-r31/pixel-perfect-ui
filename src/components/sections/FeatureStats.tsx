const FeatureStats = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="sub-heading-pill mb-4 inline-flex">Additional Services</div>
          <h2 className="font-heading text-h2 lg:text-h1 text-foreground mb-4">
            Driving Progress With <span className="text-primary">Smart</span> Technology
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Balance card */}
          <div className="bg-card rounded-2xl border border-border/60 p-6 shadow-card hover:shadow-card-hover transition-shadow">
            <p className="text-body-sm text-muted-foreground mb-1">Your Balance</p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-heading text-h2 font-bold text-foreground">2564,00</span>
              <span className="text-primary text-body-sm font-semibold">+152 ↑</span>
            </div>
            <div className="flex items-end gap-1 h-20">
              {[30, 50, 25, 45, 60, 35, 55, 70, 40, 65].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t ${i < 5 ? 'bg-primary/30' : 'bg-accent/30'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Donut chart card */}
          <div className="bg-accent/20 rounded-2xl p-6">
            <div className="bg-card rounded-xl p-5 shadow-card">
              <p className="text-body font-heading font-semibold text-foreground mb-4">Target Persent</p>
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--accent))" strokeWidth="3" strokeDasharray="82, 100" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading font-bold text-body text-foreground">82%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-sm bg-accent" />
                    <span className="text-body-sm text-foreground">Finance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-sm bg-primary" />
                    <span className="text-body-sm text-foreground">Market</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-sm bg-muted-foreground" />
                    <span className="text-body-sm text-foreground">Business</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics bar chart card */}
          <div className="bg-card rounded-2xl border border-border/60 p-6 shadow-card hover:shadow-card-hover transition-shadow">
            <p className="font-heading font-semibold text-body text-foreground mb-4">Analytics</p>
            <div className="space-y-1 text-caption text-muted-foreground mb-2">
              <div className="flex justify-between"><span>40K</span></div>
              <div className="flex justify-between"><span>30K</span></div>
              <div className="flex justify-between"><span>20K</span></div>
              <div className="flex justify-between"><span>10K</span></div>
            </div>
            <div className="flex items-end gap-1.5 h-24">
              {[50, 70, 40, 80, 60, 45, 75, 55, 65, 85].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t ${i % 3 === 0 ? 'bg-accent' : i % 3 === 1 ? 'bg-foreground/20' : 'bg-primary/20'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureStats;
