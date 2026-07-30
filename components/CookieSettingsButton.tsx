"use client";

export default function CookieSettingsButton() {
  function reset() {
    try {
      localStorage.removeItem("pa-consent");
    } catch {
      /* brak localStorage */
    }
    window.dispatchEvent(new Event("pa-consent-reset"));
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={reset}
      className="rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 cursor-pointer"
      style={{ backgroundColor: "var(--color-primary)", color: "white" }}
    >
      Zmień ustawienia cookies
    </button>
  );
}
