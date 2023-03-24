import React from 'react'

function ShoppingDesktop() {

    const showHandler = (e) => {
        document.querySelectorAll(".shopping-desktop-wrapper .shopping-desktop-right>div").forEach((el) => {
            el.classList.remove("pointer-none")
        })
        e.currentTarget.classList.add("pointer-none");
        document.querySelectorAll(".shopping-desktop-wrapper .shopping-desktop-right p").forEach((para) => {
            para.style.color = ` #7F7F7F `
        })
        e.currentTarget.querySelector("p").style.color = `black`
        const currentAttr = e.currentTarget.getAttribute("data-shop");
        document.querySelectorAll(".shopping-desktop-wrapper .shopping-desktop-left>section").forEach((item) => {
            const secAttr = item.getAttribute("data-shop")
            item.classList.remove("block")
            item.style.opacity = "0"
            setTimeout(() => {
                item.classList.add("hidden")
            }, 400)
            if (currentAttr === secAttr) {
                setTimeout(() => {
                    item.classList.replace("hidden", "block")
                }, 400)
                setTimeout(() => {
                    item.style.opacity = `1`
                }, 410)

            }
        })

    }



    return (
        <section className='shopping-desktop-wrapper hidden lg:flex mt-6 justify-between'>
            <div className='shopping-desktop-left flex mt-[5%] w-[75%] xl:w-[76%]'>
                {/* ***************************************************** */}
                <section data-shop="internet-packages" className='w-full'>
                    <div><h2>بسته‌های اینترنت پرسرعت و به‌صرفه، با حجم های متنوع</h2></div>
                    <div className='flex flex-row-reverse mt-6'>

                        <div className='items border'>
                            <div className='p-3 h-full flex flex-col justify-between'>
                                <div className='flex flex-col items-center border-b'>
                                    <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/4g.svg" alt="" /></figure>
                                    <h3 className='flex flex-row-reverse my-3 rtl'>بسته اینترنت همراه 4g</h3>
                                </div>

                                <div className='h-full flex flex-col justify-between'>
                                    <ul>
                                        <li>سرعت بالای اینترنت</li>
                                        <li>بسته‌های اینترنت به صرفه</li>
                                        <li>خرید و فعالسازی آسان</li>
                                    </ul>
                                    <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>مشاهده بسته ها</button>
                                </div>
                            </div>
                        </div>


                        <div className='items border mx-3'>
                            <div className='p-3 h-full flex flex-col justify-between'>
                                <div className='flex flex-col items-center border-b'>
                                    <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/td-lte.svg" alt="" /></figure>
                                    <h3 className='flex flex-row-reverse my-3 rtl'>بسته اینترنت ثابت TD-LTE</h3>
                                </div>

                                <div className='h-full flex flex-col justify-between'>
                                    <ul className='rtl'>
                                        <li>بسته‌های ویژه برای مودم‌های اینترنت ثابت TD-LTE</li>
                                        <li>مناسب برای مصرف خانگی و اداری</li>
                                    </ul>
                                    <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>مشاهده بسته ها</button>
                                </div>
                            </div>
                        </div>


                        <div className='items border'>
                            <div className='p-3 h-full flex flex-col justify-between'>
                                <div className='flex flex-col items-center border-b'>
                                    <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/multi-user.svg" alt="" /></figure>
                                    <h3 className='flex flex-row-reverse my-3'>بسته اینترنت چندکاربره</h3>
                                </div>

                                <div className='h-full flex flex-col justify-between'>
                                    <ul>
                                        <li>مصرف اینترنت اشتراکی بدون محدودیت زمانی و مکانی</li>
                                        <li>صرفه‌جویی در هزینهٔ خرید بسته‌های اینترنت</li>
                                        <li>فعالسازی تنها با یک کد دستوری</li>
                                    </ul>
                                    <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>مشاهده بسته ها</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* *************************************************************** */}
                <section data-shop="simcards" className='hidden w-full'>
                    <div><h2 className='rtl'>سیم‌کارت‌های گوناگون با مزایای منحصر به فرد و هدایای ویژه!</h2></div>
                    <div className='flex flex-row-reverse mt-6'>

                        <div className='items border'>
                            <div className='p-3 h-full flex flex-col justify-between'>
                                <div className='flex flex-col items-center border-b'>
                                    <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/postpaid-simcard.svg" alt="" /></figure>
                                    <h3 className='flex flex-row-reverse my-3'>سیم کارت اعتباری</h3>
                                </div>

                                <div className='h-full flex flex-col justify-between'>
                                    <ul className='rtl'>
                                        <li>۵ گیگابایت اینترنت هدیه</li>
                                        <li>۶۰ دقیقه مکالمهٔ رایگان با تمام خطوط داخلی کشور</li>
                                        <li>۶۰ پیامک رایگان به تمام خطوط داخلی کشور</li>
                                    </ul>
                                    <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>خرید سیم کارت</button>
                                </div>
                            </div>
                        </div>


                        <div className='items border mx-3'>
                            <div className='p-3 h-full flex flex-col justify-between'>
                                <div className='flex flex-col items-center border-b'>
                                    <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/0900-SimCards.svg" alt="" /></figure>
                                    <h3 className='my-3'>سیم کارت باپیش شماره 0900</h3>
                                </div>

                                <div className='h-full flex flex-col justify-between'>
                                    <ul className='rtl'>
                                        <li>۸ گیگابایت اینترنت</li>
                                        <li>۹۰۰ دقیقه مکالمه با خطوط داخلی کشور</li>
                                        <li>۵۰۰ عدد پیامک به خطوط داخلی کشور</li>
                                    </ul>
                                    <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>خرید سیم کارت</button>
                                </div>
                            </div>
                        </div>


                        <div className='items border'>
                            <div className='p-3 h-full flex flex-col justify-between'>
                                <div className='flex flex-col items-center border-b'>
                                    <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/prepaid-simcard.svg" alt="" /></figure>
                                    <h3 className='flex flex-row-reverse my-3 rtl'>سیم کارت دائمی</h3>
                                </div>

                                <div className='h-full flex flex-col justify-between'>
                                    <ul className='rtl'>
                                        <li>۲۰ گیگابایت اینترنت هدیه</li>
                                        <li>۹۰۰ دقیقه مکالمهٔ رایگان با تمام خطوط داخلی کشور</li>
                                        <li>۹۰۰ پیامک رایگان به تمام خطوط داخلی کشور</li>
                                    </ul>
                                    <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>خرید سیم کارت</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* *************************************************** */}
                <section data-shop="products" className='hidden w-full'>
                    <div><h2 className='rtl'>با تنوعی از مودم‌ها و دستگاه‌های هوشمند؛ از زندگی در جهان ارتباطات لذت ببرید!</h2></div>
                    <div className='flex flex-row-reverse mt-6'>

                        <div className='items border'>
                            <div className='p-3 h-full flex flex-col justify-between'>
                                <div className='flex flex-col items-center border-b'>
                                    <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/Modem.svg" alt="" /></figure>
                                    <h3 className='rtl my-3'>مودم FD-M40 G1</h3>
                                </div>

                                <div className='h-full flex flex-col justify-between'>
                                    <ul className='rtl'>
                                        <li>مودم قابل حمل</li>
                                        <li>شبکه های قابل پشتیبانی</li>
                                        <li>قابلیت اتصال همزمان تا 10 کاربر از طریق Wi-Fi</li>
                                    </ul>
                                    <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>اطلاعات بیشتر</button>
                                </div>
                            </div>
                        </div>


                        <div className='items border mx-3'>
                            <div className='p-3 h-full flex flex-col justify-between'>
                                <div className='flex flex-col items-center border-b'>
                                    <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/Modem.svg" alt="" /></figure>
                                    <h3 className='my-3 rtl'>مودم جیبی TD-LTE 4.5 G هوآوی </h3>
                                </div>

                                <div className='h-full flex flex-col justify-between'>
                                    <ul className='rtl'>
                                        <li>همراه با سیم کارت TDLTE و سیم کارت FD ایرانسل</li>
                                        <li>مودم نسل 4.5 هوآوی</li>
                                    </ul>
                                    <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i className="bi bi-chevron-left inline-flex text-white"></i>اطلاعات بیشتر</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
            </div>
            {/* ****************************************************************** */}
            <div className='shopping-desktop-right h-fit w-[21%] xl:w-[21%]'>
                <div data-shop="internet-packages" className='border-b py-5 pointer-none' onClick={showHandler}>
                    <div className='flex flex-row-reverse items-center'>
                        <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/internet-packages-1.svg" alt="" /></figure>
                        <p className='pr-2'>بسته های اینترنت</p>
                    </div>
                </div>

                <div data-shop="simcards" className='border-b py-5' onClick={showHandler}>
                    <div className='flex flex-row-reverse items-center'>
                        <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/simcard.svg" alt="" /></figure>
                        <p className='pr-2'>سیم کارت</p>
                    </div>
                </div>

                <div data-shop="products" className='py-5' onClick={showHandler}>
                    <div className='flex flex-row-reverse items-center'>
                        <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/devices.svg" alt="" /></figure>
                        <p className='pr-2'>دستگاه ها</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default ShoppingDesktop