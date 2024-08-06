import React from 'react';

const CateringForm = () => {
  return (
    <div className='px-6 sm:px-12 md:px-16 lg:px-24 py-10 lg:py-20 bg-bg2 rounded-[30px] lg:rounded-[100px]'>
      <p className='text-center font-bebas text-4xl  lg:text-[60px] xl:text-[90px] mb-10 lg:mb-24 text-bg1'>
        Catering Request Form
      </p>
      <form className='flex flex-col gap-y-6'  action="/catering?submit=true"
          method="POST" >
        <div className='flex flex-col sm:flex-row gap-x-4 gap-y-4'>
          <div className='flex-1'>
            <label htmlFor='first-name' className='block text-lg font-semibold mb-1 text-bg1 font-rubik'>First Name</label>
            <input 
              id='first-name' 
              type='text' 
              className='w-full p-3 rounded-lg border-0 focus:ring-0' 
            />
          </div>
          <div className='flex-1'>
            <label htmlFor='last-name' className='block text-lg font-semibold mb-1 text-bg1 font-rubik'>Last Name</label>
            <input 
              id='last-name' 
              type='text' 
              className='w-full p-3 rounded-lg border-0 focus:ring-0' 
            />
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-x-4 gap-y-4'>
          <div className='flex-1'>
            <label htmlFor='phone-number' className='block text-lg font-semibold mb-1 text-bg1 font-rubik'>Phone Number</label>
            <input 
              id='phone-number' 
              type='tel' 
              className='w-full p-3 rounded-lg border-0 focus:ring-0' 
            />
          </div>
          <div className='flex-1'>
            <label htmlFor='email-id' className='block text-lg font-semibold mb-1 text-bg1 font-rubik'>Email ID</label>
            <input 
              id='email-id' 
              type='email' 
              className='w-full p-3 rounded-lg border-0 focus:ring-0' 
            />
          </div>
        </div>

        <div className='flex flex-col'>
          <label htmlFor='event-date' className='block text-lg font-semibold mb-1 text-bg1 font-rubik'>Event Date</label>
          <input 
            id='event-date' 
            type='date' 
            className='w-full p-3 rounded-lg border-0 focus:ring-0' 
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='pickup-delivery-time' className='block text-lg font-semibold mb-1 text-bg1 font-rubik'>Pickup/Delivery Time</label>
          <input 
            id='pickup-delivery-time' 
            type='time' 
            className='w-full p-3 rounded-lg border-0 focus:ring-0' 
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='number-of-people' className='block text-lg font-semibold mb-1 text-bg1 font-rubik'>No. of People</label>
          <input 
            id='number-of-people' 
            type='number' 
            className='w-full p-3 rounded-lg border-0 focus:ring-0' 
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='message' className='block text-lg font-semibold mb-1 text-bg1 font-rubik'>Message to Management</label>
          <textarea 
            id='message' 
            rows='4' 
            className='w-full p-3 rounded-lg border-0 focus:ring-0' 
          />
        </div>

        <button 
          type='submit' 
          className='bg-bg1 uppercase xsm:w-[400px] w-[300px] font-rubik text-2xl text-bg3 py-2 px-2 rounded-lg mt-10 self-center'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CateringForm;
