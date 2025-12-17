/*import React from 'react'

function Card(props) {
  return (
   <>
   <div style={{border:"1px solid black"}}>
    <img src={props.img} alt="" style={{
             marginTop: "10px",
            width: "20%",       
            height: "400px",     
            objectFit: "cover", 
            borderRadius: "10px"
          }}
         />
    <p style={{ fontSize: "20px", fontWeight: "bold" }}>name:{props.movie}</p>
    <p style={{ fontSize: "16px", color: "grey" }}> rating:{props.rating}</p>
   
   </div>
   </>
  )
}

export default Card*/
import React from 'react';

function Card(props) {
  return (
    <>
      <div style={cardStyle}>
        
        <img
          src={props.img}
          alt={props.movie}
          style={imgStyle}
        />

        <div style={{ padding: "15px" }}>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {props.movie}
          </p>
          <p style={{ fontSize: "15px", color: "gray" }}>
            ⭐ Rating: {props.rating}
          </p>
        </div>

      </div>
    </>
  );
}

/* ---------- Styles ---------- */

const cardStyle = {
  width: "250px",
  borderRadius: "12px",
  boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
  overflow: "hidden",
  backgroundColor: "white",
  textAlign: "center"
};

const imgStyle = {
  width: "100%",
  height: "300px",
  objectFit: "cover"
};

export default Card;
