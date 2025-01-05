import { useState } from 'react'
import './App.css'

function Counter() {
  let [counter, setCounter] = useState(0)

  let incValue  = () =>{
    setCounter(counter+1);
  }

  let decValue  = () =>{
    setCounter(counter-1);
  }

  return (
    <>
    <div>
      <div>
        <h1>Counter : {counter}</h1>
        <button onClick={incValue}>Increase</button>
        <button onClick={decValue}>Decrease</button>
      </div>
    </div>
    </>
  )
}

export default Counter
