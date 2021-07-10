import React from "react";
import { useParams } from "react-router-dom";
import { shoes } from "../store/data";


const LaunchShoe = () => {
    console.log(useParams())
  let { slug } = useParams();
  const shoe = shoes[slug];
  if (!shoe) {
    return <div>No shoe found!</div>;
  } else {
    const { name, img } = shoe;
    return (
      <div>
        <h2>{name}</h2>
        <img src={img} alt={name} />
      </div>
    );
  }
};

export default LaunchShoe;
