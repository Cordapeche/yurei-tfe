import Head from 'next/head'
import Image from 'next/image';
import Contactform from '../component/contactform';

export default function Contact() {
  return (
    <>
      {/* <Link href='/ninjas'>
        Link test
      </Link> */}
      <Head>
        <title> YUREI | CONTACT </title>
        <meta name="description" content="Contact information for Yurei,  including a contact form or email address for general inquiries, artist submissions, and collaboration opportunities. Optionally, include links to social media profiles for easy access to updates and engagement." />
        <meta name='keywords' content='grid, display, yurei, album cover, releases' />
      </Head>


      <div className='grid grid-cols-4 md:grid-cols-4 grid-flow-row-danse w-full overflow-hidden h-full'>
        <div className='aspect-video cursor-pointer relative group aspect-w-3 aspect-h-2 xl:aspect-w-7 col-span-4'>
          <Image
            alt=""
            src="/assets/event/contactcover.png"
            layout="fill"
            objectFit="cover"
            className="object-cover w-full aspect-square group-hover:scale-105 transition duration-300 ease-in-out"
          />

        </div>
        <div className='col-span-1 text-white hidden md:block'></div>
        <div className='col-span-4 xl:col-span-1 text-white ml-5 mr-5'>
          <h2 className='pt-10 text-3xl font-semibold uppercase font-noto '>REASON TO CONTACT US</h2>
          <p className='text-sm font-normal font-poppins pt-2'>
            You are an artist looking for a submissions? A collaboration opportunities? Maybe looking for a distribution and/or a promotion?
            </p>
          <p className='text-sm font-normal font-poppins pt-2'>
            Whatever you are looking for, you are soon getting your answers. Complete this for and submit it to us and we will answer to you respectfully.
            </p>
          <h2 className='text-3xl pt-10 font-semibold uppercase font-noto '>GET IN TOUCH</h2>          <Contactform />
          <h2 className='text-3xl pt-10 font-semibold uppercase font-noto '>Contact information</h2> 
          <h3 className='pt-2 text-xl font-semibold'>Email: <span className='text-sm font-normal font-poppins'>info@yurei.be</span> </h3>
          <h3 className='pt-2 text-xl font-semibold'>Phone: <span className='text-sm font-normal font-poppins'>+32488 00 00 00</span> </h3>
        </div>
        
      </div>
    </>
  )
}