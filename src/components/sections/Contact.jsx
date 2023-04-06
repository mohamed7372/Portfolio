import React, { useEffect, useState } from 'react'
import ContactForm from '../form/ContactForm'
import Button from '../ui/Button'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Contact = () => {
    const [sendMsg, showSendMsg] = useState(false)

    useEffect(() => {
        AOS.init({duration:2000});
    }, [])

    return (
        <div className='responsive min-h-screen flex flex-col justify-center items-center' id='contact'>
            {!sendMsg
                ?
                <>
                    <h4 className='text-sm text-primary-200' data-aos='fade-up'>04. What's Next?</h4>
                    <h1 className='text-5xl font-bold text-secondary-100 mt-4 mb-4' data-aos='fade-up'>Get In Touch</h1>
                    <p className='text-secondary-200 w-1/2 text-center mb-14' data-aos='fade-up'>Although I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                    <div data-aos='fade-up'>
                        <Button name_btn={'Say Hello'} padding='px-6 py-3' handleBtn={() => showSendMsg(true)} />
                    </div>
                </>
                :
                <div className='flex flex-col items-center'>
                    <h1 className='text-5xl font-bold text-secondary-100 mb-4'>Contact</h1>
                    <p className='mb-8 w-2/3 text-center'>I can't wait to hear from you. Fill out the form bellow and I'll get back to you shortly</p>
                    <ContactForm/>
                </div>
            }
        </div>
    )
}

export default Contact