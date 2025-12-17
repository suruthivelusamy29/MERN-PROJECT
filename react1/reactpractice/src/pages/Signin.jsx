/*import React from 'react'
import { useState } from 'react'
function Signin() {
const [firstname, setfirstname] = useState('')

const [email, setemail] = useState('')
const[passwords,setpasswords]=useState('')
async function handlesubmit(e){
   e.preventDefault()

  let data={firstname,passwords,email}
   //sedn this data to backend
 let finalres= await fetch('http://localhost:5000/signin',{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)
   })
   let ultimateresult=await finalres.json()
   alert(`${ultimateresult.msg}`)

  }
  return (
    
    <>
    <div style={{textAlign:"center"}} >
    <h2>Registration Form</h2>
     <form onSubmit={handlesubmit}  >
      <div>
      <label htmlFor="">firstname</label>  <br />
   <input value={firstname}  onChange={(e)=>setfirstname(e.target.value)}   type="text" />
      </div>
      

      <div>
  <label htmlFor="">email</label>   <br />
   <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" />
      </div>

      <div>

   <label htmlFor="">Password</label> <br /> 
   <input  value={passwords}  onChange={(e)=>setpasswords(e.target.value)}   type="password" />
      </div>  <br /> 
   
<button  style={{backgroundColor:"skyblue"}}   type='submit'>Login</button>

     </form>

    </div>


    
      </>
  )
}

export default Signin*/
import React, { useState } from "react";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // Make sure keys match backend: username and password
    const data = { username, password };

    try {
      const response = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.msg || "Login failed");
        return;
      }

      // On success
      alert(result.msg);
      console.log("JWT Token:", result.token);
      // You can save token to localStorage if needed:
      // localStorage.setItem("token", result.token);

      // Clear form
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Check console.");
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label> <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label> <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit" style={{ backgroundColor: "skyblue" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Signin;
