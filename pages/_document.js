import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';



export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/logo.svg" />        
        <script src='../js/jquery-latest.min.js'></script>
        <script src='../js/script.js'></script>
        <script src='../js/validetta.js'></script>
        <script src='../js/myvalideta.js'></script>
      </Head>

      <body>
        <Main />
        <NextScript />
        <div className='cursor hidden xl:block'></div>
        <div className='cursor2 hidden xl:block'></div>
      </body>
    </Html>
  )
}
