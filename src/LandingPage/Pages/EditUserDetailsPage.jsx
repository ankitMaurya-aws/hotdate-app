import React from 'react'

const EditUserDetailsPage = () => {
    return (
        <div className='bg-black-20'>
            <div className='min-h-[350px] md:min-h-[400px] flex justify-center items-end bg-black rounded-b-50px'>
                <div className='container mx-auto pb-20 text-center'>
                    <h3 className='font-secondary_font text-40px'>Edit User Details</h3>
                    <p className='text-lg'>Lorem Ipsum is dummy content</p>
                </div>
            </div>
            <div className='container mx-auto'>
            <form
                className=" max-w-7xl mx-auto mt-10"
                autoComplete="off"
                >
                    <div className='grid md:grid-cols-2 gap-x-10 justify-stretch md:justify-center gap-y-4 sm:gap-y-6'>
                        <div className='grid gap-y-4 md:gap-y-6'>
                            <div>
                                <div className="flex flex-wrap rounded-md input_field">
                                <label
                                    htmlFor="email"
                                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    // value={form.email}
                                    // onChange={(e) => handleChange(e)} autoComplete="off"
                                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                    // placeholder="name@flowbite.com"
                                    required
                                />
                                </div>
                                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                            </div>
                            <div>
                                <div className="flex flex-wrap rounded-md input_field">
                                    <label
                                        htmlFor="username"
                                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        // value={form.email}
                                        // onChange={(e) => handleChange(e)} autoComplete="off"
                                        className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                        // placeholder="name@flowbite.com"
                                        required
                                    />
                                </div>
                                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                            </div>
                            <div>
                                <div className="flex flex-wrap rounded-md input_field">
                                <label
                                    htmlFor="email"
                                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                                >
                                    Sexual Orientation
                                </label>
                                <select
                                    name="reason"
                                    id="reason"
                                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                >
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                </select>
                                </div>
                                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                            </div>
                            <div>
                                <div className="flex flex-wrap rounded-md input_field">
                                <label
                                    htmlFor="gender"
                                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                                >
                                    Gender
                                </label>
                                <select
                                    name="gender"
                                    id="gender"
                                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                                </div>
                                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                            </div>
                            <div>
                                <div className="flex flex-wrap rounded-md input_field">
                                <label
                                    htmlFor="marital_status"
                                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                                >
                                    Marital Status
                                </label>
                                <select
                                    name="marital_status"
                                    id="marital_status"
                                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                >
                                    <option>Unmarried</option>
                                    <option>Married</option>
                                </select>
                                </div>
                                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                            </div>
                            <div>
                                <div className="flex flex-wrap rounded-md input_field">
                                    <label
                                        htmlFor="body_type"
                                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                                    >
                                        Body Type
                                    </label>
                                    <input
                                        type="text"
                                        id="body_type"
                                        name="body_type"
                                        // value={form.email}
                                        // onChange={(e) => handleChange(e)} autoComplete="off"
                                        className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                        // placeholder="name@flowbite.com"
                                        required
                                    />
                                </div>
                                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                            </div>
                            <div>
                                <div className="flex flex-wrap rounded-md input_field">
                                    <label
                                        htmlFor="race"
                                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                                    >
                                        Race
                                    </label>
                                    <input
                                        type="text"
                                        id="race"
                                        name="race"
                                        // value={form.email}
                                        // onChange={(e) => handleChange(e)} autoComplete="off"
                                        className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                        // placeholder="name@flowbite.com"
                                        required
                                    />
                                </div>
                                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                            </div>
                            <div>
                                <div className="flex flex-wrap rounded-md input_field">
                                    <label
                                        htmlFor="speaks"
                                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                                    >
                                        Speaks
                                    </label>
                                    <input
                                        type="text"
                                        id="speaks"
                                        name="speaks"
                                        // value={form.email}
                                        // onChange={(e) => handleChange(e)} autoComplete="off"
                                        className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                        // placeholder="name@flowbite.com"
                                        required
                                    />
                                </div>
                                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                            </div>
                            
                        </div>
                        <div className='grid gap-y-4 md:gap-y-6 items-start content-start'>
                        <div>
                                <div className="flex flex-wrap rounded-md input_field">
                                    <label
                                        htmlFor="dob"
                                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                                    >
                                        DOB
                                    </label>
                                    <input
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        // value={form.email}
                                        // onChange={(e) => handleChange(e)} autoComplete="off"
                                        className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                        // placeholder="name@flowbite.com"
                                        required
                                    />
                                </div>
                                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                            </div>
                            <div>
                                <div className="flex flex-wrap rounded-md input_field">
                                    <label
                                        htmlFor="age"
                                        className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                                    >
                                        Age
                                    </label>
                                    <input
                                        type="text"
                                        id="age"
                                        name="age"
                                        // value={form.email}
                                        // onChange={(e) => handleChange(e)} autoComplete="off"
                                        className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                        // placeholder="name@flowbite.com"
                                        required
                                    />
                                </div>
                                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                            </div>
                            <div>
                                <div className="flex flex-wrap rounded-md input_field">
                                <label
                                    htmlFor="looking_for"
                                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                                >
                                    Looking for
                                </label>
                                <select
                                    name="looking_for"
                                    id="looking_for"
                                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Couple</option>
                                </select>
                                </div>
                                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                            </div>
                            <div>
                                <div className="flex flex-wrap rounded-md input_field">
                                <label
                                    htmlFor="relocate"
                                    className="rounded-l-md w-full md:w-[120px] xl:w-[195px] md:h-[49px] flex items-center justify-start md:px-2 lg:px-4 text-sm mb-1 md:mb-0 md:text-text-xs xl:text-base text-orange md:text-white  font-normal leading-5 xl:leading-29 text-center lg:text-start"
                                >
                                    Relocate
                                </label>
                                <select
                                    name="relocate"
                                    id="relocate"
                                    className="bg-black-20 border rounded-md md:rounded-none md:border-none md:border-l-2 md:rounded-r-md border-orange focus:outline-none focus-visible:none w-full md:w-[calc(100%-120px)] xl:w-[calc(100%-195px)] h-[49px] text-white font-normal xl:text-lg rounded-r-md text-sm px-2 xl:px-4 py-2.5 text-start placeholder:text-lg placeholder:text-gray items-center flex justify-between"
                                >
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                </div>
                                {/* {formErrors.email && (<p className="w-full capitalize text-xs p-1">{formErrors.email}</p>)} */}
                            </div>
                            
                            <div>
                                <label
                                    htmlFor="intro_msg"
                                    className="gradient w-full h-[53px] flex items-center justify-center xl:text-base text-white  font-normal leading-29 rounded-md mb-6"
                                    >
                                    Introduction
                                </label>
                                <div className="p-[2px] gradient rounded-md">
                                    <textarea
                                    type="text"
                                    id="intro_msg"
                                    rows={4}
                                    name="introduction"
                                    // value={form.introduction}
                                    // onChange={(e) => handleChange(e)}
                                    className="bg-black-20 focus:outline-none focus-visible:none w-full border-gradient3 text-white font-normal xl:text-lg rounded-md text-sm px-2 xl:px-4 py-2.5 items-center flex justify-between"
                                    required
                                    ></textarea>
                                </div>
                            </div>
                            <div>
                                <label className="flex w-full min-h-[53px] bg-gray-900 py-[10px] px-4 text-lg justify-center items-center cursor-pointer rounded-md">
                                    <span className="w-6 block mr-2">
                                        <img src="images/gallery-icon.png" alt="gallery-icon" />
                                    </span>
                                    Edit Profile Image
                                    <input
                                        type="file"
                                        multiple
                                        className="hidden"
                                        // onChange={(e) => handleImageChange(e)}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                <button
                    className="gradient !py-3 w-full max-w-xs mx-auto md:ml-auto !text-lg xl:!text-25px capitalize !font-bold mt-10 !flex justify-center items-center text-white rounded-xl primary_btn"
                    // onClick={(e) => handleSignup(e)}
                >
                    Save
                </button>
                </form>
                <div className="audit-dating__block relative py-16">
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
        </div>
    )
}

export default EditUserDetailsPage