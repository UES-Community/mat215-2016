import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
          integrity="sha384-GvrOXuhFAXLbU4xVp67v+LOuT8JYRMfz6Lbzj8l1CM54W1g5BUHEXA2CF658Iz82"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-[#ffffff] text-[#17191c] antialiased">
        {children}
      </body>
    </html>
  );
}
