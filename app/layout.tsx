import type { Metadata } from "next";
import { Syne, JetBrains_Mono, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jetbrains",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Alvaro Espinoza Garate · System Engineer",
  description:
    "Portafolio profesional de Alvaro Espinoza Garate, Ingeniero de Sistemas especializado en Backend, APIs, microservicios y arquitecturas escalables.",
  keywords: ["system engineer", "Node.js", "Python", "Go", "microservices", "API", "PostgreSQL"],
  openGraph: {
    title: "Alvaro Espinoza Garate · System Engineer",
    description: "Diseño y construyo sistemas backend de alto rendimiento, APIs robustas y arquitecturas escalables.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${syne.variable} ${jetbrains.variable} ${spaceMono.variable} font-mono grid-bg noise relative`}>
        {children}
      </body>
    </html>
  );
}
