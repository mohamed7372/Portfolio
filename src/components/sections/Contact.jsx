import React from 'react'
import Button from '../ui/Button'

const Contact = () => {
    return (
        <div className='responsive h-screen flex flex-col justify-center items-center'>
            <h4 className='text-sm text-primary-200'>04. What's Next?</h4>
            <h1 className='text-5xl font-bold text-secondary-100 mt-4 mb-4'>Get In Touch</h1>
            <p className='text-secondary-200 w-1/2 text-center mb-14'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <Button name_btn={'Say Hello'} padding='px-6 py-3'/>
        </div>
    )
}

export default Contact