import { TrendingUp, Users, BarChart3, PieChart } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="relative pb-16 lg:pb-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Device frame */}
        <div className="bg-card rounded-2xl lg:rounded-3xl shadow-2xl shadow-foreground/10 border border-border/60 overflow-hidden">
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-muted/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-8">
              <div className="bg-muted rounded-md h-6 max-w-xs mx-auto" />
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-4 lg:p-6 bg-card">
            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              {["Business Revenue", "Monthly Growth", "Branding"].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                    i === 0
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* AVG Order Value */}
              <div className="bg-muted/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp size={16} className="text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">AVG Order Value</span>
                </div>
                <p className="text-2xl font-bold text-foreground">$21,450</p>
                <span className="text-xs text-green-500 font-medium">+12.5%</span>
              </div>

              {/* Growth stat */}
              <div className="bg-muted/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-teknify-purple/10 rounded-lg flex items-center justify-center">
                    <BarChart3 size={16} className="text-teknify-purple" />
                  </div>
                  <span className="text-xs text-muted-foreground">Growth Rate</span>
                </div>
                <p className="text-2xl font-bold text-foreground">20.59%</p>
                <span className="text-xs text-green-500 font-medium">+3.2%</span>
              </div>

              {/* Accuracy */}
              <div className="bg-muted/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <PieChart size={16} className="text-green-500" />
                  </div>
                  <span className="text-xs text-muted-foreground">Accurate Prediction</span>
                </div>
                <p className="text-2xl font-bold text-foreground">99%</p>
                <span className="text-xs text-green-500 font-medium">Verified</span>
              </div>

              {/* Team */}
              <div className="bg-muted/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Users size={16} className="text-blue-500" />
                  </div>
                  <span className="text-xs text-muted-foreground">Team Members</span>
                </div>
                <p className="text-2xl font-bold text-foreground">48</p>
                <span className="text-xs text-muted-foreground">Active</span>
              </div>
            </div>

            {/* Chart area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Line chart */}
              <div className="lg:col-span-2 bg-muted/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-foreground">Revenue Overview</h4>
                  <div className="flex gap-3">
                    {[
                      { label: "Hotline", color: "bg-primary" },
                      { label: "Balance", color: "bg-teknify-purple" },
                      { label: "Total", color: "bg-green-500" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                        <span className="text-xs text-muted-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Simplified chart */}
                <div className="h-32 flex items-end gap-1">
                  {[40, 65, 45, 70, 55, 80, 60, 75, 50, 85, 70, 90].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col gap-0.5">
                      <div
                        className="bg-primary/20 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Donut chart area */}
              <div className="bg-muted/30 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-foreground mb-4">Project Management</h4>
                <div className="flex items-center justify-center mb-3">
                  <div className="relative w-28 h-28">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle
                        cx="18" cy="18" r="15.9"
                        fill="none"
                        stroke="hsl(var(--muted))"
                        strokeWidth="3"
                      />
                      <circle
                        cx="18" cy="18" r="15.9"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="3"
                        strokeDasharray="92, 100"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-foreground">92%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Completed</span>
                    <span className="font-medium text-foreground">92%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">In Progress</span>
                    <span className="font-medium text-foreground">8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
