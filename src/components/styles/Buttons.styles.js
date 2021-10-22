import styled from "styled-components";
import ButtonComponent from "../Button";

export const Button = styled(ButtonComponent)`
 width: 60px;
 height: 60px;
 margin: 8px;
 border: none;
 border-radius: 100px;
 font-size: 18px;
 font-weight: 500;
 cursor: pointer;
 transition: background-color 0.2s ease;
`;

// accentColor: "#7c5efe",
// color1: "#2f2c3b",
// color2: "#36353d",
// color3: "#cbcbcb",
// color4: "#9e9e9e",

export const Btn1 = styled(Button)`
 background-color: ${({ theme }) => theme.color1};
 color: ${({ theme }) => theme.accentColor};

 &:hover {
  background-color: ${({ theme }) => theme.color2};
  transition: background-color 0.3s ease;
 }
`;

export const Btn2 = styled(Button)`
 background-color: ${({ theme }) => theme.color1};
 color: ${({ theme }) => theme.color3};

 &:hover {
  background-color: ${({ theme }) => theme.color2};
  transition: background-color 0.3s ease;
 }
`;

export const Btn3 = styled(Button)`
 background-color: ${({ theme }) => theme.color3};
 color: ${({ theme }) => theme.color1};

 &:hover {
  background-color: ${({ theme }) => theme.color4};
  transition: background-color 0.3s ease;
 }
`;

export const Btn4 = styled(Button)`
 background-color: ${({ theme }) => theme.accentColor};
 color: ${({ theme }) => theme.color5};
`;
