import React, { useState } from 'react'

const CategoriesBtn = ({ category }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };


    return (

        <>
            <button
                className={`me-6 my-2 text-white font-semibold px-4 py-2 rounded-md hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isClicked?'bg-purple-800':'bg-gradient-to-r from-blue-500 to-purple-500'}`}
                onClick={handleClick}
            >
                {isClicked ? `${category}` : `${category}`}
            </button>
        </>
    )
}

export default CategoriesBtn
