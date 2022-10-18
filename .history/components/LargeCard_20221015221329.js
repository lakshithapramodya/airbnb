import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="relative">
      <Image src={img} layout="fill" />
    </div>
  );
}

export default LargeCard;
