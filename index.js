// Q1. Write a JavaScript program to construct the following pattern, using a nested for loop.
//__
//____
//______
//________
//__________

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "_";
  }
  console.log(pattern);
}

// Q2. Iterate through all numbers from 1 to 45. Print the following:

//    For multiples of 3 print “Fizz”
//    For multiples of 5 print “Buzz”
//    For multiples of 3 and 5 print “FizzBuzz”

for (let i = 0; i <= 45; i++) {
  switch (true) {
    case i % 3 == 0:
      console.log("fizz");

    case i % 5 == 0:
      console.log("Buzz");

    case i % 3 == 0 && i % 5 == 0:
      console.log("fizzBuzz");

    default:
      console.log(i);
      break;
  }
}

// Q3. Calculate the sum of all the numbers in the following array

var arr = [1, 13, 22, 123, 49];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

// Q4.Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < arr_1.length; i++) {
  sum1 += arr_1[i];
}

for (let j = 0; j < arr_2.length; j++) {
  sum2 += arr_2[j];
}
const totalSum = sum1 + sum2;
console.log(totalSum);

//  Example output:
//  276 + 351 = 627

// Q5.Using a for loop output the elements in reverse order

let arr2 = [43, "what", 9, true, "cannot", false, "be", 3, true];
for (let i = arr2.length; i >= 0; i--) {
  console.log(arr2[i]);
}

//   Example output:
//   true 3.5  be  false cannot  true 9 what 43 OR each item   on a new line
