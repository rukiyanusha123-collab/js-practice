import { useEffect, useState } from "react";
import "./App.css";

function App(){
  const [count,setCount]=useState(()=>{
    const savedCOunt=localStorage.getItem("myCount");
    return savedCOunt !==null?Number(savedCOunt):0;
  });
  useEffect(()=>{
    localStorage.setItem("myCount",count);   
  },[count])



  return(
    <>
    <h1>{count}</h1>
    <h2>Counter App</h2>
    <div className="container">
    <div>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
    <div>
    <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
    <div>
    <button onClick={()=>setCount(0)}>Reset</button>
    </div>
    </div>
    </>
  )
}
export default App;