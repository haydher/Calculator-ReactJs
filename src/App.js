import { evaluate } from "mathjs";
import "./App.css";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
 const containerStyle = {
  backgroundColor: "#2f2c3b",
  borderRadius: "12px",
  boxShadow:
   "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
 };

 const [inputText, setInputText] = useState(["0"]);
 const [result, setResult] = useState("0");

 const ops = ["/", "*", "+", "-", ".", "x"];
 const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 const validInput = [...numbers, ...ops];

 // update the state if user is typing on keyboard
 useEffect(() => {
  const myListener = (event) => {
   if (validInput.includes(event.key)) updateInput(event.key);
   else if (event.key == "Enter") computeResults();
  };
  document.addEventListener("keydown", myListener);

  // unmount the event listener after its used
  return () => document.removeEventListener("keydown", myListener);
 }, [inputText]);

 // update the state
 const updateInput = (value) => {
  if (ops.includes(inputText.slice(-1).toString()) && !numbers.includes(value)) return;

  if (inputText[0] === "0" && !ops.includes(value) && inputText.length < 2)
   setInputText((prevState) => (prevState = ""));

  setInputText((prevState) => [...prevState, value]);
 };

 // compute the results
 const computeResults = () => {
  const toString = inputText.slice(-1).toString();
  if (ops.includes(toString)) return;

  const result = evaluate(inputText.join(""));
  setResult(result);
  setInputText(["0"]);
 };

 // delete the last input
 const deleteInput = () => {
  if (inputText[0] === "0" && inputText.length < 1) return;
  let value = inputText.slice(0, -1);
  if (value.length < 1) value[0] = 0;
  setInputText([...value]);
 };

 const allClear = () => {
  setInputText(["0"]);
  setResult(["0"]);
 };

 const changeSign = () => {
  setInputText((prevState) => ["-", ...prevState]);
 };

 return (
  <div className="App">
   <div className="container" style={containerStyle}>
    <Input text={inputText} result={result} />

    <div className="btnContainer">
     <div className="buttons">
      <Button variant={"btn1"} symbol={"AC"} onClick={allClear} />
      <Button variant={"btn2"} symbol={"+/-"} onClick={changeSign} />
      <Button variant={"btn2"} symbol={"DEL"} onClick={deleteInput} />
      <Button variant={"btn3"} symbol={"/"} onClick={updateInput} />
     </div>
     <div className="buttons">
      <Button variant={"btn2"} symbol={"7"} onClick={updateInput} />
      <Button variant={"btn2"} symbol={"8"} onClick={updateInput} />
      <Button variant={"btn2"} symbol={"9"} onClick={updateInput} />
      <Button variant={"btn3"} symbol={"*"} onClick={updateInput} />
     </div>
     <div className="buttons">
      <Button variant={"btn2"} symbol={"4"} onClick={updateInput} />
      <Button variant={"btn2"} symbol={"5"} onClick={updateInput} />
      <Button variant={"btn2"} symbol={"6"} onClick={updateInput} />
      <Button variant={"btn3"} symbol={"-"} onClick={updateInput} />
     </div>
     <div className="buttons">
      <Button variant={"btn2"} symbol={"1"} onClick={updateInput} />
      <Button variant={"btn2"} symbol={"2"} onClick={updateInput} />
      <Button variant={"btn2"} symbol={"3"} onClick={updateInput} />
      <Button variant={"btn3"} symbol={"+"} onClick={updateInput} />
     </div>
     <div className="buttons">
      <Button variant={"btn2"} symbol={"0"} onClick={updateInput} />
      <Button variant={"btn2"} symbol={"."} onClick={updateInput} />
      <Button variant={"btn4"} symbol={"="} onClick={computeResults} />
     </div>
    </div>
   </div>
  </div>
 );
};

export default App;
