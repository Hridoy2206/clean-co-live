import React from 'react';
import image from '../../assets/image/bucketgirl.png'

const Landing = () => {
    return (
        <>
            <div class="hero h-screen md:h-screen p-6 lg:h-[70vh] bg-accent">
                <div class="hero-content flex-col lg:flex-row mt-10">
                    <div >
                        <p className='text-xl' data-aos="fade-right"  data-aos-delay="200">Best Quality</p>
                        <h1 data-aos="fade-right"  data-aos-delay="300" class="text-5xl font-bold max-w-lg text-gray-500">Professional Cleaning Service!</h1>
                        <p data-aos="fade-right" data-aos-delay="400" class="py-6 max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro quas quo?</p>
                        <button data-aos="zoom-in" data-aos-delay="500"  class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[57vh] shrink-0'>
                        <img src={image} class="h-full"/>
                    </div>
                </div>
            </div>
            <div className='p-8 mt-[-50px] relative  shadow-md rounded-lg w-5/6 mx-auto bg-neutral'>
                    <h1 className='text-primary text-2xl font-medium'>Get Free Estimate</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mt-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                </div>
                <button className='btn btn-primary btn-md mt-5'>REQUEST A QOUTE</button>
            </div>
        </>
    );
};

export default Landing;