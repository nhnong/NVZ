import Image from "next/image";
import { libraries } from "./data/libraries";
import Link from "next/link";

export default function Home() {
 
  return (
    <main>
      <header className="flex flex-row justify-between max-w-5xl mx-auto px-4 py-3 sm:px-6">
        <Link href ="/">Home</Link>
        <div>
          <Link href ="/timer">Timer</Link>
        </div>
      </header>
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
          className="w-11/12 sm:w-2/3 lg:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
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