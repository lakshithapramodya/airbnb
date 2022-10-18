import React from "react";
import Image from "next/image";

function Smallcard({ imageUrl, location, distance }) {
  return (
    <div>
      <div>
        <Image src={imageUrl} objectFit="contain" layout="fill" />
      </div>
    </div>
  );
}

export default Smallcard;
