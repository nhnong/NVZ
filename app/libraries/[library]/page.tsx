/* eslint-disable @typescript-eslint/no-explicit-any */

import { libraries } from "@/app/data/libraries";
import { notFound } from "next/navigation";
import Image from "next/image";

interface LibraryPageProps {
  params: { library: string };
}

export default async function LibraryPage({ params }: any) {
    const resolvedParams = await params;
    const libraryUrl = resolvedParams.library;
    const library = libraries.find((lib) => lib.urlname === libraryUrl);
    if (!library) {
        return notFound();
    }

    return (
        <main className="mx-auto w-max p-4">

            <div className="flex items-center gap-2 bg-[#D9E7FC] rounded-lg w-fit px-3 py-1 mb-4">
                <Image src="/sofa_available.png" alt="Seat Icon" width={20} height={20} />
                <span className="text-[10px]">Seats available: 30</span>
            </div >
            <div className="w-max h-30 overflow-hidden rounded-lg mb-4">
                <Image src={library.imgsrc} alt={library.name} width={500} height={100} className="rounded-lg mb-4" />
            </div>
            
            <h1 className="font-bold text-[30px] leading-normal">{library.name}</h1>
            <p className="text-[12px]">Opening Hours: <br/>{library.openhours.split("\n").map((line, index) => (
                <span key={index}>{line}<br/></span>
            ))}</p>
            <p className="text-[12px] font-bold mb-6"><span>🌙</span>After-hours study zone available</p>

            <div className="space-y-4 mb-10">

                <div className="flex items-center gap-4">
                    <span className="w-20 font-semibold text-[12px]">Seats:</span> {/* fixed width */}
                    <button className="px-3 rounded-xl border-2 border-[#0F2748] text-[12px]">Sofa</button>
                    <button className="px-3 rounded-xl border-2 border-[#0F2748] text-[12px]">Single Desk</button>
                    <button className="px-3 rounded-xl border-2 border-[#0F2748] text-[12px]">Group Table</button>
                </div>

                <div className="flex items-center gap-4">
                    <span className="w-20 font-semibold text-[12px]">Noise level:</span> {/* same width */}
                    <button className="px-3 rounded-xl border-2 border-[#0F2748] text-[12px]">Quiet</button>
                    <button className="px-3 rounded-xl border-2 border-[#0F2748] text-[12px]">Conversational</button>
                </div>

                <div className="flex items-center gap-4">
                    <span className="w-20 font-semibold text-[12px]">Charging:</span> {/* same width */}
                    <button className="px-3 rounded-xl border-2 border-[#0F2748] text-[12px]">Available</button>
                    <button className="px-3 rounded-xl border-2 border-[#0F2748] text-[12px]">Not Available</button>
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
                        <p>Available: #</p>
                    </div>
                </label>
                <div className="peer-checked:block hidden pl-4 mt-2 space-y-2">
                    <div className="flex justify-between px-5 py-2.5 rounded-lg bg-[#D9D9D9] text-[12px]">
                        <p>Level 1</p>
                        <p>Available: #</p>
                    </div>
                    <div className="flex justify-between px-5 py-2.5 rounded-lg bg-[#D9D9D9] text-[12px]">
                        <p>Level 2</p>
                        <p>Available: #</p>
                    </div>
                    <div className=" flex justify-between px-5 py-2.5 rounded-lg bg-[#D9D9D9] text-[12px]">
                        <p>Level 3</p>
                        <p>Available: #</p>
                    </div>
                </div>
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
                        <p>Available: #</p>
                    </div>
                </label>
                <div className="peer-checked:block hidden pl-4 mt-2 space-y-2">
                    <div className="flex justify-between px-5 py-2.5 rounded-lg bg-[#D9D9D9] text-[12px]">
                        <p>Level 1</p>
                        <p>Available: #</p>
                    </div>
                    <div className="flex justify-between px-5 py-2.5 rounded-lg bg-[#D9D9D9] text-[12px]">
                        <p>Level 2</p>
                        <p>Available: #</p>
                    </div>
                    <div className=" flex justify-between px-5 py-2.5 rounded-lg bg-[#D9D9D9] text-[12px]">
                        <p>Level 3</p>
                        <p>Available: #</p>
                    </div>
                </div>
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
                        <p>Available: #</p>
                    </div>
                </label>
                <div className="peer-checked:block hidden pl-4 mt-2 space-y-2">
                    <div className="flex justify-between px-5 py-2.5 rounded-lg bg-[#D9D9D9] text-[12px]">
                        <p>Level 1</p>
                        <p>Available: #</p>
                    </div>
                    <div className="flex justify-between px-5 py-2.5 rounded-lg bg-[#D9D9D9] text-[12px]">
                        <p>Level 2</p>
                        <p>Available: #</p>
                    </div>
                    <div className="flex justify-between px-5 py-2.5 rounded-lg bg-[#D9D9D9] text-[12px]">
                        <p>Level 3</p>
                        <p>Available: #</p>
                    </div>
                </div>
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
