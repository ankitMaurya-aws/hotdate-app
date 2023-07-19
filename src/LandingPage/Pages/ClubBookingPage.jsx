import React from 'react'
import { Link } from 'react-router-dom'

const ClubBookingPage = () => {
    return (
        <div className='bg-black-20'>
            <div className='min-h-[350px] md:min-h-[400px] flex justify-center items-end bg-black rounded-b-50px'>
                <div className='container mx-auto pb-20 text-center'>
                    <h3 className='font-secondary_font text-40px'>Book Club</h3>
                    <p className='text-lg'>Lorem Ipsum is dummy content</p>
                </div>
            </div>
            <div className='pt-10 container mx-auto'>
                <div className='flex flex-wrap items-stretch max-w-5xl bg-white rounded-xl mx-auto'>
                    <div className='w-full md:w-[35%] border-t-2 md:border-t-0 md:border-l-2 border-orange rounded-xl'>
                        <img src="landingPage/images/sex-chat-img.png" alt="sex-chat-img" className='rounded-2xl h-full object-cover w-full' />
                    </div> 
                    <div className='w-full md:w-[65%] p-5 sm:p-8 text-black max-w-lg mx-auto'>
                        <h3 className='text-3xl font-normal mb-3'>Sex Chat</h3>
                        <div className='flex flex-wrap justify-between gap-3 mb-3'>
                            <p className='flex flex-wrap text-lg'>
                                <img src="landingPage/images/tag-icon.png" alt="tag-icon" className='h-6 mr-3' />
                                <span>by Ritul</span>
                            </p>
                            <p className='flex flex-wrap text-lg'>
                                <img src="landingPage/images/location-icon.png" alt="location-icon" className='h-6 mr-3' />
                                <span>Delhi, IND</span>
                            </p>
                        </div>
                        <div className='flex flex-wrap justify-start gap-5 font-light mb-3'>
                            <p className='flex flex-wrap items-center text-lg'>
                                <img src="landingPage/images/member-icon.png" alt="member-icon" className='h-4 mr-3' />
                                <span>186</span>
                            </p>
                            <p className='flex flex-wrap items-center text-lg font-light'>
                                <img src="landingPage/images/calendar-icon.png" alt="calendar-icon" className='h-4 mr-3' />
                                <span>Since Aug 16, 2022</span>
                            </p>
                        </div>
                        <p className='mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className='flex flex-wrap justify-between gap-3 items-center'>
                            <p className='text-lg'>Booking Price : <span>$200</span></p>
                            <Link className='primary_btn'>Book Club</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="audit-dating__block relative py-4 md:py-16 md:pt-0 container mx-auto mt-14">
                <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 py-71px">
                <img
                    src="images/avn_award2-1.png"
                    alt="award"
                    className="max-w-200px md:max-w-full"
                />
                <h2 className="text-white text-2xl sm:text-3xl xl:text-40px">
                    #1 Adult Dating Site
                </h2>
                </div>
            </div>
        </div>  
    )
}

export default ClubBookingPage