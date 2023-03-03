import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from './Context'




function Submenu() {
    const {menuHamburger , setMenuHamburger} = useContext(MyContext)
    
  return (
    <div className={menuHamburger?(`submenu-container overflow-hidden`):(`submenu-container overflow-hidden`)}>
        <ul className={menuHamburger?(`submenu`):(`submenu submenu-height`)}>
            <li>
                <NavLink>فروشگاه</NavLink>
            </li>
            <li>
                <NavLink>محصول و خدمات</NavLink>
            </li>
            <li>
                <NavLink>جشنواره ها</NavLink>
            </li>
            <li>
                <NavLink>پشتیبانی</NavLink>
            </li>
            <li>
                <NavLink>همکاری با ما</NavLink>
            </li>
            <li>
                <NavLink>وبلاگ</NavLink>
            </li>
            <li>
                <NavLink>اخبار</NavLink>
            </li>
            <li>
                <NavLink>ترابرد به ایرانسل</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Submenu