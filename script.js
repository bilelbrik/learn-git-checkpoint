/* 1. STRING MANIPULATION */

// Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // "olleh"

// Count Characters
function countCharacters(str) {
  return str.length;
}
console.log(countCharacters("hello")); // 5

// Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello world")); // "Hello World"

/* 2. ARRAY FUNCTIONS */

// Find Maximum
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([3, 8, 1, 5])); // 8

// Find Minimum
function findMin(arr) {
  return Math.min(...arr);
}
console.log(findMin([3, 8, 1, 5])); // 1

// Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4])); // 10

// Filter Array
function filterArray(arr, condition) {
  return arr.filter(condition);
}
console.log(filterArray([1, 2, 3, 4, 5], (num) => num > 3));
// [4, 5]

/* 3. MATHEMATICAL FUNCTIONS */

// Factorial
function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    return "Enter a non-negative integer";
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
console.log(factorial(5));

// Prime Number Check
function isPrime(n) {
  if (n < 2 || !Number.isInteger(n)) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}
console.log(isPrime(7));
console.log(isPrime(10));

// Fibonacci Sequence
function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Enter a non-negative integer";
  }

  const sequence = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }

  return sequence;
}
console.log(fibonacci(7));
