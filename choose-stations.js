/* 
requirements:
capacity of at least 20
must be: school or community center
*/
const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"]
];
  
function chooseStations(stations) {
  let goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    const type = station[2];
    if ((type === "school" || type === "community centre") && (capacity >= 20)) {
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}

chooseStations(stations);