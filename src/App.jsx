import React from 'react'
import Main from './Component/Main/Main'
import { ContextHandler } from './Component/Navbar/Context'
import Navbar from './Component/Navbar/Navbar'

function App() {
  return (
    <>
      <ContextHandler>
      <Navbar/>
      <Main/>
      </ContextHandler>
    </>
  )
}

export default App