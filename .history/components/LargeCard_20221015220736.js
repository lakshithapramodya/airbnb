import React from "react";
import Image from "next/image";

function LargeCard({ img }) {
  return (
    <div className="relative h-96">
      <Image src={img} layout="fill" />
    </div>
  );
}

export default LargeCard;
