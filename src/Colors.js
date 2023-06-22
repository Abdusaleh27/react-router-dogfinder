import React from "react";
import { Link } from "react-router-dom";

const Colors = ({ colors }) => {
  return (
    <div>
      <h3>Welcome to Color Factory</h3>
      <Link to="/addcolor">Add a color</Link>
      <p>Please select a color</p>
      {colors
        ? colors.map(
            (color) =><div> <Link to={`/colors/${color}`}>{color}</Link></div>
          )
        : ""}
    </div>
  );
};

export default Colors;
