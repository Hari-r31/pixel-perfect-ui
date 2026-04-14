import { ArrowRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import phoneMockup from "@/assets/phone-mockup.png";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const cardTranslate = useTransform(scrollYProgress, [0, 1], [400, -200]);

  const creditCards = [
    {
      id: 1,
      name: "Physical Card",
      number: "5234 8765 4321 9876",
      color: "from-purple-600 to-purple-700",
      icon: "💳",
    },
    {
      id: 2,
      name: "Virtual Card",
      number: "5234 5678 9012 3456",
      color: "from-orange-500 to-orange-600",
      icon: "📱",
    },
    {
      id: 3,
      name: "Business Card",
      number: "5234 1234 5678 9012",
      color: "from-slate-800 to-slate-900",
      icon: "🏢",
    },
  ];

  const mobileCardMotion = {
    initial: { opacity: 0, y: 28, scale: 0.94 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.45 },
    transition: { duration: 0.55, ease: "easeOut" as const },
  };

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden">
      {/* Orange gradient blob - bottom right */}
      <div
        className="absolute -bottom-20 right-0 w-[700px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 70%, hsl(20 90% 55% / 0.18) 0%, hsl(25 90% 60% / 0.08) 35%, transparent 65%)",
        }}
      />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-16 py-10 lg:py-16">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12">
          {/* Left - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-start pt-8 sm:pt-10 lg:pt-0 z-10">
            {/* Floating Stats Card */}
            <motion.div
              className="absolute top-0 left-[6%] sm:left-[20%] lg:left-[35%] z-10 bg-card rounded-2xl shadow-lg border border-border/30 px-3.5 sm:px-5 py-3.5 sm:py-4 flex items-center gap-3 sm:gap-4 max-w-[220px] sm:max-w-none"
              {...mobileCardMotion}
            >
              <div>
                <p className="text-lg sm:text-xl font-bold text-accent">15.52%</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-snug">
                  Your Account Reports
                </p>
              </div>
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0"
                style={{ backgroundColor: "hsl(40 80% 70%)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* "Expands As You Succeed" pill */}
            <motion.div
              className="absolute top-20 sm:top-24 right-[4%] sm:right-[8%] lg:right-[-5%] z-10"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-block px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground">
                Expands As You Succeed
              </span>
            </motion.div>

            {/* Phone Image Container with Slant */}
            <motion.div
              className="relative w-[320px] sm:w-[400px] lg:w-[480px] xl:w-[540px]"
              initial={{ opacity: 0, y: 40, rotate: 8 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Phone Image */}
              <motion.img
                src={phoneMockup}
                alt="Banking app on iPhone showing card management interface"
                className="w-full relative z-10 drop-shadow-2xl"
                width={800}
                height={1200}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              />

              {/* Credit Cards ON TOP - Outside Container */}
              <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none overflow-visible">
                <motion.div
                  className="relative w-full h-full flex items-center justify-center"
                  style={{ x: cardTranslate }}
                >
                  {creditCards.map((card, index) => (
                    <motion.div
                      key={card.id}
                      className={`absolute flex-shrink-0 w-48 h-28 rounded-xl bg-gradient-to-br ${card.color} p-4 text-white shadow-2xl flex flex-col justify-between`}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.25,
                        ease: "easeOut",
                      }}
                      style={{
                        left: `${index * 220}px`,
                        zIndex: 30 + index,
                      }}
                    >
                      {/* Card Top */}
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-[10px] font-semibold opacity-80 tracking-wider">
                            {card.name}
                          </p>
                        </div>
                        <span className="text-lg">{card.icon}</span>
                      </div>

                      {/* Card Bottom */}
                      <div className="space-y-1.5">
                        <div>
                          <p className="text-[9px] opacity-70 mb-0.5">Card Number</p>
                          <p className="font-mono text-[9px] tracking-widest">
                            {card.number.substring(0, 14)}
                          </p>
                        </div>
                        <div className="flex justify-between items-end pt-1.5 border-t border-white/20">
                          <div>
                            <p className="text-[8px] opacity-70 mb-0.5">Card Holder</p>
                            <p className="text-[9px] font-semibold">John Doe</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[8px] opacity-70 mb-0.5">Expires</p>
                            <p className="text-[9px] font-semibold">12/25</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

            </motion.div>

            {/* AVG Order Value floating card - bottom left */}
            <motion.div
              className="absolute bottom-12 sm:bottom-16 left-[2%] sm:left-0 lg:-left-4 z-10 bg-card rounded-2xl shadow-lg border border-border/30 px-3.5 sm:px-5 py-3.5 sm:py-4 flex items-center gap-3 max-w-[240px] sm:max-w-none"
              initial={{ opacity: 0, y: 30, x: -18, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            >
              <div>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">AVG Order Value</p>
                <p className="text-accent text-xs sm:text-sm font-semibold">↑ 3.48</p>
                <p className="text-lg sm:text-xl font-bold text-foreground mt-1">$21,450</p>
              </div>
              <svg width="72" height="40" viewBox="0 0 80 40" fill="none" className="opacity-60 shrink-0">
                <path d="M0 30 Q10 25 15 28 T30 20 T45 22 T55 15 T65 18 T80 10" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
                <path d="M0 30 Q10 25 15 28 T30 20 T45 22 T55 15 T65 18 T80 10 V40 H0 Z" fill="hsl(var(--primary) / 0.08)" />
              </svg>
            </motion.div>
          </div>

          {/* Right - Content */}
          <div className="relative z-20 flex flex-col items-start gap-5 pb-8 lg:pb-16 lg:col-span-1">
            {/* Heading */}
            <motion.h1
              className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold leading-[1.12] text-foreground tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Fueling The Next Wave Of Innovation Through{" "}
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
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-muted-foreground text-base max-w-[520px] leading-[1.7]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Lorem ipsum dolor sit amet consectetur. Mus in rutrum ornare quam. Sed sed tempus mauris ultricies dignissim ultrices eget dui facilisles nibh donec egesta.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-5 pt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <a
                href="#"
                className="flex items-center gap-3 pl-2 pr-8 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity active:scale-95"
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
