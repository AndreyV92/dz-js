const arr = [1, 40, -5, 10, -17, 0, 30];

function getSort(arr) {
  let result = [...arr];
  for (let j = 0; j < result.length; j++) {
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i] < result[i + 1]) {
        let part = result[i];
        result[i] = result[i + 1];
        result[i + 1] = part;
      }
    }
  }

  return result;
}

console.log(getSort(arr));
