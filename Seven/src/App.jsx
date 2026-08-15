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
  const addUser=()=>{
    axios.post("http://localhost:3000/users",{
      id:10,
      name:"Risla"
    }
    )
    .then((respose)=>{
      setUsers([...users,respose.data])
    })
  }

  return(
    <>
    <h1>Users</h1>
    <button onClick={addUser}>Add User</button>
    {users.map((user)=>(
      <p key={user.id}>{user.name}</p>
    ))}
    </>
  )
}
export default App;