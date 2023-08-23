import React from 'react'
import CategoriesBtn from './CategoriesBtn'

const CategoriesBtns = () => {
  return (
    <>
      <div className='mx-2 my-auto flex items-center justify-start'>
            <CategoriesBtn category={'Featured'} />
            <CategoriesBtn category={'Family'} />
      </div>
    </>
  )
}

export default CategoriesBtns
