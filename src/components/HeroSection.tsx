import { ArrowRight, Play } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Orange gradient blob - bottom right */}
      <div
        className="absolute -bottom-20 right-0 w-[700px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 70%, hsl(20 90% 55% / 0.18) 0%, hsl(25 90% 60% / 0.08) 35%, transparent 65%)",
        }}
      />

      <div className="mx-auto max-w-[1280px] px-6 lg:px-16 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-8 lg:gap-12">
          {/* Left - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Floating Stats Card */}
            <div className="absolute -top-4 right-0 lg:right-[5%] z-10 bg-card rounded-2xl shadow-lg border border-border/30 px-5 py-4 flex items-center gap-4">
              <div>
                <p className="text-xl font-bold text-accent">15.52%</p>
                <p className="text-sm text-muted-foreground font-medium">
                  Your Account Reports
                </p>
              </div>
              <div
                className="w-14 h-14 rounded-full overflow-hidden"
                style={{ backgroundColor: "hsl(40 80% 70%)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* "Expands As You Succeed" pill positioned near top-right of phone area */}
            <div className="absolute top-8 right-0 lg:right-[-10%] z-10">
              <span className="inline-block px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground">
                Expands As You Succeed
              </span>
            </div>

            {/* Phone Image */}
            <img
              src={phoneMockup}
              alt="Banking app on iPhone showing card management interface"
              className="w-[340px] sm:w-[400px] lg:w-[480px] xl:w-[540px] relative z-0 drop-shadow-2xl"
              width={800}
              height={1200}
            />

            {/* AVG Order Value floating card - bottom left */}
            <div className="absolute bottom-16 left-0 lg:-left-4 z-10 bg-card rounded-2xl shadow-lg border border-border/30 px-5 py-4">
              <p className="text-sm font-medium text-muted-foreground">AVG Order Value</p>
              <p className="text-accent text-sm font-semibold">↑ 3.48</p>
              <p className="text-xl font-bold text-foreground mt-1">$21,450</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col items-start gap-5 pb-8 lg:pb-16">
            {/* Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold leading-[1.12] text-foreground tracking-tight">
              Innovation Through{" "}
              <span className="relative inline-block text-accent">
                Advanced
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8C20 4 50 2 100 5C150 8 175 5 198 7"
                    stroke="hsl(var(--accent))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{" "}
              Tech
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-base max-w-[520px] leading-[1.7]">
              Lorem ipsum dolor sit amet consectetur. Mus in rutrum ornare quam.
              Sed sed tempus mauris ultricies dignissim ultrices eget dui
              facilisiles nibh donec egesta.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-3">
              <a
                href="#"
                className="flex items-center gap-3 pl-2 pr-8 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <span className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
                Get Started Today
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-sm font-semibold text-foreground hover:text-accent transition-colors"
              >
                <span className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Play className="w-4 h-4 fill-foreground" />
                </span>
                Watch Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
