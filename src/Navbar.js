// // import React from 'react';

// // const GridLayout = () => {
// //   return (
// //     <div className="grid grid-cols-12 gap-1 h-screen p-2">  
// //       <div className="col-span-2 row-span-2 bg-pink-700 flex items-center justify-center text-white text-2xl">1</div>
// //       <div className="col-span-3 row-span-4 bg-pink-500 flex items-center justify-center text-white text-2xl">2</div>
// //       <div className="col-span-5 row-span-8 bg-red-500 flex items-center justify-center text-white text-2xl font-bold">CSS Grid Layout</div>
// //       <div className="col-span-2 row-span-2 bg-yellow-500 flex items-center justify-center text-white text-2xl">4</div>
// //       <div className="col-span-2 row-span-2 bg-green-700 flex items-center justify-center text-white text-2xl">5</div>
// //       <div className="col-span-2 row-span-2 bg-teal-700 flex items-center justify-center text-white text-2xl">6</div>
// //       <div className="col-span-2 row-span-2 bg-green-500 flex items-center justify-center text-white text-2xl">7</div>
// //       <div className="col-span-1 row-span-2 bg-green-800 flex items-center justify-center text-white text-2xl">8</div>
// //       <div className="col-span-2 row-span-2 bg-teal-500 flex items-center justify-center text-white text-2xl">9</div>
// //       <div className="col-span-2 row-span-2 bg-teal-600 flex items-center justify-center text-white text-2xl">10</div>
// //       <div className="col-span-5 row-span-2 bg-purple-700 flex items-center justify-center text-white text-2xl">11</div>
// //       <div className="col-span-2 row-span-2 bg-red-700 flex items-center justify-center text-white text-2xl">12</div>
// //     </div>
// //   );
// // };

// // export default GridLayout;


// // import React from "react";

// // const App = () => {
// //   return (
// //     <div className="grid grid-cols-3 grid-rows-16 h-[100vh] max-lg:grid-cols-2 max-sm:grid-cols-1">
// //       <div className="max-sm:col-start-1 max-sm:row-start-1 max-sm:row-end-2 max-sm:col-end-3 max-sm: col-start-1 col-end-4 row-start-1 row-end-3 max-lg:col-start-1 max-lg:col-end-3 bg-blue-400 flex items-center justify-center">
// //         <h1 className="text-blue-900 text-2xl">[HEADER]</h1>  
// //       </div>

// //       <div className="max-sm:col-start-1 max-sm:col-end-3 max-sm:row-start-7 max-sm:row-end-8 max-lg:row-start-7 max-lg:row-end-10 max-lg:col-start-2 max-lg:col-end-3 row-start-3 row-end-8 col-start-1 col-end-2 bg-orange-400 flex items-center justify-center">
// //         <h1 className="text-yellow-700 text-2xl">[FEATURE]</h1>
// //       </div>

// //       <div className="max-sm:col-start-1 max-sm:col-end-3 max-sm:row-start-8 max-sm:row-end-9 max-lg:row-start-10 max-lg:row-end-13 max-lg:col-start-2 max-lg:col-end-4 row-start-3 row-end-8 col-start-2 col-end-3 bg-purple-400 flex items-center justify-center">
// //         <h1 className="text-purple-700 text-2xl">[FEATURE]</h1>
// //       </div>

// //       <div className="max-sm:col-start-1 max-sm:col-end-3 max-sm:row-start-9 max-sm:row-end-10 max-lg:row-start-10 max-lg:row-end-13 max-lg:col-start-1 max-lg:col-end-2 row-start-3 row-end-8 col-start-3 col-end-4 bg-red-400 flex items-center justify-center">
// //         <h1 className="text-red-700 text-2xl">[FEATURE]</h1>
// //       </div>

// //       <div className="max-sm:col-start-1 max-sm:col-end-3 max-sm:row-start-6 max-sm:row-end-7 max-lg:row-start-7 max-lg:row-end-10 max-lg:col-start-1 max-lg:col-end-2 col-start-1 col-end-4 row-start-8 row-end-9 bg-blue-300 flex items-center justify-center">
// //         <h1 className="text-blue-700 text-2xl">[SIGN UP]</h1>
// //       </div>

// //       <div className="max-sm:col-start-1 max-sm:col-end-3 max-sm:row-start-2 max-sm:row-end-6 max-lg:row-start-3 max-lg:row-end-7 col-start-1 col-end-4 row-start-9 row-end-13 max-lg:col-start-1 max-lg:col-end-3 bg-gray-400 flex items-center justify-center">
// //         <h1 className="text-gray-700 text-2xl">[CONTENT]</h1>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

import React from 'react';
import { FaSearch } from "react-icons/fa";
import logo from './images/i (1).webp'
import img from './images/i (2).webp'
import img2 from './images/i (3).webp'
import img3 from './images/i (4).webp'
import img4 from './images/i.webp'

const NewProject = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white py-5 gap-10 px-10 flex items-center">
        <img src={logo} alt="Disney" className="h-10 w-16" />
        <nav className="flex space-x-5">
          <a href="#" className="text-gray-800">DISNEY+</a>
          <a href="#" className="text-gray-800">PARKS & TRAVEL</a>
          <a href="#" className="text-gray-800">MOVIES</a>
          <a href="#" className="text-gray-800">SHOP</a>
          <a href="#" className="text-gray-800">MORE</a>
        </nav>
        <div className="flex items-center ml-[680px]  space-x-4">
          <button className="text-gray-800">SIGN IN</button>
          <input type="text" placeholder="Search" className="border rounded px-2 py-1" />
          <FaSearch />
        </div>
      </header>
      <section className="relative back bg-blue-900 text-white py-20 h-[90vh]  flex justify-center items-center">
        <div className="text-center mr-96">
          <h1 className="text-4xl font-bold">Disney <br></br> <span className='text-9xl'>Wish</span></h1>
          <p className="mt-2">The movie event of the year is now a Golden Globe nominee!</p>
          <p>Experience Wish, now playing only in theaters.</p>
          <div className="mt-4 block  space-x-4">
            <button className="bg-yellow-500 text-white ml-4   px-4 py-2 rounded-3xl">Get Tickets Now</button> <br></br>
            <button className="border border-white text-white mt-3 w-36  px-6 py-2  rounded-3xl">Learn More</button>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img src={img4} alt="Diary of a Wimpy Kid" className="w-full h-48 object-cover bg-center bg-no-repeat " />
          <div className="p-4">
            <h2 className="text-lg font-bold"><em>Diary of a Wimpy Kid Christmas: Cabin Fever</em></h2>
            <p className="mt-2">It's the Wimpliest Christmas Ever! Now Streaming on Disney+.</p>
            <p className="mt-4 text-black underline  px-4 py-2 rounded">STREAM NOW</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img src={img} alt="Indiana Jones" className="w-full h-48 object-cover bg-center bg-no-repeat " />
          <div className="p-4">
            <h2 className="text-lg font-bold">New on Disney+</h2>
            <p className="mt-2"><em>Indiana Jones and the Dial of Destiny is Now Streaming.</em></p>
            <p className="mt-4 underline   text-black px-4 py-2 rounded">STREAM NOW</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img src={img2} alt="shopDisney" className="w-full h-48 object-cover bg-center bg-no-repeat " />
          <div className="p-4">
            <h2 className="text-lg font-bold">shopDisney</h2>
            <p className="mt-2"><em>Our Holiday Shop is Open! Find Magical Gifts with Wish-come-True Clothing, Toys and More.</em></p>
            <button className="mt-4 text-black underline  px-4 py-2 rounded">SHOP NOW</button>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img src={img3} alt="Disney Cruise Line" className="w-full h-48 object-cover bg-center bg-no-repeat " />
          <div className="p-4">
            <h2 className="text-lg font-bold"><em>Disney Cruise Line</em></h2>
            <p className="mt-2">Assemble with Your Favorite Marvel Heroes During Epic Marvel Day at Sea Sailings from Ft Lauderdale.</p>
            <button className="mt-4 text-black underline px-4 py-2 rounded">LEARN MORE</button>
          </div>
        </div>
      </section>
      <section className="bg-blue-800 text-white py-16 text-center border-4 border-sky-500">
        <div className='flex'>

        <h2 className="text-4xl font-bold ml-40 mt-6 p-3 border-4 rounded-3xl  border-sky-500">Disney+ <br></br>  Perks</h2> 
        <p className="mt-4 ml-96">Beyond amazing movies, series, and Originals, your Disney+ <br></br>  subscription now unlocks a variety of special discounts and offers from November 30, 2023 to January 31, 2024. <br></br> It's our way of saying 'thank you' for being the best part of our story this holiday season.</p>
        </div>
        <button className="mt-4 ml-[700px]  bg-white text-blue-900 px-2 py-2 rounded">EXPLORE YOUR PERKS</button>
      </section>
    </div>
  );
}

export default NewProject;

// import React from 'react';
// import logo from './images/logo_white.png'

// const Navbar = () => {
//   return (
//     <>
//     <div className='flex gap-4 h-11 w-full bg-black text-white'>
//         <h3 className='ml-[450px] mt-2'>Engane,Explore,and elevate your form-building experiense:User Conference 2024</h3>
//         <button className='flex bg-slate-100 h-7 mt-2 text-black px-2'>Register Now</button>
//       </div>
//     <nav className="bg-blue-600 text-white p-4 gap-14  flex justify-between ">
//         <img src={logo} alt="FormAssembly Logo" className="flex ml-20 mt-7 w-40 h-10 bg-blue-50" />
//       <div className="flex ml-28 gap-10 mt-5  items-center space-x-4">
//         <div>Solutions</div>
//         <div>Product</div>
//         <div>Resources</div>
//         <div>Plans</div>
//       </div>
//       <div className="space-x-4 mr-24">
//         <button className="text-white mb-2  ml-[260px]">LOGIN</button> <br></br>
//         <button className="bg-none border  text-white py-2 px-4 rounded">START A TRIAL</button>
//         <button className="bg-green-700 text-white py-2 px-4 rounded">BOOK A DEMO</button>
//       </div>
//     </nav>
//     </>
//   );
// };

// export default Navbar;
