import Image from "next/image";
import { libraries } from "@/app/data/libraries";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function LibraryPage({ params }: { params: { library: string } }) {
    const library = libraries.find((lib: typeof libraries[number]) => lib.urlname === params.library);
    if (!library) {
        return notFound();
    }
    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">{library.name}</h1>
            <p>seats: {library.seat.join(", ")}</p>
            <p>noise: {library.noise.join(", ")}</p>
            <p>charging: {library.charging}</p>
        </main>
    )
}
