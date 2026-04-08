import { ArrowRight } from "lucide-react";

const BottomCTA = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-foreground rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-background mb-4 leading-tight">
                Delivering Impact Through Smart Tools
              </h2>
              <p className="text-background/60 mb-8 leading-relaxed">
                Join thousands of businesses that trust our platform to drive growth and efficiency.
              </p>

              {/* Avatars */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-foreground flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: ["hsl(var(--primary))", "hsl(var(--accent))", "#22c55e", "#3b82f6"][i],
                        color: "white",
                      }}
                    >
                      {["J", "A", "S", "M"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-background">2,000+ Users</p>
                  <p className="text-xs text-background/50">Trusted worldwide</p>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Started Now <ArrowRight size={16} />
              </a>
            </div>

            {/* Right stat card */}
            <div className="p-8 lg:p-12 flex items-center justify-center">
              <div className="bg-background/5 backdrop-blur border border-background/10 rounded-2xl p-6 w-full max-w-xs">
                <p className="text-xs text-background/50 mb-1">Total Revenue</p>
                <p className="text-3xl font-bold text-background mb-4">$2,564.00</p>
                <div className="flex items-end gap-1 h-20">
                  {[35, 55, 40, 70, 50, 80, 60, 75, 85, 65, 90, 72].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/40 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-1">
                  <span className="text-xs text-green-400 font-medium">+18.2%</span>
                  <span className="text-xs text-background/40">vs last month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
