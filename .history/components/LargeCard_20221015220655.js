import React from "react";
import Image from "next/image";

function LargeCard({ img }) {
  return (
    <div className="relative h-80 w-80">
      <Image src={img} layout="fill" objectFit="contain" />
    </div>
  );
}

export default LargeCard;
