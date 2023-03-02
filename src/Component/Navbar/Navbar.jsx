import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'

function Navbar() {
  return (
    <header>
        <nav className='w-full bg-black'>
            <div className='flex flex-wrap'>
            <NavLeft/>
            <NavRight/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar