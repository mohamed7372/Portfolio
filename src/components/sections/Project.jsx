import React, { useEffect } from 'react'
import Button from '../ui/Button'
import CardProject from '../ui/CardProject'

import projectData from '../../data/project.json'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Project = () => {
    useEffect(() => {
        AOS.init({duration:2000});
    }, [])

    return (
        <div className='responsive flex flex-col justify-center items-center min-h-screen'>
            <h4 className='text-sm text-primary-200' data-aos='fade-left'>view the archive</h4>
            <h1 className='text-5xl text-secondary-100 font-bold mt-4 mb-10 text-center' data-aos='fade-right'>Other Noteworthy Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    projectData.map((item, idx) => 
                        <div key={idx}>
                            <CardProject project={item} />
                        </div>
                    )
                }
            </div>
            <div className='mt-14 flex justify-center' data-aos='fade-up'>
                <a href="https://github.com/mohamed7372">
                    <Button name_btn='Show More' padding='px-6 py-3' />
                </a>
            </div>
        </div>
    )
}

export default Project