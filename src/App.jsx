import { useState } from 'react'

import './App.css'
import Codeforces from './Components/codeforces/Codeforces'
import Leetcode from './Components/leetcode/Leetcode'
import Codechef from './Components/codechef/Codechef'
import HomePage from "./Components/HomePage";
import { BrowserRouter, Link, Routes,Route, redirect } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <Codeforces/> */}
      {/* <Leetcode/> */}
      {/* <Codechef/> */}

      <BrowserRouter>
       {/* <HomePage/>  */}
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/codeforces' element={<Codeforces/>} />  
            <Route path='/codechef'  element={<Codechef/>} />
            <Route path='/leetcode' element={<Leetcode/>} />
         </Routes> 
       </BrowserRouter>
      </>
    
  )
}

export default App
