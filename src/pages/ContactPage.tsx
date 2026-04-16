import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AnnouncementBar from "@/components/sections/global/AnnouncementBar";
import { ArrowRight, Send, Phone, MapPin, CheckCircle } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, prefersReducedMotion } from "@/lib/animations";
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from "@/components/ui/craft-button";
import { useState } from "react";

const ContactPage = () => {
  usePageTitle("Contact Us");
  const shouldReduceMotion = prefersReducedMotion();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "5f359fba-831d-4233-a384-12c2b93d5490");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("success");
        event.target.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult("error");
      }
    } catch (error) {
      setResult("error");
    }
    setLoading(false);
  };
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />

      {/* Contact Hero */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Side */}
            <motion.div
              className="pt-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={shouldReduceMotion ? undefined : containerVariants}
            >
              <motion.div
                className="sub-heading-pill mb-6 inline-flex"
                variants={shouldReduceMotion ? undefined : itemVariants}
              >
                Get In Touch
              </motion.div>

              <motion.h1
                className="font-heading text-h1 lg:text-display leading-tight mb-6"
                variants={shouldReduceMotion ? undefined : itemVariants}
              >
                <span className="relative inline-block">
                  <span className="text-primary">Contact</span>
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
                </span>{" "}
                Us Easily
              </motion.h1>

              <motion.p
                className="text-body text-muted-foreground mb-12 max-w-[440px] leading-relaxed"
                variants={shouldReduceMotion ? undefined : itemVariants}
              >
                Have a project in mind or need IT support? Our team is ready to
                help. Reach out and we'll get back to you within one business day.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                className="space-y-8"
                variants={shouldReduceMotion ? undefined : containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center gap-5"
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  whileHover={shouldReduceMotion ? undefined : { x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Send className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-body-sm text-muted-foreground mb-0.5">Email us:</p>
                    <p className="text-body font-semibold text-foreground">
                      solutions@techgigz.com.au
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-5"
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  whileHover={shouldReduceMotion ? undefined : { x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Phone className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-body-sm text-muted-foreground mb-0.5">Call us:</p>
                    <p className="text-body font-semibold text-foreground">
                      (08) 6383 9983 / +61 403 499 150
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-5"
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  whileHover={shouldReduceMotion ? undefined : { x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted">
                    <MapPin className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-body-sm text-muted-foreground mb-0.5">Find Us At</p>
                    <p className="text-body font-semibold text-foreground">
                      Suite 11b/5 Cressall Rd, Balcatta WA 6021
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              className="rounded-2xl border border-border bg-card p-8 shadow-card lg:p-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h2
                className="font-heading text-h4 font-bold text-card-foreground mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Send A Message
              </motion.h2>

              <form className="space-y-6" onSubmit={onSubmit}>
                {/* Success Message */}
                {result === "success" && (
                  <motion.div
                    className="flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 p-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                    <p className="text-sm font-medium text-green-800">
                      ✅ Message sent successfully! We'll be in touch soon.
                    </p>
                  </motion.div>
                )}

                {/* Error Message */}
                {result === "error" && (
                  <motion.div
                    className="flex items-center gap-3 rounded-xl bg-red-50 border border-red-200 p-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-sm font-medium text-red-800">
                      ❌ Something went wrong. Please try again.
                    </p>
                  </motion.div>
                )}

                <motion.div
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.35,
                      },
                    },
                  }}
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <label className="mb-2 block text-body-sm font-medium text-card-foreground">
                      First Name
                    </label>
                    <motion.input
                      type="text"
                      name="first_name"
                      placeholder="Jason"
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-body-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50"
                      disabled={loading}
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 4px hsl(var(--primary) / 0.1)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <label className="mb-2 block text-body-sm font-medium text-card-foreground">
                      Last Name
                    </label>
                    <motion.input
                      type="text"
                      name="last_name"
                      placeholder="Parker"
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-body-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50"
                      disabled={loading}
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 4px hsl(var(--primary) / 0.1)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.5,
                      },
                    },
                  }}
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <label className="mb-2 block text-body-sm font-medium text-card-foreground">
                      Email
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-body-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50"
                      disabled={loading}
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 4px hsl(var(--primary) / 0.1)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <label className="mb-2 block text-body-sm font-medium text-card-foreground">
                      Phone
                    </label>
                    <motion.input
                      type="tel"
                      name="phone"
                      placeholder="+61 4XX XXX XXX"
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-body-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50"
                      disabled={loading}
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 4px hsl(var(--primary) / 0.1)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.58 }}
                >
                  <label className="mb-2 block text-body-sm font-medium text-card-foreground">
                    Message
                  </label>
                  <motion.textarea
                    name="message"
                    rows={5}
                    placeholder="Type your text here......."
                    required
                    disabled={loading}
                    className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3.5 text-body-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50"
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 4px hsl(var(--primary) / 0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </motion.div>

                <motion.div
                  className="flex justify-center pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.66 }}
                  whileHover={shouldReduceMotion || loading ? undefined : { scale: 1.02 }}
                  whileTap={shouldReduceMotion || loading ? undefined : { scale: 0.98 }}
                >
                  <CraftButton type="submit" disabled={loading}>
                    <CraftButtonLabel>
                      {loading ? "Sending..." : "Inquire Now"}
                    </CraftButtonLabel>
                    <CraftButtonIcon>
                      <ArrowRight className="size-4 stroke-2 transition-transform duration-500 group-hover:rotate-45" />
                    </CraftButtonIcon>
                  </CraftButton>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-6">
        <div className="section-container">
          <div className="gradient-banner rounded-3xl px-8 lg:px-16 py-14 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] h-[300px] rounded-full border border-primary-foreground/10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[220px] h-[220px] rounded-full border border-primary-foreground/10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[45%] w-[140px] h-[140px] rounded-full border border-primary-foreground/10" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="font-heading text-h3 lg:text-h2 text-primary-foreground mb-4 leading-tight">
                Ready to Transform Your Business with{" "}
                <span className="text-primary">Smart Technology?</span>
              </h2>
              <p className="text-primary-foreground/70 text-body-sm mb-8">
                Book a consultation and discuss your website, software, marketing, or IT requirements with the TechGigz team.
              </p>
              <CraftButton className="bg-primary-foreground text-foreground">
                <CraftButtonLabel>Book A Call</CraftButtonLabel>
                <CraftButtonIcon>
                  <ArrowRight className="size-4 stroke-2 transition-transform duration-500 group-hover:rotate-45" />
                </CraftButtonIcon>
              </CraftButton>
            </div>
          </div>
        </div>
      </section>

      {/* Begin Your Journey CTA */}
      <section className="py-6">
        <div className="section-container">
          <a
            href="#"
            className="block bg-foreground rounded-3xl px-8 lg:px-16 py-12 group hover:bg-foreground/95 transition-colors"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="font-heading text-h3 text-background leading-tight mb-3">
                  Start Your Digital Transformation with TechGigz
                </h3>
                <p className="text-background/60 text-body-sm">
                  From custom software to managed IT support — we deliver
                  end-to-end technology solutions tailored to your business.
                </p>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-background/20 group-hover:bg-primary group-hover:border-primary transition-colors">
                <ArrowRight className="h-6 w-6 text-background" />
              </div>
            </div>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
