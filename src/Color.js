import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const Color = ({ colors }) => {
  const [background, setBackground] = useState(document.querySelector("body"));
  const [color, setColor] = useState("white");
  const params = useParams();
  useEffect(()=>{
    setColor(colors.filter((bcolor) => bcolor === params.color)[0]);
  },[]);
  
  if (!color) return <Navigate to="/colors" />;
  console.log("current color", params.color);
  background.style.background = color;
  return (
    <div>
      <h1>{`Your picked ${color}`}</h1>
      <p>Enjoy the color scene</p>
    </div>
  );
};

export default Color;
