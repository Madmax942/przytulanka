"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <CheckCircle size={56} style={{ color: "var(--color-primary)" }} />
        <h3
          className="font-heading text-2xl font-semibold"
          style={{ color: "var(--color-text)" }}
        >
          Wiadomość wysłana!
        </h3>
        <p style={{ color: "var(--color-text-muted)" }}>
          Skontaktujemy się z Tobą najszybciej jak to możliwe.
        </p>
        <button
          onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
          className="mt-4 text-sm font-semibold underline cursor-pointer"
          style={{ color: "var(--color-primary-dark)" }}
        >
          Wyślij kolejną wiadomość
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
            style={{ color: "var(--color-text-muted)" }}
          >
            Imię i nazwisko *
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jan Kowalski"
            className={inputClass}
            style={{
              borderColor: "var(--color-cream-dark)",
              backgroundColor: "var(--color-cream)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-cream-dark)")}
          />
        </div>
        <div>
          <label
            className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
            style={{ color: "var(--color-text-muted)" }}
          >
            Telefon
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+48 000 000 000"
            className={inputClass}
            style={{
              borderColor: "var(--color-cream-dark)",
              backgroundColor: "var(--color-cream)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-cream-dark)")}
          />
        </div>
      </div>

      <div>
        <label
          className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
          style={{ color: "var(--color-text-muted)" }}
        >
          Adres e-mail *
        </label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="jan@example.com"
          className={inputClass}
          style={{
            borderColor: "var(--color-cream-dark)",
            backgroundColor: "var(--color-cream)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--color-cream-dark)")}
        />
      </div>

      <div>
        <label
          className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
          style={{ color: "var(--color-text-muted)" }}
        >
          Wiadomość *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Napisz do nas – chętnie odpowiemy na wszystkie pytania..."
          className={`${inputClass} resize-none`}
          style={{
            borderColor: "var(--color-cream-dark)",
            backgroundColor: "var(--color-cream)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--color-cream-dark)")}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer mt-2"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Wysyłanie...
          </>
        ) : (
          <>
            <Send size={16} />
            Wyślij wiadomość
          </>
        )}
      </button>
    </form>
  );
}
