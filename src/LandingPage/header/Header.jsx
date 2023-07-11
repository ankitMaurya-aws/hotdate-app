import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='landingpage_header_main absolute top-0 left-0 z-[999] w-full pt-5'>
            <div className='container mx-auto'>
                <div className='landingpage_header flex flex-wrap items-center justify-between'>
                    <div className='w-[150px]'>
                        <img src='landingPage/images/landing-logo.png' className='cursor-pointer max-w-100px mx-auto block' />
                    </div>
                    <div className='w-[calc(100%-150px)]'>
                        <nav className='flex justify-between'>
                            <ul className='w-[calc(100%-150px)] max-w-full flex justify-center items-center'>
                                <li className='uppercase px-5'>
                                    <Link>Homepage</Link>
                                </li>
                                <li className='uppercase px-5'>
                                    <Link>login</Link>
                                </li>
                                <li className='uppercase px-5'>
                                    <Link>Live chat</Link>
                                </li>
                                <li className='uppercase px-5'>
                                    <Link>Contact</Link>
                                </li>
                                <li className='uppercase px-5'>
                                    <Link>About us</Link>
                                </li>
                            </ul>
                            <div className='w-[150px] flex justify-end'>
                                <Link className='uppercase primary_btn'>Join now</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header