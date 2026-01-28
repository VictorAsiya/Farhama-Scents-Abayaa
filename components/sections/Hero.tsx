"use client";
import Image from "next/image";
import Line from "@/assets/hor_line.png";
import Button from "../ui/button";

function Hero() {
  return (
    <div
      className=" bg-cover bg-center h-screen flex flex-col justify-center items-center text-center px-4 min-h-screen "
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .6), rgba(0, 0, 0, 0.3)), url('/background/perfume.jpg')`,
      }}
    >
      <div className="flex flex-col justify-center items-center pt-20">
        <Image src={Line} alt="divider line" className="w-1/2 " />
        <h3 className="heroText text-7xl font-extrabold text">
          LUXURY YOU CAN AFFORD
        </h3>
        <p className="text-white/60 font-bold mt-5">
          Elegant abayas, refined men's wear, children's designs, and premium
          base accessories such as bags, <br /> jewelry cores, belts, and tech
          straps. With unique designs for everyone.
        </p>
        <span className="flex space-x-5">
          <Button variant="primary" size="lg" className="mt-8">
            Discover
          </Button>

          <Button variant="primary" size="lg" className="mt-8">
            Shop Now
          </Button>
        </span>
      </div>
    </div>
  );
}

export default Hero;
