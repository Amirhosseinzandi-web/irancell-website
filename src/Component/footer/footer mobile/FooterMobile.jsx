import React from 'react'

function FooterAccordion() {


    const footerAccordionHandler = (e) =>{

        e.stopPropagation()
        const current = e.currentTarget;
        const _height = current.nextElementSibling.scrollHeight;

        current.nextElementSibling.addEventListener("click" , (e)=>{
            e.stopPropagation()
        })

        
            current.classList.toggle("active")
        

        document.querySelectorAll(".footer-accordion-items").forEach((para) => {
            if (para.previousElementSibling.getAttribute("data-id") !== current.getAttribute("data-id")) {
                para.previousElementSibling.classList.remove("active");
                para.style.height = `0px`;
                para.previousElementSibling.querySelector("span").style.transform = `rotate(0deg)`
            }
        })


        if (current.classList.contains("active")) {
            current.nextElementSibling.style.height = `${_height}px`
            current.querySelector("span").style.transform = `rotate(-90deg)`
        } else {
            current.nextElementSibling.style.height = `0px`;
            current.querySelector("span").style.transform = `rotateX(0deg)`
        }

    }



    return (
        <div className='footer-accordion md:hidden'>
            {/* ********start of footer accordion mobile***************************** */}
            <div className="footer-accordion-wrapper">
                <ul>

                    <li>
                        <div className='flex flex-row-reverse justify-between items-center text-white py-3' data-id="1" onClick={footerAccordionHandler}>
                            <p>فروشگاه</p>
                            <div className='mtn-accordion-toggle-bar'>
                            <span></span>
                            </div>
                        </div>

                        <section className='footer-accordion-items'>
                            <ul>
                                <li>خرید سیم کارت</li>
                                <li>خرید مودم</li>
                                <li>خرید بسته اینترنت</li>
                            </ul>
                        </section>

                    </li>


                    <li>
                        <div className='flex flex-row-reverse justify-between items-center text-white py-3' data-id="2" onClick={footerAccordionHandler}>
                            <p>محصولات و خدمات</p>
                            <div className='mtn-accordion-toggle-bar'>
                            <span></span>
                            </div>
                        </div>

                        <section className='footer-accordion-items'>
                            <ul>
                                <li>اینترنت پرسرعت</li>
                                <li>برنامه های کاربردی</li>
                                <li>رومینگ</li>
                                <li>آهنگ پیشواز</li>
                                <li>محصولات و خدمات دیجیتال</li>
                                <li>مدیریت سیم کارت های فعال</li>
                            </ul>
                        </section>

                    </li>


                    <li>
                        <div className='flex flex-row-reverse justify-between items-center text-white py-3' data-id="3" onClick={footerAccordionHandler}>
                            <p>جشنواره</p>
                            <div className='mtn-accordion-toggle-bar'>
                            <span></span>
                            </div>
                        </div>
                        <section className='footer-accordion-items'>
                            <ul>
                                <li>جشنواره های ایرانسلی</li>
                                <li>کمپین حذف قبض کاغذی</li>
                                <li>شارژ شگفت انگیز پلکانی</li>
                                <li>کد شگفتی های ایرانسل</li>
                            </ul>
                        </section>
                    </li>


                    <li>
                        <div className='flex flex-row-reverse justify-between items-center text-white py-3' data-id="4" onClick={footerAccordionHandler}>
                            <p>اطلاع رسانی</p>
                            <div className='mtn-accordion-toggle-bar'>
                            <span></span>
                            </div>
                        </div>
                        <section className='footer-accordion-items'>
                            <ul>
                                <li>وبلاگ</li>
                                <li>اخبار</li>
                                <li>اعلان های شبکه</li>
                                <li>نظرسنجی سازمان تنظیم مقررات</li>
                            </ul>
                        </section>
                    </li>


                    <li>
                        <div className='flex flex-row-reverse justify-between items-center text-white py-3' data-id="5" onClick={footerAccordionHandler}>
                            <p>پشتیبانی</p>
                            <div className='mtn-accordion-toggle-bar'>
                            <span></span>
                            </div>
                        </div>
                        <section className='footer-accordion-items'>
                            <ul>
                                <li>تماس با ما</li>
                                <li>مناطق تحت پوشش</li>
                                <li>مراکز ارتباط با ایرانسل</li>
                            </ul>
                        </section>
                    </li>


                    <li>
                        <div className='flex flex-row-reverse justify-between items-center text-white py-3' data-id="6" onClick={footerAccordionHandler}>
                            <p>درباره ایرانسل</p>
                            <div className='mtn-accordion-toggle-bar'>
                            <span></span>
                            </div>
                        </div>
                        <section className='footer-accordion-items'>
                            <ul>
                                <li>معرفی ایرانسل</li>
                                <li>مزایای ایرانسل</li>
                                <li>لوگو های ایرانسل</li>
                            </ul>
                        </section>
                    </li>

                </ul>
            </div>
            {/* **************end of footer accordion mobile ************************************** */}
        </div>
    )
}

export default FooterAccordion