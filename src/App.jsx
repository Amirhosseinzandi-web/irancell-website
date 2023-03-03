import React from 'react'
import { ContextHandler } from './Component/Navbar/Context'
import Navbar from './Component/Navbar/Navbar'

function App() {
  return (
    <>
      <ContextHandler>
      <Navbar/>
      </ContextHandler>
    </>
  )
}

export default App