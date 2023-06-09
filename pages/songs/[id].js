import Head from 'next/head';
import Link from 'next/link';
import { releases } from '../../model/releases.js';
import Image from 'next/image';


export const getStaticProps = async ({ params }) => {
    const released = releases.filter((p) => p.id.toString() === params.id);
    return {
        props: {
            song: released[0],
        },
    };
};
  
let min = 1;
let max = 5;
const CatNumber = Math.floor(Math.random() * (max - min + 1)) + min

// const CatNumber = 2
// console.log(CatNumber);

export const getStaticPaths = async () => {
    const paths = releases.map((song) => ({
        params: { id: song.id.toString() },
    }));

    return { paths, fallback: false };
};

export default ({ song }) => (
    <>
        <Head>
        {/* {song.Title +" - "+ song.Artist} */}
            <meta name="description" content="grid display of the latest and notable releases from Yurei, featuring album covers, release titles, and artist names. Each release should link to a dedicated page providing more information about the album, including tracklist, streaming platforms, and purchase options." />
            <meta name='keywords' content='grid, display, yurei, album cover, releases' />
        </Head>

        <div className='grid grid-cols-2 md:grid-cols-4 w-full overflow-hidden h-full text-center'>
            <div className='overflow-hidden relative group aspect-w-3 aspect-h-3 xl:aspect-w-7 xl:aspect-h-7 col-span-2'>
                <div className='z-10 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute'></div>
                <Image
                    alt=''
                    src={song.Picture}
                    layout='fill'
                    objectFit='cover'
                    className='object-cover w-full aspect-square'
                />
            </div>

            <div className='relative group xl:aspect-w-7 xl:aspect-h-6 col-span-2'></div>

            <div className='overflow-hidden relative aspect-w-0 group xl:aspect-w-7 xl:aspect-h-6 hidden xl:block'>
                <div className=' z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute'></div>
            </div>

            <div className='col-span-2 text-white ml-5 mr-5 xl:mr-5 xl:ml-0 xl:col-span-1'>
                <div className='text-left pt-10'>
                    <h2 className='text-3xl font-semibold uppercase font-noto'>{song.Title}</h2>
                    <h3 className='pt-4 text-xl font-normal font-poppins '>By <span className='text-gray-400 menucolor'>
                        <Link href={'/artist/' + song.ArtistId}>
                            {song.Artist}
                        </Link>
                    </span></h3>
                    <p className='text-base font-normal font-poppins pt-5 text-gray-400'><span className='uppercase text-white'>Album:</span> {song.Album}</p>
                    <p className='text-base font-normal font-poppins text-gray-400'><span className='uppercase text-white'>Released:</span> {song.Released}</p>
                    <p className='text-base font-normal font-poppins text-gray-400'><span className='uppercase text-white'>Genres:</span> {song.Genres}</p>
                    <div className='text-left pt-10 font-poppins font-normal'>

                        <h2 className='text-3xl font-semibold uppercase font-noto'>Track the song</h2>
                        <a target="_blank" href={song.spotifyURL} className='flex pt-2 flex-row w-full justify-stretch items-center cursor-pointer menucolor transition duration-300 ease-in-out'>
                            <h3 className='text-xl font-normal mr-5 w-fit ease-in-out hover:uppercase duration-100'>{song.Spotify}</h3>  
                        </a>

                        <a target="_blank" href={song.SoundCloudURL} className='flex flex-row w-full justify-stretch items-center cursor-pointer menucolor'>
                            <h3 className='text-xl font-normal mr-5 w-fit ease-in-out hover:uppercase duration-100'>{song.SoundCloud}</h3>
                        </a>

                        <a target="_blank" href={song.YouTubeURL} className='flex flex-row w-full justify-stretch items-center cursor-pointer menucolor'>
                            <h3 className='text-xl font-normal mr-5 w-fit ease-in-out hover:uppercase duration-100'>{song.YouTube}</h3>
                        </a>

                        <a target="_blank" href={song.AppleMusicURL} className='flex flex-row w-full justify-stretch items-center cursor-pointer menucolor'>
                            <h3 className='text-xl font-normal mr-5 w-fit ease-in-out hover:uppercase duration-100'>{song.AppleMusic}</h3>
                        </a>

                    </div>
                </div>
            </div>
        </div>

        <div className='pt-60 grid grid-cols-2 md:grid-cols-4 w-full overflow-hidden h-full text-center'>
            <div className='col-span-1 hidden xl:block'>

            </div>
            <div className='col-span-2 text-white text-left xl:col-span-1 ml-5 mr-5 xl:mr-5'>

                <h2 className='text-3xl font-semibold uppercase py-5 font-noto'>You might also like</h2>
            </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 w-full overflow-hidden h-full text-center'>
            <div className=' col-span-4'>
                <div className='grid grid-cols-2 md:grid-cols-4 w-full overflow-hidden h-full text-center'>
                    {releases.filter((release) => release.CatId === CatNumber).slice(0, 4).map(release => (
                        <Link href={'/songs/' + release.id} key={release.id}>
                            <div className="overflow-hidden cursor-pointer relative group aspect-w-3 aspect-h-3 xl:aspect-w-7 xl:aspect-h-7">
                                <div className="z-10 opacity-100 xl:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute">
                                    <div className="bg-black bg-opacity-50 h-full w-full flex justify-center items-center flex-col text-white">
                                        <h1 className='text-2xl xl:text-5xl font-bold flex '>
                                            <div className='font-noto uppercase'> {release.Title} </div>
                                        </h1>
                                        <p className='opacity-80 text-sm font-poppins '>{release.Artist}</p>
                                    </div>
                                </div>
                                <Image
                                    alt=""
                                    src={release.Picture}
                                    layout="fill"
                                    objectFit="cover"
                                    className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                    ))}
                </div >
            </div>
        </div>
    </>

)
