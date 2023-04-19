import React, { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import Notification from '../ui/Notification'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const ContactForm = () => {
    const [notification, showNotification] = useState(false)
    const [hideNot, setHideNot] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm('service_1kye05p','template_9yy8aha',e.target,'-fFP_4sgUBevOp1iQ')
            // .then(res => { 
                
            // })
            // .then(error => { 
            //     showNotification(false)
            // })
        
        showNotification(true)
        setTimeout(() => {
            setHideNot(true)
            e.target.reset()
        }, 3000);
        setTimeout(() => {
            setHideNot(false)
            showNotification(false)
        }, 3500);
    }
    
    useEffect(() => {
        AOS.init({duration:2000});
    }, [])

    return (
        <form className='flex flex-col w-full' onSubmit={sendEmail}>
            {notification
                &&
                <div className={ hideNot ? 'animate-hide' : ''}>
                    <Notification
                        title={'Successfully Sended!'}
                        body={'Thank you for your message.'} />
                </div>
            }
            <select name="service" id="" defaultValue={'DEFAULT'} className='rounded-md outline-none text-sm px-2 py-2 bg-secondary-250'>
                <option value="DEFAULT" >Choose service you want</option>
                <option value="website">Need A webSite</option>
                <option value="deal">Make a deal with you</option>
            </select>
            <input type="text" name="title" id="title" placeholder='Enter a title' className='placeholder-secondary-200 text-secondary-100 mt-4 rounded-md outline-none px-3 py-2 text-sm bg-secondary-250'/>

            <input type="text" name="name" id="name" placeholder='Enter a name' className='placeholder-secondary-200 text-secondary-100 mt-4 rounded-md outline-none px-3 py-2 text-sm bg-secondary-250'/>
            
            <input type="email" name="email" id="email" placeholder='Enter your email' className='placeholder-secondary-200 text-secondary-100 mt-4 rounded-md outline-none px-3 py-2 text-sm bg-secondary-250'/>

            <textarea name="message" id="message" placeholder='Enter your message' cols="30" rows="10" className='placeholder-secondary-200 text-secondary-100 mt-4 rounded-md outline-none px-3 py-2 text-sm bg-secondary-250 max-h-64 min-h-[40px]'></textarea>

            <button type="submit" className='rounded-md border mt-4 border-primary-200 text-primary-200 py-3 px-8 w-fit m-auto hover:bg-primary-200 hover:bg-opacity-20 transition duration-300 ease-in'>Submit</button>
        </form>
    )
}

export default ContactForm