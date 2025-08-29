import Image from "next/image";

const allnoise = new Set(["Quiet", "Group Study"]);
const allseat = new Set(["Sofa", "Single Desk", "Group Table"]);
const allcharging = new Set(["Charging", "No Charging"]);

const library1 = createLibrary("name", ["Quiet"], ["Sofa", "Single Desk"], "Charging");

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
