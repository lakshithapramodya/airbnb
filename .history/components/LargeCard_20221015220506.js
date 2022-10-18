import React from "react";
import Image from "next/image";

function LargeCard({ img }) {
  return (
    <div className="relative h-16 w-16">
      <Image src={img} layout="fill" />
    </div>
  );
}

export default LargeCard;
