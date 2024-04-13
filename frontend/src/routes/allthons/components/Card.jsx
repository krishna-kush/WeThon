import React from 'react'


function Card() {
  return (
    <div className='w-full'>

    <div className='border rounded-xl rounded-r-none border-green-300 bg-slate-600  h-fit w-full grid grid-cols-3 shadow-lg dark:bg-[#3B3E47] dark:hover:bg-[#53565e] hover:bg-[#00000020] duration-300 '>
        <div className='  h-full  col-span-2 p-6 flex ' >
            <div className='h-28 min-w-28 bg-white'></div>
            <div className='pl-4 flex gap-2 flex-col w-full'>
                <h1 className='text-white text-xl font-bold'>Thon Name</h1>
                <div className='flex justify-between w-full text-sm text-gray-300 pt-2'>
                    <div> 
                        <span className=' bg-green-500 px-2 rounded-2xl py-0.5 text-white'>20 days left</span>
                        <div className='pt-2'>Mar 18 - May 03, 2024</div>
                    </div>
                    <div> 
                        <div className='mb-2'><b>50,000</b> in prizes</div>
                        <div><b>11000 </b>particepents</div>
                    </div>
                </div>

                <div className='text-white pt-2'>
                    this will be the desctiption of the thon
                </div>
                
            </div>

        </div>
        <div className='border-l border-r-8 border-green-300  h-full p-8'>
            <a href="www.google.com"> <Topics topics={['Google']}></Topics></a>
            <div className='pt-2 text-white'>Mar 18 - May 03, 2024</div>
            <div className='flex flex-col gap-2 pt-2 bg-blue-100 rounded-lg py-2 px-1 mt-2'>
                <Topics topics={['Machine Learning','Data Science']}/>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Card


function Topics({topics}){
    return (
        <>
            {topics.map(topic=>(
                <span className='border bg-blue-200 border-blue-500 text-blue-500 px-2 rounded-2xl py-0.5 w-fit '>{topic}</span>
            ))}
        </>
    )
}