# Instrukcje dla Claude Code — przytulanka.com.pl

## Kim jesteś i co robisz

Pomagasz **Annie Chatys** utrzymać i rozwijać stronę internetową jej przedszkola **PrzytulAnka** w Częstochowie. Anna jest właścicielką, nie programistką — tłumacz decyzje zwykłym językiem, nie żargonem.

---

## Projekt

- **Strona:** https://przytulanka.com.pl
- **Repo:** https://github.com/Madmax942/przytulanka
- **Hosting:** Vercel (projekt `przytulanka` w teamie `fit-power`)
- **Email kontaktowy:** chatys.anna@gmail.com
- **Facebook:** https://www.facebook.com/profile.php?id=100095609408668
- **Instagram:** https://www.instagram.com/przedszkole.przytulanka

---

## Technologia

**Next.js App Router + TypeScript + Tailwind CSS** — wdrożenie przez Vercel.

```bash
npm install          # instalacja zależności (raz po klonowaniu)
npm run dev          # lokalny podgląd na http://localhost:3000
vercel --prod        # wdrożenie na przytulanka.com.pl
```

> ⚠️ To jest Next.js z App Routerem — przed pisaniem kodu sprawdź `node_modules/next/dist/docs/` bo API różni się od starszych wersji.

---

## Identyfikacja wizualna — trzymaj się tych wartości

| Token CSS | HEX | Użycie |
|-----------|-----|--------|
| `--color-primary` | `#7BB5AF` | akcenty, przyciski |
| `--color-primary-dark` | `#5A9490` | hover |
| `--color-accent` | `#E8A020` | wyróżnienia |
| `--color-cream` | `#FBF8F2` | tło strony |
| `--color-text` | `#2A2A2A` | tekst główny |

**Logo:** kolory brandu to `#6B3C1E` (brąz) + `#4FA89F` (teal na literę „A"). Sygnet źródłowy: `public/logo-vector.svg`. Nie zmieniaj bez wyraźnej prośby.

**Fonty:** Nunito (cały tekst), Playfair Display (nagłówki). Zdefiniowane w `app/layout.tsx`.

---

## Mapa plików — co gdzie jest

```
app/
  layout.tsx                — meta tagi, fonty, Google Analytics (jeśli jest)
  page.tsx                  — kolejność sekcji na stronie głównej
  globals.css               — zmienne CSS, reset stylów
  polityka-prywatnosci/     — podstrona RODO

components/
  Header.tsx                — nawigacja (menu + logo)
  Hero.tsx                  — główny baner (hasło, zdjęcie tła)
  About.tsx                 — sekcja „O nas"
  Offer.tsx                 — sekcja „Oferta"
  Gallery.tsx               — galeria zdjęć
  Opinions.tsx              — opinie rodziców
  Contact.tsx               — dane kontaktowe + ikony social
  ContactForm.tsx           — formularz (wysyłka przez Formspree)
  Footer.tsx                — stopka z ikonami social (SVG)
  CookieConsent.tsx         — baner RODO
  
public/
  logo-vector.svg           — sygnet (oryginał, nie nadpisuj)
  anna-chatys.jpg           — zdjęcie właścicielki
  (zdjęcia galerii)
```

---

## Pułapki — przeczytaj zanim zaczniesz

1. **Ikony social są w DWÓCH miejscach** — `Contact.tsx` i `Footer.tsx`. Zmiana linku w jednym nie zmienia w drugim.

2. **Formularz kontaktowy** (`ContactForm.tsx`) wysyła przez [Formspree](https://formspree.io/f/xyeyljoa) na chatys.anna@gmail.com. Endpoint: `https://formspree.io/f/xyeyljoa`. Nie symuluje wysyłki — prawdziwy fetch.

3. **CookieConsent.tsx** dodaje `paddingBottom` do `<footer>` gdy baner jest widoczny. Nie usuwaj tego efektu — bez niego baner nakrywa ikony.

4. **scroll-behavior: smooth** celowo usunięte z `globals.css` — menu przewija przez `scrollIntoView()` w Navigation.tsx, a linki `/#sekcja` z zewnątrz (Instagram bio) muszą działać bez tego CSS.

5. **Deploy** zawsze przez `vercel --prod` z katalogu projektu. Samo `git push` NIE wdraża automatycznie (chyba że Anna podłączy Vercel do repo — wtedy tak).

---

## Jak pomagać Annie

Anna chce zmieniać treści strony — numery telefonu, godziny, zdjęcia, teksty. Typowe zadania:

- **Zmiana tekstu** → znajdź odpowiedni komponent, zmień string, zrób commit i `vercel --prod`
- **Nowe zdjęcie** → wrzuć do `public/`, zaktualizuj `src` w komponencie
- **Zmiana godzin/adresu** → `components/Contact.tsx`
- **Zmiana hasła na banerze** → `components/Hero.tsx`
- **Nowa opinia** → `components/Opinions.tsx`

Po każdej zmianie: `git add`, `git commit`, `git push`, `vercel --prod`. Powiedz Annie że strona zaktualizuje się w ~2 minuty.

---

## Czego nie zmieniać bez wyraźnej prośby

- Struktury tras Next.js
- Tokenów kolorów w `globals.css`
- Logotypu (`public/logo-vector.svg`)
- Endpointu Formspree
- Pliku `polityka-prywatnosci/page.tsx` (RODO — zmiany wymagają konsultacji prawnej)
