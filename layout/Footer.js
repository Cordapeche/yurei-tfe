import Image from 'next/image';
import { BsInstagram, BsTiktok } from 'react-icons/bs';
import { RiFacebookCircleLine, RiYoutubeLine, RiTwitterLine, } from 'react-icons/ri';
import Link from 'next/link';

// {/* <Link href='/ninjas'>
//         Link test
//       </Link> */}




const Footer = () => {

    return (
        <footer>
            <div className='bg-black text-white w-full py-32 px-4 md:px-8'>
                <div className='flex flex-col sm:flex-col lg:flex-row items-center justify-between'>
                    <div className='flex flex-col lg:items-start items-center pb-10 lg:pb-0'>
                        <div className=' grid gap-x-4 grid-cols-5 mb-3'>

                            <a target="_blank" aria-label="Facebook" href='https://www.facebook.com/yxreiprxd'>
                                <button aria-label="Facebook">
                                    <RiFacebookCircleLine className='bg-white hover:bg-gray-300 border-0 p-1 rounded-lg text-black' size={50} />
                                </button>
                            </a>

                            <a target="_blank" aria-label="Tiktok" href='https://www.tiktok.com/yxreiprxd'>
                            <button aria-label="Tiktok">
                                <BsTiktok className='bg-white hover:bg-gray-300 border-0 p-2 rounded-lg text-black' size={50} />
                            </button>
                            </a>

                            <a target="_blank" aria-label="Instagram"  href='https://www.instagram.com/yxreiprxd'>
                            <button aria-label="Instagram">
                                <BsInstagram className='bg-white hover:bg-gray-300 border-0 p-2 rounded-lg text-black' size={50} />
                            </button>                            
                            </a>

                            <a target="_blank" aria-label="Youtube" href='https://www.youtube.com/yxreiprxd'>
                            <button aria-label="Youtube">
                                <RiYoutubeLine className='bg-white hover:bg-gray-300 border-0 p-1 rounded-lg text-black' size={50} />
                            </button>
                            </a>

                            <a target="_blank" aria-label="Twitter" href='https://www.twitter.com/yxreiprxd'>
                            <button aria-label="Twitter">
                                <RiTwitterLine className='bg-white hover:bg-gray-300 border-0 p-1 rounded-lg text-black' size={50} />
                            </button>
                            </a>

                        </div>

                        <div className='text-sm font-poppins font-normal'>
                            YUREI © 2023 All right reserved
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row items-center justify-center pb-10 lg:pb-0'>
                        <div className='pb-4 md:pb-0'>
                            <span className='text-3xl font-heading self-center whitespace-nowrap p-3 dark:text-white font-noto font-black glitched'>YŪREI</span>
                        </div>
                        <div className='pb-4 md:pb-0 glitch2 relative'>
                            <Image
                                alt=''
                                src='/logo.svg'
                                width={150}
                                height={150}
                            />
                            <div className='glitch__layers glitch__layerss'>
                                <div className='glitch__layer'></div>
                                <div className='glitch__layer'></div>
                                <div className='glitch__layer'></div>
                            </div>
                        </div>
                        <div>
                            <span className='text-3xl pt-4 md:pt-0 font-heading self-center whitespace-nowrap p-3 dark:text-white font-black font-noto glitched'>劣化</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-1 justify-center lg:justify-start font-poppins font-normal w-full lg:w-auto'>
                        <label>Subscribe to our newsletter</label>
                        <form className='lg:items-end flex flex-col lg:flex-row'>
                            <input type='text' name='email' placeholder='Email' className='bg-black border-solid border-2 p-2  border-white lg:mr-3 lg:mb-0' />
                            <button type='submit' value='submit' className='text-black bg-white hover:bg-gray-300        border-solid border-2 p-2 mt-2'>Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;