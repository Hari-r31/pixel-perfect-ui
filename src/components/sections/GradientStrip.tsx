const items = [
  { title: "Digital Evolution", description: "Lorem ipsum dolor sit amet consectetur. Dictum rutrum ultrices non purus est risus dignissim. Quam amet porttitor sed." },
  { title: "Features Driving Better Connections", description: "Lorem ipsum dolor sit amet consectetur. Dictum rutrum ultrices non purus risus dignissim. Quam amet porttitor sed." },
  { title: "Transforming Challenges Into Progress", description: "Lorem ipsum dolor sit amet consectetur. Dictum rutrum ultrices non purus risus dignissim. Quam amet porttitor sed." },
];

const GradientStrip = () => {
  return (
    <section className="gradient-banner py-16 lg:py-20">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-h2 lg:text-h1 text-primary-foreground mb-3">
            Transforming Challenges Into Opportunities
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
