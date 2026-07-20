import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/layout";
import { GananciasProvider } from "@/src/context/GananciasContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ranti Transportista",
  description:
    "Panel de gestión para transportistas: rutas, envíos, entregas, ganancias y perfil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <GananciasProvider>

          <Navbar />

          <main className="min-h-screen w-full px-4 py-8 md:px-8">
            {children}
          </main>

        </GananciasProvider>
      </body>
    </html>
  );
}