import React from "react";
import Image from "next/image";

function LargeCard({ img, title }) {
  return (
    <div>
      <div className="relative w-80 h-80">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <h2>{title}</h2>
    </div>
  );
}

export default LargeCard;
