import Hero from "@/components/sections/Hero";
import TestimonialSection from "@/components/sections/Testimonials";
import WeLive from "@/components/sections/WeLive";
import Why_us from "@/components/sections/Why_us";

export default function Home() {
  return (
    <div>
      <main className="">
        <Hero />
        <Why_us/>
        <TestimonialSection/>
        <WeLive/>
      </main>
    </div>
  );
}
