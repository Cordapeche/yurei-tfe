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

        <iframe src="https://www.youtube.com/embed/aYDrlmKhqgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          {/* <iframe src="https://youtu.be/ffeaJMsAxE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
        <div className='col-span-1 text-white hidden md:block'></div>
        <div className='pt-10 col-span-4 xl:col-span-1 text-white ml-5 mr-5 xl:mr-5 xl:ml-0'>
          <h2 className='text-3xl uppercase font-noto font-semibold pb-2'>who are we</h2>
          <p className='text-sm font-normal font-poppins'>
            At our label, we celebrate the fusion of old-school sounds with a modern twist, creating a sonic experience that transports listeners to another era while keeping them firmly rooted in the present. We are passionate about pushing boundaries, embracing experimentation, and nurturing raw talent. With us, you'll find a platform to express your musical vision and reach audiences who crave the essence of true phonk.</p>

          <p className='text-sm font-normal font-poppins pt-2'>Our dedicated team of industry professionals is here to support you every step of the way. From production to promotion, we are committed to helping you refine your craft and amplify your voice. Collaborations, feedback sessions, and networking opportunities are all part of our thriving ecosystem. Together, we'll carve out a path that propels your career to new heights.</p>

          <p className='text-sm font-normal font-poppins pt-2'>As a member of our label, you'll be joining a family of like-minded artists who share your passion for phonk. Our community is vibrant, diverse, and supportive, fostering an environment of creativity and collaboration. Together, we'll push the boundaries of phonk music, break new ground, and leave a lasting impact on the scene.</p>

          <p className='text-sm font-normal font-poppins pt-2'>So, get ready to make some serious noise, create unforgettable tracks, and captivate audiences with your distinct phonk style. The Phonk Palace is your home, and we can't wait to witness your talent blossom and make waves in the industry.</p>

          <p className='text-sm font-normal font-poppins pt-2'>Once again, welcome to the Phonk Palace! Let's embark on this incredible musical journey together and revolutionize the phonk scene.
          </p>
          {/* <p className='text-sm font-normal font-poppins pt-2'>Yours in rhythm and groove,
          </p> */}
          <p className='text-sm font-normal font-poppins pt-2'>
            By lovers for lovers, YŪREI 劣化
          </p>
        </div>
      </div>
    </>
  )
}