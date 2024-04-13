import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Signin from './routes/signin/Signin'
import Signup from './routes/signup/Signup'
import Hack from './routes/Hack/index'
import AllThons from './routes/allthons/AllThons'
import { Header } from './components/Hero'
import CodeSpace from './routes/Hack/codespace'
import Createthon from './routes/createthon/Createthon'
import Managethon from './routes/managethon/Managethon'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path='/hack' element={<Hack/>} />
          <Route path="/allthons" element={<AllThons />} />
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<Home />} />
          <Route path='/createthon' element={<Createthon/>} />
          <Route path='/managethon' element={<Managethon/>} />
          {/* <Route path="/codespace" element={<CodeSpace />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
