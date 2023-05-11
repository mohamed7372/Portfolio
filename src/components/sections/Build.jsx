import React from 'react'
import TitleSection from '../ui/TitleSection'

import build from '../../data/build.json'
import CardBuild from '../ui/CardBuild'

const Build = () => {
    return (
        <div className='responsive flex flex-col justify-center items-center min-h-screen md:mb-40' id='project'>
            <div className='w-full'>
                <TitleSection nbr={'03'} title={'Things I’ve Built'} width='64'/>
            </div>
            <div className='w-full'>
                {build.map((item, idx) => 
                    <div key={idx}>
                        <CardBuild build={item} inverse={idx % 2 === 0} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Build