function search(array, item) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    const middleIndex = Math.floor((min + max) / 2);
    const currentItem = array[middleIndex];
    if (currentItem === item) {
      return middleIndex;
    } else if (currentItem < item) {
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1;
    }
  }

  return null;
}

console.log(search([1, 2, 3, 4], 5));
