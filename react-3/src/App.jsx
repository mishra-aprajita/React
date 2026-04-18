
import UseStateone from './Hooks/UseStateone';

function App() {
  return (
  <>
    <UseStateone/>
  </>
  );
}

export default UseStateone;

import React from 'react'

const multiCounter = () => {
    const[count,setCount]   =  useState([0,0])
  
  const increment=(index)=>{
    //setCount{((prev))}=>console.log(prev,"previous")}
    setCount((prevCount)=>{
      const newCount = [...prevCount]
      console.log(newCount);
      newCount[index] += 1
      return newCount
    })
  }
  return (
    <div>
       {count.map((counter,index)=>(
      <div>
      <h1> count:{counter}</h1>
      <button onClick={()=>increment(index)}>increment</button>
      
    </div>
    ))}
  </div>
  )
}

export default multiCounter

import React,{useState} from 'react'

const ShowHide = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <input type={showPassword ? "text" : "password"} />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  )
}

export default ShowHide

import React,{useState} from 'react'

const DarkLight = () => {
    const [dark, setDark] = useState(false);
  return (
    <div style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black" }}>
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  )
}

export default DarkLight