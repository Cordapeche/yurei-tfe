import Head from 'next/head'

export default function About() {
  return (
    <>
      {/* <Link href="/ninjas">
        Link test
      </Link> */}
      <Head>
        <title> YUREI | ABOUT </title>
        <meta name="description" content="A detailed description of Yurei, including its mission, vision, and the story behind its establishment. Highlight the label's commitment to promoting underground artists and fostering a community around phonk music." />
        <meta name='keywords' content='grid, display, yurei, album cover, releases' />
      </Head>


      <div className='grid grid-cols-4 md:grid-cols-4 grid-flow-row-danse w-full overflow-hidden h-full'>
        <div className="overflow-hidden  aspect-video cursor-pointer relative group aspect-w-3 aspect-h-4 xl:aspect-w-7 xl:aspect-h-3 col-span-4">

          <iframe src="https://www.youtube.com/embed/jGLGFlYQB9Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          {/* <iframe src="https://youtu.be/ffeaJMsAxE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
        <div className='col-span-1 text-white hidden md:block'></div>
        <div className='pt-10 col-span-4 xl:col-span-1 text-white ml-5 mr-5 xl:mr-5 xl:ml-0'>
          <h2 className='text-3xl uppercase font-noto font-semibold pb-2'>who are we</h2>
          <p className='text-sm font-normal font-poppins'>
            On our label, we Love blending vintage sounds with contemporary influence to produce sound experiences that take listeners back in time while firmly rooting them in the present.
            Yurei team of experts are here to guide you every step of the way from production through promotion, we will help you hone your craft. Through collaborations, feedback sessions, and networking opportunities, together we will plan a path that will take your career to the next level. You'll discover a platform with us to express your musical vision and meet an audience hungry for the essence of authentic phonk.<br></br><br></br>
            As a member of our label, you become part of a family of like-minded artists who share your passion for phonk.  Our community is diverse, encouraging innovation and cooperation. We'll push the frontiers of phonk music together, break new ground, and leave a lasting impression on the stage.<br></br>
            So prepare to generate new sound, create outstanding records and captivate listeners with your signature phonk style. We look forward to see your talent bloom and earn a name in the industry.
            Welcome to Yurei! Let's go on this musical journey together and transform the phonk scene. </p>

          {/* <p className='text-sm font-normal font-poppins pt-2'>Yours in rhythm and groove,
          </p> */}
          <p className='text-sm font-normal font-poppins pt-2'>
            By lovers for lovers, <span className='menucolor'>YŪREI 劣化</span>
          </p>
        </div>
      </div>
    </>
  )
}