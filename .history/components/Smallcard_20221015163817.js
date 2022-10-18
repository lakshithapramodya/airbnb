import React from "react";
import Image from "next/image";

function Smallcard({ imageUrl, location, distance }) {
  return (
    <div className="flex">
      <div className="w-10">
        <Image src={imageUrl} objectFit="contain" layout="fill" />
      </div>
      <div className="">
        <h1>{location}</h1>
        <h2>{distance}</h2>
      </div>
    </div>
  );
}

export default Smallcard;
