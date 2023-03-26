import React from 'react'
import Footer from './Component/footer/Footer'
import Main from './Component/Main/Main'
import { ContextHandler } from './Component/Navbar/Context'
import Navbar from './Component/Navbar/Navbar'

function App() {
  return (
    <>
      <ContextHandler>
        <Navbar />
        <Main />
        <Footer />
      </ContextHandler>
    </>
  )
}

export default App