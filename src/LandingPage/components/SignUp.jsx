import React from 'react'

const SignUp = () => {
    return (
        <section className='relative signup_section'>
            <div className='container mx-auto'>
                <div className='p-[3px] gradient relative rounded-2xl sm:rounded-50px -mt-16 z-[99]'>
                    <div className='p-2 bg-black rounded-2xl sm:rounded-50px'>
                        <div className='grid lg:grid-cols-2 bg-black rounded-2xl sm:rounded-50px items-center '>
                            <div className='py-8 px-3 sm:py-16 sm:px-10 xl:px-20 text-white'>
                                <p className='font-secondary_font text-3xl sm:text-5xl'>Sign Up Now!</p>
                                <h3 className='text-2xl sm:text-35px font-bold'>Have some fun tonight!</h3>
                                <div className='grid grid-cols-2 max-w-md mt-5'>
                                    <div>
                                        <span className='block max-w-[42px] h-1 bg-white mb-1'></span>
                                        <p className='text-lg sm:text-3xl font-bold'>98,897,765</p>
                                        <p className='text-sm sm:text-lg font-normal'>HOT PHOTOS</p>
                                    </div>
                                    <div>
                                        <span className='block max-w-[42px] h-1 bg-white mb-1'></span>
                                        <p className='text-lg sm:text-3xl font-bold'>3,594,914</p>
                                        <p className='text-sm sm:text-lg font-normal'>CONNECTIONS</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-5 sm:p-10 rounded-2xl sm:rounded-50px h-full'>
                                <h3 className='text-3xl sm:text-5xl text-center font-secondary_font'>Find Your Date</h3>
                                <form>
                                    <div className='grid sm:grid-cols-2 gap-x-14 gap-y-2 mt-8'>
                                        <div>
                                            <label className='block text-lg'>I am a</label>
                                            <div className='p-[1px] gradient rounded-xl'>
                                                <select name="cars" id="cars" className='w-full bg-white rounded-xl p-2 px-3 outline-0'>
                                                    <option value="volvo">M</option>
                                                    <option value="saab">F</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className='block text-lg'>Looking for</label>
                                            <div className='p-[1px] gradient rounded-xl'>
                                                <select name="cars" id="cars" className='w-full bg-white rounded-xl p-2 px-3 outline-0'>
                                                    <option value="volvo">M</option>
                                                    <option value="saab">F</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className='block text-lg'>Age</label>
                                            <div className='p-[1px] gradient rounded-xl'>
                                                <select name="cars" id="cars" className='w-full bg-white rounded-xl p-2 px-3 outline-0'>
                                                    <option value="volvo">18</option>
                                                    <option value="saab"> &gt; 18</option>
                                                    <option value="saab"> &lt; 18 </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className='block text-lg'>Country</label>
                                            <div className='p-[1px] gradient rounded-xl'>
                                                <select name="cars" id="cars" className='w-full bg-white rounded-xl p-2 px-3 outline-0'>
                                                    <option value="volvo">India</option>
                                                    <option value="saab">Australia</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='primary_btn w-full mt-8 !font-bold !text-2xl uppercase'>Join Now !</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp