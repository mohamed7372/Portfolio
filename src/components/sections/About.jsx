import React from 'react'
import languageData from '../../data/languages.json'
import TitleSection from '../ui/TitleSection'

const About = () => {
    return (
        <div className='responsive flex flex-col justify-center items-center h-screen'>
            <div className='w-full'>
                <TitleSection nbr={'01'} title={'About Me'} />
            </div>
            <div className='flex h-fit'>
                <div className='w-2/3'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque magnam placeat quis tenetur aut voluptate, deleniti, veniam quaerat officia reiciendis temporibus corporis explicabo adipisci molestias sunt. Repellat nulla sed quaerat.</p>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque magnam placeat quis tenetur aut voluptate, deleniti, veniam quaerat officia reiciendis temporibus corporis explicabo adipisci molestias sunt. Repellat nulla sed quaerat.</p>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque magnam placeat quis tenetur aut voluptate, deleniti, veniam quaerat officia reiciendis temporibus corporis explicabo adipisci molestias sunt. Repellat nulla sed quaerat.</p>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, fuga!</p>
                    <ul className='mt-4'>
                        {languageData.map((lang, idx) => 
                            <li key={idx} className='text-sm py-1 flex items-center'>
                                <div className='mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#64ffda" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                                {lang.name}
                            </li>
                        )}
                    </ul>
                </div>
                <div className='w-64 h-64 border-2 rounded-md border-primary-200 relative ml-14 mt-4'>
                    <img src="" alt="benrabah mohamed"
                        className='bg-secondary-200 absolute h-full w-full -left-4 -top-4 rounded-lg' />
                </div>
            </div>
        </div>
    )
}

export default About