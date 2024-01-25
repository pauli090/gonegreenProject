"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "always fresh & always natural & always green",
    image: "/slide1.jpg",
  },
  {
    id: 2,
    title: "delivery anywhere in Sapele",
    image: "/slide2.jpg",
  },
  {
    id: 3,
    title: "the best smoothie to share with ",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(
            () => setCurrentSlide((prev) => (prev ===data.length -1 ? 0 : prev + 1)),
            2000
        );
        return () => clearInterval(interval);
    }, [])

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* Text Container */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-green-700 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-green-700 text-white py-4 px-8 hover:bg-yellow-200 hover:text-green-500 rounded-lg">
          Order Now
        </button>
      </div>
      {/* Image Container */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
