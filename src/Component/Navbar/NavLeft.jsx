import React, { useEffect, useState } from 'react'

function NavLeft() {
    const [account, setAccount] = useState(false)

    const AddAcoount = () => {
        setAccount(!account)   
    }

    useEffect(()=>{
        const mq = window.matchMedia("(max-width:1024px)")
        if (mq.matches) {
            const _height = document.querySelector(".menu-open").scrollHeight
            if (account) {
                document.querySelector(".account>span:nth-of-type(2)").style.transform = ` rotate(180deg) `
                document.querySelector(".menu-open").style.height = `${_height}px`
            } else {
                document.querySelector(".account>span:nth-of-type(2)").style.transform = ` unset `
                document.querySelector(".menu-open").style.height = `0px`
            }
        }
    },[account])
  
    return (
        <div className='nav-left w-full lg:w-[20%]'>
            <section className='flex p-3  lg:flex-col lg:p-3 lg:pl-6'>
                <div className='nav-left-icons self-yellow w-[50%] flex end lg:order-1 lg:w-auto lg:mt-5'>
                    <ul className='w-full flex'>
                        <li className='flex items-center'>
                            <p className='font-bold'>EN</p>
                            <span className='mx-1'><i className="bi bi-globe"></i></span>
                        </li>
                        <li onClick={AddAcoount} className='flex mx-6 account relative'>
                            <span><i className='bi bi-person'></i></span>
                            <span className='transition'><i className="bi bi-arrow-down mx-1"></i></span>
                            <ul className='hidden lg:block lg:absolute account-desktop'>
                                <li className='p-3 flex justify-end'>ورود / ثبت نام</li>
                                <li className='p-3 flex justify-end'>پیگیری سفارش</li>
                            </ul>
                        </li>
                        <li>
                            <i className="bi bi-basket3-fill"></i>
                        </li>
                    </ul>
                </div>
                <div className='text-white w-[50%] flex justify-end items-center self-yellow lg:order-0 lg:w-auto lg:justify-start'>
                    <p className='cursor-pointer'>مشترکان سازمانی</p>
                    <span className='inline-flex ml-2'><i className="bi bi-file-earmark-person-fill inline-flex cursor-pointer"></i></span>
                </div>
            </section>
            <div className="menu-open text-white lg:hidden">
                <ul>
                    <li className='p-3 flex justify-end'>ورود / ثبت نام<i className="bi bi-door-open pl-2"></i></li>
                    <li className='p-3 flex justify-end'>پیگیری سفارش<i className="bi bi-truck pl-2"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default NavLeft