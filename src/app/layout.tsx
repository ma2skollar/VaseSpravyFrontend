import type { Metadata, Viewport } from "next";
import { EBGaramond, Inter } from "@/fonts/fonts";
import '@/styles/globals.scss'
import '@/styles/typography.scss'
import StoreProvider from "./StoreProvider";
import ClientTransition from "./ClientTransition";
import ClientLayout from "./ClientLayout";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: 'Vaše Správy',
  description: 'Description will be here...',
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

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
  return (
    <html lang="sk" className={`${EBGaramond.variable} ${Inter.variable}`}>
      <body>
        <StoreProvider>
          <ClientTransition>
            <ClientLayout>
              {props.children}
            </ClientLayout>
          </ClientTransition>
        </StoreProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
};

export default RootLayout;