import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
// import { CgClose } from 'react-icons/cg';



export default function Document() {
  return (
    <Html lang="en">
      <link rel="shortcut icon" href="/logo.svg" />
      <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>      <script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"></script>
      <script src='../js/script.js' refer></script>

      <Head />

      <body>
        {/* <div className='relative w-full flex justify-center'>
          <div className='absolute py-5 px-4 xl:w-2/5 md:px-8 z-50 helpfulwindow'>
            <div className='bg-black border-2 border-white p-10 text-white items-end'>
              <button className='btns w-full flex justify-end pb-5'>
                <CgClose className='text-white ' size={40} />
              </button>
              <div className='text-center flex justify-center'>
                <h1 className='text-2xl xl:text-5xl font-bold flex text-center pb-5'>Welcome to YŪREI 劣化!</h1>
              </div>
              <p>We are thrilled to have you join our booming website music label, where the beats are gritty, the samples are vintage, and the energy is undeniable. As you step into our vibrant community, get ready to immerse yourself in the unique world of phonk and make your mark on the genre.</p>
              <div className='flex flex-col pt-5 pd-20'>
                <button className='btns text-black bg-white hover:bg-gray-300 border-solid border-2 p-2 mt-2'>Got it</button>
              </div>
            </div>
          </div>
        </div> */}
        <Main />
        <NextScript />


        <div class='cursor hidden xl:block'></div>
        <div class='cursor2 hidden xl:block'></div>
      </body>
    </Html>
  )
}
