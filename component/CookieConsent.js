import { useState, useEffect } from 'react';
import { CgClose } from 'react-icons/cg';

const CookieConsent = () => {

  const [isDivVisible, setIsDivVisible] = useState(true);



  useEffect(() => {
    const isDivHidden = localStorage.getItem('isDivHidden');
    if (isDivHidden === 'true') {
      setIsDivVisible(false);
    }
  }, []);

  const handleHideDiv = () => {
    localStorage.setItem('isDivHidden', 'true');
    setIsDivVisible(false);

  };

  const handleHide = () => {
    setIsDivVisible(false);
  };



  return (
    // <div className="cookie-consent">
    //   <p>This website uses cookies. By continuing to use this site, you accept our use of cookies.</p>
    //   <button onClick={handleAccept}>Accept</button>
    // </div>


    <>
      {isDivVisible && (
        <div className='relative w-full flex justify-center'>
          <div className='absolute py-5 px-4 xl:w-2/5 md:px-8 z-50 helpfullwindow'>
            <div className='bg-black border-2 border-white p-10 text-white items-end'>
              <button onClick={handleHide} className='btns w-full flex justify-end pb-5 cursor-pointer'>
                <CgClose className='text-white cursor-pointer ' size={40} />
              </button>
              <div className='text-center flex justify-center'>
                <h1 className='text-2xl xl:text-5xl font-bold flex text-center pb-5'>Welcome to YŪREI 劣化!</h1>
              </div>
              <p>We are thrilled to have you join our booming website music label, where the beats are gritty, the samples are vintage, and the energy is undeniable. As you step into our vibrant community, get ready to immerse yourself in the unique world of phonk and make your mark on the genre.</p>
              <div className='flex flex-col pt-5 pd-20 cursor-pointer'>
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
