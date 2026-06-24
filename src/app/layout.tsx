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
  title: "Soldadura en Talca | MetalMecanica - Reparación Llantas y Estructuras",
  description: "Servicios de soldadura estructural, reparación de llantas de aluminio y fierro, y fabricación de estructuras metálicas en Talca, Región del Maule. Contacto: +56 9 8924 6972",
  keywords: ["soldadura talca", "reparación llantas talca", "estructuras metálicas", "soldadura estructural", "maestranza talca", "reparación escape", "soldadura industrial"],
  openGraph: {
    title: "MetalMecanica | Soldadura, Llantas y Estructuras en Talca",
    description: "Servicios profesionales de soldadura, reparación de llantas y estructuras metálicas en Talca y Región del Maule.",
    url: "https://metalmecanica.cl",
    siteName: "MetalMecanica Talca",
    images: [
      {
        url: "/proyectos/cliente/proyecto-1.jpg",
        width: 1200,
        height: 630,
        alt: "Soldadura profesional en Talca - MetalMecanica",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MetalMecanica Talca",
    description: "Servicios de soldadura estructural, reparación de llantas y estructuras metálicas en Talca",
    url: "https://metalmecanica.cl",
    telephone: "+56989246972",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Talca",
      addressRegion: "Región del Maule",
      addressCountry: "CL"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -35.4264,
      longitude: -71.6554
    },
    serviceType: ["Soldadura", "Reparación de Llantas", "Estructuras Metálicas", "Maestranza"],
    priceRange: "$$"
  };

  return (
    <html lang="es-CL">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
