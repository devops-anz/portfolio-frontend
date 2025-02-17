import Image from 'next/image';
import React from 'react';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import { poppins } from 'styles/fonts';

const topServices = [
  {
    image: '/image/topservices/1.webp',
    category: 'Residential Architecture',
    title: 'Residential Architecture'
  },
  {
    image: '/image/topservices/2.webp',
    category: 'Commercial Architecture',
    title: 'Commercial Architecture'
  },

  {
    image: '/image/topservices/3.webp',
    category: 'Interior Design',
    title: 'Interior Design'
  },

  {
    image: '/image/topservices/1.webp',
    category: 'Architectural Supervision',
    title: 'Architectural Supervision'
  },
  {
    image: '/image/topservices/2.webp',
    category: 'Architectural Supervision',
    title: 'Architectural Supervision'
  },
  {
    image: '/image/topservices/3.webp',
    category: 'Architectural Supervision',
    title: 'Architectural Supervision'
  }
];

const TopServices = () => {
  return (
    <div>
      <div className='container-custom pt-20 sm:pt-28 md:pt-40'>
        <div className='mb-10 sm:mb-16 md:mb-20 px-4 sm:px-6'>
          <p className={`font-[700] text-black ${poppins.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}>
            Top Services
          </p>
          <p className='mb-3 sm:mb-4 md:mb-5 pt-6 sm:pt-8 md:pt-10'>
            As a licensed architect and designer, I can help you create your dream home or office.
          </p>
          <hr className='border border-solid border-gray-200' />
        </div>

        <div className='mb-10 sm:mb-16 md:mb-20 grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 sm:grid-cols-2 md:grid-cols-3'>
          {topServices.map((item, index) => (
            <div key={index} className='group relative overflow-hidden'>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                style={{ height: '280px', width: '100%' }}
                className='w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110'
              />

              <div className='absolute inset-0 flex flex-col items-center justify-evenly bg-black/70 md:bg-gray-500/0 transition-all duration-500 ease-in-out md:group-hover:bg-black/70'>
                <p className='text-xl sm:text-2xl font-medium text-white md:opacity-0 transition-opacity duration-300 ease-in-out md:group-hover:opacity-100'>
                  {item.title}
                </p>

                <p className='text-xs sm:text-sm text-white md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-100'>
                  {item.category}
                </p>
                <button className='bg-[#cfd8b9] px-4 sm:px-6 py-2 sm:py-2.5 text-black md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-100'>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mx-4 sm:mx-6 md:mx-10 mb-10 bg-black py-20 sm:py-32 md:py-36 lg:py-44'>
        <div className='container-custom px-4 sm:px-6'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-5'>
            <div className='flex flex-col justify-center gap-3 sm:gap-4 md:gap-5'>
              <p className='text-uppercase text-[10px] sm:text-[12px] text-gray-400'>VIDEO PRESENTATION</p>

              <p className={`${poppins.className} text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-white`}>
                Designing With <br /> Balance and Care
              </p>

              <p className='text-[10px] sm:text-[12px] text-gray-400'>
                Functional building and design is a new approach that resonates with me completely.{' '}
              </p>
            </div>

            <div>
              <div className='flex items-center gap-x-8 sm:gap-x-12 md:gap-x-20'>
                <p className='text-white'> Watch Video - </p>
                <MdOutlineSlowMotionVideo size={10} className='rounded-full bg-[#d9e1c5] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 p-3 sm:p-4 text-black' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
