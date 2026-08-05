import { useState } from "react";
import "./App.css";

function App(){
  const [count,setCount]=useState(0);

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