function encoder(pass) {
  const stringToArray = pass.split("");
  let encryptedPassword = [];
  const partOneOfPass = stringToArray.splice(0, 3);
  const partTwoOfPass = stringToArray.splice(0, 3);
  const partThreeOfPass = stringToArray.splice(0, 2);
  encryptedPassword = encryptedPassword.concat(
    partTwoOfPass,
    partOneOfPass,
    partThreeOfPass
  );
  return encryptedPassword;
}

console.log(encoder("password"));

function checkPass(encryptedPassword, pass) {
  const stringToArray = encryptedPassword.split("");
  let checkPassword = [];
  const partOneOfPass = stringToArray.splice(3, 3);
  const partTwoOfPass = stringToArray.splice(0, 3);
  const partThreeOfPass = stringToArray.splice(0, 2);
  checkPassword = checkPassword.concat(
    partOneOfPass,
    partTwoOfPass,
    partThreeOfPass
  );
  checkPassword = checkPassword.join("");

  if (checkPassword === pass) {
    return true;
  } else return false;
}
console.log(checkPass("swopasrd", "password"));
