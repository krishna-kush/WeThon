import { Datepicker, Dropdown } from 'flowbite-react'
import React from 'react'
import { useState } from 'react'

function Filter() {
    const [topic, setTopic] = useState('Topic')
    const [company, setCompany] = useState('Company')
    const [date, setDate] = useState('Date')
    const [prizepool, setPrizepool] = useState('Prizepool')


    const topicList = ['Machine Learning', 'Artificial inteli', 'Data Science']
    const companyList = ['Google', 'Facebook', 'Amazon']
    const prizepoolList = ['10,000', '20,000', '30,000']


    function changeTopic(topic) {
        setTopic(topic)
    }


    return (
        <div className=' rounded p-3 w-4/6 flex gap-4 justify-center items-center'>
            <div className='text-white text-2xl font-bold'>Filter : </div>
            <Dropdown  label={topic} dismissOnClick={false}>
                {topicList.map(topic => (
                    <Dropdown.Item onClick={() => changeTopic(topic)}>{topic}</Dropdown.Item>
                ))}
            </Dropdown>
            <Dropdown label={company} dismissOnClick={false}>
                {companyList.map(company => (
                    <Dropdown.Item onClick={() => setCompany(company)}>{company}</Dropdown.Item>
                ))}
            </Dropdown>
            <Dropdown label={prizepool} dismissOnClick={false}>
                {prizepoolList.map(prizepool => (
                    <Dropdown.Item onClick={() => setPrizepool(prizepool)}>{prizepool}</Dropdown.Item>
                ))}
            </Dropdown>
            <Datepicker className=' bg-[#155E75]'/>
        </div>
    )
}

export default Filter