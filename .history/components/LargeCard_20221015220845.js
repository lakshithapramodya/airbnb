import React from "react";
import Image from "next/image";

function LargeCard({ img }) {
  return (
    <div className="relative max-w-7xl">
      <Image src={img} layout="fill" />
    </div>
  );
}

export default LargeCard;
