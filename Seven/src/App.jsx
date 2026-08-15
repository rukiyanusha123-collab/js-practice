import axios from "axios";
import { useState,useEffect } from "react";

function App(){
  const [users,setUsers]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/users")
    .then((response)=>{
      setUsers(response.data)
    })
  },[])

  return(
    <>
    <h1>Users</h1>
    {users.map((user)=>(
      <p key={user.id}>{user.name}</p>
    ))}
    </>
  )
}
export default App;