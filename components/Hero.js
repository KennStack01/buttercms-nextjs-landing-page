import React from "react";
import Image from "next/image";
import MyBtn from "./MyButton";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-5 md:my-8">
      <div className="flex flex-col my-auto md:w-2/3">
        <div className="flex flex-col">
          <h1 className="font-extrabold text-4xl md:text-6xl">
            Bridge between companies and recruiters
          </h1>
          <p className="text-sm mx-auto w-2/3 font-light md:text-md my-2 md:my-6">
            Discover the world's #1 ranked talent acquisition experts with more
            than 10 years of experience in various indutries
          </p>
        </div>
        <div className="mx-auto hover:cursor-pointer">
          <MyBtn textContent="Discover Now" />
        </div>
      </div>
      <Image
        src={"/hero.svg"}
        alt="hero image"
        width="600px"
        height="60px"
        className="invisible md:visible my-auto md:w-2/3"
      />
    </div>
  );
};

export default Hero;
