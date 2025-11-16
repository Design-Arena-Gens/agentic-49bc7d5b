import type { Metadata } from "next";
import { Inter, Playfair_Display, IBM_Plex_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Art and Craft of Expressive Typography",
  description: "A visual essay exploring the power of typography through demonstration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${plexMono.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
