import React from 'react'
import Button from '../ui/Button'
import CardProject from '../ui/CardProject'

const Project = () => {
    return (
        <div className='responsive flex flex-col justify-center items-center min-h-screen'>
            <h4 className='text-sm text-primary-200'>view the archive</h4>
            <h1 className='text-5xl text-secondary-100 font-bold mt-4 mb-10'>Other Noteworthy Projects</h1>
            <div className='grid grid-cols-3 gap-4'>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
            </div>
            <div className='mt-14 flex justify-center'>
                <Button name_btn='Show More' padding='px-6 py-3' />
            </div>
        </div>
    )
}

export default Project