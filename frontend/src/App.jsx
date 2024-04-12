import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Signin from './routes/signin/Signin'
import Signup from './routes/signup/Signup'
import Hack from './routes/Hack/index'
import AllThons from './routes/allthons/AllThons'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path='/hack' element={<Hack/>} />
          <Route path="/allthons" element={<AllThons />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
