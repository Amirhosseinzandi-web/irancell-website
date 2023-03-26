import React, { useContext, useEffect } from 'react'
import Logo from "../../img/logo.png"
import { MyContext } from './Context'
import DesktopMenu from './DesktopMenu'


function NavRight() {
  const {menuHamburger , setMenuHamburger} = useContext(MyContext)
  const {menuHeight , setMenuHeight} = useContext(MyContext)



  const MenuHam = () =>{
    setMenuHamburger(!menuHamburger)
    const arr=[]
    document.querySelectorAll(".submenu-container .come-in").forEach((el)=>{
      el.childNodes.forEach((para)=>{
        const _height = para.offsetHeight;
        arr.push(_height)
      })
    })
    if(arr.length !==0){
      const temp = arr.reduce((total,value)=>total+value)
      setMenuHeight(temp)
    }
  }


  // useEffect(()=>{
  //   if(menuHamburger){
  //     setTimeout(()=>{
  //       document.querySelector(".slider-container").style.marginTop = "-4px"
  //     },20)
      
  //   }else{
  //     setTimeout(()=>{
  //       document.querySelector(".slider-container").style.marginTop = "0px"
  //     },20)
  //   }
  // },[menuHamburger])

  return (
    <div className='nav-right bg-yellow w-full lg:w-[85%] p-3 flex items-center'>
        <section className='flex flex-wrap w-full lg:hidden'>
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
        <DesktopMenu/>
    </div>
  )
}

export default NavRight