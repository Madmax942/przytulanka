import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

const info = [
  {
    icon: MapPin,
    label: "Adres",
    lines: ["ul. Gminna 69", "42-221 Częstochowa"],
  },
  {
    icon: Phone,
    label: "Telefon",
    lines: ["792-455-166"],
  },
  {
    icon: Mail,
    label: "E-mail",
    lines: ["przedszkoleprzytulanka.czest@gmail.com"],
  },
  {
    icon: Clock,
    label: "Godziny otwarcia",
    lines: ["Pon – Pt: 7:30 – 16:30"],
  },
];

export default function Contact() {
  return (
    <section
      id="kontakt"
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
            Kontakt
          </p>
          <h2
            className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Skontaktuj się{" "}
            <span style={{ color: "var(--color-primary-dark)" }}>z nami</span>
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Masz pytania? Chcesz umówić wizytę w przedszkolu? Napisz lub
            zadzwoń – odpiszemy tak szybko jak to możliwe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info column */}
          <div className="flex flex-col gap-8">
            {info.map(({ icon: Icon, label, lines }) => (
              <div key={label} className="flex gap-5 items-start">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--color-primary-light)", opacity: 0.85 }}
                >
                  <Icon size={22} style={{ color: "var(--color-primary-dark)" }} />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {label}
                  </p>
                  {lines.map((line) => (
                    <p
                      key={line}
                      className="text-base font-medium"
                      style={{ color: "var(--color-text)" }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social media */}
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all hover:scale-110"
                style={{ backgroundColor: "#1877F2" }}
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all hover:scale-110"
                style={{
                  background:
                    "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                }}
                aria-label="Instagram"
              >
                in
              </a>
            </div>
          </div>

          {/* Form column */}
          <div
            className="p-8 md:p-10 rounded-3xl shadow-sm"
            style={{ backgroundColor: "white" }}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
