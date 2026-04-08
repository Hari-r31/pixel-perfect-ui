import { Activity, TrendingUp, BarChart3, ArrowRight } from "lucide-react";

const Analytics = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Analytics</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6 leading-tight">
              The Heartbeat Of Digital Transformation
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Smart tools for smarter decisions. Our analytics platform provides deep insights that drive meaningful business outcomes.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-muted/50 rounded-xl p-4">
                <Activity size={20} className="text-primary mb-2" />
                <p className="text-2xl font-bold text-foreground">98.5%</p>
                <p className="text-xs text-muted-foreground">Uptime</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <TrendingUp size={20} className="text-teknify-purple mb-2" />
                <p className="text-2xl font-bold text-foreground">3.2x</p>
                <p className="text-xs text-muted-foreground">ROI Average</p>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors"
            >
              View Analytics <ArrowRight size={16} />
            </a>
          </div>

          {/* Right visual */}
          <div className="bg-card rounded-2xl border border-border/60 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-sm font-semibold text-foreground">Performance Metrics</h4>
              <BarChart3 size={18} className="text-muted-foreground" />
            </div>
            <div className="space-y-4">
              {[
                { label: "User Engagement", value: 87, color: "bg-primary" },
                { label: "Conversion Rate", value: 64, color: "bg-teknify-purple" },
                { label: "Customer Satisfaction", value: 92, color: "bg-green-500" },
                { label: "System Performance", value: 78, color: "bg-blue-500" },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-muted-foreground">{metric.label}</span>
                    <span className="text-xs font-semibold text-foreground">{metric.value}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${metric.color} rounded-full`}
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
