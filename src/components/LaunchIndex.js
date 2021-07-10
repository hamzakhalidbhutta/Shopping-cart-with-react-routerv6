import React from "react";
import { Link } from "react-router-dom";
import { shoes } from "./../store/data";
const LaunchIndex = () => {
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, img}]) => {
        return (
          <li key={slug}>
              <Link to={`/launch/${slug}`}>
            <h2>{name}</h2>
            <img
              src={img}
              alt={name}
              style={{ width: "200px", height: "200px" }}
            />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LaunchIndex;
