import { useState } from 'react'

import './App.css'
import Codeforces from './Components/codeforces/Codeforces'
import Leetcode from './Components/leetcode/Leetcode'
import Codechef from './Components/codechef/Codechef'
import HomePage from "./Components/HomePage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Codeforces/>
      {/* <Leetcode/> */}
      {/* <Codechef/> */}
      {/*<HomePage/>*/}
    </>
  )
}

export default App
