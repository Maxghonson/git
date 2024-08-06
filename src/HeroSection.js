import React from 'react';
import videoThumbnail from './images/banner_img.png';

const HeroSection = () => {
  return (
      <section className="bg-blue-600 text-white text-start  px-20 py-20">
        <div className='mr-[760px] ml-8'>
            
      <h1 className="text-4xl font-bold mb-4">Collect, Connect & Protect <br></br> Your Data</h1> 
      <p className="mb-8">Effortlessly create forms, integrate data, automate processes, and protect sensitive information with FormAssembly –  the trusted solution for  collection.</p>
        <button className="bg-green-700 text-white py-2 px-5 rounded">TALK TO AN EXPERT</button> <br></br>
        </div>
      <div className=" ml-[700px] -mt-56  flex">
        <img src={videoThumbnail} alt="Video Overview" className="mx-auto rounded w-[600px]" />
      </div>
    </section>
  );
};

export default HeroSection;
