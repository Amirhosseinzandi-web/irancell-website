import React from 'react'

function NavRight() {
  return (
    <div className='nav-right bg-yellow w-full lg:w-[80%] p-4'>
        <section className='flex flex-wrap'>
            <div className='w-[60%] border'>left</div>
            <div className='w-[40%] border'>right</div>
        </section>
    </div>
  )
}

export default NavRight