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
        <div className="absolute space-y-2">
          <h2 className="text-3xl w-44 ">{title}</h2>
          <h3>{description}</h3>
          <button className="text-white bg-gray-900 p-3 rounded-xl">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LargeCard;
