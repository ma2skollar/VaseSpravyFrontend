import type { Metadata } from "next";
import type { Viewport } from "next";
import '../styles/globals.scss'

// TODO: add fonts

export const metadata: Metadata = {
  // manifest: "/site.webmanifest",
  // icons: {
  //   icon: [
  //     { url: "/favicon.ico", type: "image/x-icon" },
  //     { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
  //     { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
  //   ],
  //   apple: "/apple-touch-icon.png",
  // }
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
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