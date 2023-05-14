import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import cover1 from '../public/assets/cover/3.jpg';

export default function About() {
  return (
    <>
      {/* <Link href="/ninjas">
        Link test
      </Link> */}
      <Head>
        <title> YUREI | About </title>
        <meta name="keywords" content="nextjs" />
        <script src='../js/script.js' refer></script>
      </Head>
      <div class="cursor"></div>
      <div class="cursor2"></div>

      <div className='grid grid-cols-4 md:grid-cols-4 grid-flow-row-danse w-full overflow-hidden h-full'>
        <div class="overflow-hidden  aspect-video cursor-pointer relative group aspect-w-3 aspect-h-4 xl:aspect-w-7 xl:aspect-h-3 col-span-4">

          <iframe src="https://www.youtube-nocookie.com/embed/fC1HF29n9UA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='col-span-1 text-white hidden md:block'></div>
        <div className='pt-10 col-span-4 xl:col-span-1 text-white ml-5 mr-5 xl:mr-5 xl:ml-0'>
          <h2 className='text-3xl uppercase font-noto font-semibold'>who are we</h2>
          <p className='pt-2 text-sm font-normal font-poppins '>
            Lorem ipsum dolor sit amet. Qui ipsum velit et illum repudiandae non galisum architecto! Sit impedit obcaecati ut quam eius et rerum eveniet ea ratione autem qui quasi nihil.
          </p>

          <p className='pt-1 text-sm  font-normal font-poppins'>
            Sit autem deleniti rem consequuntur corrupti aut porro eius vel eligendi reiciendis aut ipsum architecto ut expedita maiores et architecto minus. Est beatae nesciunt quo porro omnis qui laboriosam eaque sit sunt obcaecati. Ut enim corporis eos excepturi impedit At enim quibusdam. 33 nobis neque nam distinctio dolorem non corporis omnis ea necessitatibus impedit.
          </p>

          <p className='pt-1 text-sm  font-normal font-poppins'>
            Quo quaerat quam in inventore iusto ad voluptatem accusamus qui obcaecati beatae. Qui saepe aperiam ab eveniet recusandae quo doloribus inventore qui placeat distinctio 33 rerum provident ea natus molestiae.
          </p>
        </div>
      </div>
    </>
  )
}