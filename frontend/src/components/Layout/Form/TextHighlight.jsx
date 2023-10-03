import React from 'react'

const TextHighlight = ({size='xl', weight='bold',title}) => {
  return (
    <>
      <span className={`text-${size} font-${weight} text-highlight`}>{title}</span>
    </>
  )
}

export default TextHighlight
