import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="py-12 p-3">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        <div className="absolute">
          <h2 className="text-3xl text-justify">{title}</h2>
          <h3>{description}</h3>
          <button>{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default LargeCard;
