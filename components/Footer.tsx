"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 border-t"
      style={{
        backgroundColor: "var(--color-text)",
        borderColor: "#3a3a3a",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="font-heading text-xl font-semibold mb-1"
              style={{ color: "var(--color-primary-light)" }}
            >
              Przytulanka
            </p>
            <p className="text-xs" style={{ color: "#888" }}>
              Prywatne Przedszkole · Częstochowa, ul. Gminna 66
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {["O nas", "Oferta", "Galeria", "Opinie", "Kontakt"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-xs font-semibold uppercase tracking-wide transition-colors duration-200"
                style={{ color: "#888" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-primary-light)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#888")
                }
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-xs" style={{ color: "#555" }}>
            © {year} Przytulanka. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
