//import React from 'react'
//import reactLogo from '../assets/react.svg'

/*function Header() {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid black",
          backgroundColor: "grey",
          alignItems: "center",
          padding: "10px"
        }}
      >
        <img src={reactLogo} alt="logo" height={50} />

        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="">home</a>
          <a href="">about</a>
          <a href="">movies</a>
          <a href="">contact</a>
          </nav>
  </header>
  </>
  )
}

export default Header*/
////for single page
import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "grey",
      }}
    >
      <img src={reactLogo} alt="logo" height={40} />

      <nav style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  );
}

export default Header;
