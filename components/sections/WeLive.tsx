"use client";
import Image from "next/image";
import Photo from "@/assets/clothe3.jpeg";
import { Check } from "lucide-react";

function WeLive() {
  return (
    <div
      className="bg-cover bg-center w-full h-[80vh] flex items-center justify-between text-center px-20"
      style={{
        backgroundImage: `url('/background/background2.jpg')`,
      }}
    >
      <div className="max-w-1/2 text-left text-brandWhite ">
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-20 uppercase mb-4">
          We Live to Serve
        </h1>
        <h3 className="text-brandWhite/50 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, iure
          officiis natus consequuntur similique voluptatem. vel quibusdam
          consequuntur.
        </h3>

        <div className="flex flex-col gap-3 text-brandWhite/70">
          <span className="flex">
            <Check className="inline-block mr-2" />
            High Quality Products
          </span>

          <span className="flex">
            <Check className="inline-block mr-2 " />
            Affordable Prices
          </span>

          <span className="flex">
            <Check className="inline-block mr-2" />
            Excellent Customer Service
          </span>

          <span className="flex">
            <Check className="inline-block mr-2" />
            Fast and Reliable Shipping
          </span>

          <span>
            <Check className="inline-block mr-2" />
            Satisfaction Guaranteed
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center mr-20">
        <Image
          src={Photo}
          alt="Agbaya"
          width={400}
          className=" rounded-3xl animate-float-soft shadow-lg shadow-brandWhite/30"
        />
      </div>
    </div>
  );
}

export default WeLive;
