/*import React from 'react';

function About() {
  return (
    <>
      <div style={{ fontFamily: "Arial, sans-serif" }}>

        {/* Hero Section }
        <div
          style={{
            background: "linear-gradient(to right, #8360c3, #2ebf91)",
            color: "white",
            padding: "70px 20px",
            textAlign: "center"
          }}
        >
          <h1>About Our Platform</h1>
          <p style={{ maxWidth: "700px", margin: "15px auto", fontSize: "18px" }}>
            We build powerful, user-friendly applications that help people
            achieve more with technology.
          </p>
        </div>

        {/* About Text }
        <div style={{ padding: "40px 20px", textAlign: "center" }}>
          <h2>Who We Are</h2>
          <p style={{ maxWidth: "800px", margin: "20px auto", color: "#555" }}>
            Our team focuses on delivering high-quality digital products using
            modern technologies. We believe in innovation, simplicity, and
            performance to create experiences users love.
          </p>
        </div>

        {/* Scrollable Cards Section }
        <div style={{ padding: "20px" }}>
          <h2 style={{ textAlign: "center" }}>What Drives Us</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "30px",
              overflowX: "auto",
              paddingBottom: "15px"
            }}
          >
            <div style={cardStyle}>🚀<h3>Innovation</h3><p>We push boundaries to create cutting-edge solutions.</p></div>
            <div style={cardStyle}>🎯<h3>Mission</h3><p>Deliver impactful software that solves real problems.</p></div>
            <div style={cardStyle}>🌍<h3>Vision</h3><p>Empower people through technology worldwide.</p></div>
            <div style={cardStyle}>🔒<h3>Security</h3><p>Keeping user data safe is our top priority.</p></div>
            <div style={cardStyle}>⚡<h3>Performance</h3><p>Fast, scalable, and reliable applications.</p></div>
            <div style={cardStyle}>🤝<h3>Teamwork</h3><p>Collaboration fuels our success.</p></div>
          </div>
        </div>

        {/* Stats / Highlights }
        <div
          style={{
            backgroundColor: "#f4f6f8",
            padding: "40px 20px",
            textAlign: "center",
            marginTop: "30px"
          }}
        >
          <h2>Our Impact</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              marginTop: "20px",
              flexWrap: "wrap"
            }}
          >
            <div><h1>50+</h1><p>Projects</p></div>
            <div><h1>10K+</h1><p>Users</p></div>
            <div><h1>99%</h1><p>Uptime</p></div>
          </div>
        </div>

        {/* Footer }
        <footer
          style={{
            backgroundColor: "#222",
            color: "white",
            textAlign: "center",
            padding: "15px",
            marginTop: "40px"
          }}
        >
          <p>© 2025 My Application | About Us</p>
        </footer>

      </div>
    </>
  );
}

const cardStyle = {
  minWidth: "240px",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
  textAlign: "center",
  flexShrink: 0
};

export default About;*/

import React from "react";

function About() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO */}
      <div
        style={{
          background: "linear-gradient(to right, #36d1dc, #5b86e5)",
          color: "white",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h1>About Our Store</h1>
        <p style={{ maxWidth: "700px", margin: "15px auto" }}>
          Your trusted destination for quality shopping online
        </p>
      </div>

      {/* ABOUT CONTENT */}
      <div style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Who We Are</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", color: "#555" }}>
          We are an e-commerce platform committed to providing high-quality
          products at affordable prices. Our goal is to make online shopping
          simple, secure, and enjoyable for everyone.
        </p>
      </div>

      {/* VALUES */}
      <div style={valuesGrid}>
        <div style={valueCard}>🛍️<h3>Wide Selection</h3><p>Products across multiple categories</p></div>
        <div style={valueCard}>🔒<h3>Secure Checkout</h3><p>Safe and trusted payments</p></div>
        <div style={valueCard}>🚚<h3>Fast Shipping</h3><p>Quick and reliable delivery</p></div>
        <div style={valueCard}>💬<h3>Customer Support</h3><p>24/7 assistance</p></div>
      </div>

      {/* FOOTER */}
      <footer style={footerStyle}>
        <p>© 2025 E-Shop | About Us</p>
      </footer>
    </div>
  );
}

const valuesGrid = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  padding: "20px",
  flexWrap: "wrap",
};

const valueCard = {
  width: "240px",
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const footerStyle = {
  backgroundColor: "#222",
  color: "white",
  textAlign: "center",
  padding: "15px",
  marginTop: "40px",
};

export default About;

