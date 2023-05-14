import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

// const [isDivVisible, setIsDivVisible] = useState(true);

// const handleButtonClick = () => {
//   Cookies.set('myCookie', 'cookieValue');
//   setIsDivVisible(false);
// };


export default function Document() {
  return (
    <Html lang="en">
      <link rel="shortcut icon" href="/logo.svg" />


      <script src='../js/script.js' refer></script>

      <Head />

      <body>
        <Main />
        <NextScript />


        <div class='cursor hidden xl:block'></div>
        <div class='cursor2 hidden xl:block'></div>
      </body>
    </Html>
  )
}
