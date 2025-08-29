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

            <div className="space-y-4">

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

        </main>
    )
}

// dynamic library attributes
/*
            <p className="text-[12px]">seats: {library.seat.join(", ")}</p>
            <p className="text-[12px]">noise: {library.noise.join(", ")}</p>
            <p className="text-[12px]">charging: {library.charging}</p>

*/
