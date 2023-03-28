import React from 'react'
import Button from '../ui/Button'

const ContactForm = () => {
    return (
        <form className='flex flex-col w-full'>
            <select name="" id="" className='rounded-md outline-none px-3 py-2 bg-secondary-250'>
                <option value="" selected>Choose service you want</option>
                <option value="">Need A webSite</option>
                <option value="">Make a deal with you</option>
            </select>
            <input type="text" name="title" id="title" placeholder='Enter a title' className='placeholder-secondary-200 text-secondary-100 mt-4 rounded-md outline-none px-3 py-2 text-sm bg-secondary-250'/>

            <input type="email" name="email" id="email" placeholder='Enter your email' className='placeholder-secondary-200 text-secondary-100 mt-4 rounded-md outline-none px-3 py-2 text-sm bg-secondary-250'/>

            <textarea name="message" id="message" placeholder='Enter your message' cols="30" rows="10" className='placeholder-secondary-200 text-secondary-100 mt-4 rounded-md outline-none px-3 py-2 text-sm bg-secondary-250 max-h-64'></textarea>

            <button type="submit" className='rounded-md border mt-4 border-primary-200 text-primary-200 py-2 px-8 w-fit m-auto'>Submit</button>
        </form>
    )
}

export default ContactForm