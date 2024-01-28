import React from 'react';
import type { AppProps } from 'next/app';
import '../app/globals.css';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';
function MyApp({ Component, pageProps }: AppProps) {
  return <ShoppingCartProvider>
    <Component {...pageProps} />
  </ShoppingCartProvider>
}
export default MyApp;
