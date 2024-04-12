import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          {/* <Route path="/hack" element={<Hack />} /> */}
          <Route path="/allthons" element={<AllThons />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
