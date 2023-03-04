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

    document.querySelectorAll(".submenu>li").forEach((self) => {
        self.addEventListener("click", () => {
            let arr = []
            let LiAttr = self.getAttribute("data-information")
            document.querySelectorAll(".submenu-container>ul").forEach((_ul) => {
                if (_ul.getAttribute("data-information")) {
                    let UlAttr = _ul.getAttribute("data-information")
                    if (LiAttr === UlAttr) {
                        _ul.style.left = "0px"
                        _ul.childNodes.forEach((para) => {
                            arr.push(para.offsetHeight)
                        })
                        let temp = arr.reduce((total, value) => total + value)
                        setMenuHeight(temp)
                    }
                }
            })
        })
    })


    document.querySelectorAll(".submenu-container li[type='back']").forEach((_back) => {
        _back.addEventListener("click", () => {
            const arr = []
            _back.parentElement.style.left = "-100%";
           const _backParentAttr = _back.parentElement.getAttribute("data-information");
            document.querySelectorAll(".submenu-container li").forEach((_li)=>{
               const _liAttr = _li.getAttribute("data-information")
                if(_backParentAttr===_liAttr){
                    const liParent = _li.parentElement;
                    liParent.childNodes.forEach((para)=>{
                        const _height = para.offsetHeight;
                        arr.push(_height)
                    })
                }
            })
            const temp = arr.reduce((total,value)=>total+value)
            setMenuHeight(temp)
           
        })
    })


    return (
        <div style={menuHamburger ? (openHeight) : (closeHeight)} className={menuHamburger ? (`submenu-container overflow-hidden`) : (`submenu-container overflow-hidden submenu-height`)}>
            <ul className="submenu">
                <li data-information="shop">
                    <NavLink className='flex justify-between items-center'><i className="bi bi-arrow-left inline-flex"></i>فروشگاه</NavLink>
                </li>
                <li>
                    <NavLink className="flex justify-between items-center"><i className="bi bi-arrow-left inline-flex"></i>محصول و خدمات</NavLink>
                </li>
                <li>
                    <NavLink className="flex justify-between items-center"><i className="bi bi-arrow-left inline-flex"></i>جشنواره ها</NavLink>
                </li>
                <li>
                    <NavLink className="flex justify-between items-center"><i className="bi bi-arrow-left inline-flex"></i>پشتیبانی</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>همکاری با ما</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>وبلاگ</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>اخبار</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>ترابرد به ایرانسل</NavLink>
                </li>
            </ul>

            <ul className='submenu submenu-one' data-information="shop">
                <li type="back">
                    <NavLink className="flex justify-between items-center">بازگشت<i className="bi bi-arrow-right inline-flex"></i></NavLink>
                </li>
                <li data-information="buy-simcard">
                    <NavLink className="flex justify-between items-center"><i className="bi bi-arrow-left inline-flex"></i>خرید سیم کارت</NavLink>
                </li>
                <li data-information="package-purchase">
                    <NavLink className="flex justify-between items-center"><i className="bi bi-arrow-left inline-flex"></i>خرید بسته</NavLink>
                </li>
                <li data-information="products">
                    <NavLink className="flex justify-between items-center"><i className="bi bi-arrow-left inline-flex"></i>دستگاه ها</NavLink>
                </li>
                <li>
                    <NavLink className="flex justify-between items-center"><i className="bi bi-arrow-left inline-flex"></i>حراج شماره های رند</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>پرداخت قبض سیم کارت دایمی</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>خرید آنلاین شارژ ایرانسل</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>دریافت شارژ یا اینترنت اضطراری</NavLink>
                </li>
            </ul>

            <ul className='submenu submenu-one' data-information="buy-simcard">
                <li type="back">
                    <NavLink className="flex justify-between items-center">بازگشت<i className="bi bi-arrow-right inline-flex"></i></NavLink>
                </li>
                <li>
                    <NavLink className="flex justify-end">جستجوی سریع شماره سیم کارت</NavLink>
                </li>
                <li>
                    <NavLink className="flex justify-end">سیم کارت اعتباری</NavLink>
                </li>
                <li>
                    <NavLink className="flex justify-end">سیم کارت دایمی</NavLink>
                </li>
                <li>
                    <NavLink className="flex justify-end">سیم کارت دایمی 0900</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>سیم کارت حرفه ای</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>سیم کارت ویژه مودم ثابت TD-LTE</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>دریافت شارژ یا اینترنت اضطراری</NavLink>
                </li>
            </ul>

            <ul className='submenu submenu-one' data-information="package-purchase">
                <li type="back">
                    <NavLink className="flex justify-between items-center">بازگشت<i className="bi bi-arrow-right inline-flex"></i></NavLink>
                </li>
                <li>
                    <NavLink className="flex justify-end"><span className="mx-1">4g</span>بسته اینترنت همراه</NavLink>
                </li>
                <li className='yes'>
                    <NavLink className="flex justify-end">بسته اینترنت ثابت TDLTE</NavLink>
                </li>
                <li>
                    <NavLink className="flex justify-end">بسته اینترنت رومینگ</NavLink>
                </li>
                <li>
                    <NavLink className="flex justify-end">بسته های اختصاصی</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>بسته فعالسازی مجدد مودم TDLTE</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>بسته مکالمه</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>بسته های ترکیبی</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>بسته بوم و بوم+</NavLink>
                </li>
            </ul>


            <ul className='submenu submenu-one' data-information="products">
                <li type="back">
                    <NavLink className="flex justify-between items-center">خرید مودم<i className="bi bi-arrow-right inline-flex"></i></NavLink>
                </li>
                <li>
                    <NavLink className="flex justify-end"><span className="mx-1">4g</span>بسته اینترنت همراه</NavLink>
                </li>
                <li>
                    <NavLink className="flex justify-end">بسته اینترنت ثابت TDLTE</NavLink>
                </li>
                <li>
                    <NavLink className="flex justify-end">بسته اینترنت رومینگ</NavLink>
                </li>
                <li>
                    <NavLink className="flex justify-end">بسته های اختصاصی</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>بسته فعالسازی مجدد مودم TDLTE</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>بسته مکالمه</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>بسته های ترکیبی</NavLink>
                </li>
                <li className='flex justify-end'>
                    <NavLink>بسته بوم و بوم+</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Submenu