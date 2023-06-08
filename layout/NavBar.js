import Link from 'next/link';
import { useState, useRef } from 'react';
import { TbMenu } from 'react-icons/tb';
import { CgClose } from 'react-icons/cg';
import { useRouter } from 'next/router';
import { BsInstagram, BsTiktok } from 'react-icons/bs';
import { RiFacebookCircleLine, RiYoutubeLine, RiTwitterLine, } from 'react-icons/ri';
import React, { useEffect } from 'react';
import Newsletter from '../component/newsletter';

const NavBar = () => {
    const [isHidden, setIsHidden] = useState(false)

    const router = useRouter();

    const [showElement, setShowElement] = useState(true);
    useEffect(() => {
        setTimeout(function () {
            setShowElement(false);
        }, 5000);
    }, []);

  

    return (
        <>
            <nav className='bg-black text-white w-full py-5 relative'>
                <div className='justify-between md:items-center md:flex top-0  z-50'>
                    <div className='flex items-center px-4 md:px-8 justify-between  py-3 md:block '>
                        <div className='flex items-center'>
                            <span className='text-3xl font-bold font-heading self-center whitespace-nowrap dark:text-white uppercase'>
                                <div className='wrapper'>
                                    <h1 className='glitches font-noto font-black logo' >
                                        <div className='line'>
                                            <Link href={'/'}>YŪREI 劣化</Link>
                                        </div>
                                        {showElement ? (
                                            <div
                                                style={{
                                                    opacity: showElement ? 1 : 0
                                                }}
                                            >
                                                <div className='line absolute text-black'>
                                                    <Link href={'/'}>.</Link>
                                                </div>
                                                <div className='line absolute'>
                                                    <Link href={'/'}>YXREI 劣化</Link>
                                                </div>
                                                <div className='line absolute'>
                                                    <Link href={'/'}>YŪRXI 劣化</Link>
                                                </div>
                                                <div className='line absolute'>
                                                    <Link href={'/'}>YŪREI 劣化</Link>
                                                </div>
                                                <div className='line absolute'>
                                                    <Link href={'/'}>YŪREX 劣化</Link>
                                                </div>
                                                <div className='line absolute'>
                                                    <Link href={'/'}>YŪREI 劣化</Link>
                                                </div>
                                                <div className='line absolute'>
                                                    <Link href={'/'}>XŪREI 劣化</Link>
                                                </div>
                                                <div className='line absolute'>
                                                    <Link href={'/'}>YŪXEI 劣化</Link>
                                                </div>
                                                <div className='line absolute'>
                                                    <Link href={'/'}>YŪREI XX</Link>
                                                </div>
                                            </div>) : (
                                            <div></div>
                                        )}{' '}
                                    </h1>
                                </div>
                            </span>
                        </div>
                        <div className='md:hidden'>
                            <button aria-label='menu'
                                className='p-2 text-gray-700 rounded-md focus:border-gray-400 focus:border menu'
                                onClick={() => setIsHidden(!isHidden)}
                            >
                                {isHidden ? (
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
                    <div className='absolute md:relative z-50 w-full h-full'>
                        <div
                            className={`flex-1 w-full h-full justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${isHidden ? '' : 'hidden'}`}>
                            <ul className='bg-black px-4 md:px-8 w-full items-center justify-end md:flex md:space-x-8 md:mt-0 md:text-sm md:font-medium sm:pt-0 font-poppins uppercase menu'>
                                <li className='text-center pt-8 md:pt-0 text-3xl md:text-sm '>

                                    <a className={router.pathname == '/' ? 'glitch font-bold text-4xl md:text-lg' : ''} href={'/'} >releases</a>
                                </li>

                                <li className='text-center pt-8 md:pt-0 text-3xl md:text-sm'>
                                    <a className={router.pathname == '/artist' ? 'glitch font-bold text-4xl md:text-lg' : ''} href={'/artist'} >artists</a>
                                </li>
                                <li className=' text-center pt-8 md:pt-0 text-3xl md:text-sm'>
                                    <a className={router.pathname == '/event' ? 'glitch font-bold text-4xl md:text-lg' : ''} href={'/event'} >event</a>
                                </li>
                                <li className='text-center pt-8 md:pt-0 text-3xl md:text-sm'>
                                    <a className={router.pathname == '/about' ? 'glitch font-bold text-4xl md:text-lg' : ''} href={'/about'} >About</a>
                                </li>
                                <li className='text-center pt-8 md:pt-0 text-3xl md:text-sm'>
                                    <a className={router.pathname == '/contact' ? 'glitch font-bold text-4xl md:text-lg' : ''} href={'/contact'} >contact</a>
                                </li>

                                <li className='text-center pt-20 md:pt-0 md:hidden'>
                                    <div className='flex flex-col gap-y-1 justify-center lg:justify-start font-poppins font-normal'>
                                    <Newsletter />
                                    </div>
                                </li>

                                <li className='text-center pt-20 md:pt-0 md:hidden'>
                                    <div className='flex flex-col lg:items-start items-center pb-10 lg:pb-0'>

                                        <p className='font-poppins font-normal'>Keep an eye on us</p>
                                        <div className='grid gap-x-4 grid-cols-5 mb-3 pt-5'>
                                            <a target='_blank' aria-label='Facebook' href='https://www.facebook.com/yxreiprxd'>
                                                <button aria-label='Facebook'>
                                                    <RiFacebookCircleLine className='bg-white hover:bg-gray-300 border-0 p-1 rounded-lg text-black' size={50} />
                                                </button>
                                            </a>

                                            <a target='_blank' aria-label='Tiktok' href='https://www.tiktok.com/yxreiprxd'>
                                                <button aria-label='Tiktok'>
                                                    <BsTiktok className='bg-white hover:bg-gray-300 border-0 p-2 rounded-lg text-black' size={50} />
                                                </button>
                                            </a>

                                            <a target='_blank' aria-label='Instagram' href='https://www.instagram.com/yxreiprxd'>
                                                <button aria-label='Instagram'>
                                                    <BsInstagram className='bg-white hover:bg-gray-300 border-0 p-2 rounded-lg text-black' size={50} />
                                                </button>
                                            </a>

                                            <a target='_blank' aria-label='Youtube' href='https://www.youtube.com/yxreiprxd'>
                                                <button aria-label='Youtube'>
                                                    <RiYoutubeLine className='bg-white hover:bg-gray-300 border-0 p-1 rounded-lg text-black' size={50} />
                                                </button>
                                            </a>

                                            <a target='_blank' aria-label='Twitter' href='https://www.twitter.com/yxreiprxd'>
                                                <button aria-label='Twitter'>
                                                    <RiTwitterLine className='bg-white hover:bg-gray-300 border-0 p-1 rounded-lg text-black' size={50} />
                                                </button>
                                            </a>
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