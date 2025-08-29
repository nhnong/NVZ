import Image from "next/image";

// library attributes
const allnoise = new Set(["Quiet", "Conversational"]);
const allseat = new Set(["Sofa", "Single Desk", "Group Table"]);
const allcharging = new Set(["Charging", "No Charging"]);

// Array storing each library
let libraries: Array<{
  name: string;
  noise: string[];
  seat: string[];
  charging: string;
}> = [];

// creating a library
libraries = createLibrary(
  "name",
  ["Quiet"],
  ["Sofa", "Single Desk"],
  "Charging"
);

function createLibrary(
  name: string,
  noise: string[],
  seat: string[],
  charging: string
) {

  // base cases
  if (!name) {
    throw new Error("Name is required");
  }
  if (!allcharging.has(charging)) {
    throw new Error(`Invalid charging option: ${charging}`);
  }
  let validNoise = noise.filter((n) => allnoise.has(n));
  let validSeats = seat.filter((s) => allseat.has(s));

  if (!validNoise || !validSeats) {
    throw new Error(`Empty/ Invalid noise or seat options`);
  }

  let library = {
    name: name,
    noise: validNoise,
    seat: validSeats,
    charging: charging,
  };

  libraries.push(library);

  return libraries;
}

export default function Home() {
  return (
    <main>
      <h1 className="text-center font-bold text-[48px] leading-none">
        Welcome, User!
      </h1>
      <p>Where would you like to study today?</p>
      <div>
        <p>name: {libraries[0].name}</p>
        <p>seats: {libraries[0].seat.join(", ")}</p>
        <p>noise: {libraries[0].noise.join(", ")}</p>
        <p>charging: {libraries[0].charging}</p>
      </div>
    </main>
  );
}

// need a getlibraries function 
