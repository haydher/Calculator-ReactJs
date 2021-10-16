import React from "react";
import "./Input.css";

const Input = ({ text, result }) => {
 return (
  <div className="input">
   <div className="results">
    <h2>{result}</h2>
   </div>
   <div className="inputText">
    <h1>{text}</h1>
   </div>
  </div>
 );
};

export default Input;
