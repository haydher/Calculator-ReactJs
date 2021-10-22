import React from "react";

const ImgContainer = ({ className, onClick, imgSrc }) => {
 return (
  <div className={className} onClick={onClick}>
   <img src={`${imgSrc}.svg`} alt="" />
  </div>
 );
};

export default ImgContainer;
