import { Link } from "react-router-dom";
import { Activity, TrendingUp, BarChart3, ArrowRight } from "lucide-react";

const Analytics = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Data & Analytics</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6 leading-tight">
              Turn Your Business Data Into Actionable Insights
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We help you harness live KPI data, visualise trends, and generate easy-to-read reports that guide smarter decisions across every department.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-muted/50 rounded-xl p-4">
                <Activity size={20} className="text-primary mb-2" />
                <p className="text-2xl font-bold text-foreground">99.5%</p>
                <p className="text-xs text-muted-foreground">Data Accuracy</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <TrendingUp size={20} className="text-teknify-purple mb-2" />
                <p className="text-2xl font-bold text-foreground">-80%</p>
                <p className="text-xs text-muted-foreground">Manual Reporting</p>
              </div>
            </div>

            <Link
              to="/services/data-analytics"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors"
            >
              Explore Analytics Services <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right visual */}
          <div className="bg-card rounded-2xl border border-border/60 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-sm font-semibold text-foreground">Performance Metrics</h4>
              <BarChart3 size={18} className="text-muted-foreground" />
            </div>
            <div className="space-y-4">
              {[
                { label: "SEO Ranking Improvement", value: 87, color: "bg-primary" },
                { label: "Lead Conversion Rate", value: 64, color: "bg-teknify-purple" },
                { label: "Client Satisfaction", value: 96, color: "bg-green-500" },
                { label: "System Uptime", value: 99, color: "bg-blue-500" },
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
