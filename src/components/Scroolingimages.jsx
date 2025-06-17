"use client"

import Marquee from "react-fast-marquee";
import Image from "next/image";

const imageList = [
  "/images/CDSCO.jpg",
  "/images/ECI.png",
  "/images/EPFO.png",
  "/images/ESIC.jpg",
  "/images/FCI.jpg",
  "/images/LIC.jpg",
  "/images/REVENUE.png",
  "/images/NARCOTICS.png",
  "/images/MPGOV.png",
  "/images/NHA.png",
  "/images/CPWD.jpg",
  "/images/DLH.jpg"
];

export default function ImageMarquee() {
  return (
    <div className="bg-transparent py-6">
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        {imageList.map((src, index) => (
          <div key={index} className="mx-6">
            <Image
              src={src}
              alt={`logo-${index}`}
              width={300}
              height={180}
              className="object-contain rounded-md"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
