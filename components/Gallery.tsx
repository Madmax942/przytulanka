import Image from "next/image";

const photos = [
  { src: "/galeria/sala-02.jpeg", alt: "Sala z tęczą – stoły edukacyjne i materiały Montessori" },
  { src: "/galeria/sala-07.jpeg", alt: "Panorama sali zabaw z wiszącymi roślinami i kolumną" },
  { src: "/galeria/sala-01.jpeg", alt: "Zielona roślina w jasnej sali przedszkolnej" },
  { src: "/galeria/sala-05.jpeg", alt: "Kącik czytelniczy z regałem, fotelem i kołyską" },
  { src: "/galeria/sala-03.jpeg", alt: "Sala przedszkolna z globusem i fotelami w kratę" },
  { src: "/galeria/sala-06.jpeg", alt: "Tipi i wisząca roślina – kącik wyciszenia" },
  { src: "/galeria/sala-04.jpeg", alt: "Lustro w złotej ramie ze sztalugą i roślinami" },
  { src: "/galeria/sala-08.jpeg", alt: "Ogródek przedszkolny – dzieci uczą się uprawy" },
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
            Przestrzeń stworzona z myślą o dzieciach – przytulna, pełna zieleni
            i inspirująca do odkrywania.
          </p>
        </div>

        {/* Masonry grid – wszystkie zdjęcia są portrait 3:4 */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="relative w-full" style={{ paddingBottom: "133%" }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
