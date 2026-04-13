import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BusinessProgress from "@/components/sections/BusinessProgress";
import GrowthStats from "@/components/sections/GrowthStats";
import StrategySection from "@/components/sections/StrategySection";
import Testimonials from "@/components/sections/Testimonials";
import CtaSection from "@/components/sections/CtaSection";
import { ArrowRight, Zap, Star, Shield, BarChart3, Cpu, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import heroWoman from "@/assets/service-hero-woman.png";
import { serviceCategories } from "@/data/serviceCategories";

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
      <section className="relative overflow-hidden">
        {/* Subtle purple gradient on right */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teknify-purple/5 to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-[1280px] px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            {/* Left - Image with arch */}
            <div className="relative flex justify-center lg:justify-start">
              {/* Gray arch border (outer) */}
              <div
                className="absolute left-1/2 lg:left-[45%] -translate-x-1/2 bottom-0 w-[340px] h-[460px] md:w-[400px] md:h-[540px] rounded-t-[200px] border-2 border-border"
              />

              {/* Purple gradient arch (inner) */}
              <div
                className="absolute left-1/2 lg:left-[45%] -translate-x-1/2 bottom-0 w-[310px] h-[440px] md:w-[370px] md:h-[520px] rounded-t-[185px] overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, hsl(263 83% 65%) 0%, hsl(263 83% 58%) 30%, hsl(340 70% 60%) 70%, hsl(16 78% 54%) 100%)",
                }}
              />

              {/* Handwritten text */}
              <div className="absolute -top-2 left-[52%] lg:left-[48%] z-20">
                <p
                  className="font-handwritten text-lg leading-snug text-foreground md:text-xl"
                  style={{ transform: "rotate(-8deg)" }}
                >
                  Goal-Oriented
                  <br />
                  Solutions With Innovation
                </p>
                <svg
                  width="50"
                  height="45"
                  viewBox="0 0 60 50"
                  fill="none"
                  className="ml-2 mt-0.5"
                >
                  <path
                    d="M30 0 C25 20, 15 35, 20 48 M20 48 L14 40 M20 48 L28 42"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Hero image */}
              <img
                src={heroWoman}
                alt="Woman pointing up"
                className="relative z-10 h-[380px] w-auto object-contain md:h-[500px]"
                width={640}
                height={800}
              />

              {/* Floating card */}
              <div className="absolute bottom-6 right-4 z-20 rounded-2xl bg-card p-5 shadow-card md:right-0 lg:-right-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/20">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold font-heading text-card-foreground">85%</p>
                    <p className="text-body-sm text-muted-foreground">Team Activities</p>
                  </div>
                </div>
                <div className="mt-3 flex -space-x-2">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-card object-cover"
                      loading="lazy"
                      width={36}
                      height={36}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div>
              <div className="sub-heading-pill mb-6 inline-flex">Our Services</div>

              <h1 className="font-heading text-h1 lg:text-display leading-tight mb-6">
                Discover The Power Of Technology That{" "}
                <span className="relative inline-block">
                  <span className="text-primary italic">Delivers</span>
                  {/* Orange underline decoration */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8C30 3 70 2 100 5C130 8 170 10 198 6"
                      stroke="hsl(var(--primary))"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-body text-muted-foreground mb-8 max-w-md leading-relaxed">
                Commodo nulla mattis volutpat egestas euismod a velit ac. ornare
                feugiat enim feugiat urna odio. laculis et morbi enim nunc a.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <button className="btn-dark">
                  <ArrowRight className="h-4 w-4" />
                  Get Started
                </button>
                <p className="text-body-sm font-semibold text-foreground">
                  Support: (888)123 4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <div className="sub-heading-pill mb-6 inline-flex">Our Exprience</div>

          <h2 className="font-heading text-h2 lg:text-h1 leading-tight mb-6">
            Experience The Difference Of
            <br />
            <span className="relative inline-block">
              <span className="text-primary italic">Technology</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C30 3 70 2 100 5C130 8 170 10 198 6"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            -Driven Success
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-body text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur. Ut montes suscipit
            pellentesque augue amet ullamcorper viverra nulla. In lectus viverra.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className={`group rounded-2xl p-8 text-left transition-all hover:shadow-card-hover ${
                    card.featured
                      ? "border-2 border-accent bg-card shadow-card"
                      : "border border-border bg-card"
                  }`}
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${
                      card.featured ? "bg-accent/10" : "bg-muted"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        card.featured ? "text-accent" : "text-accent"
                      }`}
                    />
                  </div>
                  <h3 className="mb-2 font-heading text-h5 font-bold text-card-foreground">
                    {card.title}
                  </h3>
                  <p className="text-body-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <button className="mt-5 flex items-center gap-1 text-body-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="sub-heading-pill mb-6 inline-flex">Explore</div>
            <h2 className="font-heading text-h2 lg:text-h1 leading-tight mb-4">
              Browse By{" "}
              <span className="relative inline-block">
                <span className="text-primary italic">Category</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C30 3 70 2 100 5C130 8 170 10 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.slug}
                  to={`/services/${cat.slug}`}
                  className="group rounded-2xl border border-border bg-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-left"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary transition-colors">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading text-body font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                    {cat.shortTitle}
                  </h3>
                  <p className="text-body-sm text-muted-foreground leading-relaxed line-clamp-2">{cat.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-body-sm font-semibold text-foreground group-hover:text-primary group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
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
