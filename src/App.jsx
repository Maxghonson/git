// // import React, { useEffect, useState } from "react";
// // const UserCards = () => {
// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     fetch("https://jsonplaceholder.typicode.com/users")
// //       .then((response) => response.json())
// //       .then((data) => setUsers(data));
// //   }, []);

// //   return (
// //     <div className="bg-gray-100 p-6">
// //       <nav className="flex bg-orange-700 justify-between h-20 text-white items-center px-20">
// //         <h1 className="text-3xl hover:opacity-80 cursor-pointer duration-300">
// //           Logo
// //         </h1>
// //         <ul className="flex gap-20">
// //           <li>
// //             <a href="">Home</a>
// //           </li>
// //           <li>
// //             <a href="">About</a>
// //           </li>
// //           <li>
// //             <a href="">Contact</a>
// //           </li>
// //           <li>
// //             <a href="">FAQ</a>
// //           </li>
// //         </ul>
// //         <button
// //           className="bg-green-400 rounded-md py-2 px-5
// //               hover:bg-green-600 duration-300 "
// //         >
// //           Download
// //         </button>
// //       </nav>
// //       <div className="grid grid-cols-1 :grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
// //         {users.map((user) => (
// //           <div
// //             key={user.id}
// //             className="bg-orange-700 text-white rounded-lg shadow-md p-6"
// //           >
// //             <h2 className="text-xl font-bold mb-2">{user.name}</h2>
// //             <p className="text-white">{user.email}</p>
// //             <p className="text-white">{user.phone}</p>
// //             <p className="text-white">{user.website}</p>
// //             <p className="text-white">{user.company.name}</p>
// //             <p className="text-white">{user.address.city}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };
// // export default UserCards;



// // import React, { useState } from 'react';
// // import data1 from './data';

// // const App = () => {

// //   const [data, setData] = useState(data1);

// //   const deleteItem = (index) => {
// //     setData(prevData => {
// //       const newData = [...prevData];
// //       newData.splice(index, 1);  
// //       return newData;
// //     });
// //   }
// //   return (
// //     <div className='todo w-1/2 mx-auto my-0 p-10 rounded-xl mt-28 bg-white text-center shadow-2xl'>
// //       <h1 className='bg-blue-400 py-2  text-white'>Movies</h1>

// //       <table className='w-full'>
// //         <thead>
// //           <tr>
// //             <th className='border border-black'>Title</th>
// //             <th className='border border-black'>Rating</th>
// //             <th className='border border-black'>Year</th>
// //             <th className='border border-black'>Delete</th>
// //           </tr>
// //         </thead>

// //         <tbody>
// //           {data.map((todo,index) => (
// //             <tr key={todo.id} className='border border-black'>
// //               <td className='border border-black'>{todo.title}</td>
// //               <td className='border border-black'>{todo.rating}</td>
// //               <td className='border border-black'>{todo.year}</td>
// //               <button
// //               className='p-2 bg-green-500 px-10 w-full text-white '
// //                 onClick={() => deleteItem(index)}
// //               >
// //                 Delete
// //               </button>
// //             </tr >

// //           ))}
// //         </tbody>
// //       </table>

// //     </div>
// //   )
// // }

// // export default App;


// // import React, { useEffect, useState } from "react";
// // import { FaBars } from "react-icons/fa";
// // import { IoMdClose } from "react-icons/io";

// // const UserCards = () => {
// //   const [users, setUsers] = useState([]);
// //   const [show, setShow] = useState(false)

// //   useEffect(() => {
// //     fetch("https://jsonplaceholder.typicode.com/users")
// //       .then((response) => response.json())
// //       .then((data) => setUsers(data));
// //   }, []);

// //   return (
// // <nav className='flex bg-blue-500 text-white items-center h-[10vh] justify-between px-10 '>
// //         <h1 className='text-3xl'>Logo</h1>
// //         <ul className='hidden lg:flex gap-28'>
// //           <li><a href="!#">Home</a></li>
// //           <li><a href="!#">About</a></li>
// //           <li><a href="!#">Contact</a></li>
// //           <li><a href="!#">FAQ</a></li>
// //           <li><a href="!#">Gallery</a></li>
// //         </ul>
// //         {show ? (
// //           <ul className='flex gap-28 absolute top-[5vh] right-0 bg-blue-500 lg:hidden max-lg:flex-col max-lg:w-[40vw] max-lg:h-[50vh] max-lg:gap-10 max-lg:text-center max-lg:pt-5 max-lg:mt-[5vh]'>
// //             <li><a href="!#">Home</a></li>
// //             <li><a href="!#">About</a></li>
// //             <li><a href="!#">Contact</a></li>
// //             <li><a href="!#">FAQ</a></li>
// //             <li><a href="!#">Gallery</a></li>
// //           </ul>
// //         ) : ""}
// //         {!show ? (
// //           <FaBars onClick={() => setShow(true)} className='text-2xl cursor-pointer lg:hidden' />
// //         ) : (
// //           <IoMdClose onClick={() => setShow(false)} className='text-2xl cursor-pointer lg:hidden' />
// //         )}
// //       </nav>
// //  );
// // };
// // export default UserCards;



// // import React, { useState } from 'react'
// // import SocialData from './socialData'

// // const App = () => {
// //   const [data, setData] = useState(SocialData)

// //   return (
// //     <div className='grid grid-cols-4 items-center justify-center text-center px-20 gap-6 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 py-8'>
// //       {data.map((social, index) => (
// //         <div key={social.id} className='p-4 max-w-md bg-white border-black rounded-sm border mx-auto transition-all cursor-pointer hover:text-white hover:bg-pink-500 hover:border-none'>
// //           <h1 className='text-6xl my-6 flex justify-center'>{social.logo}</h1>
// //           <strong className='text-3xl'>{social.title}</strong>
// //           <p className='my-[20px]'>{social.text}</p>
// //           <button className='rounded-3xl py-2 text-white bg-black px-14 my-[20px] transition-all hover:text-pink-500 hover:bg-white'>READ MORE</button>
// //         </div >
// //       ))}
// //     </div>
// //   )
// // }

// // export default App




// // import React from 'react';

// // function App() {
// //   return (
// //     <div className="grid max-w-[1000px] w-full mx-auto grid-cols-1 sm:grid-cols-4 sm:grid-rows-[auto_repeat(6,_1fr)] lg:grid-rows-[auto_1fr_1fr_1fr_auto_1fr_1fr] py-10  gap-0 text-center text-white">
// //       <div className="header bg-[#0f1629] p-[1em_0] sm:col-span-4 lg:col-span-1">HEADER</div>
// //       <div className="menu bg-[#ef3c4d] p-[1em_0] sm:col-span-1 sm:row-start-4 sm:row-end-8 lg:col-start-2 lg:col-end-5 lg:row-span-1">MENU</div>
// //       <div className="hero bg-[#4c86c6] p-[3em_0] sm:col-span-4 sm:col-start-1 sm:col-end-5 sm:row-start-2 sm:row-end-4 lg:row-span-3">HERO</div>
// //       <div className="main bg-[#24344b] p-[3em_0] sm:col-span-3 sm:col-start-2 sm:col-end-5 sm:row-start-4 sm:row-end-6 lg:col-span-2 lg:col-start-1 lg:col-end-3 lg:row-start-5 lg:row-end-7">MAIN</div>
// //       <div className="banner bg-[#ffd169] p-[2em_0] text-black sm:col-span-3 lg:col-span-4">BANNER</div>
// //       <div className="extra bg-[#4dbd97] p-[2em_0] text-black sm:col-span-2 lg:col-span-1 lg:col-start-4 lg:col-end-5 lg:row-start-5">EXTRA</div>
// //       <div className="image bg-[#c1e4e6] p-[2em_0] text-black lg:col-span-1 lg:col-start-4 lg:col-end-5 lg:row-start-6">IMAGE</div>
// //     </div>
// //   );
// // }

// // export default App;




// // import React from 'react';
// // import Navbar from './Navbar';
// // import './App.css'

// // const App = () => {
// //   return (
// //     <div>
// //       <Navbar />
// //       {/* <HeroSection />
// //       <TrustedCompanies />
// //       <Footer /> */}
// //     </div>
// //   );
// // };

// // export default App;










// // import React from "react";
// // import skull from "./images/skull.jpg";
// // import down from "./images/photo_2024-07-05_12-09-37.jpg";

// // const App = () => {
// //   return (
// //     <div className="bg-black ">
// //       <nav className="bg-gray-900 p-4 flex justify-between items-center">
// //         <h1 className="text-xl text-white">
// //           <hr className="w-[80px] h-0.5 bg-blue-700 "></hr>
// //           <span className="text-purple-600">Items</span> Currently In The
// //           Market.
// //         </h1>
// //         <div className="flex gap-5 space-x-4">
// //           <button className="hover:bg-purple-600 text-white px-4 py-2 hover:rounded-full hover:focus:outline-none">
// //             All Items
// //           </button>
// //           <button className="text-white hover:bg-purple-600 hover:text-white px-4 py-2 hover:rounded-full hover:focus:outline-none">Music Art</button>
// //           <button className="text-white hover:bg-purple-600 hover:text-white px-4 py-2 hover:rounded-full hover:focus:outline-none">Digital Art</button>
// //           <button className="text-white hover:bg-purple-600 hover:text-white px-4 py-2 hover:rounded-full hover:focus:outline-none">Blockchain</button>
// //           <button className="text-white hover:bg-purple-600 hover:text-white px-4 py-2 hover:rounded-full hover:focus:outline-none">Virtual</button>
// //         </div>
// //       </nav>
// //       <alava className="grid grid-cols-2 gap-6 p-10">
// //         <big className="grid grid-cols-2 border border-blue-950 rounded-3xl gap-8">
// //           <main className="inline">
// //             <img
// //               src={skull}
// //               className="rounded-[40px] p-[20px] w-[300px]  h-[400px]"
// //             />
// //           </main>
// //           <shoter>
// //             <h1 className="text-white text-[25px] mt-3">
// //               Music Art Super Item
// //             </h1>
// //             <img
// //               src={down}
// //               className="rounded-3xl w-[60px] mt-3 inline absolute top-18"
// //             />
// //             <h2 className="text-white mt-3 ml-20">Liberty Artist</h2>
// //             <h3 className="text-blue-800 mt-1 underline ml-20">@libertyart</h3>
// //             <hr className="mt-8 opacity-50 w-[275px]" />
// //             <shot className="grid grid-cols-2 mt-10">
// //               <div>
// //                 <p className="text-white mt-3 text-sm">Current Bid</p>
// //                 <p className="text-white mt-3 text-lg">2.03 ETH</p>
// //                 <p className="text-white mt-3 text-sm">($8,240.50)</p>
// //               </div>
// //               <div>
// //                 <p className="text-white mt-3 text-sm">Ends in</p>
// //                 <p className="text-white mt-3 text-lg">4D 08H 15M 42S</p>
// //                 <p className="text-white mt-3 text-sm">(July 24th, 2022)</p>
// //               </div>
// //               <a href="#" className="text-blue-800 underline text-sm mt-16">
// //                 View Item Details
// //               </a>
// //             </shot>
// //           </shoter>
// //         </big>
// //         <big className="grid grid-cols-2 border border-blue-950 rounded-3xl gap-8">
// //           <main className="inline">
// //             <img
// //               src={skull}
// //               className="rounded-[40px] p-[20px]  w-[300px]  h-[400px]"
// //             />
// //           </main>
// //           <shoter>
// //             <h1 className="text-white text-[25px] mt-3">
// //               Digital Crypto Artwork
// //             </h1>
// //             <img
// //               src={down}
// //               className="rounded-3xl w-[60px] mt-3 inline absolute top-22"
// //             />
// //             <h2 className="text-white mt-3 ml-20">Liberty Artist</h2>
// //             <h3 className="text-blue-800 mt-1 underline ml-20">@libertyart</h3>
// //             <hr className="mt-8 opacity-50 w-[275px]" />
// //             <shot className="grid grid-cols-2 mt-10">
// //               <div>
// //                 <p className="text-white mt-3 text-sm">Current Bid</p>
// //                 <p className="text-white mt-3 text-lg">2.03 ETH</p>
// //                 <p className="text-white mt-3 text-sm">($7,200.50)</p>
// //               </div>
// //               <div>
// //                 <p className="text-white mt-3 text-sm">Ends in</p>
// //                 <p className="text-white mt-3 text-lg">2D 06H 30M 25S</p>
// //                 <p className="text-white mt-3 text-sm">(July 26th, 2022)</p>
// //               </div>
// //               <a href="#" className="text-blue-800 underline text-sm mt-16">
// //                 View Item Details
// //               </a>
// //             </shot>
// //           </shoter>
// //         </big>
// //         <big className="grid grid-cols-2 border border-blue-950 rounded-3xl gap-8">
// //           <main className="inline">
// //             <img
// //               src={skull}
// //               className="rounded-[40px] p-[20px] w-[300px]  h-[400px] "
// //             />
// //           </main>
// //           <shoter>
// //             <h1 className="text-white text-[25px] mt-3">Blockchain Item One</h1>
// //             <img
// //               src={down}
// //               className="rounded-3xl w-[60px] mt-3 inline absolute top-78"
// //             />
// //             <h2 className="text-white mt-3 ml-20">Liberty Artist</h2>
// //             <h3 className="text-blue-800 mt-1 underline ml-20">@libertyart</h3>
// //             <hr className="mt-8 opacity-50 w-[275px]" />
// //             <shot className="grid grid-cols-2 mt-10">
// //               <div>
// //                 <p className="text-white mt-3 text-sm">Current Bid</p>
// //                 <p className="text-white mt-3 text-lg">3.64 ETH</p>
// //                 <p className="text-white mt-3 text-sm">($6,000.50)</p>
// //               </div>
// //               <div>
// //                 <p className="text-white mt-3 text-sm">Ends in</p>
// //                 <p className="text-white mt-3 text-lg">6D 05H 40M 50S</p>
// //                 <p className="text-white mt-3 text-sm">(July 28th, 2022)</p>
// //               </div>
// //               <a href="#" className="text-blue-800 underline text-sm mt-16">
// //                 View Item Details
// //               </a>
// //             </shot>
// //           </shoter>
// //         </big>
// //         <big className="grid grid-cols-2 border border-blue-950 rounded-3xl gap-8">
// //           <main className="inline">
// //             <img
// //               src={skull}
// //               className=" rounded-[40px] p-[20px] w-[300px]  h-[400px]"
// //             />
// //           </main>
// //           <shoter>
// //             <h1 className="text-white text-[25px] mt-3">
// //               Virtual Currency Art
// //             </h1>
// //             <img
// //               src={down}
// //               className="rounded-3xl w-[60px] mt-3 inline absolute top-78"
// //             />
// //             <h2 className="text-white mt-3 ml-20">Liberty Artist</h2>
// //             <h3 className="text-blue-800 mt-1 underline ml-20">@libertyart</h3>
// //             <hr className="mt-8 opacity-50 w-[275px]" />
// //             <shot className="grid grid-cols-2 mt-10">
// //               <div>
// //                 <p className="text-white mt-3 text-sm">Current Bid</p>
// //                 <p className="text-white mt-3 text-lg">2.44 ETH</p>
// //                 <p className="text-white mt-3 text-sm">($8,200.50)</p>
// //               </div>
// //               <div>
// //                 <p className="text-white mt-3 text-sm">Ends in</p>
// //                 <p className="text-white mt-3 text-lg">3D 05H 20M 58S</p>
// //                 <p className="text-white mt-3 text-sm">(July 14th, 2022)</p>
// //               </div>
// //               <a href="#" className="text-blue-800 underline text-sm mt-16">
// //                 View Item Details
// //               </a>
// //             </shot>
// //           </shoter>
// //         </big>
// //         <big className="grid grid-cols-2 border border-blue-950 rounded-3xl gap-8">
// //           <main className="inline">
// //             <img
// //               src={skull}
// //               className=" rounded-[40px] p-[20px] w-[300px]  h-[400px] "
// //             />
// //           </main>
// //           <shoter>
// //             <h1 className="text-white text-[25px] mt-3">Digital Art Item</h1>
// //             <img
// //               src={down}
// //               className="rounded-3xl w-[60px] mt-3 inline absolute top-99"
// //             />
// //             <h2 className="text-white mt-3 ml-20">Liberty Artist</h2>
// //             <h3 className="text-blue-800 mt-1 underline ml-20">@libertyart</h3>
// //             <hr className="mt-8 opacity-50 w-[275px]" />
// //             <shot className="grid grid-cols-2 mt-10">
// //               <div>
// //                 <p className="text-white mt-3 text-sm">Current Bid</p>
// //                 <p className="text-white mt-3 text-lg">2.50 ETH</p>
// //                 <p className="text-white mt-3 text-sm">($8,400.50)</p>
// //               </div>
// //               <div>
// //                 <p className="text-white mt-3 text-sm">Ends in</p>
// //                 <p className="text-white mt-3 text-lg">4D 08H 32M 18S</p>
// //                 <p className="text-white mt-3 text-sm">(July 16th, 2022)</p>
// //               </div>
// //               <a href="#" className="text-blue-800 underline text-sm mt-16">
// //                 View Item Details
// //               </a>
// //             </shot>
// //           </shoter>
// //         </big>
// //         <big className="grid grid-cols-2 border border-blue-950 rounded-3xl gap-8">
// //           <main className="inline">
// //             <img
// //               src={skull}
// //               className="rounded-[40px] p-[20px] w-[300px]  h-[400px] "
// //             />
// //           </main>
// //           <shoter>
// //             <h1 className="text-white text-[25px] mt-3">
// //               Blockchain Music Design
// //             </h1>
// //             <img
// //               src={down}
// //               className="rounded-3xl w-[60px] mt-3 inline absolute top-99"
// //             />
// //             <h2 className="text-white mt-3 ml-20">Liberty Artist</h2>
// //             <h3 className="text-blue-800 mt-1 underline ml-20">@libertyart</h3>
// //             <hr className="mt-8 opacity-50 w-[275px] " />
// //             <shot className="grid grid-cols-2 mt-10">
// //               <div>
// //                 <p className="text-white mt-3 text-sm">Current Bid</p>
// //                 <p className="text-white mt-3 text-lg">2.44 ETH</p>
// //                 <p className="text-white mt-3 text-sm">($8,200.50)</p>
// //               </div>
// //               <div>
// //                 <p className="text-white mt-3 text-sm">Ends in</p>
// //                 <p className="text-white mt-3 text-lg">5D 10H 22M 24S</p>
// //                 <p className="text-white mt-3 text-sm">(July 24th, 2022)</p>
// //               </div>
// //               <a href="#" className="text-blue-800 underline text-sm mt-16">
// //                 View Item Details
// //               </a>
// //             </shot>
// //           </shoter>
// //         </big>
// //       </alava>
// //     </div>
// //   );
// // };

// // export default App;
























// // import React from 'react'
// // import { FaRocket } from "react-icons/fa6";
// // import { FaCubes } from "react-icons/fa";
// // import { TiMessages } from "react-icons/ti";
// // import { FaChartBar } from "react-icons/fa";
// // // import koprik from './templatemo_banner_slide_01.jpg'
// // // import dragon from './favicon.png'
// // // import askar from './templatemo_event_01.jpg'
// // // import qurol from './templatemo_event_02.jpg'
// // import { CiLocationOn } from "react-icons/ci";
// // import { IoIosTimer } from "react-icons/io";
// // import bgcolor from './images/photo_2024-07-05_14-36-00.jpg'
// // import bgcolor1 from './images/photo_2024-07-05_14-35-55.jpg'
// // import bgcolor2 from './images/photo_2024-07-05_14-36-05.jpg'
// // import logo from './images/photo_2024-07-05_14-35-24.jpg'

// // const App = () => {
// //   return (
// //     <div>
// //       <nav className='w-[100%] h-[100px] flex'>
// //         <img src={logo} className='w-[90px] h-[90px] ml-2' />
// //         <p className='text-red-600 text-4xl mt-6'>dragon</p>
// //         <p className='text-green-400 text-4xl mt-6'>fruit</p>
// //         <div className='ml-80 h[100%] w-[250px] justify-center hover:bg-red-600 items-center hover:text-white cursor-pointer flex text-xl'><p className='hover:'>Home</p></div>
// //         <div className='h[100%] w-[250px] justify-center hover:bg-red-600 hover:text-white cursor-pointer items-center flex text-xl'><p>Aboute</p></div>
// //         <div className='h[100%] w-[250px] justify-center hover:bg-red-600 hover:text-white cursor-pointer items-center flex text-xl'><p>Events</p></div>
// //         <div className='h[100%] w-[250px] justify-center hover:bg-red-600 hover:text-white cursor-pointer items-center flex text-xl'><p>Timeline</p></div>
// //         <div className='h[100%] w-[250px] justify-center hover:bg-red-600 hover:text-white cursor-pointer items-center flex text-xl'><p>Contact</p></div>

// //       </nav>
// //       <div className='w-full h-[500px] bg-black items-center align-middle'>
// //         <img src={bgcolor} className='absolute w-[100%] h-[500px]' />
// //         <p className='text-white text-5xl text-center absolute top-[260px] ml-[450px] flex justify-center'>Responsive Design</p>
// //         <p className='text-white text-center absolute mt-[260px] ml-[410px] flex justify-center'>Aenaem diom ibero, venecatis eu ricus eu, tinnkduc portlatio arcl, Nulla <br></br>cansequat mi et lecsus vehios confitium, Nulla ullamcomper dolor <br></br>vihicui dolor inderset, egeter formidab liggion bebli.</p>
// //       </div>
// //       <h1 className='text-5xl mt-5   text-center'>About Our Organization</h1>
// //       <div className='grid grid-cols-4 gap-5 p-16'>

// //         <div>
// //           <FaRocket className='bg-red-600 text-8xl ml-[80px] p-7 rounded-[50%] text-yellow-500' />
// //           <h1 className='ml-24'>Revenues</h1>
// //           <p className='text-center mr-10'>Lorem ipsum dolor sit <br></br>amet consectetur adipisicing.</p>
// //         </div>
// //         <div>
// //           <FaCubes className='bg-black ml-[90px] text-yellow-500 rounded-[50%] p-5 text-8xl' />
// //           <h1 className='ml-24'>Opportunities</h1>
// //           <p className='text-center'>Lorem ipsum dolor sit <br></br>amet consectetur adipisicing.</p>
// //         </div>
// //         <div>
// //           <FaChartBar className='bg-yellow-500 ml-[90px] text-red-500 p-5 rounded-[50%] text-8xl' />
// //           <h1 className='ml-28'>Growth</h1>
// //           <p className='text-center'>Lorem ipsum dolor sit <br></br>amet consectetur adipisicing.</p>
// //         </div>
// //         <div>
// //           <TiMessages className='bg-black ml-[90px] text-yellow-500 p-5 rounded-[50%] text-8xl' />
// //           <h1 className='ml-[90px]'>Social Media</h1>
// //           <p className='text-center'>Lorem ipsum dolor sit <br></br>amet consectetur adipisicing.</p>
// //         </div>
// //       </div>
// //       <h1 className='absolute text-white left-[600px] top-[1000px] text-4xl'>Events</h1>
// //       <div className='grid grid-cols-2 pt-28 pb-8 h-70 bg-blue-300'>
// //         <div className='ml-[30px]'>
// //           <img className='w-[600px] h-[200px]' src={bgcolor1} />
// //           <div className='bg-white w-[600px] h-[100px]'>
// //             <h2 className='text-3xl pt-3 pl-5'>Web Design Trends</h2>
// //             <CiLocationOn className='inline ml-5' />
// //             <p className='inline pl-1 mt-7 mr-4'>New hotel bankot Tailand.</p>
// //             <IoIosTimer className='inline' />
// //             <p className='inline pl-1 mt-7'>4:00 PM to 8:00PM.</p>
// //           </div>
// //         </div>
// //         <div className='ml-[25px]'>
// //           <img className='w-[600px] h-[200px]' src={bgcolor2} />
// //           <div className='bg-white w-[600px] h-[100px]'>
// //             <h2 className='text-3xl pt-3 pl-5'>Free Bootstrap Seminar</h2>
// //             <CiLocationOn className='inline ml-5' />
// //             <p className='inline pl-1 mt-7 mr-4'>Digital Hall, Yangon, Myyanma.</p>
// //             <IoIosTimer className='inline' />
// //             <p className='inline pl-1 mt-7'>10:30 AM to 3:30 PM.</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default App




// import React from 'react'

// const App = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default App



import React from 'react';
import img1 from './camera-kfc-png-logo-0.png'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { LiaFontSolid } from "react-icons/lia";
import { FaHtml5 } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";

const App = () => {
  return (
    <>
      <div className=''>
        
        <div className='h-[100vh] bg-gradient-to-r from-[#FF512F] to-[#DD2476] flex flex-col items-center justify-center text-center gap-10 px-24'>
          <h1 className='text-white text-7xl font-semibold cmt-5'>Com<span className='text-black'>in</span>g</h1>
          <p className='text-white text-xl'>HELLO WEBSITE UNDER CONSTRUCTION.</p>
          <div className='flex h-[11vh] gap-5 mt-5'>
            <div className='flex flex-col justify-between border-r-[1px] px-8'>
              <h1 className='text-4xl font-bold text-white'>241</h1>
              <p className='text-white text-xl'>Days</p>
            </div>
            <div className='flex flex-col justify-between border-r-[1px] px-8'>
              <h1 className='text-4xl font-bold text-white'>12</h1>
              <p className='text-white text-xl'>Hours</p>
            </div>
            <div className='flex flex-col justify-between border-r-[1px] px-8'>
              <h1 className='text-4xl font-bold text-white'>50</h1>
              <p className='text-white text-xl'>Minutes</p>
            </div>
            <div className='flex flex-col justify-between px-5 mr-5'>
              <h1 className='text-4xl font-bold text-white'>49</h1>
              <p className='text-white text-xl'>seconds</p>
            </div>
          </div>
          <div className='flex items-center justify-center mt-5'>
            <input type="text" placeholder='Your Email' className='w-full h-12 pl-4 pr-48' />
            <button className='h-12 px-10 text-white bg-lime-500'>SUBSCRIBE</button>
          </div>
        </div>


        <div className='w-full h-[60vh] px-24 text-center pt-20'>
          <h1 className='text-4xl font-bold tracking-widest text-[#7AD03A]'>FEATURES</h1>
          <div className='flex h-[100%] mt-10'>
            <div className='w-[25%] h-[50%] text-center flex flex-col items-center justify-evenly mt-16'>
              <MdOutlinePhoneIphone className='text-2xl w-[60px] h-[60px] border-[1.5px] p-3 rounded-full border-[#7AD03A] text-[#7AD03A]' />
              <h1 className='text-xl font-semibold'>FULLY RESPONSIVE</h1>
              <p className='text-[14px]'>Lorem ipsum dolor sit consectetur ang elit <br />  doloribus magni incidunt fugit assumenda atque.</p>
            </div>
            <div className='w-[25%] h-[50%] text-center flex flex-col items-center justify-evenly mt-16'>
              <MdOutlineSettingsSuggest className='text-2xl w-[60px] h-[60px] border-[1.5px] p-3 rounded-full border-[#7AD03A] text-[#7AD03A]' />
              <h1 className='text-xl font-semibold'>BOOTSTRAP 3.3.4</h1>
              <p className='text-[14px]'>Lorem ipsum dolor sit consectetur ang elit <br />  doloribus magni incidunt fugit assumenda atque.</p>
            </div>
            <div className='w-[25%] h-[50%] text-center flex flex-col items-center justify-evenly mt-16'>
              <LiaFontSolid className='text-2xl w-[60px] h-[60px] border-[1.5px] p-3 rounded-full border-[#7AD03A] text-[#7AD03A]' />
              <h1 className='text-xl font-semibold'>GOOGLE FONTS</h1>
              <p className='text-[14px]'>Lorem ipsum dolor sit consectetur ang elit <br />  doloribus magni incidunt fugit assumenda atque.</p>
            </div>
            <div className='w-[25%] h-[50%] text-center flex flex-col items-center justify-evenly mt-16'>
              <FaHtml5 className='text-2xl w-[60px] h-[60px] border-[1.5px] p-3 rounded-full border-[#7AD03A] text-[#7AD03A]' />
              <h1 className='text-xl font-semibold'>HTML5 & CSS3</h1>
              <p className='text-[14px]'>Lorem ipsum dolor sit consectetur ang elit <br />  doloribus  magni incidunt fugit assumenda atque.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-16">
        <h2 className="text-center text-3xl font-bold text-green-500 mb-8">WE ARE GROWING</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center gap-3   ml-[100px]">
            <div><img src={img1} alt="Tracy" className="rounded-full w-32 h-35 mb-4" /></div>
            <div><h3 className="text-lg font-semibold">TRACY</h3>
              <p className="text-sm text-green-500 font-bold">Designer</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  Sunt tenetur voluptatem illo perspiciatis error suscipit vero.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-[100px]">
            <div><img src={img1} alt="Mary" className="rounded-full w-32 h-35 mb-4" /></div>
            <div className="">
              <h3 className="text-lg font-semibold">MARY</h3>
              <p className="text-sm text-green-500 font-bold">Developer</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  Quisquam voluptatum nostrum serfa fabulos.</p>
            </div>
          </div>


          <div className="flex items-center gap-3   ml-[100px]">
            <div><img src={img1} alt="Mary" className="rounded-full w-32 h-35 mb-4" /></div>
            <div className="">
              <h3 className="text-lg font-semibold">Julia</h3>
              <p className="text-sm text-green-500 font-bold">Director</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  Quisquam voluptatum nostrum praesentium se.</p>
            </div>
          </div>


          <div className="flex items-center gap-3 ml-[100px]">
            <div><img src={img1} alt="Mary" className="rounded-full w-32 h-35 mb-4" /></div>
            <div className="">
              <h3 className="text-lg font-semibold">Linda</h3>
              <p className="text-sm text-green-500 font-bold">Manager</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  Quisquam voluptatum nostrum praesentium sed..</p>
            </div>
          </div>
        </div>
        <div>
          <div className='w-full h-[90vh] bg-gradient-to-r from-gray-700 to-gray-300 pt-80px'>
            <h2 className='flex juustify-center text-3xl font-bold text-green-500 ml-[550px] mb-[80px] pt-[60px] tracking-widest'>STAY CONNECTED</h2>
            <div className='flex justify-evenly pb-[100px] ml-[-150px]'>
              <div className='mt-50px'>
                <input type="text" className="border-b border-gray-200 w-[500px] bg-transparent outline-none placeholder:text-xl mb-12" placeholder='Name' /><br />
                <input type="text" className="border-b border-gray-200 w-[500px] bg-transparent outline-none placeholder:text-xl mb-12" placeholder='Email' /><br />
                <input type="text" className="border-b border-gray-200 w-[500px] bg-transparent outline-none placeholder:text-xl mb-12" placeholder='Subject' /><br />
                <textarea name="" id="" className='border-b border-gray-200 w-[500px] bg-transparent outline-none placeholder:text-xl mb-12' placeholder='Message' ></textarea><br />
                <button className='border border-white py-[10px] px-[200px] text-white'>Send Message</button>
              </div>
              <div className='justify-end ml-[-200px]'>
                <div className='flex my-10 items-center'>
                  <CiMail className='border border-gray-300 p-[18px] w-[60px] h-[60px] text-white mt-[-20px]' />
                  <em className='text-white ml-10'>hello@company.com</em>
                </div>
                <div className='flex my-10 items-center'>
                  <FaPhone className='border border-gray-300 p-[18px] w-[60px] h-[60px] mt-[-10px] text-white' />
                  <em className='text-white ml-10'>010-020-0340, 090-080-0760</em>
                </div>
                <div className='flex my-10 items-center'>
                  <CiLocationOn className='border border-gray-300 p-[18px] w-[60px] h-[60px] mt-[-10px] text-white ' />
                  <em className='text-white ml-10'>220 Another Roadside, Birdeye View, GO 54321</em>
                </div>
              </div>
            </div>
          </div>
          <footer className='w-full flex justify-center h-[10vh] items-center pt-[100px]'>
            <div className='w-[50%] flex ml-[-460px]'>
              <p>Copyright c 2084 Your Company Name | Design: <span className='text-blue-600'>templatemo</span></p>
              <FaFacebookF className='text-md ml-6' />
              <FaTwitter className='text-md ml-6' />
              <TiSocialGooglePlus className='text-2xl font-bold ml-6' />
              <FaLinkedinIn className='text-md ml-6' />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;
