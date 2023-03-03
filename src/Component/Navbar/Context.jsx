import React, { createContext, useState } from 'react'



const MyContext = createContext()
function ContextHandler({children}) {
    const [menuHamburger , setMenuHamburger] = useState(false)
  return (
    <MyContext.Provider value={{menuHamburger , setMenuHamburger}}>
        {children}
    </MyContext.Provider>
  )
}

export {MyContext , ContextHandler}