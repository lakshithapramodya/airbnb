import React from "react";
import Image from "next/image";

function LargeCard({ img, title }) {
  return (
    <div>
      <div className="relative w-8 h-8">
        <Image src={img} layout="fill" className="" />
      </div>
      <h2>{title}</h2>
    </div>
  );
}

export default LargeCard;
