import React, { createContext, useState } from 'react'



const MyContext = createContext()
function ContextHandler({children}) {
    const [menuHamburger , setMenuHamburger] = useState(false)
    const [menuHeight , setMenuHeight] = useState("")
  return (
    <MyContext.Provider value={{menuHamburger , setMenuHamburger , menuHeight , setMenuHeight}}>
        {children}
    </MyContext.Provider>
  )
}

export {MyContext , ContextHandler}