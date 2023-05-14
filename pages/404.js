import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout (()=> {
            router.push('/');
        }, 15000)
    }, [])
    return (
        <>
        <Head>
            <title> YUREI | 404 </title>
            <meta name="keywords" content="nextjs" />
            <script src='../js/script.js' refer></script>
        </Head>
            <div class="cursor"></div>
            <div class="cursor2"></div>
            <div className='grid grid-cols-4 md:grid-cols-4 grid-flow-row-danse w-full overflow-hidden h-full'>
                <div className='col-span-1 text-white hidden md:block'></div>
                <div className='col-span-4 xl:col-span-1 text-white ml-5 mr-5 pb-52 xl:pb-96'>
                    <h2 className='pt-10 text-3xl font-semibold uppercase'>Don't know where you are?</h2>
                    <p className='pt-2 text-sm font-normal'>We have no idea either...</p>
                    <div className='flex flex-col pd-20'>
                        <Link href="/">
                            <button type='submit' value='submit' className='text-black bg-white hover:bg-gray-300 border-solid border-2 p-2 mt-2'>Back to home page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotFound;