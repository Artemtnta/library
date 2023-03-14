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
