import Link from 'next/link';
import { useState } from 'react';
import { TbMenu } from 'react-icons/tb';
import { CgClose } from 'react-icons/cg';
import { useRouter } from 'next/router';
import { BsInstagram, BsTiktok } from 'react-icons/bs';
import { RiFacebookCircleLine, RiYoutubeLine, RiTwitterLine, } from 'react-icons/ri';

const NavBar = () => {
    const [navbar, setNavbar] = useState();

    const router = useRouter();

    return (
        <>
            <nav className='bg-black text-white w-full py-5 px-4 md:px-8'>
                <div className='justify-between md:items-center md:flex'>
                    <div className='flex items-center justify-between py-3 md:block'>
                        <div href='#' className='flex items-center'>
                            <span className='text-3xl font-bold font-heading self-center whitespace-nowrap dark:text-white uppercase'>
                                <div className='wrapper'>
                                    <h1 className='glitches font-noto font-black'>
                                        <div className='line'>
                                            <Link href={'/'}>YŪREI 劣化</Link>
                                        </div>
                                        <div className='line'>
                                            <Link href={'/'}>YŪREI 劣化</Link>
                                        </div>
                                        <div className='line'>
                                            <Link href={'/'}>YŪREI 劣化</Link>
                                        </div>
                                        <div className='line'>
                                            <Link href={'/'}>YŪREI 劣化</Link>
                                        </div>
                                        <div className='line'>
                                            <Link href={'/'}>YŪREI 劣化</Link>
                                        </div>
                                        <div className='line'>
                                            <Link href={'/'}>YŪREI 劣化</Link>
                                        </div>
                                        <div className='line'>
                                            <Link href={'/'}>YŪREI 劣化</Link>
                                        </div>
                                        <div className='line'>
                                            <Link href={'/'}>YŪREI 劣化</Link>
                                        </div>
                                        <div className='line'>
                                            <Link href={'/'}>YŪREI 劣化</Link>
                                        </div>
                                        <div className='line'>
                                            <Link href={'/'}>YŪREI 劣化</Link>
                                        </div>
                                    </h1>
                                </div>
                            </span>
                        </div>
                        <div className='md:hidden'>
                            <button
                                className='p-2 text-gray-700 rounded-md focus:border-gray-400 focus:border'
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <div>
                                        <CgClose className='text-white' size={50} />
                                    </div>
                                ) : (
                                    <div>
                                        <TbMenu className='text-white' size={50} />
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? '' : 'hidden'}`}>
                            <ul className='h-screen md:h-auto items-center justify-center md:flex md:space-x-8 md:mt-0 md:text-sm md:font-medium sm:pt-0 font-poppins uppercase'>
                                <li className='text-center pt-8 md:pt-0 text-3xl md:text-sm'>

                                    <Link className={router.pathname == "/" ? "active" : ""} href={'/'} onClick={() => setNavbar(!navbar)}>releases</Link>
                                </li>

                                <li className='text-center pt-8 md:pt-0 text-3xl md:text-sm'>
                                    <Link href={'/artist'} onClick={() => setNavbar(!navbar)}>artist</Link>
                                </li>
                                <li className=' text-center pt-8 md:pt-0 text-3xl md:text-sm'>
                                    <Link href={'/event'} onClick={() => setNavbar(!navbar)}>event</Link>
                                </li>
                                <li className='text-center pt-8 md:pt-0 text-3xl md:text-sm'>
                                    <Link href={'/about'} onClick={() => setNavbar(!navbar)}>About</Link>
                                </li>
                                <li className='text-center pt-8 md:pt-0 text-3xl md:text-sm'>
                                    <Link href={'/contact'} onClick={() => setNavbar(!navbar)}>contact</Link>
                                </li>

                                <li className='text-center pt-20 md:pt-0 md:hidden'>
                                    <div className='flex flex-col gap-y-1 justify-center lg:justify-start font-poppins font-normal'>
                                        <label>We've got stuff to tell you</label>
                                        <form className='lg:items-end flex flex-col lg:flex-row pt-2'>
                                            <input type='text' name='email' placeholder='Email' className='bg-black border-solid border-2 p-2  border-white lg:mr-3 lg:mb-0' />
                                            <button type='submit' value='submit' className='text-black bg-white hover:bg-gray-300        border-solid border-2 p-2 mt-2'>Submit</button>
                                        </form>

                                    </div>
                                </li>

                                <li className='text-center pt-20 md:pt-0 md:hidden'>
                                    <div className='flex flex-col lg:items-start items-center pb-10 lg:pb-0'>

                                        <p className='font-poppins font-normal'>Keep an eye on us</p>
                                        <div className='grid gap-x-4 grid-cols-5 mb-3 pt-2'>
                                            <button>
                                                <RiFacebookCircleLine className='bg-white hover:bg-gray-300 border-0 p-1 rounded-lg text-black' size={50} />
                                            </button>
                                            <button>
                                                <BsTiktok className='bg-white hover:bg-gray-300 border-0 p-2 rounded-lg text-black' size={50} />
                                            </button>
                                            <button>
                                                <BsInstagram className='bg-white hover:bg-gray-300 border-0 p-2 rounded-lg text-black' size={50} />
                                            </button>
                                            <button>
                                                <RiYoutubeLine className='bg-white hover:bg-gray-300 border-0 p-1 rounded-lg text-black' size={50} />
                                            </button>
                                            <button>
                                                <RiTwitterLine className='bg-white hover:bg-gray-300 border-0 p-1 rounded-lg text-black' size={50} />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
}

export default NavBar;