import React from 'react';

const DosAndDonts = () => {
  return (
    <div name='dosanddonts' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>News</p>
              <p className='py-4 text-2xl'>Here are what people across the interent are currently saying about the problem.</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8'>
            <a href="https://www.google.com/">
              <div className='bg-[#6763e7] shadow-md shadow-[#5752e5] hover:scale-110 duration-500'>
                  <p className='my-4'>"Put a quote here!"</p>
              </div>
              </a>
              <a href="https://www.google.com/">
              <div className='bg-[#6763e7] shadow-md shadow-[#5752e5] hover:scale-110 duration-500'>
                  <p className='my-4'>"Put another quote from somewhere else here!"</p>
              </div>
              </a>
          </div>
      </div>
    </div>
  );
};
export default DosAndDonts;