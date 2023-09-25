import '@/styles/globals.css'
import React from "react";
import {Leva} from "leva";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {


  return (
      <>
      <Leva collapsed={false}/>
      <Component {...pageProps} />
      </>
  )
}
