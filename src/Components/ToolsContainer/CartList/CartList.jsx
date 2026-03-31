import React from 'react';

const CartList = ({list}) => {

  return (
    <div className='p-5 bg-[#F9FAFC] rounded-2xl shadow hover:scale-103 hover:border-zinc-200 transition-all duration-300 ease-in-out'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-4 items-center'>
          <div className='p-3.5 border border-[#F2F2F2] rounded-full'>
            <img width={32} src={list.icon} />
          </div>

          <div className='space-y-2'>
            <h5 className='text-[#101727] text-xl font-semibold'>{list.name}</h5>
            <span className='inline-block text-[#627382] font-semibold'>${list.price}</span>
          </div>
        </div>

        <div>
          <button 
            className='btn bg-transparent border-none shadow-none text-[#FF3980]'
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;