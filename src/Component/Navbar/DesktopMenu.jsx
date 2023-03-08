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
                    <li className='mx-1 desktop-submenu'><NavLink className="flex-row-reverse items-center">فروشگاه<i className='bi bi-chevron-down mx-1'></i></NavLink>
                        <div className='desktop-submenu-items'>
                            <ul>
                                <li className='desktop-submenu-one'><NavLink className="flex-row-reverse justify-between items-center">خرید سیم کارت<i className="bi bi-arrow-left inline-flex"></i></NavLink>
                        <div className='desktop-submenu-items-one'>
                            <ul>
                                <li><NavLink className="flex-row-reverse justify-between items-center">جستجوی سریع شماره سیم کارت<i className="bi bi-arrow-left inline-flex"></i></NavLink></li>
                                <li><NavLink className="flex-row-reverse justify-between items-center">سیم کارت اعتباری<i className="bi bi-arrow-left inline-flex"></i></NavLink></li>
                                <li><NavLink className="flex-row-reverse justify-between items-center">سیم کارت دایمی<i className="bi bi-arrow-left inline-flex"></i></NavLink></li>
                                <li><NavLink className="flex-row-reverse justify-between items-center">سیم کارت دایمی 0900<i className="bi bi-arrow-left inline-flex"></i></NavLink></li>
                                <li><NavLink className="flex-row-reverse">سیم کارت حرفه ای</NavLink></li>
                                <li><NavLink className="flex-row-reverse">TD-LTE سیم کارت ویژه مودم</NavLink></li>
                            </ul>
                        </div>
                                </li>
                                <li><NavLink className="flex-row-reverse justify-between items-center">خرید بسته<i className="bi bi-arrow-left inline-flex"></i></NavLink></li>
                                <li><NavLink className="flex-row-reverse justify-between items-center">دستگاه ها<i className="bi bi-arrow-left inline-flex"></i></NavLink></li>
                                <li><NavLink className="flex-row-reverse justify-between items-center">حراج شماره های رند<i className="bi bi-arrow-left inline-flex"></i></NavLink></li>
                                <li><NavLink className="flex-row-reverse">پرداخت قبض سیم کارت دایمی</NavLink></li>
                                <li><NavLink className="flex-row-reverse">خرید آنلاین شارژ ایرانسل</NavLink></li>
                                <li><NavLink className="flex-row-reverse">دریافت شارژ یا اینترنت اضطراری</NavLink></li>
                                
                            </ul>
                        </div>
                    </li>
                    <li className='mx-1'><NavLink>محصولات و خدمات</NavLink></li>
                    <li className='mx-1'><NavLink>جشنواره ها</NavLink></li>
                    <li className='mx-1'><NavLink>پشتیبانی</NavLink></li>
                    <li className='mx-1'><NavLink>همکاری با ما</NavLink></li>
                    <li className='mx-1'><NavLink>وبلاگ</NavLink></li>
                    <li className='mx-1'><NavLink>اخبار</NavLink></li>
                    <li className='mx-1'><NavLink>ترابرد به ایرانسل</NavLink></li>
                </ul>
            </div>
            <div className='w-[10%] flex justify-end'>
                <figure><img src={Logo} alt="" /></figure>
            </div>
        </section>
    )
}

export default DesktopMenu