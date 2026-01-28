"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import user1 from "../../assets/users/user1.png";
import user2 from "../../assets/users/user1.png";
import user3 from "../../assets/users/user1.png";

const testimonials = [
  {
    name: "John Doe",
    message:
      "This brand exceeded my expectations. The quality and attention to detail are outstanding.",
    image: user1,
  },
  {
    name: "Sarah Williams",
    message:
      "Absolutely love the products! Customer service was friendly and very responsive.",
    image: user2,
  },
  {
    name: "Michael Brown",
    message:
      "Elegant designs and premium quality. I highly recommend this brand to anyone.",
    image: user3,
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-50 bg-brandWhite flex justify-center">
      <div className="relative w-full max-w-3xl px-10 text-center">

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-black/10
          hover:border-black hover:bg-black hover:text-white transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-black/10
          hover:border-black hover:bg-black hover:text-white transition"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slides */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out
              ${
                index === current
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95 pointer-events-none"
              }`}
          >
            <h2 className="text-xs tracking-[0.35em] font-semibold mb-6 text-black/60">
              VALUABLE LIFESTYLE
            </h2>

            <p className="italic text-brandBlack max-w-xl mb-8 leading-relaxed">
              “{testimonial.message}”
            </p>

            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={80}
              height={80}
              className="rounded-full object-cover mb-4"
            />

            <h4 className="text-sm font-semibold tracking-widest uppercase text-black/50">
              {testimonial.name}
            </h4>
          </div>
        ))}

        {/* Indicator Bars */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 flex gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-0.5 transition-all duration-500
                ${
                  index === current
                    ? "w-10 bg-black"
                    : "w-4 bg-black/30 hover:bg-black/60"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
