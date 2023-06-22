import React from "react";
import { Link } from "react-router-dom";
import "./NaviBar.css"
const NaviBar = () => {
  return (
    <nav>
      <Link to="/dogs" className="nav-item"> Dogs </Link>
      <Link to="/colors" className="nav-item"> Color-Factory </Link>
    </nav>
  );
};

export default NaviBar;
