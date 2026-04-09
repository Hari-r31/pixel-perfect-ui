import { ArrowRight } from "lucide-react";

const team = [
  { name: "Philips Williams", role: "Creative Agency", status: "Active", statusColor: "bg-green-100 text-green-700" },
  { name: "Sara Miller", role: "Developer", status: "Pending", statusColor: "bg-orange-100 text-orange-700" },
];

const AboutBottomCTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-foreground rounded-3xl p-8 lg:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <span className="inline-block border border-background/20 rounded-full px-4 py-1.5 text-xs font-medium text-background/60 mb-4">
                Get Started
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-background mb-4 leading-tight">
                Start Your Journey With Our Platform Today
              </h2>
              <p className="text-background/50 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Started For Free <ArrowRight size={16} />
              </a>
            </div>

            {/* Right - Team cards + Revenue */}
            <div className="space-y-4">
              {/* Team members */}
              <div className="bg-background/5 backdrop-blur-sm rounded-2xl p-4 space-y-3">
                {team.map((member) => (
                  <div key={member.name} className="flex items-center justify-between bg-background rounded-xl p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${member.statusColor}`}>
                      {member.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Revenue card */}
              <div className="bg-background rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-2xl font-bold text-foreground">$580.45.250</p>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
                </div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                {/* Mini chart */}
                <div className="flex items-end gap-1 mt-3 h-12">
                  {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 11 ? "hsl(var(--primary))" : "hsl(var(--muted))",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBottomCTA;
