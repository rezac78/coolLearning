import React from 'react'
import type { AppProps } from 'next/app'
import '../app/globals.css'  // import global styles

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
