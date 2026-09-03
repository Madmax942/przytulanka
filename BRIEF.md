# PrzytulAnka — Brief dla developera

## Klient

**PrzytulAnka** — Niepubliczne Przedszkole, Częstochowa  
Właścicielka: Anna Chatys  
Email kontaktowy: [wpisz email]  
Facebook: https://www.facebook.com/profile.php?id=100095609408668  
Instagram: https://www.instagram.com/przedszkole.przytulanka

---

## Technologia

| Co | Jak |
|----|-----|
| Framework | Next.js (App Router) |
| Język | TypeScript |
| Style | Tailwind CSS |
| Hosting | Vercel |
| Domena | [do uzupełnienia] |

**Deploy:**
```bash
npm install
npm run dev        # lokalnie
vercel --prod      # produkcja
```

---

## Identyfikacja wizualna

### Kolory

| Nazwa | HEX | Użycie |
|-------|-----|--------|
| Brąz główny | `#6B3C1E` | Nazwa marki, nagłówki |
| Teal | `#4FA89F` | Litera „A" w logo, akcenty |
| Brąz subtelny | `#A07858` | Podtytuł na jasnym tle |
| Teal subtelny | `#88C4BE` | Podtytuł na ciemnym tle |
| Tło ciemne | `#2C2926` | Wariant ciemny logotypu |

### Font

**Nunito** (Google Fonts)  
https://fonts.google.com/specimen/Nunito

- Nazwa marki: **Nunito ExtraBold (900)**
- Podtytuł: Nunito Light (300), letter-spacing 0.18em, CAPS

### Logo

Pliki wektorowe w pakiecie ZIP (`PrzytulAnka_Logotyp.zip`):

```
SVG/
  logo-poziomy.svg           ← główny wariant (jasne tło)
  logo-poziomy-ciemny.svg    ← na ciemnym tle
  logo-pionowy.svg           ← do ulotek, pieczęci
  logo-pionowy-ciemny.svg
  sygnet-jasny.svg           ← sama ikona
  sygnet-ciemny.svg
  wordmark.svg               ← sam napis
PNG/  — @2x i @4x + sygnet 64/128/256/512px
PDF/  — do druku
```

Sygnet źródłowy: `public/logo-vector.svg` (oryginalny wektor ikony).

---

## Struktura projektu

```
/
├── app/                    # Next.js App Router — strony
│   ├── layout.tsx          # główny layout, meta, fonty
│   ├── page.tsx            # strona główna
│   └── polityka-prywatnosci/   # podstrona RODO
├── components/
│   ├── Header.tsx          # nawigacja
│   ├── Footer.tsx          # stopka z ikonami social
│   ├── Contact.tsx         # sekcja kontakt + ikony FB/Instagram
│   ├── CookieConsent.tsx   # baner RODO (padding footer gdy widoczny)
│   └── ...                 # pozostałe sekcje strony
├── public/
│   ├── logo-vector.svg     # sygnet (oryginał)
│   └── ...                 # zdjęcia
└── BRIEF.md                # ten plik
```

---

## Co zostało zrobione

- [x] Strona główna z sekcjami: Hero, O nas, Oferta, Galeria, Kontakt
- [x] Ikony social (Facebook, Instagram) z działającymi linkami
- [x] Baner zgody na cookies (RODO)
- [x] Polityka prywatności (`/polityka-prywatnosci`)
- [x] Sitemap.xml i robots.txt
- [x] Weryfikacja Google Search Console (metatag)
- [x] Pakiet logotypu (SVG + PNG + PDF)

## Do zrobienia / do uzupełnienia

- [ ] Wpisać docelową domenę i skonfigurować w Vercel
- [ ] Uzupełnić zdjęcia (galeria, zdjęcie właścicielki)
- [ ] Sprawdzić treści — numery telefonu, godziny otwarcia, adres
- [ ] Zgłosić sitemap w Google Search Console po podpięciu domeny
- [ ] Ewentualnie dodać formularz kontaktowy

---

## Wskazówki dla Claude (AI)

Jeśli kontynuujesz pracę na tym projekcie z pomocą Claude Code:

1. To jest **Next.js App Router** — przed pisaniem kodu przeczytaj `AGENTS.md`
2. Ikony social są w **dwóch miejscach**: `components/Contact.tsx` (tekst+linki) i `components/Footer.tsx` (SVG ikony) — zmieniaj oba
3. `CookieConsent.tsx` dodaje `paddingBottom` do footera gdy baner jest widoczny — nie usuwaj tego efektu
4. Logotyp na stronie korzysta z `public/logo-vector.svg` jako `<img>` — nie zastępuj go bez potrzeby
5. Deploy przez `vercel --prod` z katalogu projektu
