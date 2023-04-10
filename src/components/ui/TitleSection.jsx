import React from 'react'

const TitleSection = ({nbr, title, width}) => {
    return (
        <div className='flex items-center mb-8 justify-center md:justify-start'>
            <div className='w-fit flex items-end'>
                <span className='text-primary-200 text-lg mr-3'>{nbr}.</span>
                <p className={`text-secondary-100 font-bold text-2xl`}>{title}</p>
            </div>
            <div className={`w-1/3 ml-4 border-t border-secondary-200 border-opacity-40 mt-2 hidden lg:block`}></div>
        </div>
    )
}

export default TitleSection