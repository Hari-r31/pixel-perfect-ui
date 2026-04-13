import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CtaSection from "@/components/sections/shared/CtaSection";
import { projects } from "@/data/projects";
import usePageTitle from "@/hooks/usePageTitle";
import AnnouncementBar from "@/components/sections/global/AnnouncementBar";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, prefersReducedMotion } from "@/lib/animations";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  usePageTitle(project.title);
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <div className="min-h-screen bg-background">
            <AnnouncementBar />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <motion.div
          className="section-container relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
              },
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-body-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Projects
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.15,
                  },
                },
              }}
            >
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
              <motion.h1
                className="font-heading text-h1 lg:text-display leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {project.title}
              </motion.h1>
              <motion.p
                className="text-body text-muted-foreground leading-relaxed mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                {project.overview}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <Link to="/contact" className="btn-dark">
                  <ArrowRight className="h-4 w-4" /> Start Your Project
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden border border-border shadow-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Key Outcomes */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="section-container">
          <motion.div
            className="text-center mb-12"
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
              Results
            </motion.div>
            <motion.h2
              className="font-heading text-h2 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Key{" "}
              <span className="relative inline-block">
                <span className="text-primary italic">Outcomes</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C30 3 70 2 100 5C130 8 170 10 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </motion.h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={shouldReduceMotion ? undefined : containerVariants}
          >
            {project.outcomes.map((outcome) => (
              <motion.div
                key={outcome.label}
                variants={shouldReduceMotion ? undefined : itemVariants}
                className="text-center rounded-2xl border border-border bg-card p-6"
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.p
                  className="font-heading text-h2 font-bold text-primary mb-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {outcome.value}
                </motion.p>
                <p className="text-body-sm text-muted-foreground">{outcome.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <motion.div
            className="text-center mb-12"
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
              Technologies
            </motion.div>
            <motion.h2
              className="font-heading text-h2 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Tech Stack Used
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={shouldReduceMotion ? undefined : containerVariants}
          >
            {project.techStack.map((tech) => (
              <motion.div
                key={tech}
                variants={shouldReduceMotion ? undefined : itemVariants}
                className="rounded-xl border border-border bg-card px-6 py-3 text-body font-medium text-foreground shadow-sm"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="sub-heading-pill mb-6 inline-flex">Gallery</div>
            <h2 className="font-heading text-h2 leading-tight">Project Screenshots</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-border shadow-card">
                <img src={src} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-auto object-cover aspect-[16/10]" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </s