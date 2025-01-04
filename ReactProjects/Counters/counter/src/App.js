import {React ,useState} from 'react'
import './App.css';

function App() {

  let [counter,setCounter] = useState(0);
  // let counter = 15

  let incValue = () => {
    setCounter(counter+1)
    console.log("clicked");
  }

  let decValue = ()  => {
    setCounter(counter-1)
  }
  return (
    <>
    <div className="bg-green-200 h-dvh flex justify-center items-center">
      <div className="w-1/2 bg-violet-100 h-1/2 rounded-2xl flex justify-center items-center flex-col gap-y-4">
        <div className="w-52 bg-slate-500 rounded-3xl p-2 px-5 text-3xl">
          <h1>Counter: {counter}</h1>
        </div>
        <div className="flex justify-center items-center"><button onClick={incValue} className="w-16 p-2 rounded-3xl bg-black text-white">+</button></div>
        <div className="flex justify-center items-center"><button onClick={decValue} className="w-16 p-2 rounded-3xl bg-black text-white">-</button></div>
      </div>
    </div>
    </>
  );
}

export default App;
