import React from "react";
import Image from "next/image";

const Goal = () => {
  return (
    <div className="bg-gray-100/50 rounded-sm my-10 py-0 md:px-6 flex flex-col md:flex-row justify-between">
      <div className="md:hidden mx-auto flex my-auto">
        <Image
          src={"/goal.svg"}
          alt="goal image"
          width="600px"
          height="300px"
          className=""
        />
      </div>
      <div className="hidden mx-auto md:flex my-auto">
        <Image
          src={"/goal.svg"}
          alt="goal image"
          width="600px"
          height="400px"
          className="md:w-2/3"
        />
      </div>

      <div className="flex flex-col justify-center my-auto p-6 md:w-3/5">
        <h5 className="text-gray-600 text-md md:my-4 font-semibold">
          LET'S ACHIEVE MORE
        </h5>
        <h3 className="font-bold text-2xl md:text-4xl my-4">
          Get the benefits of working with Experts
        </h3>
      </div>
    </div>
  );
};

export default Goal;
