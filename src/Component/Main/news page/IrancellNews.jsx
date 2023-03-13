import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import 'swiper/css/bundle';
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

function IrancellNews() {
    return (
        <section className='news'>
            <div>
                <div className='2xl:container 2xl:mx-auto news-container'>

                    <section className='flex flex-wrap justify-center md:justify-between'>

                        <div className='w-[45%]  md:w-[23%] mx-3 md:mx-0 border flex flex-row-reverse items-center'>
                            <div className='flex justify-center items-center'><figure><img src="https://irancell.ir/wp-content/uploads/2022/03/internet-packages.svg" alt="" /></figure></div>
                            <div className='flex items-center'><p>بسته های اینترنت</p></div>
                        </div>

                        <div className='w-[45%]  md:w-[23%] border flex flex-row-reverse items-center'>
                            <div className='flex justify-center items-center'><figure><img src="https://irancell.ir/wp-content/uploads/2022/03/myirancell.svg" alt="" /></figure></div>
                            <div className='flex items-center'><p>ایرانسل من</p></div>
                        </div>

                        <div className='w-[45%]  md:w-[23%] mx-3 md:mx-0 border flex flex-row-reverse items-center mt-2 md:mt-0'>
                            <div className='flex justify-center items-center'><figure><img src="https://irancell.ir/wp-content/uploads/2022/03/support.svg" alt="" /></figure></div>
                            <div className='flex items-center'><p>تماس با ما</p></div>
                        </div>

                        <div className='w-[45%]  md:w-[23%] border flex flex-row-reverse items-center mt-2 md:mt-0'>
                            <div className='flex justify-center items-center'><figure><img src="	https://irancell.ir/wp-content/uploads/2022/03/simcard.svg" alt="" /></figure></div>
                            <div className='flex items-center'><p>خرید سیم کارت</p></div>
                        </div>

                        <div className='w-[45%]  mx-3 md:mx-0 border flex flex-row-reverse items-center mt-2 md:hidden'>
                            <div className='flex justify-center items-center'><figure><img src="https://irancell.ir/wp-content/uploads/2023/01/charge-billing.svg" alt="" /></figure></div>
                            <div className='flex items-center'><p>پرداخت قبض سیم کارت دایمی</p></div>
                        </div>

                        <div className='w-[45%]  border flex flex-row-reverse items-center mt-2 md:hidden'>
                            <div className='flex justify-center items-center'><figure><img src="https://irancell.ir/wp-content/uploads/2022/03/USSD@3x.png" alt="" /></figure></div>
                            <div className='flex items-center'><p>کد های دستوری ایرانسل</p></div>
                        </div>

                    </section>

                </div>


                <div className="latests mt-10">

                    <div className='2xl:container 2xl:mx-auto'>
                        <div className='latests-info flex flex-row-reverse justify-between'>
                            <section><h1 className='fz-18'>تازه ترین ها در ایرانسل</h1></section>
                            <section><p className='self-yellow font-extrabold flex items-center'><i className='bi bi-chevron-left inline-flex mx-1'></i>مشاهده اخبار</p></section>
                        </div>
                    </div>

                </div>


                <div className="latests-slider">
                    <div className='h-full 2xl:container 2xl:mx-auto'>
                        <section className='mx-auto'>
                            <Swiper
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={"auto"}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 500,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination={true}
                                modules={[EffectCoverflow, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="https://irancell.ir/wp-content/uploads/2023/02/News-14011113.jpg" alt='' />
                                    <figcaption>وزیر ارتباطات چهارصدمین سایت نسل 5 ایرانسل را افتتاح کرد / تأکید زارع‌پور بر نقش‌آفرینی فعال ایرانسل در توسعه اینترنت اشیا</figcaption>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://irancell.ir/wp-content/uploads/2023/03/Sustainability-Report-1400-640x480.jpg" alt='' />
                                    <figcaption>دومین گزارش پایداری ایرانسل منتشر شد</figcaption>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://irancell.ir/wp-content/uploads/2023/03/14011215-irancell-inotex-pitch-640x480.jpg" alt='' />
                                    <figcaption>رویداد اینوتکس پیج با حمایت ایرانسل برگزار شد</figcaption>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://irancell.ir/wp-content/uploads/2023/03/14011215-irancell-innovation-award-640x480.jpg" alt='' />
                                    <figcaption>لوح زرین نوآوری برتر ایرانی برای سامانه خودرو متصل ایرانسل</figcaption>
                                </SwiperSlide>
                            </Swiper>
                        </section>
                    </div>
                </div>

                <div className='2xl:container 2xl:mx-auto'>
                    <div className='latests-info flex flex-row-reverse justify-between'>
                        <section><h1 className='fz-18'>محصولات دیجیتال</h1></section>
                        <section><p className='self-yellow font-extrabold flex items-center'><i className='bi bi-chevron-left inline-flex mx-1'></i>همه محصولات</p></section>
                    </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, odio ad nesciunt laudantium reprehenderit sit corrupti cumque earum autem, dicta at quasi doloremque facilis dolor quae quibusdam similique! Dolorem nihil hic labore vel eaque eum porro ea obcaecati, dolorum minus nisi, non beatae sequi voluptatibus illo ut soluta adipisci molestiae! Deserunt illum mollitia obcaecati numquam, eaque, minima soluta totam doloribus libero vero laudantium enim hic id similique at, debitis recusandae rerum! Quibusdam sapiente vero modi eaque nostrum quas tempore nam sint consequatur aut, at consectetur aperiam placeat officia voluptates quam commodi repellat beatae voluptas rerum harum voluptatem, sunt consequuntur natus. Fugit fuga unde assumenda facilis, doloremque deserunt, delectus id ullam exercitationem, sed laudantium at laborum totam? Sunt sed maxime quia voluptates molestias facere officia dolorem veritatis eveniet ad, ducimus corporis vero, quasi, delectus excepturi. Voluptate alias impedit expedita voluptatum molestias quis culpa provident! Distinctio nostrum aliquam, repellendus, nulla porro neque sunt asperiores ab facilis labore, totam delectus nemo officia cum expedita in. Quo adipisci ducimus ipsum deserunt necessitatibus minima rerum cupiditate, autem impedit beatae ad consequuntur error quae soluta est qui quas? Repudiandae facilis iusto architecto optio placeat accusamus itaque, saepe perspiciatis pariatur magni cumque non porro minus iste sapiente incidunt nulla libero voluptatum harum cupiditate quia commodi mollitia? Itaque minima, vitae praesentium nisi est officiis veritatis? Distinctio excepturi cum, nostrum, cumque doloremque nisi molestias necessitatibus incidunt exercitationem eaque quas beatae nihil amet delectus officia a, possimus rerum magnam natus inventore ut! Exercitationem quia illo nisi natus perferendis! Laudantium iure repellendus, voluptatibus ea quibusdam amet, temporibus officia vero eaque aliquid rerum aliquam facere sed autem! Nihil, autem. Temporibus provident voluptates eum perferendis natus. Error quam dignissimos provident deserunt nemo fuga adipisci dolorem labore, corporis reiciendis placeat officia repellendus voluptates aut, minus accusantium dolore rem, quis repellat tempore? Laboriosam, quibusdam tempore?</p>
            </div>
        </section>
    )
}

export default IrancellNews