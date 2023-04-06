import React from 'react'
import SocialMedia from '../components/ui/SocialMedia'

const Footer = () => {
    return (
        <div className='px-32 w-full h-fit fixed bottom-0 left-0 flex justify-between -z-40'>
            <SocialMedia/>
            <div className='flex flex-col items-center justify-between'>
                <a href="mailto:benrabahmohamed530@gmail.com" className='rotate-90 mt-16 text-sm hover:text-primary-200'>benrabahmohamed530@gmail.com</a>
                <div className='h-36 w-1 border-l border-secondary-200'></div>
            </div>
        </div>
    )
}

export default Footer