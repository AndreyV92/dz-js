const arr = ["10-02-2024", "test", "11/12/2023", "00/13/2022"];

function dateCheck(dateStr) {
  let result = [];
  for (let i = 0; i < dateStr.length; i++) {
    let isDate = !isNaN(new Date(dateStr[i]));
    if (isDate == true) {
      result.push(dateStr[i]);
    }
  }
  return result;
}
console.log(dateCheck(arr));
