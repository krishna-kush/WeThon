import { Dropdown } from 'flowbite-react'
import React from 'react'
import { useState } from 'react'

function Filter() {
    const [topic, setTopic] = useState('Topic')

    const topicList = ['Machine Learning', 'Artificial inteli', 'Data Science' ]

    // function changeTopic(topic){
    //     setTopic(topic)
    // }

    
    return (
        <div className='border h-24 w-5/6'>
            <Dropdown label={topic} dismissOnClick={false}>
                {/* {topicList.map(topic=>(
                    <Dropdown.Item  onClick={changeTopic(topic)}>{topic}</Dropdown.Item>
                ))} */}
            </Dropdown>
        </div>
    )
}

export default Filter