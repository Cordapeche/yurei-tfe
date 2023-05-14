import Head from 'next/head';
import Link from 'next/link';
import { events } from '../../model/events.js';
import Image from 'next/image';


export const getStaticProps = async ({ params }) => {
    const eventlist = events.filter((p) => p.id.toString() === params.id);
    return {
        props: {
            even: eventlist[0],
        },
    };
};

export const getStaticPaths = async () => {
    const paths = events.map((even) => ({
        params: { id: even.id.toString() },
    }));

    return { paths, fallback: false };
};


export default ({ even }) => (

    <>
        <Head>
            <title> YUREI | HOME </title>
            <meta name="description" content="grid display of the latest and notable releases from Yurei, featuring album covers, release titles, and artist names. Each release should link to a dedicated page providing more information about the album, including tracklist, streaming platforms, and purchase options." />
            <meta name='keywords' content='grid, display, yurei, album cover, releases' />
        </Head>

        <div className='grid grid-cols-2 md:grid-cols-4 w-full overflow-hidden h-full text-center'>
            <div className="overflow-hidden relative group aspect-w-3 aspect-h-3 xl:aspect-w-7 xl:aspect-h-6 col-span-2">
                <div className="z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute">
                </div>
                <Image
                    alt=""
                    src={even.Picture}
                    layout="fill"
                    objectFit="cover"
                    class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                />
            </div>

            <div className='relative group xl:aspect-w-7 xl:aspect-h-6 col-span-2'></div>

            <div className='overflow-hidden relative aspect-w-0 group xl:aspect-w-7 xl:aspect-h-6 hidden xl:block'>
                <div className=' z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute'></div>
            </div>

            <div className='col-span-2 text-white ml-5 mr-5 xl:mr-5 xl:ml-0 xl:col-span-1'>
                <div className='text-left pt-10'>
                    <h1 className='text-5xl font-semibold uppercase font-noto'>{even.Name}</h1>
                    <h1 className='text-3xl font-semibold uppercase font-noto'>{even.NoEvent}</h1>
                    <h1 className='text-3xl font-semibold uppercase pt-10 font-noto pb-2'>When</h1>
                    <p className='text-xl text-gray-100'>{even.When}</p>
                    <h1 className='text-3xl font-semibold uppercase pt-10 font-noto pb-2'>Phonker</h1>
                    <div className='font-poppins font-normal text-gray-400'>
                        <Link href={'/artist/' + even.Id1}>
                            <p className='cursor-pointer hover:pl-10'>{even.id1}</p>
                        </Link>
                        <Link href={'/artist/' + even.Id2}>
                            <p className='cursor-pointer hover:pl-10'>{even.id2}</p>
                        </Link>
                        <Link href={'/artist/' + even.Id3}>
                            <p className='cursor-pointer hover:pl-10'>{even.id3}</p>
                        </Link>
                        <Link href={'/artist/' + even.Id4}>
                            <p className='cursor-pointer hover:pl-10'>{even.id4}</p>
                        </Link>
                        <Link href={'/artist/' + even.Id5}>
                            <p className='cursor-pointer hover:pl-10'>{even.id5}</p>
                        </Link>
                        <Link href={'/artist/' + even.Id6}>
                            <p className='cursor-pointer hover:pl-10'>{even.id6}</p>
                        </Link>
                        <Link href={'/artist/' + even.Id7}>
                            <p className='cursor-pointer hover:pl-10'>{even.id7}</p>
                        </Link>
                        <Link href={'/artist/' + even.Id8}>
                            <p className='cursor-pointer hover:pl-10'>{even.id8}</p>
                        </Link>
                        <Link href={'/artist/' + even.Id9}>
                            <p className='cursor-pointer hover:pl-10'>{even.id9}</p>
                        </Link>
                        <Link href={'/artist/' + even.Id10}>
                            <p className='cursor-pointer hover:pl-10'>{even.id10}</p>
                        </Link>
                        <Link href={'/artist/' + even.Id11}>
                            <p className='cursor-pointer hover:pl-10'>{even.id11}</p>
                        </Link>
                    </div>
                    <h1 className='text-3xl font-semibold uppercase pt-10 font-noto pb-2'>Where</h1>
                    <p className='text-xl max-w-xs text-gray-100'>{even.Where}</p>
                    <div className='text-left pt-10'></div>
                </div>
            </div>
        </div >
    </>

)
