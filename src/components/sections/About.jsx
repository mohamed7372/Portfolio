import React from 'react'
import languageData from '../../data/languages.json'
import softwareData from '../../data/softwares.json'
import TitleSection from '../ui/TitleSection'
import ImgProfil from '../../assets/img/benrabah.JPG'

const About = () => {
    return (
        <div className='responsive flex flex-col justify-center items-center min-h-screen'>
            <div className='w-full'>
                <TitleSection nbr={'01'} title={'About Me'} width='36'/>
            </div>
            <div className='flex h-fit'>
                <div className='w-2/3'>
                    <p>Welcome! My name is <span className='font-extrabold'>BENRABAH Mohamed</span> and I enjoy creating things that live online. My interest in <span className='text-primary-200'> web development started in 2021</span> when I decided to try building a website for my graduation project.</p>
                    <p className='mt-4'>I loved the field a lot and gave it a lot of time to develop my skills, as I learned well by working on projects for our club
                        <a className='text-primary-200 hover:underline ml-1' href='https://microclub.tech/'>'Micro Club'</a>.
                        I am still learning new things as I find fun in discovering new skills.
                    </p>
                    <p className='mt-4'>Also, I am in the process of launching <span className='text-primary-200'>my own project</span> on <span className='text-primary-200'>YouTube</span> and <span className='text-primary-200'>Spotify</span> <span className='text-secondary-100 font-bold'>SOON</span>.</p>
                    <p className='mt-4'>Here are a few technologies I’ve been working with recently:</p>
                    <ul className='mt-4 grid grid-cols-4 w-full'>
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
                    <p className='mt-4'>Here are a few Softwares I’ve been working:</p>
                </div>
                <div className='w-64 h-64 border-2 rounded-md border-primary-200 relative ml-14 mt-4'>
                    <img src={ImgProfil} alt="benrabah mohamed"
                        className='object-cover object-left bg-secondary-200 absolute h-full w-full -left-4 -top-4 rounded-lg' />
                    <div className='bg-primary-200 bg-opacity-25 absolute h-full w-full -left-4 -top-4 rounded-lg cursor-pointer hover:bg-opacity-0'>
                    </div>
                </div>
            </div>
            
            
            <ul className='mt-4 grid grid-cols-5 w-full'>
                {softwareData.map((soft, idx) => 
                    <li key={idx} className='text-sm py-1 flex items-center'>
                        <div className='mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#64ffda" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        {soft.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default About