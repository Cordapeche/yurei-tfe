import Head from 'next/head'
import Link from 'next/link'
import LazyImage from '../component/LazyImage';

export default function About() {
  return (
    <>
      {/* <Link href="/ninjas">
        Link test
      </Link> */}
      <Head>
        <title> YUREI | About </title>
        <meta name="description" content="A detailed description of Yurei, including its mission, vision, and the story behind its establishment. Highlight the label's commitment to promoting underground artists and fostering a community around phonk music." />
        <meta name='keywords' content='grid, display, yurei, album cover, releases' />
      </Head>


      <div className='grid grid-cols-4 md:grid-cols-4 grid-flow-row-danse w-full overflow-hidden h-full'>
        <div class="overflow-hidden  aspect-video cursor-pointer relative group aspect-w-3 aspect-h-4 xl:aspect-w-7 xl:aspect-h-3 col-span-4">

          <iframe src="https://www.youtube-nocookie.com/embed/fC1HF29n9UA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='col-span-1 text-white hidden md:block'></div>
        <div className='pt-10 col-span-4 xl:col-span-1 text-white ml-5 mr-5 xl:mr-5 xl:ml-0'>
          <h2 className='text-3xl uppercase font-noto font-semibold pb-2'>who are we</h2>
          <p className='text-sm font-normal font-poppins '>
            Yurei is phonk, underground based label. Our main objective is to creat phonk related events every Friday night. We also provide material to our selected artists.
            If you are willing to work with us, click here to send us your best motivation.<br></br>

            Created on January 2023, Yurei was first meant to be a simple house where anyone could get their voice heard.
            We really stuck to that idea until we totally fall in love with the phonk category. Now we live to keep the phonk alive.
          </p>
        </div>
      </div>
    </>
  )
}