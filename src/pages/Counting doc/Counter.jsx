import React from 'react';
import { FaEdit, FaMailBulk, FaWpforms } from 'react-icons/fa';

const Counter = () => {
    return (
        <div className='bg-[#354360] py-12 text-white'>
            <h1 className='text-center text-4xl font-bold pb-8 '>Take a look on our progress</h1>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:space-y-4'>
                <div className='flex justify-center items-center gap-2'>
                    <FaWpforms className="w-10 h-10 "></FaWpforms>
                    <div>
                        <p>780</p>
                        <p>Forms filled out</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <FaEdit className="w-10 h-10 "></FaEdit>
                    <div>
                        <p>780</p>
                        <p>Forms signed</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <FaMailBulk className="w-10 h-10 "></FaMailBulk>
                    <div>
                        <p>780</p>
                        <p>Forms sent</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Counter;