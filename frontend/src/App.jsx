import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Signup from './routes/Signup'
import Signin from './routes/Signin'
import Hack from './routes/Hack/index'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path='/hack' element={<Hack/>} />
          {/* <Route path="/hack" element={<Hack />} /> */}
          {/* <Route path="/allthons" element={<AllThons />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
