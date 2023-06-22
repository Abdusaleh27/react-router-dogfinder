import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  return (
    <div>
        <h3>Learn about my dogs:</h3>
      {dogs
        ? dogs.map((dog) => (
            <>
              <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
              <br />
            </>
          ))
        : ""}
    </div>
  );
};

export default DogList;
