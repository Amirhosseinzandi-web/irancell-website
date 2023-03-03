import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import Submenu from './Submenu'

function Navbar() {
  return (
    <header>
        <nav className='w-full'>
            <div className='flex flex-wrap bg-black'>
            <NavLeft/>
            <NavRight/>
            </div>
            <Submenu/>
        </nav>
    </header>
  )
}

export default Navbar