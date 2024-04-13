import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Filter from './components/Filter'

import { getAllHack } from '../../api/hack'

function AllThons() {

  const [data, setData] = useState([])

  useEffect(()=>{
    
    const fetchData = async () => {
      const response = await getAllHack();
      console.log(response.data.data);
      setData(response.data.data);
    };
  
    fetchData();

  }, [])


  return (
    <div className=' bg-[#232323] max-h-full min-h-screen pb-24 flex flex-col justify-center items-center gap-8'>
      <div className='flex items-center flex-col '> 
        <div className=' p-4 text-white text-[50px] font-bold'>Discover HackaThons</div>
        <div className='max-w-[800px] text-center p-4 text-white/60  text-2xl'>Dicover all the hackhathons happening in your sorrounding and get chance to compete with others. </div>
      </div>
      <Filter/>
      <div className='w-full flex justify-center'>
        <div className=' w-3/6 flex flex-col gap-8'>
          {
            data.map((element, i) => {
              const get = element.attributes
              return <Card name={get.name} desc={get.desc} price={get.price} date={get.date}/>
            })
          }
        
        </div>
      </div>

    </div>
  )
}

export default AllThons