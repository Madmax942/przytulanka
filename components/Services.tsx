import { BookOpen, Dumbbell, Globe, MessageCircle, Utensils, Music } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Zajęcia edukacyjne",
    desc: "Autorski program nauczania łączący naukę z zabawą – matematyka, przyroda, plastyka i wiele więcej.",
    color: "var(--color-primary)",
  },
  {
    icon: Globe,
    title: "Język angielski",
    desc: "Codzienne zajęcia z native speakerem – nauka przez piosenki, gry i naturalne rozmowy.",
    color: "var(--color-accent)",
  },
  {
    icon: Dumbbell,
    title: "Zajęcia ruchowe",
    desc: "Rytmika, gimnastyka i zabawy na świeżym powietrzu – zdrowy ruch każdego dnia.",
    color: "var(--color-primary-dark)",
  },
  {
    icon: MessageCircle,
    title: "Logopedia",
    desc: "Regularne zajęcia z doświadczonym logopedą – wspieramy prawidłowy rozwój mowy.",
    color: "var(--color-olive)",
  },
  {
    icon: Music,
    title: "Zajęcia muzyczne",
    desc: "Śpiew, taniec i rytmika rozwijają kreatywność i wrażliwość estetyczną maluchów.",
    color: "var(--color-primary)",
  },
  {
    icon: Utensils,
    title: "Zdrowe wyżywienie",
    desc: "Cztery posiłki dziennie przygotowywane ze świeżych produktów przez naszą kucharkę.",
    color: "var(--color-accent)",
  },
];

export default function Services() {
  return (
    <section
      id="oferta"
      className="py-24 md:py-32"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Co oferujemy
          </p>
          <h2
            className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-6"
            style={{ color: "var(--color-text)" }}
          >
            Pełna opieka i{" "}
            <span style={{ color: "var(--color-primary-dark)" }}>
              wszechstronny rozwój
            </span>
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            W Przytulance każdy dzień to nowa przygoda. Oferujemy bogaty
            program zajęć dopasowany do potrzeb i możliwości każdego dziecka.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="group p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
              style={{
                borderColor: "var(--color-cream-dark)",
                backgroundColor: "var(--color-cream)",
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: color + "18" }}
              >
                <Icon size={24} style={{ color }} />
              </div>
              <h3
                className="font-heading text-xl font-semibold mb-3"
                style={{ color: "var(--color-text)" }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
