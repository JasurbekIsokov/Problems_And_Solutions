"use script";

// // Issue 1:

// let number = Number(prompt("Enter a Number"));

// if (number > 0) {
//   number += 1;
// }

// console.log(number);

// // --------------------------------------------------

// // Issue 2:

// let number = Number(prompt("Enter a Number"));

// if (number > 0) {
//   number += 1;
// } else if (number < 0) {
//   number -= 2;
// }

// console.log(number);

// --------------------------------------------------

// Issue 3:

// let number = Number(prompt("Enter a Number"));

// if (number > 0) {
//   number += 1;
// } else if (number < 0) {
//   number -= 2;
// } else {
//   number = 10;
// }

// console.log(number);

// --------------------------------------------------

// Issue 4:

// let number1 = Number(prompt("Enter a Number A A!=0"));
// let number2 = Number(prompt("Enter a Number B B!=0"));
// let number3 = Number(prompt("Enter a Number C C!=0"));

// let musbatSum;

// if (number1 > 0 && number2 > 0 && number3 > 0) {
//   musbatSum = 3;
// } else if (number1 > 0 && number2 > 0 && number3 < 0) {
//   musbatSum = 2;
// } else if (number1 > 0 && number2 < 0 && number3 > 0) {
//   musbatSum = 2;
// } else if (number1 < 0 && number2 > 0 && number3 > 0) {
//   musbatSum = 2;
// } else if (number1 > 0 && number2 < 0 && number3 < 0) {
//   musbatSum = 1;
// } else if (number1 < 0 && number2 > 0 && number3 < 0) {
//   musbatSum = 1;
// } else if (number1 < 0 && number2 < 0 && number3 > 0) {
//   musbatSum = 1;
// } else {
//   musbatSum = 0;
// }

// console.log(musbatSum);

// --------------------------------------------------

// Issue 5:

// let number1 = Number(prompt("Enter a Number A A!=0"));
// let number2 = Number(prompt("Enter a Number B B!=0"));
// let number3 = Number(prompt("Enter a Number C C!=0"));

// let musbatSum;
// let manfiySum;

// if (number1 > 0 && number2 > 0 && number3 > 0) {
//   musbatSum = 3;
//   manfiySum = 0;
// } else if (number1 > 0 && number2 > 0 && number3 < 0) {
//   musbatSum = 2;
//   manfiySum = 1;
// } else if (number1 > 0 && number2 < 0 && number3 > 0) {
//   musbatSum = 2;
//   manfiySum = 1;
// } else if (number1 < 0 && number2 > 0 && number3 > 0) {
//   musbatSum = 2;
//   manfiySum = 1;
// } else if (number1 > 0 && number2 < 0 && number3 < 0) {
//   musbatSum = 1;
//   manfiySum = 2;
// } else if (number1 < 0 && number2 > 0 && number3 < 0) {
//   musbatSum = 1;
//   manfiySum = 2;
// } else if (number1 < 0 && number2 < 0 && number3 > 0) {
//   musbatSum = 1;
//   manfiySum = 2;
// } else {
//   musbatSum = 0;
// }

// console.log(`Musbat Number: ${musbatSum}, Manfiy Number: ${manfiySum}`);

// --------------------------------------------------

// Issue 6:

// let number1 = Number(prompt("Enter a Number A"));
// let number2 = Number(prompt("Enter a Number B"));

// let maxNum;

// if (number1 > number2) {
//   maxNum = `Max Number: ${number1}`;
// } else if (number1 === number2) {
//   maxNum = "A = B";
// } else {
//   maxNum = `Max Number: ${number2}`;
// }

// console.log(maxNum);

// // --------------------------------------------------

// // Issue 7:

// let number1 = Number(prompt("Enter a Number A"));
// let number2 = Number(prompt("Enter a Number B"));

// let maxNum;

// if (number1 > number2) {
//   maxNum = `Min Number: ${number2} || Sort Number 2`;
// } else if (number1 === number2) {
//   maxNum = "A = B";
// } else {
//   maxNum = `Min Number: ${number1} || Sort Number 1`;
// }

// console.log(maxNum);

// // --------------------------------------------------

// // Issue 8:

// let number1 = Number(prompt("Enter a Number A"));
// let number2 = Number(prompt("Enter a Number B"));

// let maxNum;

// if (number1 > number2) {
//   maxNum = `Max Number: ${number1}, Min Number: ${number2}`;
// } else if (number1 === number2) {
//   maxNum = "A = B";
// } else {
//   maxNum = `Max Number: ${number2}, Min Number: ${number1}`;
// }

// console.log(maxNum);

// --------------------------------------------------

// Issue 9:

// let a = Number(prompt("Enter a Number A"));
// let b = Number(prompt("Enter a Number B"));

// let maxNum;
// let minNum;

// if (a === b) {
//   maxNum = "A = B";
// } else if (a > b) {
//   maxNum = a;
//   minNum = b;
// } else {
//   maxNum = a;
//   minNum = b;
// }

// console.log(`a = ${(a = minNum)}; b = ${(b = maxNum)}`);
// console.log(a, b);

// // --------------------------------------------------

// // Issue 10:

// let a = Number(prompt("Enter a Number A"));
// let b = Number(prompt("Enter a Number B"));

// let sumNum;

// if (a !== b) {
//   sumNum = a + b;
// } else {
//   sumNum = 0;
// }

// console.log(`a = ${(a = sumNum)}; b = ${(b = sumNum)}`);
// console.log(a, b);

// // --------------------------------------------------

// // Issue 11:

// let a = Number(prompt("a="));
// let b = Number(prompt("b="));

// if (a !== b) {
//   if (a < b) a = b;
//   else b = a;
// } else {
//   a = 0;
//   b = 0;
// }

// console.log(a, b);

// // --------------------------------------------------

// // // Issue 12:

// let a = Number(prompt("a="));
// let b = Number(prompt("b="));
// let c = Number(prompt("c="));

// let minNumber;

// if (a < b && a < c) {
//   minNumber = a;
// } else if (b < a && b < c) {
//   minNumber = b;
// } else if (c < a && c < b) {
//   minNumber = c;
// } else if (b === a && a < c) {
//   minNumber = a;
// } else if (b === c && c < a) {
//   minNumber = c;
// } else if (c === a && a < b) {
//   minNumber = a;
// } else {
//   minNumber = "3 ta son ham teng";
// }

// console.log(minNumber);

// --------------------------------------------------

// Issue 13:

// let a = Number(prompt("a="));
// let b = Number(prompt("b="));
// let c = Number(prompt("c="));

// let midleNumber;

// if (a > b && a < c) {
//   midleNumber = a;
// } else if (a < b && a > c) {
//   midleNumber = a;
// } else if (b > a && b < c) {
//   midleNumber = b;
// } else if (b < a && b > c) {
//   midleNumber = b;
// } else if (c > a && c < b) {
//   midleNumber = c;
// } else if (c < a && c > b) {
//   midleNumber = c;
// } else {
//   midleNumber = "kiritilgan sonlarning kamida 2 tasi teng";
// }

// console.log(midleNumber);

// --------------------------------------------------

// Issue 14:

// let a = Number(prompt("a="));
// let b = Number(prompt("b="));
// let c = Number(prompt("c="));

// let minNumber;
// let maxNumber;

// if (a < b && b < c) {
//   minNumber = a;
//   maxNumber = c;
// } else if (b < a && a < c) {
//   minNumber = b;
//   maxNumber = c;
// } else if (c < a && a < b) {
//   minNumber = c;
//   maxNumber = b;
// } else if (a < c && c < b) {
//   minNumber = a;
//   maxNumber = b;
// } else if (b < c && c < a) {
//   minNumber = b;
//   maxNumber = a;
// } else if (c < b && b < a) {
//   minNumber = c;
//   maxNumber = a;
// } else if (a > b && b == c) {
//   minNumber = b;
//   maxNumber = a;
// } else if (b > a && a == c) {
//   minNumber = a;
//   maxNumber = b;
// } else if (c < a && a == b) {
//   minNumber = b;
//   maxNumber = c;
// } else {
//   maxNumber = a;
//   minNumber = a;
// }

// console.log(minNumber, maxNumber);

// --------------------------------------------------

// Issue 15:

let a = Number(prompt("a="));
let b = Number(prompt("b="));
let c = Number(prompt("c="));

let maxNumber1;
let maxNumber2;

if (a < b && a < c) {
  maxNumber1 = b;
  maxNumber2 = c;
} else if (b < a && b < c) {
  maxNumber1 = a;
  maxNumber2 = c;
} else if (c < a && c < b) {
  maxNumber1 = a;
  maxNumber2 = b;
} else if (b === a && a < c) {
  maxNumber1 = c;
  maxNumber2 = b;
} else if (b === c && c < a) {
  maxNumber1 = a;
  maxNumber2 = b;
} else if (c === a && a < b) {
  maxNumber1 = a;
  maxNumber2 = b;
} else {
  maxNumber1 = "3 ta son ham teng";
}

console.log(maxNumber1, maxNumber2);
