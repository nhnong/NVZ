"use client";
import Image from "next/image";
import { libraries } from "./data/libraries";
import Link from "next/link";
import { useState, useEffect } from "react";



export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = ""; 
    }
  }, [isOpen]);
 
  return (
    <main>

      <div className="text-center mt-8 mb-8">
        <h1 className="text-center font-bold text-[30px] leading-none">
          Welcome, User!
        </h1>
        <p>Where would you like to study today?</p>
      </div>


        <div className="flex justify-center my-5 mb-10">
          <input
            type="text"
            placeholder="Search libraries..."
            className="w-11/12 sm:w-2/3 lg:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
          />
          <button onClick={toggleFilter}>
            <Image src="/filter.png" alt="filter icon" width={30} height={5}/>
          </button>
        </div>

      {isOpen && (
        <>
          
          <div
            className="fixed inset-0"
            onClick={toggleFilter}
          ></div>

          
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50">
            <div
              className="bg-white w-80 rounded-lg shadow-lg p-6 mt-20 mr-10"
              onClick={(e) => e.stopPropagation()} // prevent backdrop click from closing
            >
              <p className="font-semibold mb-4">Filter by:</p>
              <label className="flex items-center gap-2 mb-2">
                <input type="checkbox" /> Select All
              </label>
              <hr/>
              <label className="flex items-center gap-2 mb-2 mt-2">
                <input type="checkbox" /> Charging Available
              </label>
              <label className="flex items-center gap-2 mb-2">
                <input type="checkbox" /> Monitors/ Computers
              </label>
              <label className="flex items-center gap-2 mb-4">
                <input type="checkbox" /> Group Table
              </label>

              <button
                onClick={toggleFilter}
                className="justify-self-end bg-[#B5D3FF] text-white py-1 px-5 rounded-lg hover:bg-[#7c9ac7] transition"
              >
                Done
              </button>
            </div>
          </div>
        </>
      )}      

      <div className="px-4 sm:px-15 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {libraries.map((lib) => (
          <div key={lib.name}>
            <div className="relative aspect-[3/2] w-full mb-2.5">
              <Image              
                src={`${lib.imgsrc}`}
                alt={lib.name}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 w-full bg-[#0E2647] bg-opacity-60 text-white text-center py-2 rounded-b-lg">
                <Link href={`/libraries/${lib.urlname}`} className="hover:underline">
                  {lib.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

// library features, will add on another page 
//             <h2>{lib.name}</h2>
//            <p>seats: {lib.seat.join(", ")}</p>
//            <p>noise: {lib.noise.join(", ")}</p>
//            <p>charging: {lib.charging}</p>