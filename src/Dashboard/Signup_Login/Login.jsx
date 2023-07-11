import React from 'react'
import Header from './Header'
import './signup_login.css'
import Footer from './Footer'

const Login = () => {
    return (
        <div className='min-h-screen bg-black-20 text-white grid content-between'>
            <div className='overflow-hidden'>
                <Header />
                <div className="sign_up__block pt-65px mt-16">
                    <div className="container mx-auto relative z-1">
                        <div
                            className="sign-up__header pt-14 pb-24 bg-white flex flex-col justify-center items-center rounded-t-86">
                            <p className="text-2xl sm:text-3xl xl:text-40px text-black  font-normal">Login</p>
                            <p className="text-lg text-black  font-normal">Welcome Back</p>
                        </div>
                        <div
                            className="sign-up__body grid grid-cols-1 md:grid-cols-2 rounded-t-58 rounded-r-58 bg-black mt-[-50px] rounded-58 relative  border-b-2 border-t-[1px] border-orange">
                            <div className="sign-up__form flex flex-col justify-center gap-30 py-6 px-6 lg:py-11 lg:px-14">
                                <h2 className="text-white text-2xl sm:text-3xl xl:text-5xl text-center xl:text-start font-bold mb-6">Nice to see you again</h2>

                                <form className="flex flex-col justify-center gap-y-6"autocomplete="off">
                                    <div className="flex flex-wrap p-[2px] gradient rounded-md">
                                        <label htmlFor="username"
                                            className="rounded-l-md gradient w-[195px] h-[49px] flex items-center justify-center lg:justify-start ps-0 lg:ps-4 text-sm xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start">Login</label>
                                        <input type="text" id="username" autocomplete="off"
                                            className="bg-black border-l-2 border-orange focus:outline-none focus-visible:none w-[calc(100%-195px)] h-[49px] border-gradient3 text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                            placeholder="Email or Phone Number" required />
                                    </div>
                                    <div className="flex flex-wrap p-[2px] gradient rounded-md">
                                        <label htmlFor="password" 
                                            className="rounded-l-md gradient w-[195px] h-[49px] flex items-center justify-center lg:justify-start ps-0 lg:ps-4 text-sm xl:text-lg text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start">Password</label>
                                        <input type="password" id="password" autocomplete="off"
                                        placeholder='Enter Password'
                                            className="bg-black border-l-2 border-orange focus:outline-none focus-visible:none w-[calc(100%-195px)] h-[49px] border-gradient3 text-gray font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                            required />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className='flex items-center'>
                                            <div className="flex items-center h-5">
                                                <input id="remember" type="checkbox" value="" className="w-[29px] h-[31px] border border-gray-300 rounded bg-gray-50 focus:ring-3
                                                        focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                                                        dark:focus:ring-offset-gray-800" required />
                                            </div>
                                            <label htmlFor="remember" className="ml-2 text-sm md:text-lg font-normal text-gray">Remember Me </label>
                                        </div>
                                        <p className="text-sm xl:text-lg font-normal leading-29 forgot-password-text bg-gradient-to-r from-orange to-red-500 bg-clip-text cursor-pointer">Forgot Password?</p>
                                    </div>
                                    <button className="gradient !py-3 w-full !text-lg xl:!text-25px uppercase !font-bold flex justify-center items-center text-white rounded-xl primary_btn">Login</button>
                                    <div className="or-block flex justify-center items-center gap-6">
                                        <div className="line-1 w-full h-[1px] bg-white"></div>
                                        <div className="text-white px-1">OR</div>
                                        <div className="line-1 w-full h-[1px] bg-white"></div>
                                    </div>
                                    <button
                                        className="w-full bg-gray-900 sign-up-google flex justify-center items-center text-white rounded-xl text-lg xl:text-25px font-light py-3">
                                        Sign up with Google <img src="images/google-1.png" alt="google image" className="ms-3" />
                                    </button>
                                </form>
                            </div>
                            <div className="sign-up__image relative rounded-r-58">
                                <img src="images/lovely-couples.png" alt="" className="rounded-r-58 object-cover h-full" />
                                <div
                                    className="sign-up__image-content absolute md:bottom-24 md:left-20 max-w-full lg:max-w-[538px] text-center md:text-start">
                                    <p className="text-xl sm:text-3xl md:text-4xl xl:text-40px text-white font-secondary_font">Login to the</p>
                                    <h2
                                        className="text-2xl sm:text-4xl md:text-4xl xl:text-5xl text-white font-bold leading-10 md:leading-45 xl:leading-65">
                                        World Best Adult Dating Site</h2>
                                </div>
                            </div>
                        </div>
                        <div className="audit-dating__block relative my-16">
                            <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 py-71px">
                                <img src="images/avn_award2-1.png" alt="award" />
                                <h2 className="text-white text-2xl sm:text-3xl xl:text-40px">#1 Adult Dating Site</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login