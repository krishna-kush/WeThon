import { Input } from '@mui/material'
import { Datepicker, FileInput } from 'flowbite-react'
import React from 'react'


function Createthon() {
    return (
        <div className=' bg-[#232323] max-h-full min-h-screen pb-24 flex flex-col justify-center items-center gap-8'>
            <div className='flex items-center flex-col  '>
                <div className=' p-4 text-white text-[50px] font-bold'>Create HackaThons</div>
                <div className='max-w-[800px] text-center p-4 text-white/60  text-2xl '>Fill the details to create hackathon on <b>weThon.</b></div>
            </div>

            <div className='w-full flex justify-center'>
                <div className=' w-3/6 flex flex-col gap-8'>
                    <div className='text-white flex flex-col gap-2'>
                        <div className='flex items-center gap-8 pb-4 justify-between'>
                            <div
                                className='h-28 w-28 bg-white bg-center bg-cover rounded-full'
                                style={{
                                    backgroundImage: "url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')"
                                }}
                            ></div>
                            <div className='flex flex-col gap-4'>
                                <div>
                                    Profile<FileInput className='border-none' />
                                </div>
                                <div>
                                    Banner<FileInput className='border-none' />
                                </div>
                            </div>
                        </div>
                        <div>

                            <div className='text-white text-lg'>Hackathon Name</div>
                            <input className='w-full p-2 bg-[#302f2f] rounded-lg' type="text" />
                        </div>
                        <div>
                            <div className='text-white text-lg pt-4'>Hackathon Description</div>
                            <textarea className='w-full p-2 h-28 bg-[#302f2f] rounded-lg' type="text" />
                        </div>
                        <div className='flex items-center justify-between '>
                            <div>
                                <div className='textx-white text-lg pt-4'>Start Date</div>
                                <Datepicker />
                            </div>
                            <div className='w-1/2 flex flex-col justify-end items-end'>
                                <div className='text-white text-lg pt-4'>End Date</div>
                                <Datepicker />
                            </div>
                        </div>
                        <div className='flex justify-between '>
                            <div className='w-1/2'>
                                <div className='text-white text-lg pt-4'>Prizepool  ( In INR )</div>
                                <input className=' p-2 bg-[#302f2f] rounded-lg w-2/3' placeholder='99999' type="number" />
                            </div>
                            <div className='w-1/2 flex flex-col justify-end items-end'>
                                <div className='text-white text-lg pt-4 '>Registration Fee  ( In INR )</div>
                                <input className='w-2/3 p-2 bg-[#302f2f] rounded-lg' placeholder='99999' type="number" />
                            </div>

                        </div>
                        <div>
                            <div className='text-white text-lg pt-4'>Topics</div>
                            <input className='w-full p-2 bg-[#302f2f] rounded-lg' type="text" />
                        </div>
                        <div className='text-white text-lg pt-4'>Rules</div>
                        <textarea className='w-full p-2 h-28 bg-[#302f2f] rounded-lg' type="text" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Createthon