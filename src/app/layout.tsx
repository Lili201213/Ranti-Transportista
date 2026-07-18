import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Sidebar } from "@/src/components/layout";
import { GananciasProvider } from "@/src/context/GananciasContext"; // ✅ agregado

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
  description: "Panel de gestión para transportistas: rutas, envíos, entregas, ganancias y perfil.",
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
        <GananciasProvider> {/* ✅ agregado */}
          <Navbar />
          <div className="mx-auto flex max-w-6xl">
            <Sidebar />
            <main className="min-w-0 flex-1 px-4 py-8 md:px-8">
              {children}
            </main>
          </div>
        </GananciasProvider> {/* ✅ agregado */}
      </body>
    </html>
  );
}