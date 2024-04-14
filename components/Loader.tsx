import Image from 'next/image'
import React from 'react'
const Loader = () => {
  return (
    <div><Image className="w-[200px] m-auto block" src={'/loader.gif'} alt='loading...'></Image></div>
  )
}

export default Loader