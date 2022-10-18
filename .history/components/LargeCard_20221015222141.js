import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="relative h-96 min-w-[300px] py-12">
      <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
      <div className="absolute">
        <h2 className="">{title}</h2>
        <h3>{description}</h3>
        <button>{buttonText}</button>
      </div>
    </div>
  );
}

export default LargeCard;
