/* eslint-disable @typescript-eslint/no-explicit-any */

import { libraries } from "@/app/data/libraries";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


interface LibraryPageProps {
  params: { library: string };
}
const getRandomSeats = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const seatLevelsBlock = (
  <div className="peer-checked:block hidden pl-4 mt-2 space-y-2">
    <div className="flex justify-between px-5 py-2.5 rounded-lg bg-[#D9D9D9] text-[13px]">
      <p>Level 1</p>
      <p className="bg-[#3E791A] text-white px-2 py-1 rounded w-[12ch]">Available: {getRandomSeats(2, 8)}</p>
    </div>
    <div className="flex justify-between px-5 py-2.5 rounded-lg bg-[#D9D9D9] text-[12px]">
      <p>Level 2</p>
      <p className="bg-[#3E791A] text-white px-2 py-1 rounded w-[13ch]">Available: {getRandomSeats(5, 15)}</p>
    </div>
    <div className="flex justify-between px-5 py-2.5 rounded-lg bg-[#D9D9D9] text-[12px]">
      <p>Level 3</p>
      <p className="bg-[#3E791A] text-white px-2 py-1 rounded w-[13ch]">Available: {getRandomSeats(1, 30)}</p>
    </div>
  </div>
);

export default async function LibraryPage({ params }: any) {
    const resolvedParams = await params;
    const libraryUrl = resolvedParams.library;
    const library = libraries.find((lib) => lib.urlname === libraryUrl);
    if (!library) {
        return notFound();
    }

    return (
        <main className="mx-auto w-max p-4">


{/*library open times, lib picture, seats available*/}
            <div className="flex items-center gap-2 bg-[#D9E7FC] rounded-lg w-fit px-3 py-1 mb-4">
                <Image src="/sofa_available.png" alt="Seat Icon" width={20} height={20} />
                <span className="text-[10px]">Seats Available: {getRandomSeats(50, 100)}</span>
            </div >
            <div className="w-max h-30 overflow-hidden rounded-lg mb-4">
                <Image src={library.imgsrc} alt={library.name} width={500} height={100} className="rounded-lg mb-4" />
            </div>
            
            <h1 className="font-bold text-[30px] leading-normal">{library.name}</h1>
            <p className="text-[12px]">Opening Hours: <br/>{library.openhours.split("\n").map((line, index) => (
                <span key={index}>{line}<br/></span>
            ))}</p>
            <p className="text-[12px] font-bold mb-6"><span>🌙</span>After-hours study zone available</p>


{/*buttons needing toggle feature*/}
            <div className="space-y-4 mb-10">
                {/*Seats*/}
                <div className="flex items-center gap-4 text-align-middle">
                    <span className="w-20 font-semibold text-[12px]">Seats:</span> 
                    {library.seat.map((s) => (
                    <button key={s} className="px-3 rounded-xl border-2 border-[#0F2748] text-[12px]"> {s} </button>
                    ))}
                </div>
                {/*Noise*/}
                <div className="flex items-center gap-4">
                    <span className="w-20 font-semibold text-[12px]">Noise level:</span>
                    {library.noise.map((n) => (
                    <button key={n} className="px-3 rounded-xl border-2 border-[#0F2748] text-[12px]"> {n} </button>
                    ))}
                </div>
                {/*Charging*/}
                <div className="flex items-center gap-4">
                    <span className="w-20 font-semibold text-[12px]">Charging:</span> 
                    <button className="px-3 rounded-xl border-2 border-[#0F2748] text-[12px]">{library.charging}</button>
                </div>
            </div>

           
            <div className="space-y-4 mb-3">
                <input type="checkbox" id="seat-toggle" className="hidden peer" />
                <label
                    htmlFor="seat-toggle"
                    className="block w-full px-5 py-4 bg-[#D9E7FC] hover:bg-[#9eb9e0] text-[12px] font-bold shadow rounded-lg cursor-pointer "
                >
                    <div className="flex justify-between">
                        <div className="flex flex-shrink-0">
                            <Image src="/sofa_available.png" alt="Seat Icon" width={20} height={20} className="mr-2" />
                            <p>Sofa</p>
                        </div>
                        <p className="bg-[#0E2647] text-white px-2 py-1 rounded">View Availability</p>
                    </div>
                </label>
                {seatLevelsBlock}
            </div>
            <div className="space-y-4 mb-3">
                <input type="checkbox" id="desk-toggle" className="hidden peer" />
                <label
                    htmlFor="desk-toggle"
                    className="block w-full px-5 py-4 bg-[#D9E7FC] hover:bg-[#9eb9e0] text-[12px] font-bold shadow rounded-lg cursor-pointer "
                >
                    <div className="flex justify-between">
                        <div className="flex flex-shrink-0">
                            <Image src="/desk.png" alt="Desk Icon" width={20} height={20} className="mr-2" />
                            <p>Single Desk</p>
                        </div>
                        <p className="bg-[#0E2647] text-white px-2 py-1 rounded">View Availability</p>
                    </div>
                </label>
                {seatLevelsBlock}
            </div>
            <div className="space-y-4 mb-3">
                <input type="checkbox" id="group-toggle" className="hidden peer" />
                <label
                    htmlFor="group-toggle"
                    className="block w-full px-5 py-4 bg-[#D9E7FC] hover:bg-[#9eb9e0] text-[12px] font-bold shadow rounded-lg cursor-pointer "
                >
                    <div className="flex justify-between">
                        <div className="flex flex-shrink-0">
                            <Image src="/group.png" alt="Group Icon" width={20} height={20} className="mr-2" />
                            <p>Group Table</p>
                        </div>
                        <p className="bg-[#0E2647] text-white px-2 py-1 rounded">View Availability</p>
                    </div>
                </label>
                {seatLevelsBlock}
            </div>
        </main>
    )
}

// dynamic library attributes
/*
            <p className="text-[12px]">seats: {library.seat.join(", ")}</p>
            <p className="text-[12px]">noise: {library.noise.join(", ")}</p>
            <p className="text-[12px]">charging: {library.charging}</p>

*/