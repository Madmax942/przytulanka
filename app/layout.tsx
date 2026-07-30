import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Przytulanka – Prywatne Przedszkole | Częstochowa",
  description:
    "Prywatne przedszkole Przytulanka w Częstochowie. Oferujemy opiekę w małych grupach, indywidualne podejście do dziecka, zajęcia edukacyjne i językowe.",
  keywords: "przedszkole, Częstochowa, prywatne przedszkole, opieka nad dziećmi, Przytulanka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${nunito.variable} ${playfair.variable}`}>
      <body className="min-h-screen">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
