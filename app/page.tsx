import Image from "next/image";
import { libraries } from "./data/libraries";
import Link from "next/link";

export default function Home() {
 
  return (
    <main>
      <div className="text-center">
        <h1 className="text-center font-bold text-[48px] leading-none">
          Welcome, User!
        </h1>
        <p>Where would you like to study today?</p>
      </div>
      <div className="text-center flex flex-col sm:flex-row justify-center items-center gap-5">
        {libraries.map((lib) => (
          <div key={lib.name}>
            <h2>{lib.name}</h2>
            <p>seats: {lib.seat.join(", ")}</p>
            <p>noise: {lib.noise.join(", ")}</p>
            <p>charging: {lib.charging}</p>
            <div className="relative h-55 w-80">
              <Image              
                src={`/${lib.imgsrc}`}
                alt={lib.name}
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}



