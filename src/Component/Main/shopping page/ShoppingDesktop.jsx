import React from 'react'

function ShoppingDesktop() {
    return (
        <section className='shopping-desktop-wrapper hidden lg:flex mt-6 justify-between'>
            <div className='shopping-desktop-left flex mt-[5%] w-[75%] xl:w-[80%]'>
                <section className='w-full'>
                    <div><h2 cl>بسته‌های اینترنت پرسرعت و به‌صرفه، با حجم های متنوع</h2></div>
                    <div className='flex mt-6'>
                        <div className='items border'>

                            <div className='p-3 h-full'>
                                <div className='flex h-[25%] flex-col items-center border-b'>
                                    <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/4g.svg" alt="" /></figure>
                                    <h3 className='flex flex-row-reverse my-3'>بسته اینترنت همراه<span className='pr-1'>4g</span></h3>
                                </div>

                                <div className='flex h-[75%] flex-col justify-between'>
                                    <ul>
                                        <li>سرعت بالای اینترنت</li>
                                        <li>بسته‌های اینترنت به صرفه</li>
                                        <li>خرید و فعالسازی آسان</li>
                                    </ul>
                                    <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i class="bi bi-chevron-left inline-flex text-white"></i>مشاهده بسته ها</button>
                                </div>
                            </div>

                        </div>
                        <div className='items border mx-3'>

                            <div className='p-3 h-full'>
                                <div className='flex h-[25%] flex-col items-center border-b'>
                                    <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/4g.svg" alt="" /></figure>
                                    <h3 className='flex flex-row-reverse my-3'>بسته اینترنت همراه<span className='pr-1'>4g</span></h3>
                                </div>

                                <div className='flex h-[75%] flex-col justify-between'>
                                    <ul>
                                        <li>سرعت بالای اینترنت</li>
                                        <li>بسته‌های اینترنت به صرفه</li>
                                        <li>خرید و فعالسازی آسان</li>
                                    </ul>
                                    <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i class="bi bi-chevron-left inline-flex text-white"></i>مشاهده بسته ها</button>
                                </div>
                            </div>

                        </div>
                        <div className='items border'>

                            <div className='p-3 h-full'>
                                <div className='flex h-[25%] flex-col items-center border-b'>
                                    <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/4g.svg" alt="" /></figure>
                                    <h3 className='flex flex-row-reverse my-3'>بسته اینترنت همراه<span className='pr-1'>4g</span></h3>
                                </div>

                                <div className='flex h-[75%] flex-col justify-between'>
                                    <ul>
                                        <li>سرعت بالای اینترنت</li>
                                        <li>بسته‌های اینترنت به صرفه</li>
                                        <li>خرید و فعالسازی آسان</li>
                                    </ul>
                                    <button className="w-full bg-yellow flex items-center justify-between mt-3 text-black font-bold"><i class="bi bi-chevron-left inline-flex text-white"></i>مشاهده بسته ها</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            <div className='shopping-desktop-right w-[21%] xl:w-[20%]'>
                <div className='border-b py-5'>
                    <div className='flex flex-row-reverse items-center'>
                        <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/internet-packages-1.svg" alt="" /></figure>
                        <p className='pr-2'>بسته های اینترنت</p>
                    </div>
                </div>

                <div className='border-b py-5'>
                    <div className='flex flex-row-reverse items-center'>
                        <figure><img src="https://irancell.ir/wp-content/uploads/2022/03/simcard.svg" alt="" /></figure>
                        <p className='pr-2'>سیم کارت</p>
                    </div>
                </div>

                <div className='py-5'>
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