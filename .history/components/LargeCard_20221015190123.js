import React from "react";
import Image from "next/image";

function LargeCard({ img, title }) {
  return (
    <div className="p-2">
      <div className="relative w-80 h-80 mt-4">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <h2 className="text-2xl">{title}</h2>
    </div>
  );
}

export default LargeCard;
