import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { releases } from '../model/releases.js';


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
<meta name='keywords' content='nextjs' />
<script src='../js/script.js' refer></script>
</Head>
<div class="cursor"></div>
<div class="cursor2"></div>

<div className='grid grid-cols-2 md:grid-cols-4 w-full overflow-hidden h-full text-center' >

{releases.sort(function(a,b) {return b.id - a.id }).map(release => (

<Link href={'/songs/' + release.id} key={release.id}>
  
<div className="overflow-hidden cursor-pointer relative group aspect-w-3 aspect-h-3 xl:aspect-w-7 xl:aspect-h-6">
                                <div className=" z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute">
                                    <div className="bg-black bg-opacity-50 h-full w-full flex justify-center items-center flex-col text-white">
                                        <h1 className='text-2xl xl:text-5xl font-bold flex '>
                                            <div className='glitchedx uppercase font-noto font-bold'> {release.Title} </div>
</h1>
<p className='opacity-80 text-sm font-poppins font-medium'>
{release.Artist}</p>
</div>
</div>
<Image
alt=''
src={release.Picture}
layout='fill'
objectFit='cover'
class='object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out'
/>
</div>
</Link>
))}
</div >

</>
)



// export default function Home() {

//   return (
//     <>
//       {/* <Link href='/ninjas'>
//         Link test
//       </Link> */}
//       <Head>
//         <title> YUREI | HOME </title>
//         <meta name='keywords' content='nextjs' />
//       </Head>






//       < div className='grid grid-cols-2 md:grid-cols-4 w-full overflow-hidden h-full text-center' >
//         {releases.map(release => (
//           <Link href={'/releases/' + release.id} key={release.id}>



//             <div className='overflow-hidden cursor-pointer relative group aspect-w-3 aspect-h-3 xl:aspect-w-7 xl:aspect-h-6'>
//               <div className=' z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute'>
//                 <div className='bg-black bg-opacity-50 h-full w-full flex justify-center items-center flex-col text-white'>
//                   <h1 className='text-2xl xl:text-5xl font-bold uppercase flex '>
//                     <div className='glitched'> {release.Title} </div>
//                   </h1>
//                   <p className='opacity-80 text-sm uppercase'>
                    
//                     {release.Artist}</p>
//                 </div>
//               </div>
//               <Image
//                 alt=''
//                 src={release.Picture}
//                 layout='fill'
//                 objectFit='cover'
//                 class='object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out'
//               />
//             </div>
//           </Link>
//         ))}

//       </div >
//     </>
//   )
// }
