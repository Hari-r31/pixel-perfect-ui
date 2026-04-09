import { Star } from "lucide-react";

const testimonials = [
  {
    title: "Fueling Innovation And Growth Daily",
    quote:
      "\u201CLorem ipsum dolor sit amet consectetur. Euismodcorper habitant cras pharetra interdum urna dolor.\u201D",
    name: "Corina Franklin",
    role: "Financial Manager",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
  },
  {
    title: "Empowering Our Startup Like Never Before",
    quote:
      "\u201CLorem ipsum dolor sit amet consectetur. Euismodcorper habitant cras pharetra interdum urna dolor.\u201D",
    name: "Alvin Frey",
    role: "Strategy Consultant",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
  },
  {
    title: "A Revolutionary Solution For Our Startup",
    quote:
      "\u201CLorem ipsum dolor sit amet consectetur. Euismodcorper habitant cras pharetra interdum urna dolor.\u201D",
    name: "James Hoff",
    role: "Management Consultant",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=60&h=60&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 text-center">
        <span className="badge-outline">Testimonials</span>

        <h2 className="mt-6 text-3xl font-bold leading-tight md:text-[44px] md:leading-[1.15]">
          Transforming Technology Into{" "}
          <span className="text-accent-orange underline-orange">Customer</span> Success
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore magna aliqua.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-7 text-left transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <h3 className="mb-3 text-lg font-bold text-card-foreground">{t.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
