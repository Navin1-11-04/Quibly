import React from 'react'
import logo from '/quibly_dark.png'
const Header = () => {
  return (
    <div className="w-full h-auto px-3 py-2 bg-white">
        <img src={logo} alt="Quibly Logo" className='h-7 w-auto object-cover object-center flex'/>
    </div>
  )
}

export default Header