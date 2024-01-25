import Image from "next/image";
import React from "react";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:h-[70vh]">
      {/* Text Container */}
      <div className="flex-1 flex flex-col justify-center text-center gap-8 p-6">
        <h1 className="text-white font-bold text-5xl xl:text-6xl ">
          Freshly Made Smoothies
        </h1>
        <p className="text-white xl:text-xl">
          Live fresh & Go Green. Join the #ihavegonegreen campaign
        </p>
        <button className="bg-green-700 text-white rounded-md py-2 w-32 mx-auto">
          Order Now
        </button>
      </div>
      {/* Image Container */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.jpg" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
