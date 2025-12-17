/*import React from 'react'
import { useState } from 'react'

function Signup() {
  const [username, setusername] = useState("");
const [Email, setemail] = useState("");
const [password, setpassword] = useState("");


//handle the submit
async function handlesubmit(e){
  e.preventDefault()//to avoid page reload
  let data={username,Email,password}
 let finalres= await fetch('http://localhost:5000/signup',{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)
  })
let ultimateres=await finalres.json()
  console.log(ultimateres)
  //console.log(data)
}




  return (
    <>
    <div style={{ textAlign: "center" }}>
  <h1>Registration</h1>

  <form onSubmit={handlesubmit}>
    <div>
      <label htmlFor="username">Username</label><br />
      <input value={username} onChange={(e)=>setusername(e.target.value)} type="text" id="username" />
    </div>

    <div>
      <label htmlFor="password">Password</label><br />
      <input value={password}onChange={(e)=>setpassword(e.target.value)} type="password" id="password" />
    </div>

    <div>
      <label htmlFor="email">Email</label><br />
      <input value={Email}onChange={(e)=>setemail(e.target.value)} type="email" id="email" /> <br/>
    </div><br/>

    <button type="submit">Submit</button><br/>
  </form>
</div>

 
    </>
  )
}*/

//export default Signup
import React, { useRef } from 'react'
//import { useState } from 'react'
function Signup() {
  //state variables
  /*const [username,setusername]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')*/
  let usernameref=useRef(null)
  let passwordref=useRef(null)
  let emailref=useRef(null)

  
  //handle the submit
 async function handlesubmit(e){
   e.preventDefault()

  let data={username:usernameref.current.value,password:passwordref.current.value,email:emailref.current.value}
   //sedn this data to backend
 let finalres= await fetch('http://localhost:5000/signup',{
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
      <label htmlFor="">Username</label>  <br />
   <input ref={usernameref}/*value={username}  onChange={(e)=>setusername(e.target.value)} */  type="text" />
      </div>

      <div>
  <label htmlFor="">email</label>   <br />
   <input ref={emailref} /*value={email} onChange={(e)=>setemail(e.target.value)} */type="text" />
      </div>

      <div>

   <label htmlFor="">Password</label> <br /> 
   <input ref={passwordref} /*value={password}  onChange={(e)=>setpassword(e.target.value)}  */ type="password" />
      </div>  <br /> 
   
<button  style={{backgroundColor:"skyblue"}}   type='submit'>Register</button>

     </form>

    </div>


    
    
    </>
  )
}

export default Signup