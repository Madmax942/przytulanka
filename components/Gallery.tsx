import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80",
    alt: "Dzieci podczas zajęć plastycznych",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    alt: "Dzieci bawiące się na zewnątrz",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1566454419290-57a64afe30ac?w=800&q=80",
    alt: "Zajęcia edukacyjne w sali",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80",
    alt: "Kolorowa sala zabaw",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
    alt: "Dziecko malujące obraz",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80",
    alt: "Plac zabaw dla dzieci",
    aspect: "tall",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Galeria
          </p>
          <h2
            className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Zajrzyj do{" "}
            <span style={{ color: "var(--color-primary-dark)" }}>
              naszego świata
            </span>
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Każdy dzień w Przytulance to nowe doświadczenia, uśmiechy i
            odkrycia. Zajrzyj, jak wyglądają nasze zajęcia i przestrzeń.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{
                aspectRatio:
                  photo.aspect === "tall"
                    ? "3/4"
                    : photo.aspect === "wide"
                    ? "4/3"
                    : "1/1",
              }}
            >
              <div className="relative w-full h-full" style={{
                paddingBottom:
                  photo.aspect === "tall"
                    ? "133%"
                    : photo.aspect === "wide"
                    ? "75%"
                    : "100%",
              }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
