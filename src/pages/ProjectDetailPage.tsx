import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CtaSection from "@/components/sections/shared/CtaSection";
import { projects } from "@/data/projects";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="section-container relative">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-body-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-heading text-h1 lg:text-display leading-tight mb-6">
                {project.title}
              </h1>
              <p className="text-body text-muted-foreground leading-relaxed mb-8 max-w-lg">
                {project.overview}
              </p>
              <Link to="/contact" className="btn-dark">
                <ArrowRight className="h-4 w-4" /> Start Your Project
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-card">
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="sub-heading-pill mb-6 inline-flex">Results</div>
            <h2 className="font-heading text-h2 leading-tight">
              Key{" "}
              <span className="relative inline-block">
                <span className="text-primary italic">Outcomes</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C30 3 70 2 100 5C130 8 170 10 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {project.outcomes.map((outcome) => (
              <div key={outcome.label} className="text-center rounded-2xl border border-border bg-card p-6">
                <p className="font-heading text-h2 font-bold text-primary mb-1">{outcome.value}</p>
                <p className="text-body-sm text-muted-foreground">{outcome.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="sub-heading-pill mb-6 inline-flex">Technologies</div>
            <h2 className="font-heading text-h2 leading-tight">Tech Stack Used</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {project.techStack.map((tech) => (
              <div key={tech} className="rounded-xl border border-border bg-card px-6 py-3 text-body font-medium text-foreground shadow-sm">
                {tech}
              </div>
            ))}
          </div>
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
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
