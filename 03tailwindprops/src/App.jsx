import { useState } from 'react'
import Card from './components/Card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-3'>Tailwind test</h1>
      {/* <Card channel="chaiaurcode"/> */}
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />
    </>
  )
}

export default App
