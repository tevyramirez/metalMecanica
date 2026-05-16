import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MetalMecanica | Soldadura y Maestranza en Talca",
  description: "Servicios de soldadura estructural, mantenimiento de maquinaria pesada en terreno y fabricación metalúrgica en Talca, Región del Maule.",
  openGraph: {
    title: "MetalMecanica | Ingeniería y Soldadura en Terreno",
    description: "Soldadura estructural, mantenimiento de maquinaria pesada y acero inoxidable en la Región del Maule.",
    url: "https://metalmecanica.cl", // placeholder
    siteName: "MetalMecanica",
    images: [
      {
        url: "/og-image.jpg", // placeholder
        width: 1200,
        height: 630,
        alt: "Soldaduras Mondaca Proyectos",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <body className={`${inter.variable} ${oswald.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
