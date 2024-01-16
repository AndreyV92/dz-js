const addressLat = 5;
const addressLong = 10;

const positionLat = 7;
const positionLong = 14;

console.log(
  Math.sqrt((addressLong - addressLat) ** 2 + (positionLong - positionLat) ** 2)
);
