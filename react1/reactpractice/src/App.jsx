//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import Demo from './Demo'

//import viteLogo from '/vite.svg'
//import { count } from 'console'
//import './App.css'
//import { useState,useEffect } from 'react'
//import virtual from './components/virtual'
//import Header from './components/Header'
//import Card from './components/card'
/*function App() {
let a=10
  return (
    <>
  <Header/>
  <section>
     <Card movie="bahubali" rating="5" img="https://e0.pxfuel.com/wallpapers/129/195/desktop-wallpaper-prabhas-ka-shiv-ling-bahubali.jpg"/>
      <Card  movie="kgf" rating="4" img="https://www.kerala9.com/wp-content/uploads/2022/04/kgf-chapter-2-photos-hd-011.jpg"/>
       <Card movie="avatar" rating="3"  img="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/08/AVATAR_RERLS_1SHT_DIGITAL_sRGB_V7.jpg"/>
       <Card movie="Hi Nanna" rating="5" img ="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hi-nanna-et00364503-1701678655.jpg"/>
  </section>
  function App() {

  const [count, setcount] = useState(0)
  const[secondbtn,setsecondbtn]=useState(1)
  const [name, setname] = useState("Suruthi")
  function handlecount(){
  setcount(count=>count+1)
}
function diff(){
  setsecondbtn(secondbtn=>secondbtn-1)
}
function magic(){
  setname(name=>"hi "+name)
}
return (
    <>
<button onClick={handlecount}>count{count}</button>
<button onClick={diff}>count{secondbtn}</button>
<button onClick={magic}>{name}</button>*/





      
 /*function App() {
  const[products,setproducts]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/products")
  .then(response => response.json())
  .then(data => setproducts(data.products));//take the data and pass to products so thta only instad of console.log we 
  //use setproducts which directly pass the data to the products
  },
  [])
return (
    <>

<h1> E-commerce</h1>
 {/* Flex container for side-by-side cards */
      /*<div style={{ display: "flex", flexWrap: "wrap", gap: "60px" }}>
        {products.map((p) => ( //map is used to get all products
          <div
            key={p.id}
            style={{
              border: "1px solid black",
              width: "250px",
              padding: "10px",
              borderRadius: "10px"
            }}
          >
            <img
              src={p.img}
              alt={p.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain"
              }}
            />

            <p style={{ fontWeight: "bold" }}>{p.title}</p>
            <p>Price: ${p.price}</p>
            
          </div>
        ))}
      </div>

    </>
  )
}

//export default App
//parent component and from import from virtual which is child 
function App() {
  return (
    <>
    
    </>
  );
}

export default App;*/

//import React from 'react'
//import { useState ,useEffect} from 'react'
/*function App() {
  const [message, setmessage] =useState('')
  useEffect(()=>{
console.log("hello")
  },[message])
function handlechANGE(e){
setmessage(e.target.value)
}
  return (
    <>
    <input onChange={handlechANGE} type="test" placeholder='username'/>
    {message}
    </>
  )
}*/
import React from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
function App() {
  return (
    <>
    <BrowserRouter>
 <Header/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/> 
   <Route path='/products' element={<Products/>}/>
    <Route path='/signin' element={<Signin/>}/>  
     <Route path='/signup' element={<Signup/>}/> 
 </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App

