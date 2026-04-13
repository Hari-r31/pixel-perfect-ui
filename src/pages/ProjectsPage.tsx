import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CtaSection from "@/components/sections/shared/CtaSection";
import { projects } from "@/data/projects";
import AnnouncementBar from "@/components/sections/global/AnnouncementBar";
import usePageTitle from "@/hooks/usePageTitle";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, prefersReducedMotion } from "@/lib/animations";

const ProjectsPage = () => {
  usePageTitle("Projects");
  const shouldReduceMotion = prefersReducedMotion();
  return (
    <div className="min-h-screen bg-background">
                  <AnnouncementBar />
      <Header />


      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <motion.div
          className="section-container relative text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
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
            Our Projects
          </motion.div>
          <motion.h1
            className="font-heading text-h1 lg:text-display leading-tight mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Showcasing Our{" "}
            <span className="relative inline-block">
              <span className="text-primary italic">Best Work</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C30 3 70 2 100 5C130 8 170 10 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </motion.h1>
          <motion.p
            className="text-body text-muted-foreground max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our portfolio of successful projects spanning web development, mobile apps, digital marketing, and more.
          </motion.p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 md:pb-24">
        <div className="section-container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={shouldReduceMotion ? undefined : containerVariants}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={shouldReduceMotion ? undefined : itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 block h-full"
                >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-h5 font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-foreground group-hover:text-primary group-hover:gap-2.5 transition-all">
                    View Project <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
};

export default ProjectsPage;