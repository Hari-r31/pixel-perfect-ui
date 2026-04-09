import { ArrowRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative pt-20 pb-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-teknify-peach/30 via-teknify-peach/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 text-center">
        {/* Badge */}
        <span className="inline-block border border-foreground/20 rounded-full px-5 py-2 text-sm font-medium text-foreground mb-6">
          About Us
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-4xl mx-auto mb-6">
          Achieving Business Goals Through Smart{" "}
          <span className="text-primary italic">Tech Solutions</span>
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Purus id accumsan et eget. Commodo odio
          lorem a aliquet vitae dolor risus vel fusce vitae et natoque amet necsit.
        </p>

        {/* Decorative text */}
        <div className="absolute right-8 lg:right-20 top-1/3 hidden lg:block">
          <p className="text-sm font-medium text-foreground/80 italic rotate-[-15deg] leading-snug">
            Unlock Growth<br />
            With Smart Thinking
          </p>
          <svg className="w-8 h-12 mt-1 ml-8" viewBox="0 0 30 50" fill="none">
            <path d="M15 0 C15 30, 25 35, 25 45" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M20 40 L25 47 L28 38" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Image composition */}
        <div className="relative max-w-5xl mx-auto mt-4">
          {/* Left floating card - Real Time Users */}
          <div className="absolute -left-4 lg:-left-12 top-8 bg-background rounded-2xl shadow-lg p-5 z-10 w-56 hidden md:block">
            <p className="text-sm font-semibold text-foreground mb-1">Real Time Users</p>
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-2xl font-bold text-foreground">3.569+</span>
              <span className="text-sm font-semibold text-green-500">+30%</span>
            </div>
            {/* Mini chart */}
            <svg viewBox="0 0 200 60" className="w-full h-12">
              <path
                d="M0 45 Q25 30 50 35 T100 20 T150 30 T200 15"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                opacity="0.3"
              />
              <path
                d="M0 40 Q25 20 50 28 T100 15 T150 25 T200 10"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2.5"
              />
            </svg>
          </div>

          {/* Center image placeholder */}
          <div className="mx-auto w-full max-w-lg lg:max-w-2xl aspect-[4/3] rounded-2xl bg-gradient-to-br from-foreground/80 to-foreground overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-background/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-background/40" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-background/30 text-sm">Team collaboration</p>
              </div>
            </div>
            {/* Floating icons on left */}
            <div className="absolute left-3 top-1/3 flex flex-col gap-3">
              {[
                <svg key="1" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                <svg key="2" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>,
                <svg key="3" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
              ].map((icon, i) => (
                <div key={i} className="w-9 h-9 rounded-lg bg-background/10 backdrop-blur-sm flex items-center justify-center text-background/60">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Right floating card - John Anderson */}
          <div className="absolute -right-2 lg:-right-8 top-4 bg-background rounded-full shadow-lg px-5 py-3 flex items-center gap-3 z-10 hidden md:flex">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">JA</div>
            <span className="text-sm font-semibold text-foreground">John Anderson</span>
            <span className="text-sm text-muted-foreground">26,058+</span>
            <ArrowRight size={16} className="text-muted-foreground" />
          </div>

          {/* Right floating card - Project Management */}
          <div className="absolute -right-2 lg:-right-8 top-28 bg-background rounded-2xl shadow-lg p-5 z-10 w-56 hidden md:block">
            <p className="text-sm font-semibold text-foreground mb-3">Project Management</p>
            {/* Donut chart */}
            <div className="relative w-32 h-32 mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="12" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#7C3AED" strokeWidth="12" strokeDasharray="184 67" strokeLinecap="round" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="12" strokeDasharray="0 184 42 25" strokeLinecap="round" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#1A1A2E" strokeWidth="12" strokeDasharray="0 226 25 0" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-foreground">92%</span>
              </div>
            </div>
          </div>

          {/* Bottom left floating card - Easy Project Management */}
          <div className="absolute -left-4 lg:-left-12 bottom-0 bg-foreground rounded-2xl shadow-lg p-5 z-10 w-60 hidden md:block">
            <p className="text-sm font-semibold text-background mb-4">
              Easy Project Management<br />That Helps You Win
            </p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-background/60 mb-1">
                  <span>Engineering</span>
                  <span>89%</span>
                </div>
                <div className="h-2 bg-background/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "89%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-background/60 mb-1">
                  <span>Business</span>
                  <span>78%</span>
                </div>
                <div className="h-2 bg-background/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "78%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom right card - Business Growth */}
          <div className="absolute -right-2 lg:-right-8 bottom-0 bg-background rounded-2xl shadow-lg p-5 z-10 w-52 hidden md:block">
            <p className="text-sm font-semibold text-foreground mb-3">Business Growth</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground w-12">Finance</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "75%" }} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground w-12">Sales</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "60%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
