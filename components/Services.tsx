import { BookOpen, Dumbbell, Globe, Users, Wind, Home } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Filozofia",
    desc: "Założenia metody Marii Montessori, Pozytywna Dyscyplina, Rodzicielstwo Bliskości.",
    color: "var(--color-primary)",
  },
  {
    icon: Globe,
    title: "Nauka poprzez zabawę",
    desc: "Zajęcia edukacyjne, autorskie programy nauczania, język angielski, zajęcia ogólnorozwojowe oraz pomoc psychologiczno-pedagogiczna (psycholog, pedagog specjalny, terapeuta pedagogiczny i logopeda).",
    color: "var(--color-accent)",
  },
  {
    icon: Users,
    title: "Małe grupy",
    desc: "Maksymalnie 12 dzieci w grupie – umożliwia to zindywidualizowanie rozwoju każdego dziecka.",
    color: "var(--color-primary-dark)",
  },
  {
    icon: Wind,
    title: "Aromaterapia",
    desc: "W naszej codziennej pracy wykorzystujemy aromaterapię, bazując na wysokiej jakości olejkach eterycznych marki doTERRA.",
    color: "var(--color-olive)",
  },
  {
    icon: Dumbbell,
    title: "Żadna pogoda nam nie straszna",
    desc: "Wychodzimy z założenia, że nie ma złej pogody, są tylko nieodpowiednie ubrania. Dlatego dbamy o aktywność na świeżym powietrzu każdego dnia.",
    color: "var(--color-primary)",
  },
  {
    icon: Home,
    title: "Otoczenie",
    desc: "Estetyczne wnętrza pozbawione nadmiaru zabawek i kolorów, które sprzyjają koncentracji.",
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
            Dlaczego{" "}
            <span style={{ color: "var(--color-primary-dark)" }}>
              PrzytulAnka?
            </span>
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Z pasją i zaangażowaniem tworzymy miejsce, w którym dzieci mogą się rozwijać i doświadczać – w atmosferze wzajemnego szacunku i bliskości.
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
