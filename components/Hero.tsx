import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1649843263763-c7a9e29d5ea2?w=1800&q=80"
          alt="Dziecko bawiące się drewnianymi klockami"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(91,148,144,0.82) 0%, rgba(42,42,42,0.55) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p
          className="text-sm md:text-base font-semibold tracking-widest uppercase mb-6 opacity-90"
          style={{ color: "var(--color-accent)" }}
        >
          Prywatne Przedszkole w Częstochowie
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight mb-6">
          Miejsce, gdzie dzieci{" "}
          <span style={{ color: "var(--color-primary-light)" }}>
            rozkwitają
          </span>
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Tworzymy bezpieczne, ciepłe i stymulujące środowisko, w którym każde
          dziecko rozwija się we własnym rytmie – otoczone troską i miłością.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#kontakt"
            className="px-8 py-4 rounded-full text-white font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            Zapisz dziecko
          </a>
          <a
            href="#o-nas"
            className="px-8 py-4 rounded-full font-bold text-base border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-gray-800"
          >
            Dowiedz się więcej
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70">
        <span className="text-white text-xs tracking-widest uppercase">
          Przewiń
        </span>
        <div className="w-px h-12 bg-white/60 animate-pulse" />
      </div>
    </section>
  );
}
