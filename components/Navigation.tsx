"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "#o-nas", label: "O nas" },
  { href: "#oferta", label: "Oferta" },
  { href: "#galeria", label: "Galeria" },
  { href: "#opinie", label: "Opinie" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const linkColor = scrolled ? "var(--color-text-muted)" : "rgba(255,255,255,0.85)";
  const linkHoverColor = scrolled ? "var(--color-primary-dark)" : "#ffffff";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md shadow-md"
          : "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-[2px]"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-3 flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-vector.svg"
            alt="Przytulanka – ikona"
            className="h-11 w-auto drop-shadow-sm"
          />
          <span
            className="font-heading font-semibold text-xl tracking-wide hidden sm:block transition-colors duration-500"
            style={{ color: scrolled ? "var(--color-primary-dark)" : "#ffffff" }}
          >
            PrzytulAnka
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleLink(l.href)}
                className="text-sm font-semibold tracking-wide uppercase transition-all duration-500 cursor-pointer"
                style={{ color: linkColor }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = linkHoverColor)
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = linkColor)
                }
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleLink("#kontakt")}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
              style={{
                backgroundColor: scrolled
                  ? "var(--color-primary)"
                  : "rgba(255,255,255,0.2)",
                border: scrolled ? "none" : "1.5px solid rgba(255,255,255,0.7)",
              }}
            >
              Zapisz dziecko
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <X size={24} style={{ color: scrolled ? "var(--color-text)" : "#fff" }} />
          ) : (
            <Menu size={24} style={{ color: scrolled ? "var(--color-text)" : "#fff" }} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className="text-left text-base font-semibold py-2 border-b cursor-pointer"
              style={{
                color: "var(--color-text)",
                borderColor: "var(--color-cream-dark)",
              }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleLink("#kontakt")}
            className="mt-2 px-5 py-3 rounded-full text-sm font-bold text-white text-center cursor-pointer"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            Zapisz dziecko
          </button>
        </div>
      )}
    </header>
  );
}
