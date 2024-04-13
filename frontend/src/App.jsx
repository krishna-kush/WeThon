import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home2 from './routes/home/Home'
import Signin from './routes/signin/Signin'
import Signup from './routes/signup/Signup'
import Hack from './routes/Hack/index'
import AllThons from './routes/allthons/AllThons'
// import { Header } from './components/Hero'
import CodeSpace from './routes/Hack/codespace'
import Createthon from './routes/createthon/Createthon'
import Managethon from './routes/managethon/Managethon'

import PageNotFound from './routes/PageNotFound'

import Header from './components/Header/index'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/home*" element={<span />} /> */}
          <Route path="/*" element={<Header />} />

        </Routes>

        <Routes>


          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path='/hack' element={<Hack/>} />
          <Route path="/allthons" element={<AllThons />} />
          <Route path="/header" element={<Header />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path='/createthon' element={<Createthon/>} />
          <Route path='/managethon' element={<Managethon/>} />
          {/* <Route path="/codespace" element={<CodeSpace />} /> */}
          <Route path='/home' element={<Home2/>}/>


          <Route path='/*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
