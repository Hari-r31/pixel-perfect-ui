import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CtaSection from "@/components/sections/CtaSection";
import ClientTrust from "@/components/sections/ClientTrust";
import { Send, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Contact Hero */}
      <section className="mx-auto max-w-[1280px] px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Side */}
          <div className="pt-4">
            <span className="badge-outline">Get In Touch</span>

            <h1 className="mt-5 text-[42px] font-bold leading-[1.1] tracking-tight md:text-[52px]">
              <span className="text-accent-orange underline-orange">Contact</span> Us Easily
            </h1>

            <p className="mt-5 max-w-[420px] text-[15px] leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id magna malesuada tempor mitellus eget auctor parturient montes dolor.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-7">
              <div className="flex items-center gap-4">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-muted">
                  <Send className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us:</p>
                  <p className="text-[15px] font-semibold text-foreground">info@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-muted">
                  <Phone className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us:</p>
                  <p className="text-[15px] font-semibold text-foreground">(888) 1234-5678 / (888) 5678-1234</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-muted">
                  <MapPin className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Find Us At</p>
                  <p className="text-[15px] font-semibold text-foreground">410 Sandtown, California 94001, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10">
            <h2 className="mb-7 text-[22px] font-bold text-card-foreground">Send A Message</h2>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-card-foreground">First Name</label>
                  <input type="text" placeholder="Jason" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-card-foreground">Last Name</label>
                  <input type="text" placeholder="Parker" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-card-foreground">Email</label>
                  <input type="email" placeholder="info@example.com" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-card-foreground">Phone</label>
                  <input type="tel" placeholder="(888) 1234-5678" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-card-foreground">Message</label>
                <textarea rows={5} placeholder="Type your text here......." className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
              </div>

              <div className="flex justify-center pt-1">
                <button type="submit" className="rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground/90">
                  Inquire Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        heading="Discover Your Ideal SaaS Solution With Expert Advice"
        description="Lorem ipsum dolor sit amet consectetur. Gravida fermentum amet aliquet ultrices nulla at ipsum consectetur. Aenean morbi nulla."
        primaryButton="Book A Call"
        secondaryButton="Book A Call"
      />

      {/* Client Trust */}
      <ClientTrust />

      <Footer />
    </div>
  );
};

export default ContactPage;
