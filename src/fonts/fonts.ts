import localFont from "next/font/local";

export const EBGaramond = localFont({
  src: [
    {
      path: './EBGaramond/eb-garamond-v31-latin_latin-ext-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './EBGaramond/eb-garamond-v31-latin_latin-ext-italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: './EBGaramond/eb-garamond-v31-latin_latin-ext-500.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './EBGaramond/eb-garamond-v31-latin_latin-ext-500italic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: './EBGaramond/eb-garamond-v31-latin_latin-ext-600.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './EBGaramond/eb-garamond-v31-latin_latin-ext-600italic.woff2',
      weight: '600',
      style: 'italic'
    },
    {
      path: './EBGaramond/eb-garamond-v31-latin_latin-ext-700.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './EBGaramond/eb-garamond-v31-latin_latin-ext-700italic.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: './EBGaramond/eb-garamond-v31-latin_latin-ext-800.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: './EBGaramond/eb-garamond-v31-latin_latin-ext-800italic.woff2',
      weight: '800',
      style: 'italic'
    },
  ],
  variable: '--font-ebgaramond',
  display: 'swap',
  preload: true,
  fallback: ['EB Garamond', 'serif']
});

export const Inter = localFont({
  src: [
    {
      path: './Inter/inter-v19-latin_latin-ext-100.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-100italic.woff2',
      weight: '100',
      style: 'italic'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-200.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-200italic.woff2',
      weight: '200',
      style: 'italic'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-300.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-300italic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-500.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-500italic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-600.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-600italic.woff2',
      weight: '600',
      style: 'italic'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-700.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-700italic.woff2',
      weight: '700', 
      style: 'italic'
    },
    { 
    path: './Inter/inter-v19-latin_latin-ext-800.woff2',
    weight: '800',
    style: 'normal'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-800italic.woff2',
      weight: '800',
      style: 'italic'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-900.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: './Inter/inter-v19-latin_latin-ext-900italic.woff2',
      weight: '900',
      style: 'italic'
    },
  ],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['Inter', 'sans-serif']
});