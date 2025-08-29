import Image from "next/image";
import { libraries } from "./data/libraries";
import Link from "next/link";

export default function Home() {
 
  return (
    <main>
      <div className="text-center mt-8 mb-8">
        <h1 className="text-center font-bold text-[30px] leading-none">
          Welcome, User!
        </h1>
        <p>Where would you like to study today?</p>
      </div>
      <div className="text-center flex flex-col sm:flex-row justify-center items-center gap-5">
        {libraries.map((lib) => (
          <div key={lib.name}>
            <div className="relative h-55 w-80">
              <Image              
                src={`/${lib.imgsrc}`}
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

