"use client"

import Marquee from "react-fast-marquee";
import Image from "next/image";

const imageList = [
  "/images/THOIIMP.jpg",
  "/images/CSB.jpg",
  "/images/CSIR.jpg",
  "/images/WCRMS.webp",
  "/images/FCI.jpg",
  "/images/CC.png",
  "/images/DMEAR.jpg",
  "/images/DD.png",
  "/images/NCPCR.png",
  "/images/EOW.jpg",
  "/images/NHRC.png",
];

export default function ImageMarquee() {
  return (
    <div className="bg-transparent py-6">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
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
