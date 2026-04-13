import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Database, Globe, Layers, Lightbulb, BarChart3, HardDrive } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/common/AnimatedCard";
import { containerVariants, itemVariants } from "@/lib/animations";

const services = [
  { icon: Globe, title: "Software Development", description: "Custom web and mobile applications built from the ground up to solve your unique business challenges and scale with your growth.", slug: "web-development" },
  { icon: Cpu, title: "Digital Marketing", description: "SEO, SEM, content strategy, and social media campaigns that drive traffic, engagement, and conversions for your brand.", slug: "digital-marketing" },
  { icon: Lightbulb, title: "IT Consulting", description: "Strategic IT planning and technology roadmaps that align your infrastructure, tools, and processes with business goals.", slug: "it-consulting" },
  { icon: HardDrive, title: "IT Support & Hardware", description: "Managed IT support, hardware provisioning, cloud infrastructure, security, and Microsoft 365 administration.", slug: "it-support" },
  { icon: BarChart3, title: "Data & Analytics", description: "Data collection, analysis, business intelligence, and reporting systems that turn raw data into actionable insights.", slug: "data-analytics" },
  { icon: Layers, title: "System Integration", description: "Seamlessly connect your CRM, ERP, marketing tools, and business systems into one unified, automated workflow.", slug: "system-integration" },
];

const Services = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            End-to-End Technology Services For Your Business
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From custom software to managed IT and digital marketing — TechGigz delivers the full spectrum of technology solutions your business needs to thrive.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-card rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <motion.div
                  className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
