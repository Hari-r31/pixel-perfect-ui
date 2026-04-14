import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BusinessProgress from "@/components/sections/services/BusinessProgress";
import GrowthStats from "@/components/sections/services/GrowthStats";
import StrategySection from "@/components/sections/services/StrategySection";
import CtaSection from "@/components/sections/shared/CtaSection";
import { ArrowRight, Zap, Star, Shield, BarChart3, Cpu, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import heroWoman from "@/assets/service-hero-woman.png";
import { serviceCategories } from "@/data/serviceCategories";
import AnnouncementBar from "@/components/sections/global/AnnouncementBar";
import usePageTitle from "@/hooks/usePageTitle";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, prefersReducedMotion } from "@/lib/animations";
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from "@/components/ui/craft-button";
import HeroSection from "@/components/legacy/HeroSection";

const serviceCards = [
  {
    icon: Globe,
    title: "Web & App Development",
    description: "Custom-built websites, web applications, and mobile apps designed for performance, scalability, and seamless user experience.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Live KPI dashboards, custom reports, and data visualisation tools that help you make faster, smarter business decisions.",
    featured: true,
  },
  {
    icon: Cpu,
    title: "Custom CRM Systems",
    description: "Purpose-built CRM platforms that map your customer journey, automate sales pipelines, and unify your business data.",
  },
  {
    icon: Shield,
    title: "IT Security & Backup",
    description: "Multi-layered security, antivirus management, automated backups, and disaster recovery to keep your data safe.",
  },
  {
    icon: Star,
    title: "Digital Marketing",
    description: "SEO, SEM, CRO, social media, and content marketing strategies that grow your brand and generate qualified leads.",
  },
  {
    icon: Zap,
    title: "System Integration",
    description: "Connect your CRM, email platform, financial tools, and business apps into one automated, error-free workflow.",
  },
];

const ServicePage = () => {
  usePageTitle("Services");
  const shouldReduceMotion = prefersReducedMotion();
  return (
    <div className="min-h-screen bg-background">
            <AnnouncementBar />
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
                  Reliable IT
                  <br />
                  Built Around You
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
                    <p className="text-xl font-bold font-heading text-card-foreground">Perth WA</p>
                    <p className="text-body-sm text-muted-foreground">Local support, tailored delivery</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
                  <span className="rounded-full bg-muted px-2.5 py-1">Software</span>
                  <span className="rounded-full bg-muted px-2.5 py-1">Marketing</span>
                  <span className="rounded-full bg-muted px-2.5 py-1">IT Services</span>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div>
              <div className="sub-heading-pill mb-6 inline-flex">Our Services</div>

              <h1 className="font-heading text-h1 lg:text-display leading-tight mb-6">
                Technology Services That{" "}
                <span className="relative inline-block">
                  <span className="text-primary italic">Deliver</span>
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
                From custom software and managed IT to data-driven digital marketing — TechGigz provides the complete technology stack your business needs to scale with confidence.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <CraftButton>
                  <CraftButtonLabel>Get a Free Quote</CraftButtonLabel>
                  <CraftButtonIcon>
                    <ArrowRight className="size-4 stroke-2 transition-transform duration-500 group-hover:rotate-45" />
                  </CraftButtonIcon>
                </CraftButton>
                <p className="text-body-sm font-semibold text-foreground">
                  Call Us: (08) 6383 9983
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <motion.div
            className="sub-heading-pill mb-6 inline-flex"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Exprience
          </motion.div>

          <motion.h2
            className="font-heading text-h2 lg:text-h1 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Core Services —{" "}
            <span className="relative inline-block">
              <span className="text-primary italic">Purpose-Built</span>
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
            </span>{" "}
            For Growth
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-2xl text-body text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you need a custom application, a managed IT partner, or a digital marketing team — TechGigz brings the expertise and dedication to make it happen.
          </motion.p>

          <motion.div
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={shouldReduceMotion ? undefined : containerVariants}
          >
            {serviceCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  variants={shouldReduceMotion ? undefined : itemVariants}
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

                  <HeroSection />

      {/* Service Categories */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0,
                },
              },
            }}
          >
            <motion.div
              className="sub-heading-pill mb-6 inline-flex"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              All Services
            </motion.div>
            <motion.h2
              className="font-heading text-h2 lg:text-h1 leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Explore By{" "}
              <span className="relative inline-block">
                <span className="text-primary italic">Service Area</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C30 3 70 2 100 5C130 8 170 10 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </motion.h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={shouldReduceMotion ? undefined : containerVariants}
          >
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.slug}
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Link
                    to={`/services/${cat.slug}`}
                    className="group rounded-2xl border border-border bg-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-left block h-full"
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Business Progress */}
      <BusinessProgress />

      {/* Growth & Stats */}
      <GrowthStats />

      {/* Strategy */}
      <StrategySection />

      {/* CTA Section */}
      <CtaSection />

      <Footer />
    </div>
  );
};

export default ServicePage;
