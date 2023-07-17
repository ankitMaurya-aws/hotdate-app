import React from 'react'

const EventPage = () => {
    return (
        <div className='bg-black py-8 px-6 rounded-2xl rounded-r-none min-h-full'>
            <div className='sticky top-0 bg-black z-[9] py-5'>
                <div className='flex flex-wrap gap-5'>
                    <div className='gradient p-[2px] rounded-t-50px flex-1'>
                        <div className='bg-black h-[100px] flex items-center justify-center rounded-t-50px'>
                        <h3 className='px-5 rounded-t-50px clipped_text bg-gradient-to-r from-orange to-red-500 bg-clip-text cursor-pointer text-5xl font-bold'>Hot Dates</h3>
                        </div>
                    </div>
                    <div className='gradient p-[2px] rounded-t-50px flex-1'>
                        <div className='bg-black justify-center h-[100px] flex items-center rounded-t-50px'>
                        <h3 className='px-5 rounded-t-50px clipped_text bg-gradient-to-r from-orange to-red-500 bg-clip-text cursor-pointer text-5xl font-bold'>Parties
                        </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventPage 