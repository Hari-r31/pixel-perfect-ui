import { ArrowRight } from "lucide-react";

const team = [
  { name: "Jayshal Nanaval", role: "Project Coordinator", status: "Available", statusBg: "bg-green-500/20", statusText: "text-green-400" },
  { name: "Rudhraksh V.", role: "Database Developer", status: "Active", statusBg: "bg-primary/20", statusText: "text-primary" },
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
                Let's Build Something Great Together
              </h2>
              <p className="text-background/50 text-body mb-8 leading-relaxed">
                Whether you need a new website, custom software, digital marketing, or day-to-day IT support, our team is ready to help you plan the next step.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-body-sm font-semibold hover:bg-primary/90 transition-colors">
                <ArrowRight size={16} /> Contact Us Today
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

              {/* Contact card */}
              <div className="bg-card/5 border border-background/10 rounded-2xl p-5">
                <p className="font-heading font-bold text-h5 text-background mb-1">Visit Or Call Our Team</p>
                <p className="text-body-sm text-background/50 mb-3">Suite 11b/5 Cressall Rd, Balcatta WA 6021</p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-caption text-primary-foreground">Software</span>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-caption text-primary-foreground">Marketing</span>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-caption text-primary-foreground">IT Support</span>
                </div>
                <p className="text-caption text-primary mt-3">(08) 6383 9983</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBottomCTA;
