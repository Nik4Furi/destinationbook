import React, { useState } from 'react'

const CategoriesBtn = ({ category }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };


    return (

        <>
        {
            category.map((item) =>(
                <button key={item}
                className={`me-6 my-2 btn-primary px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 ${isClicked?'bg-purple-800':'bg-gradient-to-r from-blue-500 to-purple-500'}`}
                onClick={handleClick}
            >
                {isClicked ? `${item}` : `${item}`}
            </button>
            ))
        }
           
        </>
    )
}

export default CategoriesBtn
