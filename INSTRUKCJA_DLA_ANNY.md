# Instrukcja obsługi strony przytulanka.com.pl

Cześć Anno! Poniżej wszystko co potrzebujesz, żeby mieć dostęp do strony i móc ją samodzielnie utrzymać.

---

## Gdzie jest strona?

Strona działa na dwóch platformach:

| Co | Gdzie | Do czego |
|----|-------|----------|
| **Kod strony** | github.com/Madmax942/przytulanka | Tutaj są wszystkie pliki strony |
| **Hosting** | vercel.com | Tutaj strona jest uruchomiona i dostępna pod przytulanka.com.pl |

---

## Jak uzyskać dostęp?

### Krok 1 — GitHub (kod strony)

1. Załóż darmowe konto na **github.com** (jeśli nie masz)
2. Napisz do Przemka swoją nazwę użytkownika GitHub — doda Cię jako współpracownika
3. Będziesz mogła przeglądać pliki strony i robić drobne edycje bezpośrednio w przeglądarce

### Krok 2 — Vercel (hosting)

1. Wejdź na **vercel.com** i zaloguj się przez GitHub
2. Napisz do Przemka maila — doda Cię do projektu `przytulanka`
3. W Vercelu możesz:
   - sprawdzić czy strona działa
   - zobaczyć logi błędów
   - w razie potrzeby przywrócić wcześniejszą wersję

---

## Jak zmienić treść na stronie?

Drobne zmiany (tekst, numer telefonu, godziny) możesz robić bezpośrednio na GitHubie w przeglądarce:

1. Wejdź na **github.com/Madmax942/przytulanka**
2. Znajdź plik który chcesz zmienić (np. `components/Contact.tsx` — dane kontaktowe)
3. Kliknij ikonę ołówka ✏️ w prawym górnym rogu pliku
4. Zrób zmianę
5. Kliknij zielony przycisk **"Commit changes"**
6. Strona automatycznie aktualizuje się w ciągu ~2 minut

---

## Ważne pliki

| Plik | Co zawiera |
|------|-----------|
| `components/Contact.tsx` | Dane kontaktowe, adres, telefon |
| `components/Hero.tsx` | Główny baner strony (nagłówek, hasło) |
| `components/Footer.tsx` | Stopka — linki, prawa autorskie |
| `app/page.tsx` | Główna strona — kolejność sekcji |
| `public/` | Zdjęcia i pliki graficzne |

---

## Formularz kontaktowy

Wiadomości z formularza przychodzą na email przez serwis **Formspree**:

- Panel: **formspree.io** (zaloguj się mailem który był użyty przy rejestracji)
- Tam możesz zobaczyć wszystkie wysłane wiadomości
- Możesz też zmienić adres email na który przychodzą powiadomienia

---

## Linki do sekcji (Instagram bio)

Po naprawie z listopada 2026 linki działają poprawnie:

```
https://przytulanka.com.pl/#kontakt
https://przytulanka.com.pl/#opinie
https://przytulanka.com.pl/#oferta
https://przytulanka.com.pl/#o-nas
```

---

## Coś nie działa?

1. Sprawdź najpierw czy strona w ogóle się ładuje na przytulanka.com.pl
2. Jeśli nie — wejdź na vercel.com i sprawdź status deploymentu
3. Jeśli potrzebujesz pomocy z kodem — możesz otworzyć nową rozmowę z Claude Code (claude.ai/code) i wkleić ten prompt na początku:

```
Przejmuję projekt strony PrzytulAnka. Repozytorium: https://github.com/Madmax942/przytulanka
Przeczytaj BRIEF.md — jest tam pełna dokumentacja.
Technologia: Next.js App Router + TypeScript + Tailwind CSS + Vercel.
```

---

*Strona stworzona przez Przemysława Synoradzkiego, 2024–2026*
