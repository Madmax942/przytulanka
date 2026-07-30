import type { Metadata } from "next";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Polityka prywatności – PrzytulAnka",
  description:
    "Polityka prywatności i informacja o plikach cookies Niepublicznego Przedszkola PrzytulAnka w Częstochowie — administrator danych, cele przetwarzania i Twoje prawa (RODO).",
  alternates: { canonical: "/polityka-prywatnosci" },
};

const updated = "lipiec 2026";

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      className="border-t py-10 md:grid md:grid-cols-[16rem_1fr] md:gap-10"
      style={{ borderColor: "var(--color-cream-dark)" }}
    >
      <h2
        className="text-xs font-bold uppercase tracking-widest mb-4 md:mb-0"
        style={{ color: "var(--color-text-muted)" }}
      >
        {label}
      </h2>
      <div className="space-y-4 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
        {children}
      </div>
    </div>
  );
}

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <Navigation />
      <main>
        <section
          className="border-b pt-32 pb-16"
          style={{ backgroundColor: "var(--color-cream)", borderColor: "var(--color-cream-dark)" }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              Dokumenty
            </p>
            <h1
              className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Polityka prywatności i cookies
            </h1>
            <p className="text-base" style={{ color: "var(--color-text-muted)" }}>
              Ostatnia aktualizacja: {updated}.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <Section label="Administrator danych">
            <p>
              Administratorem Twoich danych jest <strong>Niepubliczne Przedszkole PrzytulAnka</strong> —
              Anna Chatys, ul. Gminna 69, 42-221 Częstochowa.
            </p>
            <p>
              Kontakt w sprawie danych: e-mail{" "}
              <a
                href="mailto:przedszkoleprzytulanka.czest@gmail.com"
                className="underline underline-offset-4"
                style={{ color: "var(--color-primary-dark)" }}
              >
                przedszkoleprzytulanka.czest@gmail.com
              </a>
              , tel.{" "}
              <a
                href="tel:792455166"
                className="underline underline-offset-4"
                style={{ color: "var(--color-primary-dark)" }}
              >
                792-455-166
              </a>
              .
            </p>
          </Section>

          <Section label="Jakie dane i po co">
            <p>
              Strona ma charakter informacyjny. Jeśli skontaktujesz się z nami przez formularz lub
              e-mail, przetwarzamy dane, które sam podasz (imię, adres e-mail, treść wiadomości),
              wyłącznie w celu udzielenia odpowiedzi i ewentualnego umówienia wizyty.
            </p>
            <p>
              Dodatkowo — jeśli wyrazisz zgodę — zbieramy <strong>anonimowe statystyki ruchu</strong>{" "}
              (liczba odwiedzin, popularne sekcje, źródła wejść, typ urządzenia), aby ulepszać stronę.
            </p>
          </Section>

          <Section label="Pliki cookies">
            <p>
              <strong>Niezbędne</strong> — konieczne do działania strony (m.in. zapamiętanie Twojego
              wyboru dotyczącego cookies). Nie wymagają zgody.
            </p>
            <p>
              <strong>Analityczne</strong> — obsługiwane przez Vercel Web Analytics. Uruchamiają się{" "}
              <strong>dopiero po Twojej zgodzie</strong>, są anonimowe, nie śledzą Cię między stronami
              i nie tworzą profilu reklamowego.
            </p>
            <div className="pt-2">
              <CookieSettingsButton />
            </div>
          </Section>

          <Section label="Podstawa prawna">
            <p>
              Obsługa wiadomości — art. 6 ust. 1 lit. b i f RODO. Statystyki analityczne —
              art. 6 ust. 1 lit. a RODO (Twoja zgoda), którą możesz w każdej chwili wycofać
              powyższym przyciskiem.
            </p>
          </Section>

          <Section label="Hosting i odbiorcy">
            <p>
              Strona jest hostowana na platformie <strong>Vercel Inc.</strong>, która dostarcza też
              usługę anonimowej analityki zgodnej z RODO. Nie sprzedajemy ani nie udostępniamy
              Twoich danych w celach marketingowych.
            </p>
          </Section>

          <Section label="Okres przechowywania">
            <p>
              Korespondencję przechowujemy tak długo, jak to niezbędne do obsługi sprawy. Dane
              statystyczne są anonimowe i zagregowane.
            </p>
          </Section>

          <Section label="Twoje prawa">
            <p>
              Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia
              przetwarzania, sprzeciwu oraz przenoszenia. Możesz też wycofać zgodę na analitykę
              w dowolnym momencie.
            </p>
            <p>
              W razie wątpliwości możesz złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych
              (PUODO), ul. Stawki 2, 00-193 Warszawa.
            </p>
          </Section>
        </section>
      </main>
      <Footer />
    </>
  );
}
