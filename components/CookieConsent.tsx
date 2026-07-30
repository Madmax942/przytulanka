"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

const STORAGE_KEY = "pa-consent";
type Consent = "granted" | "denied";

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* localStorage niedostępny */
    }
    if (stored === "granted" || stored === "denied") setConsent(stored);
    setReady(true);

    const onReset = () => setConsent(null);
    window.addEventListener("pa-consent-reset", onReset);
    return () => window.removeEventListener("pa-consent-reset", onReset);
  }, []);

  function choose(value: Consent) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* brak zapisu */
    }
    setConsent(value);
  }

  return (
    <>
      {consent === "granted" && <Analytics />}

      {ready && consent === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Zgoda na pliki cookies"
          className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div
            className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl p-5 shadow-2xl backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-6"
            style={{
              backgroundColor: "var(--color-text)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--color-cream)",
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              Używamy plików cookies wyłącznie do anonimowej statystyki ruchu, aby ulepszać stronę.{" "}
              <Link
                href="/polityka-prywatnosci"
                className="underline underline-offset-4 hover:opacity-100"
                style={{ color: "var(--color-primary-light)" }}
              >
                Polityka prywatności
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => choose("denied")}
                className="rounded-full px-5 py-2.5 text-sm font-medium transition-colors cursor-pointer"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                Tylko niezbędne
              </button>
              <button
                type="button"
                onClick={() => choose("granted")}
                className="rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 cursor-pointer"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                Akceptuję
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
