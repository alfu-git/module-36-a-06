import React from 'react';

const Stats = () => {
  return (
    <section className='container mx-auto px-5 py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
      <div>
        <div className='flex flex-col md:flex-row gap-8 md:gap-0 justify-around items-center'>
          <div className='space-y-3'>
            <h3 className='text-6xl text-base-100 font-extrabold'>50K+</h3>
            <span className='inline-block text-2xl text-base-100 font-medium'>Active Users</span>
          </div>

          <div className='border-b md:border-b-0 w-30 md:w-0 md:border-r border-[#F2F2F2] md:h-20'></div>

          <div className='space-y-3'>
            <h3 className='text-6xl text-base-100 font-extrabold'>200+</h3>
            <span className='inline-block text-2xl text-base-100 font-medium'>Premium Tools</span>
          </div>

          <div className='border-b md:border-b-0 w-30 md:w-0 md:border-r border-[#F2F2F2] md:h-20'></div>

          <div className='space-y-3'>
            <h3 className='text-6xl text-base-100 font-extrabold'>4.9</h3>
            <span className='inline-block text-2xl text-base-100 font-medium'>Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;