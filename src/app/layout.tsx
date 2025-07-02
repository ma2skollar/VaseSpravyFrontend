import type { Metadata, Viewport } from "next";
import { EBGaramond, Inter } from "@/fonts/fonts";
import '../styles/globals.scss'

export const metadata: Metadata = {
  appleWebApp: {
    title: 'Vaše Správy'
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFEF3" },
    { media: "(prefers-color-scheme: dark)", color: "#060400" }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk" className={`${EBGaramond.variable} ${Inter.variable}`}>
      <body>{children}</body>
    </html>
  )
};