import React from "react";
import Image from "next/image";

function Smallcard({ imageUrl, location, distance }) {
  return (
    <div>
      <div className="h-6">
        <Image src={imageUrl} objectFit="contain" layout="fill" />
      </div>
      <div>
        <h1>{location}</h1>
      </div>
    </div>
  );
}

export default Smallcard;
