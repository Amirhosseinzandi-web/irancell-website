import React from 'react'

function FooterDesktop() {
    return (
        <section className='footer-desktop-wrapper hidden md:block w-[90%] mx-auto 2xl:w-[100%]'>

            <ul className='flex flex-row-reverse flex-wrap xl:flex-nowrap xl:justify-around'>
                
            <li className='w-[30%] footer-nav-items text-right text-white m-2 xl:w-fit'>
                <h2>فروشگاه</h2>
                <ul className='mt-2'>
                    <li>خرید سیم کارت</li>
                    <li>خرید مودم</li>
                    <li>خرید بسته اینترنت</li>
                </ul>
            </li>

            <li className='w-[30%] footer-nav-items text-right text-white m-2 xl:w-fit'>
                <h2>محصولات و خدمات</h2>
                <ul className='mt-2'>
                    <li>اینترنت پرسرعت</li>
                    <li>برنامه های کاربردی</li>
                    <li>رومینگ</li>
                    <li>آهنگ پیشواز</li>
                    <li>محصولات و خدمات دیجیتال</li>
                    <li>مدیریت سیم کارت های فعال</li>
                </ul>
            </li>

            <li className='w-[30%] footer-nav-items text-right text-white m-2 xl:w-fit'>
                <h2>جشنواره</h2>
                <ul className='mt-2'>
                    <li>جشنواره های ایرانسلی</li>
                    <li>کمپین حذف قبض کاغذی</li>
                    <li>شارژ شگفت انگیز پلکانی</li>
                    <li>کد شگفتی های ایرانسل</li>
                </ul>
            </li>

            <li className='w-[30%] footer-nav-items text-right text-white m-2 xl:w-fit'>
                <h2>اطلاع رسانی</h2>
                <ul className='mt-2'>
                    <li>وبلاگ</li>
                    <li>اخبار</li>
                    <li>اعلان های شبکه</li>
                    <li>نظرسنجی سازمان تنظیم مقررات</li>
                </ul>
            </li>

            <li className='w-[30%] footer-nav-items text-right text-white m-2 xl:w-fit'>
                <h2>پشتیبانی</h2>
                <ul className='mt-2'>
                    <li>تماس با ما</li>
                    <li>مناطق تحت پوشش</li>
                    <li>مراکز ارتباط با ایرانسل</li>
                </ul>
            </li>

            <li className='w-[30%] footer-nav-items text-right text-white m-2 xl:w-fit'>
                <h2>درباره ایرانسل</h2>
                <ul className='mt-2'>
                    <li>معرفی ایرانسل</li>
                    <li>مزایای ایرانسل</li>
                    <li>لوگو های ایرانسل</li>
                </ul>
            </li>

            </ul>

        </section>
    )
}

export default FooterDesktop