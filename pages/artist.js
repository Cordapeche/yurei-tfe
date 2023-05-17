import Head from 'next/head';
import Link from 'next/link';
import { artists } from '../model/artists.js';
import Image from 'next/image';


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
      <title> YUREI | ARTISTS </title>
      <meta name="description" content="A grid layout showcasing the label's featured artists, each with a profile picture, artist name, and a brief introduction or tagline highlighting their style." />
      <meta name='keywords' content='grid, display, yurei, album cover, releases' />
    </Head>

    <div className='grid grid-cols-2 md:grid-cols-3 grid-flow-row-danse w-full overflow-hidden h-full'>

      {artists.map(artist => (

        <Link href={'/artist/' + artist.id} key={artist.id}>

          <div className="overflow-hidden  aspect-video cursor-pointer relative group aspect-w-3 aspect-h-3 xl:aspect-w-7 xl:aspect-h-6">
            <div className=" z-10 opacity-100 xl:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute">
              <div className="bg-black bg-opacity-50 h-full w-full flex justify-center items-center flex-col text-white">
                <div className='text-2xl xl:text-5xl uppercase flex  font-noto font-black'>
                  <h1 className=' max-w-xs text-center'>{artist.Name}</h1>
                  </div>
              </div>
            </div>
            <Image
              alt=""
              src={artist.Picture}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
        </Link>
      ))}
    </div>
  </>
)
