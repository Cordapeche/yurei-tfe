import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { releases } from '../../model/releases.js';
import { artists } from '../../model/artists.js';


export const getStaticProps = async ({ params }) => {
    const artistlist = artists.filter((p) => p.id.toString() === params.id);
    return {
        props: {
            artist: artistlist[0],
        },
    };
};

export const getStaticPaths = async () => {
    const paths = artists.map((artist) => ({
        params: { id: artist.id.toString() },
    }));

    return { paths, fallback: false };
};


export default ({ artist }) => (

    <>

        <Head>
            <title> YUREI | HOME </title>
            <meta name="description" content="A grid layout showcasing the label's featured artists, each with a profile picture, artist name, and a brief introduction or tagline highlighting their style." />
            <meta name='keywords' content='grid, display, yurei, album cover, releases' />
        </Head>

        <div className='grid grid-cols-2 md:grid-cols-4 w-full overflow-hidden h-full text-center'>
            <div className='overflow-hidden cursor-pointer relative group aspect-w-3 aspect-h-3 xl:aspect-w-7 xl:aspect-h-6 col-span-2'>
                <div className='z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute'></div>
                <Image
                    alt=''
                    src={artist.Picture}
                    layout='fill'
                    objectFit='cover'
                    class='object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out'
                />
            </div>

            <div className='relative group xl:aspect-w-7 xl:aspect-h-6 col-span-2'></div>

            <div className='overflow-hidden relative aspect-w-0 group xl:aspect-w-7 xl:aspect-h-6 hidden xl:block'>
                <div className=' z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute'></div>
            </div>

            <div className='col-span-2 text-white ml-5 mr-5 xl:mr-5 xl:ml-0 xl:col-span-1'>
                <div className='text-left pt-10'>
                    <a target="_blank" href={artist.Www}>
                        <h2 className='text-3xl font-semibold font-noto'>{artist.Name}</h2>
                    </a>
                    <p className='text-xl font-normal font-poppins'>{artist.Bio}</p>
                    <div className='text-left pt-10'>
                        <h2 className='text-3xl font-semibold uppercase font-noto pb-2'>Find them there</h2>

                        <div className='flex flex-row w-full justify-stretch items-center font-poppins'>
                            <a target="_blank" href={artist.YouTubeUrl}>
                                <div className='text-xl font-normal font-poppins hover:pl-10'>
                                    {artist.YouTube} <span className='text-gray-400'>{artist.YouTubeTag}</span>
                                </div>
                            </a>
                        </div>
                        <div className='flex flex-row w-full justify-stretch items-center font-poppins'>
                            <a target="_blank" href={artist.InstagramUrl}>
                                <div className='text-xl font-normal font-poppins hover:pl-10'>
                                    {artist.Instagram} <span className='text-gray-400'>{artist.InstagramTag}</span>
                                </div>
                            </a>
                        </div>
                        <div className='flex flex-row w-full justify-stretch items-center font-poppins'>
                            <a target="_blank" href={artist.FacebookUrl}>
                                <div className='text-xl font-normal font-poppins hover:pl-10'>
                                    {artist.Facebook} <span className='text-gray-400'>{artist.FacebookTag}</span>
                                </div>
                            </a>
                        </div>
                        <div className='flex flex-row w-full justify-stretch items-center font-poppins'>
                            <a target="_blank" href={artist.TwitterUrl}>
                                <div className='text-xl font-normal font-poppins hover:pl-10'>
                                    {artist.Twitter} <span className='text-gray-400'>{artist.TwitterTag}</span>
                                </div>
                            </a>
                        </div>
                        <div className='flex flex-row w-full justify-stretch items-center font-poppins'>
                            <a target="_blank" href={artist.TikTokUrl}>
                                <div className='text-xl font-normal font-poppins hover:pl-10'>
                                    {artist.TikTok} <span className='text-gray-400'>{artist.TikTokTag}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='pt-60 grid grid-cols-2 md:grid-cols-4 w-full overflow-hidden h-full text-center'>
            <div className='col-span-1 hidden xl:block'>

            </div>
            <div className='col-span-2 text-white text-left xl:col-span-1 ml-5 mr-5 xl:mr-5'>

                <h2 className='text-3xl font-semibold uppercase pt-10 py-5 font-noto'>Recently released</h2>
            </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 w-full overflow-hidden h-full text-center'>
            <div className=' col-span-4 '>
                <div className='grid grid-cols-2 md:grid-cols-4 w-full overflow-hidden h-full text-center'>
                    {releases.filter((ArtistId) => ArtistId.id === Number(artist)).map((release) => (




                        <Link href={'/songs/' + release.Artist} key={release.Artist}>
                            <div className="overflow-hidden cursor-pointer relative group aspect-w-3 aspect-h-3 xl:aspect-w-7 xl:aspect-h-7">
                                {/* <div className=" z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute">
                                    <div className="bg-black bg-opacity-50 h-full w-full flex justify-center items-center flex-col text-white">
                                        <h1 className='text-2xl xl:text-5xl font-bold flex '>
                                            <div className='font-noto uppercase'> {release.Title} </div>
                                        </h1>
                                        <p className='opacity-80 text-sm font-poppins '>{release.Artist}</p>
                                    </div>
                                </div> */}
                                <Image
                                    alt=""
                                    src={release.Picture}
                                    layout="fill"
                                    objectFit="cover"
                                    class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>

                    ))}


                </div >
            </div>
        </div>
    </>

)
