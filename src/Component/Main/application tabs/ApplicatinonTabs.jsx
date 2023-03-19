import React, { useState } from 'react'

function ApplicatinonTabs() {
    const [prevValue, setPrevValue] = useState(0)




    const AppTabs = (e) => {
        e.stopPropagation()
        const _div = e.currentTarget
        document.querySelectorAll(".application-tabs-items>section>div").forEach((item) => {
            item.removeAttribute("class");
            item.children[1].removeAttribute("class")
            item.removeAttribute("isComeFromLeftToRight");
            const _src = item.children[2].src
            item.children[0].children[0].src = _src;
            item.parentElement.classList.remove("active-app-items")
        })
        const _src = _div.children[3].src
        _div.children[0].children[0].src = _src
        _div.classList.add("pointer-none")
        _div.classList.add("ssd")
        _div.parentElement.classList.add("active-app-items")
        _div.children[1].classList.add("ssp")
        const divAttrNum = _div.getAttribute("data-num");
        const divAttrInfo = _div.getAttribute("data-info");
        const currentValue = divAttrNum;
        if (currentValue > prevValue) {
        } else {
            _div.setAttribute("isComeFromLeftToRight", "true")
        }
        setPrevValue(currentValue)
        // ************************************************************
        document.querySelectorAll(".application-tabs-slider>div").forEach((slider) => {
            const sliderAttrInfo = slider.getAttribute("data-info");
            slider.removeAttribute("class")
            if (_div.getAttribute("isComeFromLeftToRight")) {
                if (sliderAttrInfo === divAttrInfo) {
                    slider.classList.add("left-to-right")
                }
            }
            else {
                slider.classList.remove("right-to-left")
                if (sliderAttrInfo === divAttrInfo) {
                    slider.classList.add("right-to-left")
                }
            }
        });
    }




    return (
        <section className='application-tabs-wrapper mt-10'>
            <div>

                <div className='application-tabs-items-wrapper flex justify-center'>
                    <div className='application-tabs-items 2xl:container 2xl:mx-auto w-[90%] flex flex-row-reverse justify-evenly items-center'>

                        <section className='nav-items-1 active-app-items'>
                            <div className='pointer-none' data-num="1" data-info="my-irancell" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2023/01/My-Irancell-FA-1.svg" alt="" /></figure>
                                <p className='ssp'>ایرانسل من</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/06/MyIrancell-1.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2023/01/My-Irancell-FA-1.svg" alt="" />
                            </div>
                        </section>

                        <section className='nav-items-2'>
                            <div data-num="2" data-info="lenz" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/Lenz.svg" alt="" /></figure>
                                <p>لنز ایرانسل</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/Lenz.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/Lenz-Active.svg" alt="" />
                            </div>
                        </section>

                        <section className='nav-items-3 hidden sm:block'>
                            <div data-num="3" data-info="dana-plus" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/DanaPlus.svg" alt="" /></figure>
                                <p>دانا پلاس</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/DanaPlus.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/DanaPlus-Active.svg" alt="" />
                            </div>
                        </section>

                        <section className='nav-items-4 hidden md:block'>
                            <div data-num="4" data-info="jib-jet" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/08/JIBJET-FA.svg" alt="" /></figure>
                                <p>جیب جت</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/08/JIBJET-FA.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/08/JibJet-FA-color.svg" alt="" />
                            </div>
                        </section>

                        <section className='nav-items-5 hidden lg:block'>
                            <div data-num="5" data-info="pishvaz-music" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/Pishvaz.svg" alt="" /></figure>
                                <p>آهنگ پیشواز</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/Pishvaz.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/Pishvaz-Active.svg" alt="" />
                            </div>
                        </section>

                        <section className='nav-items-6 hidden lg:block'>
                            <div data-num="6" data-info="charkhooneh" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/Charkhoneh.svg" alt="" /></figure>
                                <p>چارخونه</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/Charkhoneh.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/03/Charkhoneh-Active.svg" alt="" />
                            </div>
                        </section>

                        <section className='nav-items-7 hidden lg:block'>
                            <div data-num="7" data-info="kids-teenager" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/11/Colorful-1-1.svg" alt="" /></figure>
                                <p>کودک و نوجوان</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/11/Colorful-1-1.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/11/Colorful-2.svg" alt="" />
                            </div>
                        </section>

                        <section className='nav-items-8'>
                            <div data-num="8" data-info="learning" onClick={AppTabs}>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/12/Academy-logo-02.svg" alt="" /></figure>
                                <p>!جریان پویای یادگیری</p>
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/12/Academy-logo-02.svg" alt="" />
                                <img className='hidden' src="https://irancell.ir/wp-content/uploads/2022/12/Academy-logo-011.svg" alt="" />
                            </div>
                        </section>

                    </div>
                </div>

                <div className='application-tabs-slider'>

                    <div className='first-comein-slider' id='irancell' data-info="my-irancell">
                        <section className='flex 2xl:container 2xl:mx-auto'>
                            <div className='hidden md:block w-[40%] overflow-hidden'>
                                <figure className='w-[100%] mt-[-15%]'><img className='w-full h-full' src="https://irancell.ir/wp-content/uploads/2023/01/MG-Home.png" alt="" /></figure>
                            </div>

                            <div className='w-[90%] mx-auto flex flex-col items-center py-[13%] md:w-[60%] md:mx-0 md:pr-10 md:items-end'>
                                <h3 className='text-center'>!سوپراپلیکیشنی با بیشترین قابلیت‌ها</h3>
                                <p className='pt-7 text-center md:text-right'>مدیریت حساب، پرداخت قبض، سفارش بسته</p>
                                <span className='py-4 flex items-center'>راهنمای صوتی<i className="bi bi-soundwave inline-flex mx-1"></i></span>

                                <div className='flex flex-col w-full md:flex-row md:justify-end'>
                                    <button className='flex items-center border-2 border-white justify-between text-white md:mr-5 md:w-[40%] lg:w-[30%]'><i className='bi bi-chevron-left inline-flex'></i>اطلاعات بیشتر</button>
                                    <button className='bg-yellow flex items-center justify-between mt-3 md:mt-0 md:w-[40%] lg:w-[30%]'><i className='bi bi-chevron-left inline-flex'></i>دانلود اپلیکیشن</button>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div data-info="lenz" id='lenz'>
                        <section className='flex 2xl:container 2xl:mx-auto'>
                            <div className='hidden md:block w-[40%] overflow-hidden'>
                                <figure className='w-[100%] mt-[-15%]'><img className='w-full h-full' src="https://irancell.ir/wp-content/uploads/2022/04/Lenz-1.png" alt="" /></figure>
                            </div>

                            <div className='w-[90%] mx-auto flex flex-col items-center py-[13%] md:w-[60%] md:mx-0 md:pr-10 md:items-end'>
                                <h3 className='text-center'>!دیدنی‌ترین برنامه‌های پخش زنده از دریچه لنز</h3>
                                <p className='py-7 text-center md:text-right'>پخش زنده رقابت‌های ورزشی، مسابقات فوتبال، کنسرت‌های موسیقی</p>
                                <div className='flex flex-col w-full md:flex-row md:justify-end'>
                                    <button className='flex items-center border-2 border-white justify-between text-white md:mr-5 md:w-[40%] lg:w-[30%]'><i className='bi bi-chevron-left inline-flex'></i>اطلاعات بیشتر</button>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div data-info="jib-jet" id='jib-jet'>
                    <section className='flex 2xl:container 2xl:mx-auto'>
                            <div className='hidden md:block w-[40%] overflow-hidden'>
                                <figure className='w-[100%] mt-[-15%]'><img className='w-full h-full' src="	https://irancell.ir/wp-content/uploads/2022/04/Digital-Wallet-1.png" alt="" /></figure>
                            </div>

                            <div className='w-[90%] mx-auto flex flex-col items-center py-[13%] md:w-[60%] md:mx-0 md:pr-10 md:items-end'>
                                <h3 className='text-center'>!جیب‌جت، کیف پول دیجیتال ایرانسل</h3>
                                <p className='py-7 text-center md:text-right'>پرداخت آسان برای دریافت انبوهی از خدمات در تمامی اپلیکیشن‌ها، فقط با یک کلیک</p>
                                <div className='flex flex-col w-full md:flex-row md:justify-end'>
                                    <button className='flex items-center border-2 border-white justify-between text-white md:mr-5 md:w-[40%] lg:w-[30%]'><i className='bi bi-chevron-left inline-flex'></i>اطلاعات بیشتر</button>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div data-info="dana-plus" id='dana-plus'>
                    <section className='flex 2xl:container 2xl:mx-auto'>
                            <div className='hidden md:block w-[40%] overflow-hidden'>
                                <figure className='w-[100%] mt-[-15%]'><img className='w-full h-full' src="https://irancell.ir/wp-content/uploads/2022/04/DanaPlus-1.png" alt="" /></figure>
                            </div>

                            <div className='w-[90%] mx-auto flex flex-col items-center py-[13%] md:w-[60%] md:mx-0 md:pr-10 md:items-end'>
                                <h3 className='text-center'>!تجربه نوین تبادل آنلاین دانش</h3>
                                <p className='py-7 text-center md:text-right'>پلتفرمی جهت برگزاری کلاس‌های آنلاین، جلسات کاری و وبینار</p>
                                <div className='flex flex-col w-full md:flex-row md:justify-end'>
                                    <button className='flex items-center border-2 border-white justify-between text-white md:mr-5 md:w-[40%] lg:w-[30%]'><i className='bi bi-chevron-left inline-flex'></i>اطلاعات بیشتر</button>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div data-info="pishvaz-music" id='pishvaz-music'>
                    <section className='flex 2xl:container 2xl:mx-auto'>
                            <div className='hidden md:block w-[40%] overflow-hidden'>
                                <figure className='w-[100%] mt-[-15%]'><img className='w-full h-full' src="	https://irancell.ir/wp-content/uploads/2022/04/Dana-1-1-1.png" alt="" /></figure>
                            </div>

                            <div className='w-[90%] mx-auto flex flex-col items-center py-[13%] md:w-[60%] md:mx-0 md:pr-10 md:items-end'>
                                <h3 className='text-center'>!تبدیل کردن لحظات انتظار به خوشایندترین زمان</h3>
                                <p className='py-7 text-center md:text-right'>گنجینه‌ای بی‌همتا از ترانه‌ها، نواها، آوازها و آهنگ‌های پیشواز</p>
                                <div className='flex flex-col w-full md:flex-row md:justify-end'>
                                    <button className='flex items-center border-2 border-white justify-between text-white md:mr-5 md:w-[40%] lg:w-[30%]'><i className='bi bi-chevron-left inline-flex'></i>اطلاعات بیشتر</button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div data-info="charkhooneh" id='charkhooneh'>
                    <section className='flex 2xl:container 2xl:mx-auto'>
                            <div className='hidden md:block w-[40%] overflow-hidden'>
                                <figure className='w-[100%] mt-[-15%]'><img className='w-full h-full' src="	https://irancell.ir/wp-content/uploads/2022/04/Charkhoneh-1.png" alt="" /></figure>
                            </div>

                            <div className='w-[90%] mx-auto flex flex-col items-center py-[13%] md:w-[60%] md:mx-0 md:pr-10 md:items-end'>
                                <h3 className='text-center'>!فرصت گشت و گذار در بازار جامع محتوای دیجیتال</h3>
                                <p className='py-7 text-center md:text-right'>دسترسی به دنیایی از فیلم، کلیپ، سریال، موسیقی، سرگرمی و کتاب</p>
                                <div className='flex flex-col w-full md:flex-row md:justify-end'>
                                    <button className='flex items-center border-2 border-white justify-between text-white md:mr-5 md:w-[40%] lg:w-[30%]'><i className='bi bi-chevron-left inline-flex'></i>اطلاعات بیشتر</button>
                                    <button className='bg-yellow flex items-center justify-between mt-3 md:mt-0 md:w-[40%] lg:w-[30%]'><i className='bi bi-chevron-left inline-flex'></i>دانلود اپلیکیشن</button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div data-info="kids-teenager" id='kids-teenager'>
                    <section className='flex 2xl:container 2xl:mx-auto'>
                            <div className='hidden md:block w-[40%] overflow-hidden'>
                                <figure className='w-[100%] mt-[-15%]'><img className='w-full h-full' src="https://irancell.ir/wp-content/uploads/2022/04/Kids-Service-1.png" alt="" /></figure>
                            </div>

                            <div className='w-[90%] mx-auto flex flex-col items-center py-[13%] md:w-[60%] md:mx-0 md:pr-10 md:items-end'>
                                <h3 className='text-center'>!اینترنت ایمن برای کودکان</h3>
                                <p className='py-7 text-center md:text-right'>دسترسی به محتواهای دیجیتالی جذاب و سرگرم کننده برای کودکان با خیالی راحت</p>
                                <div className='flex flex-col w-full md:flex-row md:justify-end'>
                                    <button className='flex items-center border-2 border-white justify-between text-white md:mr-5 md:w-[40%] lg:w-[30%]'><i className='bi bi-chevron-left inline-flex'></i>اطلاعات بیشتر</button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div data-info="learning" id='learning'>
                    <section className='flex 2xl:container 2xl:mx-auto'>
                            <div className='hidden md:block w-[40%] overflow-hidden'>
                                <figure className='w-[100%] mt-[-15%]'><img className='w-full h-full' src="https://irancell.ir/wp-content/uploads/2022/12/Accademi_Banner_fa.png" alt="" /></figure>
                            </div>

                            <div className='w-[90%] mx-auto flex flex-col items-center py-[13%] md:w-[60%] md:mx-0 md:pr-10 md:items-end'>
                                <h3 className='text-center'>!جریان پویای یادگیری</h3>
                                <p className='py-7 text-center md:text-right'>دوره‌های آموزشی مدیریت پروژه حرفه‌ای، رایانش ابری، تحول دیجیتال</p>
                                <div className='flex flex-col w-full md:flex-row md:justify-end'>
                                    <button className='flex items-center border-2 border-white justify-between text-white md:mr-5 md:w-[40%] lg:w-[30%]'><i className='bi bi-chevron-left inline-flex'></i>اطلاعات بیشتر</button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <svg viewBox="0 0 1366 19.18" preserveAspectRatio='none' height="19px" className='wave1'>
                        <path fill='#fff' d="M683.1,18.3C386.63,18.3,129.24,10.85,0,0V19.18H1366V0C1236.66,10.84,979.37,18.3,683.1,18.3Z"></path>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default ApplicatinonTabs