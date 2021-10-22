import styled from "styled-components";
import ImgContainer from "../Img";

export const ThemeToggler = styled(ImgContainer)`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 60px;
 height: 60px;
 margin: 8px;
 border: none;
 border-radius: 100px;
 font-size: 18px;
 font-weight: 500;
 cursor: pointer;
 transition: background-color 0.2s ease;
 user-select: none;

 &:hover {
  background-color: ${({ theme }) => theme.color2};
  transition: background-color 0.3s ease;
 }
`;
