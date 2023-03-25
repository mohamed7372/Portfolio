import React, { useState } from 'react'
import TitleSection from '../ui/TitleSection'
import worksData from '../../data/works.json'

const Work = () => {
    const [selectWork,setSelectWork] = useState(0)
    const [work, setWork] = useState(worksData[selectWork])

    const handleSelectWork = (event, idx) => {
        setSelectWork(idx)
        setWork(selectWork)
    }

    return (
        <div className='responsive flex flex-col justify-center items-center h-screen'>
            <div className='w-full'>
                <TitleSection nbr={'02'} title={'Where I\'ve Worked'} width='64'/>
            </div>
            <div className='flex h-fit'>
                <ul className='w-fit mr-14'>
                    {
                        worksData.map((work, idx) => 
                            <li key={idx} onClick={(event) => handleSelectWork(event, idx)}
                                className={`capitalize text-sm border-l-2 cursor-pointer hover:bg-blue-800 hover:bg-opacity-20
                                ${idx === selectWork ? 'text-primary-200 border-primary-200' : 'border-secondary-200 border-opacity-20'} px-3 py-3`}>
                                {work.company}
                            </li>
                        )
                    }
                </ul>
                <div className='mt-2.5'>
                    <h3 className='text-secondary-100 font-bold capitalize'>
                        {work.position}
                        <span className='text-primary-200 ml-3'>@ {work.company}</span>
                    </h3>
                    <h6 className='text-xs mt-2'>{work.date}</h6>
                    <ul className='mt-4'>
                        {
                            work.tasks.map((task, idx) =>
                            <li key={idx} className='text-sm py-1 flex items-start'>
                                <div className='mr-2 mt-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#64ffda" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                                {task}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Work