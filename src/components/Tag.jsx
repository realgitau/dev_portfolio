import React from 'react'

const Tag = ({name}) => {
  return (
    <span className='bg-gray-200 rounded-full px-2 py-1 mr-2 text-black'>{name}</span>
  )
}

export default Tag