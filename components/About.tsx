import Image from "next/image";

export default function About() {
  return (
    <section id="o-nas" className="py-24 md:py-32" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image block */}
          <div className="relative mt-6 md:mt-0">
            <div
              className="absolute -top-6 -left-6 w-full h-full rounded-3xl"
              style={{ backgroundColor: "var(--color-primary-light)", opacity: 0.3 }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="/IMG_0686.jpg"
                alt="Anna Chatys – właścicielka Przytulankii"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 right-2 md:-bottom-6 md:-right-6 rounded-2xl p-4 md:p-5 shadow-xl text-white"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <p className="font-heading text-4xl font-bold">13+</p>
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
              Witam serdecznie! Nazywam się <strong>Anna Chatys</strong> i od 13 lat z pasją prowadzę przedszkola, tworząc miejsca, w których dzieci mogą czuć się bezpiecznie, rozwijać swoje talenty i każdego dnia odkrywać świat z radością.
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              Od dwóch lat jestem właścicielką Niepublicznego Przedszkola PrzytulAnka w Częstochowie. To miejsce stworzyłam z myślą o dzieciach i ich potrzebach – pełne ciepła, uśmiechu i życzliwości. Wierzę, że każde dziecko zasługuje na indywidualne podejście, wsparcie oraz możliwość rozwoju we własnym tempie.
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              PrzytulAnka to nie tylko przedszkole – to miejsce, w którym budujemy relacje oparte na zaufaniu, szacunku i współpracy z rodzicami. Jestem dumna, że każdego dnia mogę uczestniczyć w rozwoju najmłodszych i tworzyć dla nich przestrzeń, do której przychodzą z uśmiechem.
            </p>
            <p
              className="text-base leading-relaxed font-medium"
              style={{ color: "var(--color-primary-dark)" }}
            >
              Zapraszam do PrzytulAnki – miejsca, które dzieci lubią, a rodzice darzą zaufaniem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
