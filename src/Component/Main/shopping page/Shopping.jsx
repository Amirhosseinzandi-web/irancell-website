import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { EffectFlip, Pagination, Navigation } from "swiper";
import ShoppingDesktop from './ShoppingDesktop';

function Shopping() {


    useEffect(() => {
        const _height = document.querySelector(".accordion-1 section").scrollHeight+50;
        document.querySelector(".accordion-1 section").style.height = `${_height}px`
        document.querySelector(".accordion-1").classList.add("active")
        document.querySelector(".accordion-1 i").style.transform = `rotateX(180deg)`;
        document.querySelector(".accordion-1 section").addEventListener("click" , (e)=>{
            e.stopPropagation()
        })
    }, [])

    

    const accordionHandler = (e) => {
        e.stopPropagation()
        const current = e.currentTarget;
        const _height = current.querySelector("section.slider-wrapper").scrollHeight+50;

        current.querySelector("section.slider-wrapper").addEventListener("click" , (e)=>{
            e.stopPropagation()
        })

        if (!e.target.closest(".accordion .slider-wrapper")) {
            current.classList.toggle("active")
        }

        document.querySelectorAll(".accordion-items").forEach((para) => {
            if (para.getAttribute("data-id") !== current.getAttribute("data-id")) {
                para.classList.remove("active");
                para.querySelector("section").style.height = `0px`;
                para.querySelector("i").style.transform = `rotateX(0deg)`
            }
        })


        if (current.classList.contains("active")) {
            current.querySelector("section").style.height = `${_height}px`
            current.querySelector("i").style.transform = `rotateX(180deg)`
        } else {
            current.querySelector("section").style.height = `0px`;
            current.querySelector("i").style.transform = `rotateX(0deg)`
        }

    }


    

    return (
        <section className='shopping mt-9 px-3 mx-auto sm:w-[90%] lg:mt-[11%]'>
            <div className='2xl:container mx-auto'>

                <div className="flex flex-row-reverse justify-between shopping-top">

                    <section>
                        <h1 className="fz-18">فروشگاه</h1>
                    </section>

                    <section>
                        <p className="self-yellow font-extrabold flex items-center"><i className="bi bi-chevron-left inline-flex mx-1"></i>برو به فروشگاه</p>
                    </section>

                </div>
                {/* ***********************start of accordion menu********************************************** */}

                <section className='accordion mt-7 lg:hidden'>
                    <div className='accordion-items accordion-1' data-id="1" onClick={accordionHandler}>
                        <div className='shopping-details flex justify-between flex-row-reverse'>
                            <div className='flex flex-row-reverse items-center'>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/internet-packages.svg" alt="" /></figure>
                                <p>بسته های اینترنت</p>
                            </div>

                            <div className='self-yellow flex items-center'><i className='bi bi-chevron-down inline-flex'></i></div>
                        </div>
                        <section className='slider-wrapper'>
                            <h3 className='text-right my-7'>بسته‌های اینترنت پرسرعت و به‌صرفه، با حجم های متنوع</h3>
                            <Swiper
                                effect={"flip"}
                                grabCursor={true}
                                pagination={true}
                                navigation={true}
                                modules={[EffectFlip, Pagination, Navigation]}
                                className="mySwiper"
                            >

                                <SwiperSlide>
                                    <section className='slider-items p-3 border'>
                                        <div className='flex flex-col items-center border-b-2'>
                                            <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/4g.svg" alt="" /></figure>
                                            <h2 className='my-3 font-extrabold'><span className='pr-1'>4g</span>بسته اینترنت همراه</h2>
                                        </div>

                                        <div className='my-3'>
                                            <ul>
                                                <li className='flex flex-row-reverse'>سرعت بالای اینترنت</li>

                                                <li className='flex flex-row-reverse my-2'>بسته‌های اینترنت به صرفه</li>

                                                <li className='flex flex-row-reverse'>خرید و فعالسازی آسان</li>
                                            </ul>
                                            <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>خرید سیم کارت</button>
                                        </div>

                                    </section>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <section className='slider-items p-3 border'>
                                        <div className='flex flex-col items-center border-b-2'>
                                            <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/td-lte.svg" alt="" /></figure>
                                            <h2 className='my-3 font-extrabold'><span className='pr-1'>TD-LTE</span>بسته اینترنت همراه</h2>
                                        </div>

                                        <div className='my-3'>
                                            <ul>
                                                <li className='flex flex-row-reverse'>بسته‌های ویژه برای مودم‌های اینترنت ثابت<span className='pr-1'>TD-LTE</span></li>

                                                <li className='flex flex-row-reverse my-2'> مناسب برای مصرف خانگی و اداری</li>
                                            </ul>
                                            <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>خرید سیم کارت</button>
                                        </div>

                                    </section>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <section className='slider-items p-3 border'>
                                        <div className='flex flex-col items-center border-b-2'>
                                            <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/multi-user.svg" alt="" /></figure>
                                            <h2 className='my-3 font-extrabold'>بسته اینترنت چندکاربره</h2>
                                        </div>

                                        <div className='my-3'>
                                            <ul>
                                                <li className='flex flex-row-reverse'>مصرف اینترنت اشتراکی بدون محدودیت زمانی و مکانی</li>

                                                <li className='flex flex-row-reverse my-2'> صرفه‌جویی در هزینهٔ خرید بسته‌های اینترنت</li>

                                                <li className='flex flex-row-reverse'>فعالسازی تنها با یک کد دستوری</li>
                                            </ul>
                                            <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>خرید سیم کارت</button>
                                        </div>

                                    </section>
                                </SwiperSlide>

                            </Swiper>
                        </section>
                    </div>

                    <div className='accordion-items my-5' data-id="2" onClick={accordionHandler}>
                        <div className='shopping-details flex justify-between flex-row-reverse'>
                            <div className='flex flex-row-reverse items-center'>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/simcard.svg" alt="" /></figure>
                                <p>سیم کارت</p>
                            </div>

                            <div className='self-yellow flex items-center'><i className='bi bi-chevron-down inline-flex'></i></div>
                        </div>
                        <section className='slider-wrapper'>
                            <h3 className='text-right my-7'>!سیم‌کارت‌های گوناگون با مزایای منحصر به فرد و هدایای ویژه</h3>
                            <Swiper
                                effect={"flip"}
                                grabCursor={true}
                                pagination={true}
                                navigation={true}
                                modules={[EffectFlip, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <section className='slider-items p-3 border'>
                                        <div className='flex flex-col items-center border-b-2'>
                                            <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/postpaid-simcard.svg" alt="" /></figure>
                                            <h2 className='my-3 font-extrabold'>سیم کارت اعتباری</h2>
                                        </div>

                                        <div className='my-3'>
                                            <ul>
                                                <li className='flex flex-row-reverse'><span className='pl-1'>۵</span>گیگابایت اینترنت هدیه</li>

                                                <li className='flex flex-row-reverse my-2'><span className='pl-1'>۶۰</span>دقیقه مکالمهٔ رایگان با تمام خطوط داخلی کشور</li>

                                                <li className='flex flex-row-reverse'><span className='pl-1'>۶۰</span>پیامک رایگان به تمام خطوط داخلی کشور</li>
                                            </ul>
                                            <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>خرید سیم کارت</button>
                                        </div>

                                    </section>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <section className='slider-items p-3 border'>
                                        <div className='flex flex-col items-center border-b-2'>
                                            <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/0900-SimCards.svg" alt="" /></figure>
                                            <h2 className='my-3 font-extrabold flex'><span className='pr-1'>0900</span>سیم کارت باپیش شماره</h2>
                                        </div>

                                        <div className='my-3'>
                                            <ul>
                                                <li className='flex flex-row-reverse'><span className='pl-1'>۸</span>گیگابایت اینترنت</li>

                                                <li className='flex flex-row-reverse my-2'><span className='pl-1'>۹۰۰</span>دقیقه مکالمهٔ با خطوط داخلی کشور</li>

                                                <li className='flex flex-row-reverse'><span className='pl-1'>۵۰۰</span>عدد پیامک به خطوط داخلی کشور</li>
                                            </ul>
                                            <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>خرید سیم کارت</button>
                                        </div>

                                    </section>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <section className='slider-items p-3 border'>
                                        <div className='flex flex-col items-center border-b-2'>
                                            <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/postpaid-simcard.svg" alt="" /></figure>
                                            <h2 className='my-3 font-extrabold'>سیم کارت دائمی</h2>
                                        </div>

                                        <div className='my-3'>
                                            <ul>
                                                <li className='flex flex-row-reverse'><span className='pl-1'>۲۰</span>گیگابایت اینترنت هدیه</li>

                                                <li className='flex flex-row-reverse my-2'><span className='pl-1'>۹۰۰</span>دقیقه مکالمهٔ رایگان با تمام خطوط داخلی کشور</li>

                                                <li className='flex flex-row-reverse'><span className='pl-1'>۹۰۰</span>پیامک رایگان به تمام خطوط داخلی کشور</li>
                                            </ul>
                                            <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>خرید سیم کارت</button>
                                        </div>

                                    </section>
                                </SwiperSlide>

                            </Swiper>
                        </section>
                    </div>

                    <div className='accordion-items' data-id="3" onClick={accordionHandler}>
                        <div className='shopping-details flex justify-between flex-row-reverse'>
                            <div className='flex flex-row-reverse items-center'>
                                <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/devices.svg" alt="" /></figure>
                                <p>دستگاه ها</p>
                            </div>

                            <div className='self-yellow flex items-center'><i className='bi bi-chevron-down inline-flex'></i></div>
                        </div>
                        <section className='slider-wrapper'>
                        <h3 className='text-right my-7'>!با تنوعی از مودم‌ها و دستگاه‌های هوشمند؛ از زندگی در جهان ارتباطات لذت ببرید</h3>
                            <Swiper
                                effect={"flip"}
                                grabCursor={true}
                                pagination={true}
                                navigation={true}
                                modules={[EffectFlip, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <section className='slider-items p-3 border'>
                                        <div className='flex flex-col items-center border-b-2'>
                                            <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/postpaid-simcard.svg" alt="" /></figure>
                                            <h2 className='my-3 font-extrabold flex'><span className='pr-1'>FD-M40G1</span>مودم</h2>
                                        </div>

                                        <div className='my-3'>
                                            <ul>
                                                <li className='flex flex-row-reverse'>مودم قابل حمل</li>

                                                <li className='flex flex-row-reverse my-2'>شبکه های قابل پشتیبانی</li>

                                                <li className='flex flex-row-reverse'>قابلیت اتصال همزمان تا 10 کاربر از طریق<span className='pr-1'>Wi-Fi</span></li>
                                            </ul>
                                            <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>خرید سیم کارت</button>
                                        </div>

                                    </section>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <section className='slider-items p-3 border'>
                                        <div className='flex flex-col items-center border-b-2'>
                                            <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/postpaid-simcard.svg" alt="" /></figure>
                                            <h2 className='my-3 font-extrabold flex'><span className='pr-1'>هوآوی TD-LTE 4.5 G</span>مودم جیبی</h2>
                                        </div>

                                        <div className='my-3'>
                                            <ul>
                                            <li className='flex flex-row-reverse my-2'>همراه با سیم کارت<span className='px-1'>TDLTE</span>و سیم کارت <span className='px-1'>FD</span>ایرانسل</li>

                                                <li className='flex flex-row-reverse my-2'>مودم نسل<span>4.5</span>هوآوی</li>
                                            </ul>
                                            <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>خرید سیم کارت</button>
                                        </div>

                                    </section>
                                </SwiperSlide>
                            </Swiper>
                        </section>
                    </div>

                </section>
                {/* end of accordion mobile */}
                 {/* start of shopping desktop  */}
                 <ShoppingDesktop/>
                 {/* end of shopping desktop  */}
            </div>
        </section>
    )
}

export default Shopping