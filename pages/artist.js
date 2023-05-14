import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { artists } from '../model/artists.js';


export const getStaticProps = async () => {
  return {
    props: {
      artistlist: artists,
    },
  }
}

export default ({ artistlist }) => (
  <>
    <Head>
      <title> YUREI | artist </title>
      <meta name="keywords" content="nextjs" />
      <script src='../js/script.js' refer></script>
    </Head>
    <div class="cursor"></div>
    <div class="cursor2"></div>
    <div className='grid grid-cols-2 md:grid-cols-3 grid-flow-row-danse w-full overflow-hidden h-full'>

      {artists.map(artist => (

        <Link href={'/artist/' + artist.id} key={artist.id}>

          <div class="overflow-hidden  aspect-video cursor-pointer relative group aspect-w-3 aspect-h-3 xl:aspect-w-7 xl:aspect-h-6">
            <div class=" z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute">
              <div class="bg-black bg-opacity-50 h-full w-full flex justify-center items-center flex-col text-white">
                <h1 className='text-2xl xl:text-5xl uppercase flex font-noto font-black '>{artist.Name}</h1>
              </div>
            </div>
            <Image
              alt=""
              src={artist.Picture}
              layout="fill"
              objectFit="cover"
              class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
        </Link>
      ))}



    </div>
  </>
)
