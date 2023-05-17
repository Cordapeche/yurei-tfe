import { useState, useEffect } from 'react';
import React from 'react';

import { CgClose } from 'react-icons/cg';

const CookieConsent = () => {

  const [isDivVisible, setIsDivVisible] = useState(true);



  useEffect(() => {
    const isDivHidden = localStorage.getItem('welcomemessageyurei');
    if (isDivHidden === 'true') {
      setIsDivVisible(false);
    }
  }, []);

  const handleHideDiv = () => {
    localStorage.setItem('welcomemessageyurei', 'true');
    setIsDivVisible(false);

  };

  const handleHide = () => {
    setIsDivVisible(false);
  };



  return (

    <>
      {isDivVisible && (
        // <div className='relative w-full flex justify-center'>
        //   <div className='absolute py-5 px-4 w-96 bg-blue-500 z-50 helpfullwindow'>
        //     <div className='bg-black border-2 border-white p-10 text-white items-end'>
        //       <button onClick={handleHide} className='btns w-full flex justify-end pb-5 cursor-pointer'>
        //         <CgClose className='text-white cursor-pointer ' size={40} />
        //       </button>
        //       <div className='text-center flex justify-center'>
        //         <h1 className='text-2xl xl:text-5xl font-bold flex text-center pb-5'>Welcome to YŪREI 劣化!</h1>
        //       </div>
        //       <p>We are thrilled to have you join our booming website music label, where the beats are gritty, the samples are vintage, and the energy is undeniable. As you step into our vibrant community, get ready to immerse yourself in the unique world of phonk and make your mark on the genre.</p>
        //       <div className='flex flex-col pt-5 pd-20 cursor-pointer'>
        //         <button aria-label='understood' onClick={handleHideDiv} className='btns text-black bg-white hover:bg-gray-300 border-solid border-2 p-2 mt-2'>Got it</button>
        //       </div>
        //     </div>
        //   </div>
        // </div>

        <div className='z-50 relative w-full flex justify-center helpfullwindow'>
          <div className='w-full bg absolute xl:-mt-20 xl:fixed flex justify-center text-white '>

            <div className='md:px-8 md:p-5 border-2 border-white  bg-black w-11/12 2xl:w-1/2'>

              <button onClick={handleHide} className='btns w-full flex justify-end cursor-pointer'>
                <CgClose className='text-white cursor-pointer m-2' size={40} />
              </button>
              <div className=' flex flex-col items-center'>
                <h1 className='text-2xl xl:text-5xl uppercase flex text-center pb-5 font-noto font-bold pt-10'>Welcome to YŪREI 劣化!</h1>
                <div className='m-5'>
                  <p className='font-poppins font-medium pb-5 text-base'>We're excited to have you join our booming phonk music, where the beats are gritty, the samples are vintage, and the energy is undeniable. where the beats are gritty, the samples are vintage, and the energy is undeniable.</p>
                  <p className='font-poppins font-medium pb-5 text-base'>Here's a handy guide to help you navigate and make the most of your experience on our website:</p>

                  <ul className="list-disc font-poppins font-medium uppercase md:mx-20">
                    Homepage:
                    <li className="ml-5 font-normal normal-case py-2 text-sm">
                      Our homepage is the gateway to the latest updates and highlights from our music label.
                    </li>
                    <li className="ml-5 font-normal normal-case text-sm">
                      Get a glimpse of featured artists, new releases, upcoming events, and more.
                    </li>
                  </ul>
                  <ul className="list-disc font-poppins font-medium uppercase md:mx-20 pt-5">
                    Artists:
                    <li className="ml-5 font-normal normal-case pt-3 text-sm">
                      Discover talented artists signed to our label.
                    </li>
                    <li className="ml-5 font-normal normal-case py-2 text-sm">
                      Explore their profiles, discography, and learn more about their musical journey.
                    </li>
                  </ul>
                  <ul className="list-disc font-poppins font-medium uppercase md:mx-20 pt-5">
                    Events:
                    <li className="ml-5 font-normal normal-case pt-3 text-sm">
                      Stay up to date with our upcoming events, such as concerts, live performances, and album releases.
                    </li>
                    <li className="ml-5 font-normal normal-case py-2 text-sm">
                      Don't miss out on experiencing the magic of our music in person.
                    </li>
                  </ul>
                  <ul className="list-disc font-poppins font-medium uppercase md:mx-20 pt-5">
                    Contact:
                    <li className="ml-5 font-normal normal-case pt-3 py-2 text-sm">
                      Have questions, feedback, or inquiries? Our contact page provides a convenient way to reach out to us.
                    </li>
                    <li className="ml-5 font-normal normal-case text-sm">
                      Fill out the contact form, and we'll get back to you as soon as possible.
                    </li>
                  </ul>
                </div>
              </div>

              <div className='flex flex-col px-4 mb-5 cursor-pointer'>
                <button aria-label='understood' onClick={handleHideDiv} className='btns text-black bg-white hover:bg-gray-300 border-solid border-2 p-2 mt-2'>Got it</button>
              </div>

            </div>

          </div>

        </div>

      )}
    </>
  );
};

export default CookieConsent;

