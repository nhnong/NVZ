import Image from "next/image";
import { libraries } from "./data/libraries";
import Link from "next/link";

export default function Home() {
 
  return (
    <main>
      <h1 className="text-center font-bold text-[48px] leading-none">
        Welcome, User!
      </h1>
      <p>Where would you like to study today?</p>
      <div className="text-center">
        {libraries.map((lib) => (
          <div key={lib.name}>
            <h2>{lib.name}</h2>
            <p>seats: {lib.seat.join(", ")}</p>
            <p>noise: {lib.noise.join(", ")}</p>
            <p>charging: {lib.charging}</p>
          </div>
        ))}
      </div>
    </main>
  );
}



