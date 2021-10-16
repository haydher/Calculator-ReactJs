import React from "react";
import "./Button.css";

const Button = ({ variant, symbol, onClick }) => {
 // give specific color to each btn
 // const variantsStyles = {
 //  btn1: {
 //   backgroundColor: "#2f2c3b",
 //   color: "#7C5EFE",
 //  },
 //  btn2: {
 //   backgroundColor: "#2f2c3b",
 //   color: "#ffffffa9",
 //  },
 //  btn3: {
 //   backgroundColor: "#cbcbcb",
 //   color: "#2f2c3b",
 //  },
 //  btn4: {
 //   backgroundColor: "#7C5EFE",
 //   color: "#ffffffa9",
 //  },
 // };

 return (
  // <button onClick={() => onClick(symbol)} style={variantsStyles[variant]}>
  <button onClick={() => onClick(symbol)} className={variant}>
   {symbol}
  </button>
 );
};

export default Button;
