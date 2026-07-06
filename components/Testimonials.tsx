import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rodzic",
    source: "Google",
    text: "Wspaniałe miejsce – pełne empatii i zrozumienia. System Montessori uczy moją trzylatkę samodzielności i umiejętności rozwiązywania problemów. Małe kameralne grupy, BARDZO oddana i zaangażowana kadra nauczycielska i dyrekcja. Mnóstwo atrakcji w samym przedszkolu jak i poza nim. Miejsce nowiutkie, bardzo dobrze zaopatrzone z własnym placem zabaw. Miejsce godne polecenia!",
    rating: 5,
  },
  {
    name: "Rodzic",
    source: "Google",
    text: "Niepubliczne Przedszkole PrzytulAnka to miejsce godne polecenia. Duże, przestronne, jasne, klimatyzowane, nowoczesne sale. Kameralne grupy. Własne podwórko. Opieka nad dziećmi jest na najwyższym poziomie. Pani Dyrektor jest osobą zaangażowaną i empatyczną. To miejsce tworzone z pasją. Polecam!",
    rating: 5,
  },
  {
    name: "Rodzic",
    source: "Facebook",
    text: "Wspaniałe miejsce dla najmłodszych! Jestem zachwycona jeśli chodzi o postępy jakie robi moja córka – nie tylko językowe i edukacyjne, ale również społeczne i rozwojowe. Mega podejście Pań i Dyrekcji, małe grupy, bardzo dobre wyposażenie i program edukacyjny Montessori prowadzone przez wielu specjalistów na miejscu. Bardzo polecam!",
    rating: 5,
  },
  {
    name: "Rodzic",
    source: "Google",
    text: "Zdecydowanie polecam przedszkole. Opieka na najwyższym poziomie. Bogata oferta zajęć. Nowoczesne, bardzo ładnie urządzone sale. Budynek z własnym podwórkiem. Bardzo dobry kontakt z kadrą. Kameralne grupy. Przedszkole godne polecenia, z dużym potencjałem. Polecam :)",
    rating: 5,
  },
  {
    name: "Rodzic",
    source: "Facebook",
    text: "Jesteśmy bardzo zadowoleni. Syn chętnie chodzi do przedszkola i każdego dnia wraca z uśmiechem. Zdecydowanie polecam to miejsce ❤️",
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
          {testimonials.map(({ name, source, text, rating }, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl flex flex-col gap-5"
              style={{ backgroundColor: "var(--color-cream)" }}
            >
              <div className="flex items-center justify-between">
                <Stars count={rating} />
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: source === "Google" ? "#EA433520" : "#1877F220",
                    color: source === "Google" ? "#EA4335" : "#1877F2",
                  }}
                >
                  {source}
                </span>
              </div>
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
                  R
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>
                    {name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    Zweryfikowana opinia
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
