const items = [
  { title: "Custom Software Development", description: "We build web apps, mobile apps, CRM systems, and integration platforms that automate your workflows and connect your business tools." },
  { title: "Data-Driven Digital Marketing", description: "From SEO and keyword research to social media and link building — we grow your online presence and bring qualified leads to your door." },
  { title: "Reliable Managed IT Services", description: "Security, backups, cloud migration, Microsoft 365, and 24/7 monitoring — we keep your IT infrastructure running without disruption." },
];

const GradientStrip = () => {
  return (
    <section className="gradient-banner py-16 lg:py-20">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-h2 lg:text-h1 text-primary-foreground mb-3">
            Everything Your Business Needs, Under One Roof
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="text-center lg:text-left">
              <h3 className="font-heading font-bold text-h5 text-primary-foreground mb-3">{item.title}</h3>
              <p className="text-body-sm text-primary-foreground/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GradientStrip;
