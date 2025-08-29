import Image from "next/image";

export default function Home() {

  // dummy library with all feature types
  const dummylib = {
    name: "Baillieu Library",
    seats: [
      {type: "Single Booth", Available: 10},
      {type: "Group Desk", Available: 10},
      {type: "Monitor", Available: 10}
    ], 
    noise: "Quiet",
    charging: true,
    food: false
  }

  return (
    <main>
      <h1>Good Morning, User!</h1>
      <p>Where would you like to study today?</p>
    </main>
    
  );
}