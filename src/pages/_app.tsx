import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from "@material-tailwind/react";

import { Analytics } from '@vercel/analytics/react';

import "@fontsource/pt-sans"
import "@fontsource/exo"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />

      <Analytics />
    </ThemeProvider>
  )
}
