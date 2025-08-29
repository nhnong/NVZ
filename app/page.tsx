import Image from "next/image";

// library attributes
const allnoise = new Set(["Quiet", "Group Study"]);
const allseat = new Set(["Sofa", "Single Desk", "Group Table"]);
const allcharging = new Set(["Charging", "No Charging"]);


// creating a library
const library1 = createLibrary("Baillieu Library", ["Quiet"], ["Sofa", "Single Desk"], "Charging");

/* how a library looks like:
library1 = {
  name: "String name",
  noise: ["Noise level 1", "Noise level 2"],
  seat: ["Seat type 1", "Seat type 2"... etc],
  charging: "Charging" | "No Charging"
}

*/

function createLibrary(name: string, noise: string[], seat: string[], charging: string){

  if (!name) {
    throw new Error("Name is required");
  }
  if (!allcharging.has(charging)) {
    throw new Error(`Invalid charging option: ${charging}`);
  }

  const library = {
    name: name,
    noise: noise.filter(n => noise.includes(n)),
    seat: seat.filter(s => seat.includes(s)),
    charging: charging
  }

  return library;
}

export default function Home() {
  
  return (
    <main>
      <h1>Welcome, User!</h1>
      <p>Where would you like to study today?</p>
      <div>
        <p>name: {library1.name}</p>
        <p>seats: {library1.seat.join(", ")}</p>
        <p>noise: {library1.noise.join(", ")}</p>
        <p>charging: {library1.charging}</p>
      </div>
    </main>
  );
}
