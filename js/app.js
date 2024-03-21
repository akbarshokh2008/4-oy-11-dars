// 1- MASALA
// let massiv = [2, 3, 4, 5];
// const massivQosh = massiv.map((n) => n ** 2);
// console.log(massivQosh);

// 2- MASALA
// let massiv = [2, -3, -4, 5, -6, 7];
// const massivTop = massiv.filter((n) => n >= 0);
// console.log(massivTop);

// 3- MASALA
// let massiv = [2, [3, 4], 5, 1, [6, 7]];
// const massivTop = massiv.filter((n) => Array.isArray(n));

// console.log(massivTop);

// 4- MASALA
// let massiv = [1, 2, 3, 0, 4, 5, 6];
// const massivJam = massiv.reduce((a, b) => {
//   if (b !== 0) {
//     return a + 1;
//   } else {
//     return a;
//   }
// }, 0);

// console.log(massivJam);

// 6- MASALA
// let arr = [1, 2, 4, 3, 4, 5, 6]; // Test uchun berilgan massiv
// function tekshirish(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// }
// if (tekshirish(arr)) {
//   console.log("ha");
// } else {
//   console.log("yo'q");
// }

// 7- MASALA
// let arr = [1, 2, 4, 3, 4, 5, 6];
// function tekshirish(arr) {
//   let seen = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (seen[arr[i]]) {
//       return true;
//     }
//     seen[arr[i]] = true;
//   }
//   return false;
// }
// if (tekshirish(arr)) {
//   console.log("ha");
// } else {
//   console.log("yo'q");
// }

// 8- MASALA
// function kopaytirish(x, y) {
//   let arr = [];
//   for (let i = 0; i < y; i++) {
//     arr.push(x);
//   }
//   return arr.join(" ");
// }
// console.log(kopaytirish("a", 5));

// 9- MASALA
// let n = +prompt("raqam kiriting");
// let array = [];

// for (let i = 1; i <= n; i++) {
//   array.push("x".repeat(i));
// }

// console.log(array);

// let n = +prompt("raqam kiriting");
// let massiv = [];

// for (let i = 1; i <= n; i++) {
//   let element = "";
//   for (let j = 0; j < i; j++) {
//     element += i;
//   }
//   massiv.push(element);
// }

// console.log(massiv);
