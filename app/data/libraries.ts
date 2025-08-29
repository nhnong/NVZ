// library attributes
const allnoise = new Set(["Quiet", "Conversational"]);
const allseat = new Set(["Sofa", "Single Desk", "Group Table", "Monitor"]);
const allcharging = new Set(["Charging", "No Charging"]);

// Array storing each library
const libraries: Array<{
  name: string;
  noise: string[];
  seat: string[];
  charging: string;
}> = [];

// creating a library
createLibrary(
  "Baillieu Library",
  ["Quiet"],
  ["Sofa", "Single Desk"],
  "Charging"
);

createLibrary(
  "ERC Library",
  ["Quiet"],
  ["Sofa", "Single Desk"],
  "Charging"
);

createLibrary(
  "Giblin Eunson Library",
  ["Quiet"],
  ["Sofa", "Single Desk", "Monitor"],
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
  const validNoise = noise.filter((n) => allnoise.has(n));
  const validSeats = seat.filter((s) => allseat.has(s));

  if (validNoise.length == 0 || validSeats.length == 0) {
    throw new Error(`Empty/ Invalid noise or seat options`);
  }

  const library = {
    name: name,
    noise: validNoise,
    seat: validSeats,
    charging: charging,
  };

  libraries.push(library);
  return library;
}


export { libraries, createLibrary };