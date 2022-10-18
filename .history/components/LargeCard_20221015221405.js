import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="relative">
      <div>
        <Image src={img} layout="fill" />
      </div>
    </div>
  );
}

export default LargeCard;
