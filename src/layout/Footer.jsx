import React from 'react'
import SocialMedia from '../components/ui/SocialMedia'

const Footer = () => {
    return (
        // <div className='px-32 w-full h-fit fixed bottom-0 left-0 flex justify-between'>
        <div className=''>
            <SocialMedia/>
            <div className='hidden md:flex flex-col items-center fixed lg:flex right-20 xl:right-40 bottom-0'>
                <div className='h-28 w-1 border-l border-secondary-200 relative'>
                    <a href="mailto:benrabahmohamed530@gmail.com"
                        className='rotate-90 text-sm hover:text-primary-200 h-fit w-fit absolute -top-36 left-1/2 -translate-x-1/2 transform pt-1 duration-700'>
                        benrabahmohamed530@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Footer