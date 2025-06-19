import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/layout/(default)/header/header";
import Footer from "@/components/layout/(default)/footer/footer";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zevvo - Gestão Simples para Negócios Locais",
  description: "Simplifique a gestão de clientes, faturas e relatórios com o Zevvo. Experimente nosso SaaS gratuito por 7 dias!",
  keywords: "gestão de negócios, SaaS, negócios locais, faturas, relatórios, Zevvo",
  openGraph: {
    title: "Zevvo - Transforme Seu Negócio Local",
    description: "Gerencie seu negócio local com facilidade usando o Zevvo. Experimente grátis por 7 dias!",
    url: "https://bussinesshub.vercel.app",
    siteName: "Zevvo",
    locale: "pt_PT",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}