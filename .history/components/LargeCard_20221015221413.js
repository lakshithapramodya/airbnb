import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div>
      <div className="relative">
        <Image src={img} layout="fill" />
      </div>
    </div>
  );
}

export default LargeCard;
