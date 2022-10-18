import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px]">
      <Image
        src="https://images.squarespace-cdn.com/content/v1/5c2d560c5cfd7902be87d759/1609948971252-ZCN7AZQE38TCCJ3YHE1A/Jeannie-Phan-Illustration-Branding-Airbnb-Go-Near.jpg?format=1500w"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default Banner;
