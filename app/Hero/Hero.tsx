import { Minus } from "lucide-react";
import Image from "next/image";
import AirMaxSection from "../Components/AirMaxSection";
import GearUp from "../Components/GearUp";
import Essentials from "../Components/Essentials";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";

function Hero() {
  return (
    <>
      <Navbar />
      {/* Top */}
      <div className="bg-[#F5F5F5] p-4 text-center">
        <span className="text-xl font-bold">Hello Nike App</span>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-2">
          <span>Download the app to access everything Nike.</span>
          <span className="text-md font-bold underline">Get You Great</span>
        </div>
      </div>

      {/* Image Section */}
      <div className="px-4 sm:px-8 lg:px-16">
        <Image
          src="/Images/hero-img.png"
          alt="hero section image"
          width={1144}
          height={600}
          className="w-[90%] max-w-[1144px] mx-auto h-auto"
        />

        <div className="text-center mt-6">
          <h1 className="text-lg">First Look</h1>
          <h3 className="text-4xl font-bold">Nike Air Max Pulse</h3>
          <h3 className="text-lg mt-4">
            Extreme Comfort. Hyper Durable. Max volume. Introducing the Air Max Pulse
          </h3>
          <div className="flex justify-center items-center mt-4">
            <Minus />
            <h3 className="text-lg ml-2">
              Designed to push you past your limits and help you go to the max.
            </h3>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-6">
          <button className="bg-black text-white rounded-full px-6 py-2">
            Notify Me
          </button>
          <Link href="/Login/login">
            <button className="bg-black text-white rounded-full px-6 py-2">
              Shop Air Max
            </button>
          </Link>
        </div>
      </div>

      {/* Swiper Section */}
      <div className="px-4 sm:px-8 lg:px-16">
        <AirMaxSection />
      </div>

      {/* Featured Section */}
      <div className="px-4 sm:px-8 lg:px-16 mt-12">
        <h1 className="text-xl font-bold">Featured</h1>
        <Image
          src="/Images/featured-image.jpeg"
          alt="featured section image"
          width={1144}
          height={600}
          className="w-[90%] max-w-[1144px] mx-auto h-auto mt-4"
        />
        <div className="text-center mt-6">
          <h3 className="text-4xl font-bold">STEPS INTO WHAT FEELS GOOD</h3>
          <h3 className="text-lg mt-4">
            Cause everyone should know the feeling of running in that perfect pair.
          </h3>
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/Products">
            <button className="bg-black text-white rounded-full px-6 py-2">
              Find Your Shoe
            </button>
          </Link>
        </div>
      </div>

      {/* Gear Up Section */}
      <div className="px-4 sm:px-8 lg:px-16 mt-12">
        <GearUp />
      </div>

      {/* Don't Miss Section */}
      <div className="px-4 sm:px-8 lg:px-16 mt-12">
        <h1 className="text-xl font-bold">Don't Miss</h1>
        <Image
          src="/Images/don't-miss.png"
          alt="don't miss section image"
          width={1144}
          height={600}
          className="w-[90%] max-w-[1144px] mx-auto h-auto mt-4"
        />
        <div className="text-center mt-6">
          <h3 className="text-4xl font-bold">FLIGHT ESSENTIALS</h3>
          <h3 className="text-lg mt-4">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </h3>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-black text-white rounded-full px-6 py-2">
            Sign Up
          </button>
        </div>
      </div>

      {/* Essentials Section */}
      <div className="px-4 sm:px-8 lg:px-16 mt-12">
        <Essentials />
      </div>
    </>
  );
}

export default Hero;
