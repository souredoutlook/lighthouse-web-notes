//quadratic -> note if the arrays in nested for loops are different, it is not n^2 but n * m (think multiplicatively)
const arrayContainsSum = (array, sum) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      counter += 1;
      console.log(counter);
      if (array[i] + array[j] === sum)
        return { found: true, num1: array[i], num2: array[j] };
    }
  }
  return { found: false };
};

// console.log(arrayContainsSum([0,2,4,7,9,10], 15)) //false

// does what the one above does in 6 operations maximum -> must be an ordered list though.
const arrayContainsSumLinear = (array, sum) => {
  let i = 0;
  let ii = array.length - 1;
  let counter = 0;
  while (i <= ii) {
    counter += 1;
    console.log(counter);
    const element1 = array[i];
    const element2 = array[ii];
    const currentSum = element1 + element2;

    if (currentSum === sum) {
      return true;
    } else if (currentSum > sum) {
      ii--;
    } else {
      i++;
    }
  }

  return false;
};

// console.log(arrayContainsSumLinear([0,2,4,7,9,10], 6)) //true

//recursive just for fun

let recursiveCounter = 0;

const arrayContainsSumRecursive = (array, sum) => {
  recursiveCounter += 1;
  console.log(recursiveCounter);

  if (array.length > 1) {
    const result = array[0] + array[array.length - 1];
    if (result === sum) {
      return true;
    } else if (result > sum) {
      array.pop();
      return arrayContainsSumRecursive(array, sum);
    } else {
      array.shift();
      return arrayContainsSumRecursive(array, sum);
    }
  } else {
    if (array[0] * 2 === sum) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(arrayContainsSumRecursive([0, 2, 4, 7, 9, 10], 15)); //false
