# Algorithms

### From Compass

## What is an Algorithm

The steps you use to accomplish a task are all a kind of algorithm

In computer science an algorithm is a set of steps that a computer takes to accomplish a task

Or: the code we write that accomplishes a certain task.

### [Intro to Algorithms](https://youtu.be/nHxnvrvfLsA)

Can express algorithms in terms of time to solve and size of problem. Linear algorithms `n` are not very efficients solutions. Logarithmic algorithms can solve very large problems with little additional time expense.

## Algorithm Complexity

Complexity is how fast or slow a particular algorithm is. Instead of measuring time we measure elementary operations.

An elementary operation is any operation that takes a fixed amount of time to perform no matter what the data is.

Time complexity is often referred to as running time.

The code below has a running time of 4n + 4

```javascript
let result = 0; // 1

for (
  let i = 0; // 1
  i < array.length; // n + 1
  i++ // n
) {
  let number = array[i]; // n
  result += number; // n
}

console.log(result); // 1
```

Algorithms that don't deal with dynamic data like loops usually take "constant time" because there is no variability involved.

## Linear vs. Logarithmic

A good example of linear v logarithmic is the guessing game.

A random number between 1 and 15 can be guessed in 2 ways: with a linear guess and check - 1, 2, 3, 4, 5... etc.

Or by guessing 8, then guessing either 4 or 12 and so on. This solution needs 4 guesses max.

You can expand the problem by using a range of 300. Which would need at most 9 guesses using the binary search method.

### Binary Search

The instructions for a binary search in a guessing game are as follows:

```
1. Let min=0 and max=n -1.
2. Guess the average of max and min rounded down so that it is an integer.
3. If you guessed the number, stop. You found it!
4. If the guess was too low, set min to be one larger than the guess.
5. If the guess was too high, set max to be one smaller than the guess.
6. Go back to step two.
```

And in javascript:

```javascript
const binarySearch = (array, target) => {
  let min = 0;
  let max = array.length - 1;
  while (min < max) {
    let guess = Math.floor((min + max) / 2);
    if (array[guess] === target) return guess;
    if (array[guess] < target) min = guess + 1;
    else if (array[guess] > target) max = guess - 1;
  }
  return -1;
};
```

The running time of such a serach can be expressed as base-2 logarithm of _n_.

> The logarithm function grows very slowly. Logarithms are the inverse of exponentials, which grow very rapidly, so that if log⁡*2n=x then n=2^x . For example, because log*⁡2 128=7 we know that 2^7=128.

> That makes it easy to calculate the runtime of a binary search algorithm on an _n_ that's exactly a power of 2. If _n_ is 128, binary search will require at most 8 (log⁡_2 128+1) guesses.

## Linear v Quadratic

Quadratic time results when we are trying to iterate over each item in the dataset against each item in the dataset. In the example of comparing 6 numbers to find one that can be summed with any to result in a number the run time is (n^2 + n) / 2

A linear time solution in this exact example would be to compare the smallest and largest numbers since the list is ordered that way. A linear algorithim in this manner would be stated as x +yn.

## Big 0 Notation

An official way to determine efficiency of algorithims

Big O notation is written as 0()

Big 0 notation is concerned with how the numbger of steps in an algorithm scales relative to it's input. I.E. Is it linear, exponential or logarithmically scaling?

1. Only concerned with large input.
2. Non dominant terms are of little concern: (n^2+n)/2 just becomes n^2 since that is where the pain point is.
3. Constant terms are also dropped. (n^3)/2 and (n^3)\*2 may be uniquely different but we just express n^3
4. only mention the highest order term. If the algo has n^2 and n^3 we only care about n^3 (read aloud as O n cubed)

O notation is extra useful to JS as it is a high level language. JS has a virtual machine that sometimes optimizes JS code to run fewer operations, so the elementary operations may not be accurate anyways. 0 notation simple talks about how the COMPLEXITY grows moreso than the operaetions themselves.

Examples:

O(1) - constant time (consider ascessing multiple indices of an array the time complexity is just 1 for each index accessed)
O(n) - linear time. Grows relative to input. Another way to say - if we add an input - the complexity will grow by a constant amount.
O(n^2) - directly proportional to the square of the size of the input (quadratic time)
O(log_n) - number of operations is directly proportional to logarithm of the size of the input.
