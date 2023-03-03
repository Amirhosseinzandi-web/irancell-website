import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from './Context'




function Submenu() {
    const { menuHamburger, setMenuHamburger } = useContext(MyContext);
    const { menuHeight, setMenuHeight } = useContext(MyContext)

    const openHeight = {
        height: menuHeight + "px",
    }

    const closeHeight = {
        height: "0px"
    }

    document.querySelectorAll(".submenu>li").forEach((self)=>{
        self.addEventListener("click" , ()=>{
            let LiAttr = self.getAttribute("data-information")
            document.querySelectorAll(".submenu-container>ul").forEach((_ul)=>{
                let UlAttr = _ul.getAttribute("data-information")
                if(LiAttr === UlAttr){
                    _ul.style.left = "0px"
                }
            })
        })
    })


    document.querySelectorAll(".submenu-container li[type='back']").forEach((_back)=>{
        _back.addEventListener("click" , ()=>{
            let _parentAttr = _back.parentElement.getAttribute("data-information")
            document.querySelectorAll(".submenu-container>ul").forEach((_ul)=>{
                let UlAttr = _ul.getAttribute("data-information")
                if(_parentAttr === UlAttr){
                    _back.parentElement.style.left = "-100%"
                }
            })
        })
    })

    return (
        <div style={menuHamburger ? (openHeight) : (closeHeight)} className={menuHamburger ? (`submenu-container overflow-hidden`) : (`submenu-container overflow-hidden submenu-height`)}>
            <ul className="submenu">
                <li data-information="shop">
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

            <ul className='submenu submenu-one' data-information="shop">
                <li type="back">
                    <NavLink>back</NavLink>
                </li>
                <li>
                    <NavLink>خرید سیم کارت</NavLink>
                </li>
                <li>
                    <NavLink>خرید بسته</NavLink>
                </li>
                <li>
                    <NavLink>دستگاه ها</NavLink>
                </li>
                <li>
                    <NavLink>حراج شماره های رند</NavLink>
                </li>
                <li>
                    <NavLink>پرداخت قبض سیم کارت دایمی</NavLink>
                </li>
                <li>
                    <NavLink>خرید آنلاین شارژ ایرانسل</NavLink>
                </li>
                <li>
                    <NavLink>دریافت شارژ یا اینترنت اضطراری</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Submenu