import React, { useContext, useState } from 'react'
import Logo from "../../img/logo.png"
import { MyContext } from './Context'


function NavRight() {
  const {menuHamburger , setMenuHamburger} = useContext(MyContext)
  const {menuHeight , setMenuHeight} = useContext(MyContext)

  const MenuHam = () =>{
    setMenuHamburger(!menuHamburger)
    setMenuHeight(document.querySelector(".submenu-container").scrollHeight)
  }
  

  return (
    <div className='nav-right bg-yellow w-full lg:w-[80%] p-4 flex items-center'>
        <section className='flex flex-wrap w-full'>
            <div className='w-[60%] flex'>
              <div className='w-[50%]'>
                <figure><img src={Logo} alt="" /></figure>
              </div>
              <div className='w-[50%] flex items-center'>
                <form className='w-full flex items-center form-menu relative'>
                <input className='w-full search' type="search" />
                <i className="bi bi-search"></i>
                </form>
              </div>
            </div>
            <div className='w-[40%] flex items-center justify-end'>
              <i onClick={MenuHam} className={menuHamburger?(`bi bi-x-lg hamburger-menu transition`):(`bi bi-justify hamburger-menu transition`)}></i>
            </div>
        </section>
    </div>
  )
}

export default NavRight