import type { Metadata } from "next";
import type { Viewport } from "next";
import '../styles/globals.scss'

// TODO: add fonts

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
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  )
}