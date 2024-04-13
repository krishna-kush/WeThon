import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getHack } from '../../api/hack'

function SingleHack() {
    const params=useParams()

    const [data, setData] = useState(null)

    useEffect(()=> {
        (async ()=>{
            const mdata = await getHack(params.id)
            console.log(mdata.data.data.attributes)
            setData(mdata.data.data.attributes)
        })()
    })




    let [title , SetTitle] = useState("");
    let [ description , Setdescription] = useState("");
    let [rules , setrules] = useState("");
    let [nameOfOrganization, setnameOfOrganization ]= useState("");
    let [ nameOfHack , setnameOfHack ] = useState("");
    let [prize , setprize] = useState("");
    let [participants , setparticipants] = useState("");

    
    // const topics = "topic 1, Topic 2, Topic 3"
    // convert topics into array
    const topicsArray = data?.topics.split(',').map(topic => topic.trim())


    if (!data) {
        return null
    } 

    return (
        <div className='flex flex-col items-center font-normal pb-10'>
            <img
                className='h-96 w-full bg-white bg-center bg-cover mb-16'
                // style={{
                    // this background image will be banner
                    src= {data.logo?data.logo: "url('https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/812/484/datas/medium_square.png')"}
                // }}
            />
            <div className='flex flex-col w-4/6  gap-8'>
                <div className='flex justify-between items-center gap-16 w-full'>

                    <img
                        className='h-96 w-full bg-white bg-center bg-cover mb-16'
                        // style={{
                            // this background image will be banner
                            src= {data.logo?data.logo: "url('https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/812/484/datas/medium_square.png')"}
                        // }}
                    />
                    <div className='flex flex-col justify-between h-full'>
                        <div>
                            {nameOfOrganization}
                        </div>
                        <div>
                            {data.name}
                        </div>
                    </div>
                </div>
                <div>
                    <div><b>Desciption : </b> </div>
                    {data.desc}
                </div>

                <div>
                    <div><b>Rules : </b> </div>
                    <div>
                        {data?.rules}
                    </div>
                </div>

                <div>
                    Duration : <span>11th May</span> to <span>12th May</span>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <span>Prizes worth</span> : <span>{data.price}</span>
                    </div>
                    <div>
                        <span>Participants</span> : <span>{participants}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <div>Topics :</div>
                        <div className='flex gap-2'>
                            {topicsArray.map(topic => (
                                <div className='border bg-blue-800/10 border-blue-500 text-blue-500 px-2 rounded-2xl py-0.5 w-fit '>{topic}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <button className='rounded px-4 py-2 text-black bg-green-500 hover:bg-green-400'> Register Now</button>
                </div>
            </div>
        </div>
    )
}

export default SingleHack