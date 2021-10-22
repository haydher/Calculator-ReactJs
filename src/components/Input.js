import React from "react";
import { InputDiv, H1, H2 } from "./styles/Input.styles";

const InputComponent = ({ text, result }) => {
 return (
  <InputDiv>
   <H1>{result}</H1>
   <H2>{text}</H2>
  </InputDiv>
 );
};

export default InputComponent;
