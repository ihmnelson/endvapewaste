import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                The Problem
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Over 60,000 disposable e-cigarettes (vapes) are sold a day in the US alone. (CDC) 
              </p>
            </div>
            <div>
              <p>
                {" "}
                E-cigarette waste is especially harmful because it won’t biodegrade like cigarette butts, but will be broken down into microplastics and nicotine salts, heavy metals, lead, and mercury will be released into the environment. 
Liquid nicotine is classified as acute hazardous waste by federal law. Toxic chemicals from vape waste can accumulate in ecosystems and animals, which can be transferred to other organisms, or contaminate drinking water and food.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;