import React from 'react';

const Skills = () => {
  return (
    <div name='news' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>News</p>
              <p className='py-4 text-2xl'>Here are what people across the interent are currently saying about the problem.</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8'>
          <a href="https://www.bbc.com/news/science-environment-63037553">
          <div className='bg-[#6763e7] shadow-md shadow-[#5752e5] hover:scale-110 duration-500'>
                  <p className='my-4'>"Should e-cigarettes be banned?"</p>
              </div>
              </a>
              <a href="https://greenerideal.com/news/vaping-liquid-nicotine-can-kill-the-environment/">
              <div className='bg-[#6763e7] shadow-md shadow-[#5752e5] hover:scale-110 duration-500'>
                  <p className='my-4'>"Liquid nicotine hurts the environment"</p>
              </div>
              </a>
              <a href="https://www.undo.org/environmental-impact/vape-waste-is-toxic-waste">
              <div className='bg-[#6763e7] shadow-md shadow-[#5752e5] hover:scale-110 duration-500'>
                  <p className='my-4'>"Vapes: 3 types of toxic waste in 1"</p>
              </div>
              </a>
              <a href="https://truthinitiative.org/research-resources/harmful-effects-tobacco/toxic-plastic-problem-e-cigarette-waste-and-environment">
              <div className='bg-[#6763e7] shadow-md shadow-[#5752e5] hover:scale-110 duration-500'>
                  <p className='my-4'>"A toxic, plastic problem"</p>
              </div>
              </a>
          </div>
      </div>
    </div>
  );
};
export default Skills;