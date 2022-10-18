import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="relative">
      <div className=" h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="absolute">
        <h2>{title}</h2>
        <h3>{description}</h3>
        <button>{buttonText}</button>
      </div>
    </div>
  );
}

export default LargeCard;
