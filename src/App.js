import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Whiskey from "./whiskey.jpg";
import Duke from "./duke.jpg";
import Perry from "./perry.jpg";
import Colors from "./Colors";
import { useState } from "react";
import Color from "./Color";
import NaviBar from "./NaviBar";

function App({ dogs }) {
  const [colors, setColors] = useState(["red", "green", "blue"]);
  return (
    <div className="App">
      <BrowserRouter>
        <NaviBar />
        <Routes>
          <Route path="/colors" element={<Colors colors={colors} />} />
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          <Route path="/colors/:color" element={<Color colors={colors} />} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: Whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: Duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: Perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
  ],
};
