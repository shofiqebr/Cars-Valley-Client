import React from 'react';

const Brands = () => {
    return (
        <div className='flex flex-col justify-center items-center my-10 gap-10'>
            <section className='h-44 w-[500px] bg-slate-800 sticky top-[100px] mb-[300px]'></section>
            <section className='h-44 w-[500px] bg-teal-200 sticky top-[200px] mb-[200px] -mt-[300px] '></section>
            <section className='h-44 w-[500px] bg-indigo-500 sticky top-[300px] mb-[100px] -mt-[200px]'></section>
            <section className='h-44 w-[500px] bg-sky-900 sticky top-[400px] mb-0 -mt-[100px]'></section>
        </div>
    );
};

export default Brands;