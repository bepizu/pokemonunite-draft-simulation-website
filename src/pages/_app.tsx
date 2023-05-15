import type { AppProps } from 'next/app'
import { ThemeProvider } from "@material-tailwind/react";
import { Analytics } from '@vercel/analytics/react';
import { wrapper } from "../store/store";
import {SocketContext, socket} from '../context/socket';
import '@/styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/pt-sans"
import "@fontsource/exo"

function App({ Component, pageProps }: AppProps) {
  return (
    <SocketContext.Provider value={socket}>
      <ThemeProvider>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </SocketContext.Provider>
  )
}

export default wrapper.withRedux(App);