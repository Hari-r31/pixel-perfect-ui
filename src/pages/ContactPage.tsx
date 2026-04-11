import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import { ArrowRight, Send, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />

      {/* Contact Hero */}
      <section className="py-14 md:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Side */}
            <div className="pt-4">
              <div className="sub-heading-pill mb-5 inline-flex">Get In Touch</div>

              <h1 className="font-heading text-h1 lg:text-display leading-tight mb-5">
                <span className="text-primary">Contact</span> Us Easily
              </h1>

              <p className="text-body text-muted-foreground mb-10 max-w-[420px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id magna malesuada tempor mitellus eget auctor parturient montes dolor.
              </p>

              {/* Contact Info */}
              <div className="space-y-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-muted">
                    <Send className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-body-sm text-muted-foreground">Email us:</p>
                    <p className="text-body font-semibold text-foreground">info@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-muted">
                    <Phone className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-body-sm text-muted-foreground">Call us:</p>
                    <p className="text-body font-semibold text-foreground">(888) 1234-5678 / (888) 5678-1234</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-muted">
                    <MapPin className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-body-sm text-muted-foreground">Find Us At</p>
                    <p className="text-body font-semibold text-foreground">410 Sandtown, California 94001, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card lg:p-10">
              <h2 className="font-heading text-h4 font-bold text-card-foreground mb-7">Send A Message</h2>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-body-sm font-medium text-card-foreground">First Name</label>
                    <input type="text" placeholder="Jason" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-body-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-body-sm font-medium text-card-foreground">Last Name</label>
                    <input type="text" placeholder="Parker" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-body-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-body-sm font-medium text-card-foreground">Email</label>
                    <input type="email" placeholder="info@example.com" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-body-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-body-sm font-medium text-card-foreground">Phone</label>
                    <input type="tel" placeholder="(888) 1234-5678" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-body-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-body-sm font-medium text-card-foreground">Message</label>
                  <textarea rows={5} placeholder="Type your text here......." className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-body-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>

                <div className="flex justify-center pt-1">
                  <button type="submit" className="btn-dark">
                    Inquire Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-4">
        <div className="section-container">
          <div className="gradient-banner rounded-3xl px-8 lg:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-heading text-h3 lg:text-h2 text-primary-foreground mb-2 max-w-lg leading-tight">
                Discover Your Ideal SaaS Solution With Expert Advice
              </h2>
              <p className="text-primary-foreground/70 text-body-sm">
                Lorem ipsum dolor sit amet consectetur. Gravida fermentum amet aliquet ultrices nulla at ipsum consectetur.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="inline-flex items-center gap-2 bg-primary-foreground text-foreground rounded-full px-6 py-3 text-body-sm font-semibold hover:bg-primary-foreground/90 transition-colors whitespace-nowrap">
                <ArrowRight size={16} /> Book A Call
              </a>
              <a href="#" className="btn-outline-light whitespace-nowrap">
                <ArrowRight size={16} /> Book A Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Trust */}
      <section className="py-12 lg:py-16">
        <div className="section-container text-center">
          <p className="text-body-sm font-semibold text-foreground mb-4">customers trust us</p>
          <h2 className="font-heading text-h2 lg:text-h1 text-foreground mb-4">
            Begin Your SaaS Journey with Expert Guidance
          </h2>
          <p className="text-muted-foreground text-body mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Nullam integer nulla ut enim amet. Metus arcu tortor mauris nisi magnis elit.
          </p>
          <a href="#" className="btn-dark mx-auto">
            <ArrowRight size={16} /> Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
