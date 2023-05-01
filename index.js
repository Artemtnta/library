//----------------------1----------------------//
// function isValidWalk(walk) {
//   let destns = 0;
//   let destwe = 0;
//   if (walk.length == 10) {
//     for (const dir of walk) {
//       if (dir == "n") {
//         destns = destns + 1;
//       } else if (dir == "s") {
//         destns = destns - 1;
//       } else if (dir == "w") {
//         destwe = destwe + 1;
//       } else if (dir == "e") {
//         destwe = destwe - 1;
//       }
//     }
//   } else {
//     return false;
//   }
//   if (destns === 0 && destwe === 0) {
//     return true;
//   }
//   return false;
//}
//----------------------1----------------------//

//----------------------2----------------------//
// function bouncingBall(h, bounce, window) {
//   let a = 0;
//   let b = h;
//   if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
//     while (b > window) {
//       b = b - bounce;
//       a = a + 1;
//     }
//     return a;
//   }
//   return false;
// }
// console.log(bouncingBall(20, 0.5, 1));
//----------------------2----------------------//

//----------------------3----------------------//
// function generateHashtag(str) {
//   let strArr = str.split("");
//   if (strArr.length < 140) {
//     for (let i = 0; i < strArr.length; i++) {
//       str = str.replace(" ", "");
//     }
//     if (str === "") {
//       return false;
//     }
//     return `#${str}`;
//   }
// }
// console.log(generateHashtag("       "));
//----------------------3----------------------//

//----------------------4----------------------//

// function humanReadable(seconds) {
//   let sec = seconds % 60;
//   let min1 = Math.floor(seconds / 60);
//   let hours = Math.floor(min1 / 60);
//   let min2 = min1 % 60;
//   let hoursstr = String(hours).padStart(2, "0");
//   let minstr = String(min2).padStart(2, "0");
//   let secstr = String(sec).padStart(2, "0");
//   let time = [hoursstr, minstr, secstr].join(":");
//   if (seconds > 359999) {
//     time = "99:59:59";
//   }
//   return time;
// }
//console.log(humanReadable(110));

//----------------------4----------------------//

//----------------------5----------------------//
// function solution(str) {
//   let strArr = [...str];
//   let Arr = [];
//   for (let i = 0; i < strArr.length; i++) {
//     let element = [];
//     if (!(i % 2)) {
//       element.push(strArr[i]);
//       if (i + 1 === strArr.length) {
//         element.push("_");
//       } else {
//         element.push(strArr[i + 1]);
//       }
//       Arr.push(element.join(""));
//     }
//   }
//   return Arr;
// }
// console.log(solution("abcdefg"));
//----------------------5----------------------//

//----------------------6----------------------//
// function solution(number) {
//   let sum = 0;
//   for (let i = 0; i < number; i++) {
//     if (!(i % 3) || !(i % 5)) {
//       sum = sum + i;
//     }
//   }
//   return sum;
// }
//----------------------6----------------------//

//----------------------7----------------------//
// function countSmileys(arr) {
//   let counter = 0;
//   for (const face of arr) {
//     if (
//       face === ":-)" ||
//       face === ":-D" ||
//       face === ":~)" ||
//       face === ":~D" ||
//       face === ";-)" ||
//       face === ":-D" ||
//       face === ":~)" ||
//       face === ":-D" ||
//       face === ":)" ||
//       face === ":D" ||
//       face === ";)" ||
//       face === ";D"
//     ) {
//       counter = counter + 1;
//     }
//   }
//   return counter;
// }
//----------------------7----------------------//

//----------------------8----------------------//
// function sumTwoSmallestNumbers(numbers) {
//   numbers.sort(function (a, b) {
//     return a - b;
//   });
//   return numbers[0] + numbers[1];
// }
//----------------------8----------------------//

//----------------------9----------------------//
// const binaryArrayToNumber = (arr) => {
//   return parseInt(arr.join(""), 2);
// };
//----------------------9----------------------//

//----------------------10----------------------//
// function highAndLow(numbers) {
//   const arrNums = numbers.split(" ");
//   arrNums.sort((a, b) => a - b);
//   return `${arrNums.reverse()[0]} ${arrNums.reverse()[0]}`;
// }
//----------------------10----------------------//

//----------------------11----------------------//
// function digitize(n) {
//   return n
//     .toString()
//     .split("")
//     .map((num) => +num)
//     .reverse();
// }
//----------------------11----------------------//

//----------------------12----------------------//
// function getSum(a, b) {
//   if (a === b) {
//     return a;
//   }
//   let Sum = 0;
//   let arr = [a, b];
//   arr.sort((a, b) => a - b);
//   while (arr[0] < arr[1] + 1) {
//     Sum = Sum + arr[0];
//     arr[0] = arr[0] + 1;
//   }
//   return Sum;
// }
//----------------------12----------------------//

//----------------------13----------------------//
// function opposite(number) {
//   return number * -1;
// }
//----------------------13----------------------//

//----------------------14----------------------//
// function basicOp(operation, value1, value2) {
//   let result;
//   switch (operation) {
//     case "+":
//       result = value1 + value2;
//       break;
//     case "-":
//       result = value1 - value2;
//       break;
//     case "*":
//       result = value1 * value2;
//       break;
//     case "/":
//       result = value1 / value2;
//       break;
//   }
//   return result;
// }
//----------------------14----------------------//

//----------------------15----------------------//
// function solution(str) {
//   return str.split("").reverse().join("");
// }
//----------------------15----------------------//

//----------------------16---------------------//
// function squareSum(numbers) {
//   let a = 0;
//   numbers.forEach((element) => {
//     a = a + element * element;
//   });
//   return a;
// }
// console.log(squareSum([1, 3]));
//----------------------16---------------------//

//----------------------17---------------------//
// const uniqueInOrder = function (iterable) {
//   let arr = iterable;
//   let arrCheck = arr;
//   if (typeof arr === "bigint") {
//     arr = bigInt(arr.toString().split(""));
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i + 1, 1);
//     }
//   }
//   if (arr !== arrCheck) {
//     uniqueInOrder(arr);
//   }
//   return arr;
// };
// console.log(uniqueInOrder("AAAAAAAABBBBBBBBBBBBaaaaabbbbb"));
//----------------------17---------------------//

//----------------------18---------------------//
// function descendingOrder(n) {
//   return Number(
//     n
//       .toString()
//       .split("")
//       .sort((a, b) => b - a)
//       .join("")
//   );
// }
// console.log(descendingOrder(5612));
//----------------------18---------------------//

//----------------------19---------------------//
// var beeramid = function (bonus, price) {
//   if (price == 0) {
//     return Infinity;
//   }
//   if (bonus <= 0) {
//     return 0;
//   }
//   let n = Math.floor(bonus / price);
//   let levels = 0;
//   for (let i = 1; n >= 0; i++) {
//     if (n - i * i >= 0) {
//       n = n - i * i;
//       levels++;
//     } else {
//       return levels;
//     }
//   }
// };
// console.log(beeramid(14, 1));
//----------------------19---------------------//
