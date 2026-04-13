import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CtaSection from "@/components/sections/CtaSection";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="section-container relative text-center">
          <div className="sub-heading-pill mb-6 inline-flex">Our Projects</div>
          <h1 className="font-heading text-h1 lg:text-display leading-tight mb-6 max-w-3xl mx-auto">
            Showcasing Our{" "}
            <span className="relative inline-block">
              <span className="text-primary italic">Best Work</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C30 3 70 2 100 5C130 8 170 10 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-body text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects spanning web development, mobile apps, digital marketing, and more.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 md:pb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
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
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
