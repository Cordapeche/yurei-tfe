import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { events } from '../model/events.js';


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
      <title> YUREI | Event </title>
      <meta name="keywords" content="nextjs" />
      <script src='../js/script.js' refer></script>
    </Head>
    <div class="cursor"></div>
    <div class="cursor2"></div>

    <div className='min-h-screen bg-black'>
      
          <div className='grid grid-cols-2 md:grid-cols-2 grid-flow-row-danse w-full overflow-hidden h-full'>
          {events.map(even => (
        <Link href={'/events/' + even.id} key={even.id}>
            <div class="overflow-hidden  aspect-video cursor-pointer relative group aspect-w-3 aspect-h-3 xl:aspect-w-7 xl:aspect-h-4">
              <div class=" z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute">
                <div class="bg-black bg-opacity-50 h-full w-full flex justify-center items-center flex-col text-white font-noto">
                  <h1 className='text-2xl lg:text-4xl lg:p-2 xl:text-6xl xl:p-2 font-bold text-center uppercase'>{even.Name}</h1>
                  <h2 className='text-xs lg:text-2xl lg:p-2 xl:text-4xl xl:p-2 font-bold text-center uppercase'>{even.Where}</h2>
                  <h2 className='text-xs lg:text-2xl lg:p-2 xl:text-4xl xl:p-2 font-bold text-center uppercase'>{even.When}</h2>
                </div>
              </div>
              <Image
                alt=""
                src={even.Picture}
                layout="fill"
                objectFit="cover"
                class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
            </Link>
      ))}
          </div>
        
    </div>
  </>
)