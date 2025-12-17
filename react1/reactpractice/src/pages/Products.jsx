/*import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        // If API returns { products: [...] }
        setProducts(data.products ?? data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "60px" }}>
      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid black",
            width: "250px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <img
            src={p.img}
            alt={p.title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
            }}
          />

          <p style={{ fontWeight: "bold" }}>{p.title}</p>
          <p>Price: ${p.price}</p>
        </div>
      ))}
    </div>
  );
}





export default product */
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Our Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "25px",
          height: "80vh",
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {products.map((p) => (
          <div
            key={p._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              background: "#fff",
            }}
          >
            <img
              src={p.img}
              alt={p.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />

            <h3 style={{ margin: "10px 0" }}>{p.title}</h3>

            {p.category && (
              <p style={{ color: "#777", fontSize: "14px" }}>
                Category: {p.category}
              </p>
            )}

            <p style={{ fontWeight: "bold", fontSize: "18px" }}>
              ₹ {p.price}
            </p>

            {p.description && (
              <p style={{ fontSize: "14px", color: "#555" }}>
                {p.description}
              </p>
            )}

            <button
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "10px",
                background: "#0d6efd",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
