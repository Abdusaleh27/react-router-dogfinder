import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const links = useParams();
  const dogName = links.name;
  console.log("The dogs in details", dogs);
  
  const dog = dogs.filter((dog) => dog.name === dogName)[0];
  console.log("current dog", dog);
  if (!dog) return <Navigate to="/dogs"></Navigate>;
  const { name, age, src, facts } = dog;
  return (
    <div>
      <h1>{name}</h1>
      <img src={src} alt={`dog ${name}`} />
      <p>Age: {age}</p>
      <div>
        Facts:
        <ul>
          {facts ? facts.map((fact, index) => <li key={index}>{fact}</li>) : ""}
        </ul>
      </div>
      <Link to="/dogs">Go Back </Link>
    </div>
  );
};
export default DogDetails;
