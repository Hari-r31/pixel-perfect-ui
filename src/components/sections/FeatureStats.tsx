import { TrendingUp, Target, BarChart3 } from "lucide-react";

const FeatureStats = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Driving Progress With Smart Technology
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We deliver innovative solutions that empower businesses to achieve more with less effort.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Revenue card */}
          <div className="bg-card rounded-2xl border border-border/60 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp size={22} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Revenue Growth</h3>
            <p className="text-sm text-muted-foreground mb-4">Track and optimize your revenue streams with real-time analytics.</p>
            <div className="flex items-end gap-1 h-16">
              {[30, 45, 35, 55, 40, 65, 50, 72, 58, 80].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary/20 rounded-t hover:bg-primary/40 transition-colors"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Circular progress card */}
          <div className="bg-card rounded-2xl border border-border/60 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teknify-purple/10 rounded-xl flex items-center justify-center mb-4">
              <Target size={22} className="text-teknify-purple" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Goal Completion</h3>
            <p className="text-sm text-muted-foreground mb-4">Monitor your progress towards achieving milestones.</p>
            <div className="flex items-center justify-center">
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--muted))" strokeWidth="2.5" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeDasharray="78, 100" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">78%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bar chart card */}
          <div className="bg-card rounded-2xl border border-border/60 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 size={22} className="text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Overview</h3>
            <p className="text-sm text-muted-foreground mb-4">Comprehensive data insights for informed decision-making.</p>
            <div className="flex items-end gap-2 h-16">
              {[60, 40, 75, 50, 85, 65].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-green-500/20 rounded-t"
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureStats;
