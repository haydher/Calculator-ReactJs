import { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/Theme";
import { GlobalComponents } from "./components/styles/GlobalComponents";
import { Container } from "./components/styles/Container";
import InputComponent from "./components/Input";
import { BtnContainer, ButtonsRowContainer } from "./components/styles/BtnContainer.styles";
import { Btn1, Btn2, Btn3, Btn4 } from "./components/styles/Buttons.styles";
import { ThemeToggler } from "./components/styles/ThemeToggler.styles";

const App = () => {
 const [inputText, setInputText] = useState(["0"]);
 const [result, setResult] = useState("0");
 const [theme, setTheme] = useState("light");
 const [themeImgToggler, setThemeImgToggler] = useState("darkThemeImg");

 const ops = ["/", "*", "+", "-", ".", "x"];
 const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 const validInput = [...numbers, ...ops];

 // update the state if user is typing on keyboard
 useEffect(() => {
  const myListener = (event) => {
   if (validInput.includes(event.key)) updateInput(event.key);
   else if (event.key === "Enter") computeResults();
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

 //clears all the inputs
 const allClear = () => {
  setInputText(["0"]);
  setResult(["0"]);
 };

 // positive and negative sign
 const changeSign = () => {
  setInputText((prevState) => ["-", ...prevState]);
 };

 // toggle theme
 const toggleTheme = () => {
  themeImgToggler === "darkThemeImg" ? setThemeImgToggler("lightThemeImg") : setThemeImgToggler("darkThemeImg");
  theme === "light" ? setTheme("dark") : setTheme("light");
 };

 return (
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
   <div className="App">
    <Container>
     <GlobalComponents />
     <InputComponent text={inputText} result={result} />

     <BtnContainer>
      <ButtonsRowContainer>
       <Btn1 variant={"btn1"} symbol={"AC"} onClick={allClear} />
       <Btn2 variant={"btn2"} symbol={"+/-"} onClick={changeSign} />
       <Btn2 variant={"btn2"} symbol={"DEL"} onClick={deleteInput} />
       <Btn3 variant={"btn3"} symbol={"/"} onClick={updateInput} />
      </ButtonsRowContainer>
      <ButtonsRowContainer>
       <Btn2 variant={"btn2"} symbol={"7"} onClick={updateInput} />
       <Btn2 variant={"btn2"} symbol={"8"} onClick={updateInput} />
       <Btn2 variant={"btn2"} symbol={"9"} onClick={updateInput} />
       <Btn3 variant={"btn3"} symbol={"*"} onClick={updateInput} />
      </ButtonsRowContainer>
      <ButtonsRowContainer>
       <Btn2 variant={"btn2"} symbol={"4"} onClick={updateInput} />
       <Btn2 variant={"btn2"} symbol={"5"} onClick={updateInput} />
       <Btn2 variant={"btn2"} symbol={"6"} onClick={updateInput} />
       <Btn3 variant={"btn3"} symbol={"-"} onClick={updateInput} />
      </ButtonsRowContainer>
      <ButtonsRowContainer>
       <Btn2 variant={"btn2"} symbol={"1"} onClick={updateInput} />
       <Btn2 variant={"btn2"} symbol={"2"} onClick={updateInput} />
       <Btn2 variant={"btn2"} symbol={"3"} onClick={updateInput} />
       <Btn3 variant={"btn3"} symbol={"+"} onClick={updateInput} />
      </ButtonsRowContainer>
      <ButtonsRowContainer>
       <ThemeToggler onClick={toggleTheme} imgSrc={themeImgToggler} />
       <Btn2 variant={"btn2"} symbol={"0"} onClick={updateInput} />
       <Btn2 variant={"btn2"} symbol={"."} onClick={updateInput} />
       <Btn4 variant={"btn4"} symbol={"="} onClick={computeResults} />
      </ButtonsRowContainer>
     </BtnContainer>
    </Container>
   </div>
  </ThemeProvider>
 );
};

export default App;
