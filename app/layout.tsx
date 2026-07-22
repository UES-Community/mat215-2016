import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sohne",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-signifier",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAT215 - Matemática II | Plataforma Educativa e Interactiva",
  description:
    "Plataforma interactiva para Matemática II (MAT215): Límites, Derivadas, Integrales, Álgebra Lineal y Simulaciones Vectoriales 3D.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen bg-[#ffffff] text-[#17191c] antialiased">
        {children}
      </body>
    </html>
  );
}

