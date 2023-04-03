import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialMedia = () => {
    return (
        <ul className='flex flex-col items-center justify-between'>
            <li className='pb-4'>
                <GitHubIcon className='cursor-pointer'/>
            </li>
            <li className='pb-4'>
                <InstagramIcon className='cursor-pointer'/>
            </li>
            <li className='pb-4 '>
                <LinkedInIcon className='cursor-pointer'/>
            </li>
            <li className='pb-4'>
                <YouTubeIcon className='cursor-pointer'/>
            </li>
            <li className='pb-4'>
                <FacebookIcon className='cursor-pointer'/>
            </li>
            <li className='ml-1'>
                <div className='h-36 w-1 border-l border-secondary-200'></div>
            </li>
        </ul>
    )
}

export default SocialMedia