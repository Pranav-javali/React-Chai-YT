import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(10)

  const increase = () =>{
    if(counter >= 20){
      alert("Counter is already at max")
    }
    else{
      counter = counter+1
      setCounter(counter)
    }
    console.log(counter)
    //setCounter(counter+1)
  }

  const decrease = () =>{
    if(counter <= 0){
      alert("Counter cannot go negative")
    }
    else{
      counter = counter-1
      setCounter(counter)
    } 
    console.log(counter)
  }

  return (
    <>
      <h1>Chai aur React | 05</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={increase}>++</button>
      <br/>
      <button onClick={decrease}>--</button>
    </>
  )
}

export default App
