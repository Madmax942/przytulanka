import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anna Kowalska",
    role: "Mama Zosi, 4 lata",
    text: "Zosia chodzi do Przytulaki już drugi rok i jestem zachwycona. Panie są niesamowite – cierpliwe, serdeczne i zaangażowane. Córka co rano wybiega z domu, bo nie może się doczekać przedszkola!",
    rating: 5,
  },
  {
    name: "Marcin i Ola Nowak",
    role: "Rodzice Kuby, 5 lat",
    text: "Świetne miejsce! Kuba nauczył się tu angielskiego na poziomie, który nas zadziwia. Małe grupy to ogromny plus – panie znają każde dziecko z imienia i naprawdę rozumieją jego potrzeby.",
    rating: 5,
  },
  {
    name: "Katarzyna Wiśniewska",
    role: "Mama Hani, 3 lata",
    text: "Hania zaczęła przedszkole z ogromną tremą. Już po tygodniu panie napisały mi, że mała się śmieje i bawi razem z rówieśnikami. Przytulanka to naprawdę wyjątkowe miejsce – polecam z całego serca!",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill="var(--color-accent)"
          style={{ color: "var(--color-accent)" }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="opinie"
      className="py-24 md:py-32"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Opinie rodziców
          </p>
          <h2
            className="font-heading text-4xl md:text-5xl font-semibold leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Co mówią{" "}
            <span style={{ color: "var(--color-primary-dark)" }}>
              nasi rodzice
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, text, rating }) => (
            <div
              key={name}
              className="p-8 rounded-2xl flex flex-col gap-5"
              style={{ backgroundColor: "var(--color-cream)" }}
            >
              <Stars count={rating} />
              <p
                className="text-sm leading-relaxed flex-1 italic"
                style={{ color: "var(--color-text-muted)" }}
              >
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "var(--color-cream-dark)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>
                    {name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    {role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
