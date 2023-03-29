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
function sumPairs(ints, s) {
  let arr;
  let pairs = [];
  for (const nums of ints) {
    let num1 = nums;
    arr = ins.filter(function (num) {
      return num !== num1;
    });
    for (const number of arr) {
      if (number + num) {
        pairs.push([]);
      }
    }
  }
}
//----------------------8----------------------//
