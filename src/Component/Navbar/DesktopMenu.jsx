import React from 'react'
import Logo from "../../img/logo.png"
import { NavLink } from 'react-router-dom'



function DesktopMenu() {
    return (
        <section className='w-full hidden lg:flex p-3 items-center'>
            <div className='w-[15%]'>
                <form className='w-full flex items-center form-menu relative'>
                    <input className='w-full search' type="search" />
                    <i className="bi bi-search"></i>
                </form>
            </div>
            <div className='w-[75%]'>
                <ul className='flex flex-row-reverse desktop-menu justify-evenly'>
                    <NavLink>فروشگاه</NavLink>
                    <NavLink>محصولات و خدمات</NavLink>
                    <NavLink>جشنواره ها</NavLink>
                    <NavLink>پشتیبانی</NavLink>
                    <NavLink>همکاری با ما</NavLink>
                    <NavLink>وبلاگ</NavLink>
                    <NavLink>اخبار</NavLink>
                    <NavLink>ترابرد به ایرانسل</NavLink>
                </ul>
            </div>
            <div className='w-[10%] flex justify-end'>
            <figure><img src={Logo} alt="" /></figure>
            </div>
        </section>
    )
}

export default DesktopMenu