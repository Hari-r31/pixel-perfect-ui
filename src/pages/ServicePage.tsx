import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BusinessProgress from "@/components/sections/BusinessProgress";
import GrowthStats from "@/components/sections/GrowthStats";
import StrategySection from "@/components/sections/StrategySection";
import Testimonials from "@/components/sections/Testimonials";
import CtaSection from "@/components/sections/CtaSection";
import { ArrowRight, Zap, Star, Shield, BarChart3, Cpu, Globe } from "lucide-react";
import heroWoman from "@/assets/service-hero-woman.png";

const serviceCards = [
  {
    icon: Star,
    title: "Data Intelligence",
    description: "Lorem ipsum dolor sit amet consectetur. Nisl eu id hendrerit nunc nibh. Commodo turpis non magna pharetra.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Lorem ipsum dolor sit amet consectetur. Nisl eu id hendrerit nunc nibh. Commodo turpis non magna pharetra.",
    featured: true,
  },
  {
    icon: Cpu,
    title: "AI Efficiency",
    description: "Lorem ipsum dolor sit amet consectetur. Nisl eu id hendrerit nunc nibh. Commodo turpis non magna pharetra.",
  },
  {
    icon: Shield,
    title: "Digital Ecosystem",
    description: "Lorem ipsum dolor sit amet consectetur. Nisl eu id hendrerit nunc nibh. Commodo turpis non magna pharetra.",
  },
  {
    icon: Globe,
    title: "Tech Leadership",
    description: "Lorem ipsum dolor sit amet consectetur. Nisl eu id hendrerit nunc nibh. Commodo turpis non magna pharetra.",
  },
  {
    icon: Zap,
    title: "Virtual Reality",
    description: "Lorem ipsum dolor sit amet consectetur. Nisl eu id hendrerit nunc nibh. Commodo turpis non magna pharetra.",
  },
];

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
];

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-[1280px] px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Left - Image */}
          <div className="relative flex justify-center">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hero-purple/40 md:h-[500px] md:w-[500px]" />
            <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-muted md:h-[540px] md:w-[540px]" />

            <div className="absolute -top-2 left-1/2 -translate-x-1/4 md:left-[55%]">
              <p className="font-handwritten text-xl leading-snug text-foreground md:text-2xl" style={{ transform: "rotate(-8deg)" }}>
                Goal-Oriented<br />
                Solutions With Innovation
              </p>
              <svg width="60" height="50" viewBox="0 0 60 50" fill="none" className="ml-4 mt-1">
                <path d="M30 0 C25 20, 15 35, 20 48 M20 48 L14 40 M20 48 L28 42" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>

            <img
              src={heroWoman}
              alt="Woman pointing up"
              className="relative z-10 h-[400px] w-auto object-contain md:h-[520px]"
              width={640}
              height={800}
            />

            <div className="absolute bottom-4 right-0 z-20 rounded-2xl bg-card p-5 shadow-lg md:right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-card-foreground">85%</p>
                  <p className="text-sm text-muted-foreground">Team Activities</p>
                </div>
              </div>
              <div className="mt-3 flex -space-x-2">
                {avatars.map((src, i) => (
                  <img key={i} src={src} alt="" className="h-9 w-9 rounded-full border-2 border-card object-cover" loading="lazy" width={36} height={36} />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div>
            <span className="badge-outline">Our Services</span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-[56px] md:leading-[1.1]">
              Discover The Power Of Technology That{" "}
              <span className="text-accent-orange underline-orange">Delivers</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Commodo nulla mattis volutpat egestas euismod a velit ac. ornare feugiat enim feugiat urna odio. laculis et morbi enim nunc a.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button className="flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground/90">
                <ArrowRight className="h-4 w-4" />
                Get Started
              </button>
              <p className="text-sm font-semibold text-foreground">Support: (888)123 4567</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <span className="badge-outline">Our Exprience</span>

          <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
            Experience The Difference Of<br />
            <span className="text-accent-orange underline-orange">Technology</span>-Driven Success
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur. Ut montes suscipit pellentesque augue amet ullamcorper viverra nulla. In lectus viverra.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className={`group rounded-2xl p-8 text-left transition-all hover:shadow-lg ${
                    card.featured
                      ? "border-2 border-accent bg-card shadow-md"
                      : "border border-border bg-card"
                  }`}
                >
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${card.featured ? "bg-accent/10" : "bg-hero-purple-light"}`}>
                    <Icon className={`h-6 w-6 ${card.featured ? "text-accent" : "text-hero-purple"}`} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-card-foreground">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                  <button className="mt-5 flex items-center gap-1 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Progress */}
      <BusinessProgress />

      {/* Growth & Stats */}
      <GrowthStats />

      {/* Strategy */}
      <StrategySection />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CtaSection />

      <Footer />
    </div>
  );
};

export default ServicePage;
