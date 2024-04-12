import React from 'react'
import Card from './components/Card'
import Filter from './components/Filter'

function AllThons() {


  return (
    <div className=' bg-gray-600 max-h-full min-h-screen pb-24 flex flex-col justify-center items-center gap-8'>
      <div className='flex items-center flex-col '> 
        <div className=' p-4 text-white text-[50px] font-bold'>All Thons</div>
        <div className=' p-4 text-white/60  text-2xl'>Find all the thons here</div>
      </div>
      <Filter/>
      <div className='w-full flex justify-center'>
        <div className=' w-3/6 flex flex-col gap-8'> 
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        
        </div>
      </div>

    </div>
  )
}

export default AllThons