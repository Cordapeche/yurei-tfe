import Head from 'next/head';
import Link from 'next/link';
import { events } from '../model/events.js';
import Image from 'next/image';


export const getStaticProps = async () => {
  return {
    props: {
      eventlist: events,
    },
  }
}

export default ({ eventlist }) => (
  <>
    <Head>
      <title> YUREI | EVENT </title>
      <meta name="description" content="grid display of the latest and notable releases from Yurei, featuring album covers, release titles, and artist names. Each release should link to a dedicated page providing more information about the album, including tracklist, streaming platforms, and purchase options." />
      <meta name='keywords' content='grid, display, yurei, album cover, releases' />
    </Head>


    <div className='min-h-screen bg-black'>

      <div className='grid grid-cols-1 md:grid-cols-2 grid-flow-row-danse w-full overflow-hidden h-full'>
        {events.map(even => (
          <Link href={'/events/' + even.id} key={even.id}>

            <div className="overflow-hidden cursor-pointer relative group aspect-w-3 aspect-h-3 xl:aspect-w-7 xl:aspect-h-7">
              <div className=" z-10 opacity-100 xl:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute">
                <div className="bg-black bg-opacity-50 h-full w-full flex justify-center items-center flex-col text-white font-noto">
                  <h1 className='text-2xl lg:text-4xl lg:p-2 xl:text-6xl xl:p-2 font-bold text-center uppercase'>{even.Name}</h1>
                  <h2 className='text-xs lg:text-2xl lg:p-2 xl:text-3xl xl:p-2 font-bold text-center uppercase'>{even.When}</h2>
                                    
                </div>
              </div>
              <Image
                alt=""
                src={even.Picture}
                layout="fill"
                objectFit="cover"
                loading='lazy'
                className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
          </Link>
        ))}
      </div>

    </div>
  </>
)