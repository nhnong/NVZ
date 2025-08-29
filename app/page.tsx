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
        <p>name: {libraries[0].name}</p>
        <p>seats: {libraries[0].seat.join(", ")}</p>
        <p>noise: {libraries[0].noise.join(", ")}</p>
        <p>charging: {libraries[0].charging}</p>
      </div>
    </main>
  );
}
