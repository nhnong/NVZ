// library attributes
const allnoise = new Set(["Quiet", "Conversational"]);
const allseat = new Set(["Sofa", "Single Desk", "Group Table", "Monitor"]);
const allcharging = new Set(["Charging Available", "No Charging"]);
const timeplaceholder = "Monday to Friday	9am-8pm\nSaturday         10am-5pm\nSunday	      11am-5pm";

// Array storing each library
const libraries: Array<{
  name: string;
  urlname: string;
  noise: string[];
  seat: string[];
  charging: string;
  imgsrc: string;
  openhours: string;
}> = [];

// creating a library
createLibrary(
  "Baillieu Library",
  ["Quiet"],
  ["Single Desk", "Group Table"],
  "Charging Available",
  "/baillieu.jpg",
  timeplaceholder
);

createLibrary(
  "ERC Library",
  ["Quiet"],
  ["Single Desk", "Group Table", "Monitor"],
  "Charging Available",
  "/erc.JPG",
  timeplaceholder
);

createLibrary(
  "Giblin Eunson Library",
  ["Quiet"],
  ["Sofa", "Single Desk", "Monitor"],
  "Charging Available",
  "/giblin.jpg",
  timeplaceholder
);

createLibrary(
  "Melbourne School of Design (MSD)",
  ["Quiet"],
  ["Sofa", "Group Table", "Monitor"],
  "Charging Available",
  "/msd.jpg",
  timeplaceholder
);

createLibrary(
  "Arts West",
  ["Conversational"],
  ["Sofa", "Group Table", "Monitor", "Single Desk"],
  "Charging Available",
  "/artwest.jpg",
  timeplaceholder
);

createLibrary(
  "Arts and Cultural Building",
  ["Conversational"],
  ["Single Desk", "Group Table"],
  "Charging Available",
  "/artsandcult.jpg",
  timeplaceholder
);


function createLibrary(
  name: string,
  noise: string[],
  seat: string[],
  charging: string,
  imgsrc: string,
  openhours: string
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
    urlname: name.toLowerCase().replace(/\s+/g, "-"),
    noise: validNoise,
    seat: validSeats,
    charging: charging,
    imgsrc: imgsrc,
    openhours: openhours
  };

  libraries.push(library);
  return library;
}


export { libraries, createLibrary };