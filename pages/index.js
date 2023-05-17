import Head from 'next/head';
import Link from 'next/link';
import { releases } from '../model/releases.js';
import Image from 'next/image';



export const getStaticProps = async () => {
  return {
    props: {
      released: releases,
    },

    
  }
}


export default ({ released }) => (



  <>
    <Head>
      <title> YUREI | HOME </title>
      <meta name="description" content="grid display of the latest and notable releases from Yurei, featuring album covers, release titles, and artist names. Each release should link to a dedicated page providing more information about the album, including tracklist, streaming platforms, and purchase options." />
      <meta name='keywords' content='grid, display, yurei, album cover, releases' />
    </Head>



    <div className='grid grid-cols-2 md:grid-cols-4 w-full overflow-hidden h-full text-center' >

      {releases.sort(function (a, b) { return b.id - a.id }).map(release => (

        <Link href={'/songs/' + release.id} key={release.id}>

          <div className="overflow-hidden cursor-pointer relative group aspect-w-3 aspect-h-3 xl:aspect-w-7 xl:aspect-h-7">
            <div className="z-10 opacity-100 xl:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute">
              <div className="bg-black bg-opacity-50 h-full w-full break-words text-center flex justify-center items-center flex-col text-white">
                <h1 className='text-2xl xl:text-5xl font-bold flex'>
                  <div className='glitchedx uppercase font-noto font-bold '>{release.Title} </div>
                </h1>
                <p className='opacity-80 text-sm font-poppins font-medium'>{release.Artist}</p>
              </div>
            </div>
            <Image
              alt=''
              src={release.Picture}
              layout='fill'
              objectFit='cover'
              loading='lazy'
              className='object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out'
            />
          </div>

        </Link>
      ))}
    </div >

  </>
)