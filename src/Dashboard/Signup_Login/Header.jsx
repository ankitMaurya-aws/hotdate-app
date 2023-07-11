import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="Custom_header w-full z-10 pt-14 header-2" id="myHeader">
        <div className="container mx-auto">
            <nav>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
                    <Link href="./index.html" className="flex items-center">
                        <img src="images/Hot-Date.png" className="mr-3 logo_image max-w-[150px] xl:max-w-[215px] h-auto"
                            alt="Logo" />
                    </Link>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto" id="mobile-menu-2">

                        <ul className="flex mt-4 font-medium lg:mt-0 gap-x-6 xl:gap-x-16">
                            <li>
                                <Link className="block py-2 px-4 text-base lg:text-lg text-black lg:text-white lg:p-0 dark:text-white uppercase leading-27" aria-current="page">Homepage</Link>
                            </li>
                            <li>
                                <Link className="block py-2 px-4 text-base lg:text-lg text-black lg:text-white uppercase leading-27 border-bborder-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Live
                                chat
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="block py-2 px-4 text-base lg:text-lg text-black lg:text-white uppercase leading-27 border-b
                                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                                    lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white
                                    dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                    About Us</Link>
                            </li>
                            <li>
                                <Link
                                    className="block py-2 px-4 text-base lg:text-lg text-black lg:text-white uppercase leading-27 border-b
                             border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                              lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white
                               dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                            </li>
                            <li>
                                <Link
                                    className="block py-2 px-4 text-base lg:text-lg text-orange uppercase leading-27 border-b font-bold
                             border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                              lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white
                               dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Join
                                    now</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="flex items-center lg:hidden">
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="items-center p-2 ml-1 text-sm
                            text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
                            focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2" aria-expanded="false" onclick="myFunction">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    )
}

export default Header