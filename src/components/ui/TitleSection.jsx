import React from 'react'

const TitleSection = ({nbr, title}) => {
    return (
        <div className='w-2/3 flex items-center mb-4'>
            <div className='w-2/3 flex items-end'>
                <span className='text-primary-200 text-lg mr-3'>{nbr}.</span>
                <p className='text-secondary-100 font-bold text-2xl'>{title}</p>
            </div>
            <div className='w-full border-t border-secondary-200 border-opacity-40 mt-2'></div>
        </div>
    )
}

export default TitleSection