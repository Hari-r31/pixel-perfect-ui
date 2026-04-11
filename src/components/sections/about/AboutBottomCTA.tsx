import { ArrowRight } from "lucide-react";

const team = [
  { name: "Philips Williams", role: "Creative Agency", status: "Active", statusBg: "bg-green-500/20", statusText: "text-green-400" },
  { name: "Sara Miller", role: "Developer", status: "Pending", statusBg: "bg-primary/20", statusText: "text-primary" },
];

const AboutBottomCTA = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="bg-foreground rounded-3xl p-8 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <div className="inline-flex items-center border border-background/20 rounded-full px-4 py-1.5 text-caption font-medium text-background/60 mb-4">
                Get Started
              </div>
              <h2 className="font-heading text-h2 lg:text-h1 text-background mb-4 leading-tight">
                Start Your Journey With Our Platform Today
              </h2>
              <p className="text-background/50 text-body mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor.
              </p>
              <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-body-sm font-semibold hover:bg-primary/90 transition-colors">
                <ArrowRight size={16} /> Get Started For Free
              </a>
            </div>

            {/* Right - Team cards + Revenue */}
            <div className="space-y-4">
              {team.map((member) => (
                <div key={member.name} className="bg-card/5 border border-background/10 rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20" />
                      <div>
                        <p className="font-heading font-semibold text-body text-background">{member.name}</p>
                        <p className="text-caption text-background/50">{member.role}</p>
                      </div>
                    </div>
                    <span className={`text-caption font-medium ${member.statusBg} ${member.statusText} rounded-full px-3 py-1`}>
                      {member.status}
                    </span>
                  </div>
                </div>
              ))}

              {/* Revenue card */}
              <div className="bg-card/5 border border-background/10 rounded-2xl p-5">
                <p className="font-heading font-bold text-h3 text-background mb-1">$580.45.250</p>
                <p className="text-body-sm text-background/50 mb-3">Total Revenue</p>
                <div className="flex items-end gap-1 h-12">
                  {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/60 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <p className="text-caption text-primary mt-2">+18.2% vs last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBottomCTA;
