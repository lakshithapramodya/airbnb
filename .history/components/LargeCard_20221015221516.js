import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div>
      <div className="relative h-96">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default LargeCard;
