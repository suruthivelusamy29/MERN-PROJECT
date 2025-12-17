/*import React from 'react'



function Home() {
  return (
    <>
      <div style={{ fontFamily: "Arial, sans-serif" }}>

        {/* Hero Section }
        <div
          style={{
            background: "linear-gradient(to right, #4facfe, #00f2fe)",
            color: "white",
            padding: "80px 20px",
            textAlign: "center"
          }}
        >
          <h1 style={{ fontSize: "40px" }}>Welcome to My Application</h1>
          <p style={{ fontSize: "18px", marginTop: "10px" }}>
            Build faster. Work smarter. Grow better.
          </p>
          <button
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              fontSize: "16px",
              backgroundColor: "white",
              color: "#4facfe",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Explore Now
          </button>
        </div>

        {/* Features Section }
        <div style={{ padding: "50px 20px", textAlign: "center" }}>
          <h2>Our Features</h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "30px",
              flexWrap: "wrap"
            }}
          >
            <div style={cardStyle}>
              <h3>🚀 Fast</h3>
              <p>Optimized performance for smooth experience.</p>
            </div>

            <div style={cardStyle}>
              <h3>🔒 Secure</h3>
              <p>Your data is protected with modern security.</p>
            </div>

            <div style={cardStyle}>
              <h3>🎨 Modern UI</h3>
              <p>Clean and user-friendly interface.</p>
            </div>
          </div>
        </div>

        {/* Call To Action }
        <div
          style={{
            backgroundColor: "#f4f6f8",
            padding: "40px 20px",
            textAlign: "center"
          }}
        >
          <h2>Ready to Get Started?</h2>
          <p>Join us and experience the difference.</p>
          <button
            style={{
              backgroundColor: "#4facfe",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Get Started
          </button>
        </div>

        {/* Footer }
        <footer
          style={{
            textAlign: "center",
            padding: "15px",
            backgroundColor: "#222",
            color: "white"
          }}
        >
          <p>© 2025 My Application | All Rights Reserved</p>
        </footer>

      </div>
    </>
  );
}

const cardStyle = {
  backgroundColor: "white",
  padding: "20px",
  width: "250px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
};


  

export default Home;*/
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO SECTION */}
      <div
        style={{
          background: "linear-gradient(to right, #ff9966, #ff5e62)",
          color: "white",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "42px" }}>Shop Smart. Shop Easy.</h1>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Discover premium products at unbeatable prices
        </p>
        <button
          onClick={() => navigate("/products")}
          style={heroBtn}
        >
          Shop Now
        </button>
      </div>

      {/* CATEGORIES */}
      <div style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Popular Categories</h2>

        <div style={categoryGrid}>
          <div style={categoryCard}>👜<p>Bags</p></div>
          <div style={categoryCard}>⌚<p>Watches</p></div>
          <div style={categoryCard}>🪑<p>Furniture</p></div>
          <div style={categoryCard}>👟<p>Fashion</p></div>
        </div>
      </div>

      {/* FEATURES */}
      <div
        style={{
          backgroundColor: "#f4f6f8",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2>Why Shop With Us?</h2>

        <div style={featureGrid}>
          <div style={featureCard}>🚚 Free Delivery</div>
          <div style={featureCard}>🔒 Secure Payments</div>
          <div style={featureCard}>💯 Quality Products</div>
          <div style={featureCard}>🔁 Easy Returns</div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={footerStyle}>
        <p>© 2025 E-Shop | All Rights Reserved</p>
      </footer>
    </div>
  );
}

const heroBtn = {
  marginTop: "25px",
  padding: "12px 30px",
  fontSize: "16px",
  backgroundColor: "white",
  color: "#ff5e62",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const categoryGrid = {
  display: "flex",
  justifyContent: "center",
  gap: "25px",
  marginTop: "30px",
  flexWrap: "wrap",
};

const categoryCard = {
  width: "150px",
  height: "120px",
  backgroundColor: "white",
  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
  borderRadius: "10px",
  fontSize: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const featureGrid = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  marginTop: "30px",
  flexWrap: "wrap",
};

const featureCard = {
  backgroundColor: "white",
  padding: "20px",
  width: "200px",
  borderRadius: "10px",
  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
};

const footerStyle = {
  backgroundColor: "#222",
  color: "white",
  textAlign: "center",
  padding: "15px",
};

export default Home;

