import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { prefersReducedMotion } from "@/lib/animations";

const BottomCTA = () => {
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          className="bg-foreground rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <motion.div
              className="p-8 lg:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-background mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Partner With TechGigz To Grow Smarter
              </motion.h2>
              <motion.p
                className="text-background/60 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Join businesses across Australia that trust TechGigz for custom software, digital marketing, and managed IT services that deliver real outcomes.
              </motion.p>

              {/* Avatars */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-foreground flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: ["hsl(var(--primary))", "hsl(var(--accent))", "#22c55e", "#3b82f6"][i],
                        color: "white",
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                    >
                      {["J", "A", "S", "M"][i]}
                    </motion.div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-background">200+ Clients Served</p>
                  <p className="text-xs text-background/50">Trusted across Australia</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get Started Now <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right stat card */}
            <motion.div
              className="p-8 lg:p-12 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="bg-background/5 backdrop-blur border border-background/10 rounded-2xl p-6 w-full max-w-xs"
                whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.p
                  className="text-xs text-background/50 mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Total Revenue
                </motion.p>
                <motion.p
                  className="text-3xl font-bold text-background mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                >
                  $2,564.00
                </motion.p>
                <motion.div
                  className="flex items-end gap-1 h-20"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.4,
                      },
                    },
                  }}
                >
                  {[35, 55, 40, 70, 50, 80, 60, 75, 85, 65, 90, 72].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-primary/40 rounded-t"
                      style={{ height: `${h}%` }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    />
                  ))}
                </motion.div>
                <motion.div
                  className="mt-3 flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.65 }}
                >
                  <span className="text-xs text-green-400 font-medium">+18.2%</span>
                  <span className="text-xs text-background/40">vs last month</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomCTA;
