import React from 'react'

import video from '../../assets/bg.mp4'

const HeaderBg = () => {
    return (
        <>
            <div className="relative">
                <video autoPlay muted loop className="w-full h-auto">
                    <source src={video} type="video/mp4" />
                </video>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-4xl font-semibold">
                    <p>Your Text Here</p>
                </div>
            </div>
        </>
    )
}

export default HeaderBg
