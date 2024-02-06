const array = [2, 6, -20, 9, 12, 8, 20, 22, 24];

function filter(array, deliteNum) {
  let filterArray = [];
  for (let i = 0; i < array.length; i++) {
    if (deliteNum(array[i])) {
      filterArray.push(deliteNum(array[i]));
    }
  }
  return filterArray;
}

console.log(filter(array, deliteNum));

function deliteNum(num) {
  if (num > 10) {
    return true;
  } else return false;
}
