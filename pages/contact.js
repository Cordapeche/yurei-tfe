import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      {/* <Link href='/ninjas'>
        Link test
      </Link> */}
      <Head>
        <title> YUREI | Contact </title>
        <meta name="description" content="Contact information for Yurei,  including a contact form or email address for general inquiries, artist submissions, and collaboration opportunities. Optionally, include links to social media profiles for easy access to updates and engagement." />
        <meta name='keywords' content='grid, display, yurei, album cover, releases' />
      </Head>


      <div className='grid grid-cols-4 md:grid-cols-4 grid-flow-row-danse w-full overflow-hidden h-full'>
        <div className='aspect-video cursor-pointer relative group aspect-w-3 aspect-h-2 xl:aspect-w-7 col-span-4'>
          <Image
            alt=""
            src="/assets/event/1.png"
            layout="fill"
            objectFit="cover"
            class="object-cover w-full aspect-square group-hover:scale-105 transition duration-300 ease-in-out"
          />

        </div>
        <div className='col-span-1 text-white hidden md:block'></div>
        <div className='col-span-4 xl:col-span-1 text-white ml-5 mr-5'>
          <h2 className='pt-10 text-3xl font-semibold uppercase font-noto '>REASON TO CONTACT US</h2>
          <p className='pt-2 text-sm font-normal font-poppins'>
            Better reason will be uploaded whenever I get the time to type it. Until then, have some: Lorem ipsum dolor sit amet. Qui ipsum velit et illum repudiandae non galisum architecto! Sit impedit obcaecati ut quam eius et rerum eveniet ea ratione autem qui quasi nihil.
          </p>

          <h2 className='text-3xl pt-10 font-semibold uppercase font-noto '>GET IN TOUCH</h2>
          <div className='flex flex-col gap-y-1 justify-center'>

            <form className='flex flex-col font-normal font-poppins'>
              <input type='text' name='name' placeholder='Name' className='bg-black border-solid border-2 p-2  border-white mt-2' />
              <input type='text' name='email' placeholder='Email' className='bg-black border-solid border-2 p-2  border-white mt-2' />
              <textarea id='message' rows='4' className='bg-black border-solid border-2 p-2  border-white mt-2' placeholder='What can you suggest us'></textarea>
              <button type='submit' value='submit' className='text-black bg-white hover:bg-gray-300 border-solid border-2 p-2 mt-2'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}