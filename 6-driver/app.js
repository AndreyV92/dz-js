const hasLicence = true;
const age = 19;
const isDrink = false;

const canDrive =
  hasLicence === true && age >= 18 && isDrink === false ? "может" : "не может";

console.log(`Водитель ${canDrive} поехать`);
