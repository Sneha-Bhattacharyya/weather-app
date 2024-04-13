import React from 'react'
import loader from '../public/Loader.gif'
const Loader = () => {
  return (
    <div><Image className="w-[200px] m-auto block" src={loader} alt='loading...'></Image></div>
  )
}

export default Loader