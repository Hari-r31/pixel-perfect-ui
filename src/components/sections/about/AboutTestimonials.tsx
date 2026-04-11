import { Star } from "lucide-react";

const testimonials = [
  {
    title: "Fueling Innovation And Growth Daily",
    quote: "Lorem ipsum dolor sit amet consectetur. Euismodcorper habitant cras pharetra interdum urna dolor.",
    name: "Corina Franklin",
    role: "Financial Manager",
  },
  {
    title: "Empowering Our Startup Like Never Before",
    quote: "Lorem ipsum dolor sit amet consectetur. Euismodcorper habitant cras pharetra interdum urna dolor.",
    name: "Alvin Frey",
    role: "Strategy Consultant",
  },
  {
    title: "A Revolutionary Solution For Our Startup",
    quote: "Lorem ipsum dolor sit amet consectetur. Euismodcorper habitant cras pharetra interdum urna dolor.",
    name: "James Hoff",
    role: "Management Consultant",
  },
];

const AboutTestimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="sub-heading-pill mb-4 inline-flex">Testimonials</div>
          <h2 className="font-heading text-h2 lg:text-h1 text-foreground">
            Transforming Technology Into Customer Success
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.name} className="bg-background rounded-2xl p-6 shadow-card border border-border/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <h3 className="font-heading font-semibold text-h5 text-foreground mb-2">{item.title}</h3>
              <p className="text-body-sm text-muted-foreground mb-6 leading-relaxed">"{item.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-caption font-bold text-primary">
                  {item.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-heading text-body-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-caption text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
