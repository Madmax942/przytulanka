import Image from "next/image";
import { Heart, Shield, Users, Star } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Małe grupy",
    desc: "Maksymalnie 12 dzieci w grupie – gwarantujemy indywidualną uwagę dla każdego malucha.",
  },
  {
    icon: Shield,
    title: "Bezpieczne miejsce",
    desc: "Monitorowany obiekt, bezpieczny plac zabaw i wykwalifikowana kadra 24h.",
  },
  {
    icon: Heart,
    title: "Domowa atmosfera",
    desc: "Ciepłe, przytulne wnętrza i opiekunki, które traktują dzieci jak własne.",
  },
  {
    icon: Star,
    title: "Holistyczny rozwój",
    desc: "Łączymy zabawę z nauką – dbamy o emocje, ruch, kreatywność i intelekt.",
  },
];

export default function About() {
  return (
    <section id="o-nas" className="py-24 md:py-32" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image block */}
          <div className="relative">
            <div
              className="absolute -top-6 -left-6 w-full h-full rounded-3xl"
              style={{ backgroundColor: "var(--color-primary-light)", opacity: 0.3 }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=900&q=80"
                alt="Nauczycielka z dziećmi w przedszkolu"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-xl text-white"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <p className="font-heading text-4xl font-bold">10+</p>
              <p className="text-sm font-medium opacity-90">lat doświadczenia</p>
            </div>
          </div>

          {/* Text block */}
          <div>
            <p
              className="text-sm font-bold tracking-widest uppercase mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              O nas
            </p>
            <h2
              className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Przedszkole z{" "}
              <span style={{ color: "var(--color-primary-dark)" }}>
                sercem
              </span>{" "}
              i pasją
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              Przytulanka to prywatne przedszkole w sercu Częstochowy, przy
              ul. Gminnej 66. Od ponad dekady tworzymy miejsce, w którym dzieci
              czują się bezpieczne, kochane i gotowe do odkrywania świata.
            </p>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "var(--color-text-muted)" }}
            >
              Nasza filozofia opiera się na szacunku do dziecka, jego
              naturalnej ciekawości i indywidualnym tempie rozwoju. Wysoko
              wykwalifikowana kadra pedagogiczna dba o to, by każdy dzień był
              pełen radości, zabawy i odkryć.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-primary-light)", opacity: 0.8 }}
                  >
                    <Icon size={20} style={{ color: "var(--color-primary-dark)" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-text)" }}>
                      {title}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
