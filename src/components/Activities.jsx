import React from 'react';
import ws_image from '../assets/ws_image.png';
import word_search from '../assets/worksheet.pdf'

const Activities = () => {
  return (
    <div name='activities' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Activities
          </p>
          <p className='py-6 text-2xl'>Check out some informational activities!</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ws_image})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Word Search
              </span>
              <p className='text-center'>A word search to make kids more comfortable talking about these topics</p>
              <div className='pt-8 text-center'>
                <a href={word_search}>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Download
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Activities;