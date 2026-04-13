import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AnnouncementBar from "@/components/sections/global/AnnouncementBar";
import { ArrowRight, Send, Phone, MapPin } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";

const clientLogos = [
  "https://cdn.prod.website-files.com/6760feb1dd836b3d80343455/678f23e317c1960451a081b9_8bbe7e09b28d0c4e7fee49b4081e95e2_client-01.svg",
  "https://cdn.prod.website-files.com/6760feb1dd836b3d80343455/678f23e317c1960451a081ba_ffd6e85da61b39de0bca8f1f6aab9e89_client-02.svg",
  "https://cdn.prod.website-files.com/6760feb1dd836b3d80343455/678f23e317c1960451a081bb_bdd28d01d927e8894cd9d9e16e66f497_client-03.svg",
  "https://cdn.prod.website-files.com/6760feb1dd836b3d80343455/678f23e317c1960451a081bc_81f04d43a3e0cef62cf7d1d3ac2c8b1a_client-04.svg",
  "https://cdn.prod.website-files.com/6760feb1dd836b3d80343455/678f23e317c1960451a081bd_client-05.svg",
];

const ContactPage = () => {
  usePageTitle("Contact Us");
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />

      {/* Contact Hero */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Side */}
            <div className="pt-2">
              <div className="sub-heading-pill mb-6 inline-flex">Get In Touch</div>

              <h1 className="font-heading text-h1 lg:text-display leading-tight mb-6">
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
              </h1>

              <p className="text-body text-muted-foreground mb-12 max-w-[440px] leading-relaxed">
                Have a project in mind or need IT support? Our team is ready to
                help. Reach out and we'll get back to you within one business day.
              </p>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Send className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-body-sm text-muted-foreground mb-0.5">Email us:</p>
                    <p className="text-body font-semibold text-foreground">
                      solutions@techgigz.com.au
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Phone className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-body-sm text-muted-foreground mb-0.5">Call us:</p>
                    <p className="text-body font-semibold text-foreground">
                      (08) 6383 9983 / +61 403 499 150
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted">
                    <MapPin className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-body-sm text-muted-foreground mb-0.5">Find Us At</p>
                    <p className="text-body font-semibold text-foreground">
                      Unit 7/4 Queen St, Bentley WA 6102
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card lg:p-10">
              <h2 className="font-heading text-h4 font-bold text-card-foreground mb-8">
                Send A Message
              </h2>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-body-sm font-medium text-card-foreground">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jason"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-body-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-body-sm font-medium text-card-foreground">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Parker"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-body-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-body-sm font-medium text-card-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-body-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-body-sm font-medium text-card-foreground">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+61 4XX XXX XXX"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-body-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-body-sm font-medium text-card-foreground">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Type your text here......."
                    className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3.5 text-body-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div className="flex justify-center pt-2">
                  <button type="submit" className="btn-dark">
                    Inquire Now
                  </button>
                </div>
              </form>
            </div>
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
                Book a free consultation with our experts and discover how
                TechGigz can streamline your operations and drive growth.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary-foreground text-foreground rounded-full px-7 py-3.5 text-body-sm font-semibold hover:bg-primary-foreground/90 transition-colors"
              >
                <ArrowRight size={16} /> Book A Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Trust / Logos Marquee */}
      <section className="py-12 lg:py-16 overflow-hidden">
        <div className="section-container">
          {/* Title bar */}
          <div className="flex items-center gap-4 mb-8">
            <div className="text-h5 font-heading font-bold text-foreground whitespace-nowrap">
              <span className="text-accent">200+</span> businesses trust us
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Marquee logos */}
          <div className="relative">
            <div className="flex gap-10 animate-marquee">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="client-logo"
                  className="h-16 w-auto shrink-0 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              ))}
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
