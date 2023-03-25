import React from 'react'
import Button from '../ui/Button'
import CardProject from '../ui/CardProject'

const Project = () => {
    return (
        <div className='responsive'>
            <h2>Other Noteworthy Projects</h2>
            <p>view the archive</p>
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