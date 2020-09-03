// for..of ||
// =========

// Iterables
// (Array, String, Node List, Arguments, Typed Array, Map, Set)
// ===========================================================================================================

// ========
// Array ||
// ====================================================================================
const array = ["Jays Rahman Elfaiz", "191021400083", "02TPLM001"];

// Menampilkan string dari array **************

// - Menggunakan for biasa
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// - Menggunakan forEach
// array.forEach(element => {
//     console.log(element);
// });

// - Menggunakan for..of
// for (const iterator of array) {
//     console.log(iterator);
// }

// *******************************************

// Menampilkan value dan index ************************

// - Menggunakan forEach
// array.forEach((value, index) => {
//     console.log(`${index + 1}. ${value}`);
// });

// - Ngakalin ngambil value dan index dari array
//   menggunakan for...of dengan method entries(),
//   dengan mendestructure array nya
// for (const [index, iterator] of array.entries()) {
//     console.log(`${index + 1}. ${iterator}`);
// }

// ***************************************************
// ====================================================================================

// =========
// String ||
// ====================================================================================
const string = "Jays Rahman Elfaiz";

// Menampilkan per huruf dari string **************

// - Menggunakan for..of
// for (const iterator of string) {
//     console.log(iterator);
// }

// *******************************************
// Catatan : - forEach khusus digunakan untuk mengulang array,
//             jadi tidak bisa digunakan untuk string
// ====================================================================================

// ===========
// NodeList ||
// ====================================================================================
const nodeList = document.querySelectorAll(".nodeList");

// Mengambil string dari nodeList li dari html **************

// - Menggunakan forEach
// nodeList.forEach(element => {
//     console.log(element.textContent);
// });

// - Menggunakan for..of
// for (const iterator of nodeList) {
//     console.log(iterator.textContent);
// }

// *******************************************
// Catatan : - Jika menggunakan browser versi terbaru maka bisa
//             menggunakan forEach untuk mengulang nodeList
// ====================================================================================

// ============
// Arguments ||
// ====================================================================================

// Menjumlahkan value **************

// - Menggunakan array dengan reduce
// function arguments() {
//     return [6, 7, 8, 9, 10].reduce((previousValue, currentValue) => previousValue += currentValue);
// }
// console.log(arguments());

// - Menggunakan array dengan forEach
// function arguments() {
//     let arg = 0;
//     [6, 7, 8, 9, 10].forEach(element => {
//         arg += element;
//     });
//     return arg;
// }
// console.log(arguments());

// - Menggunakan for..of untuk arguments
// function arguments() {
//     let arg = 0;
//     for (const iterator of arguments) {
//         arg += iterator;
//     }
//     return arg;
// }
// console.log(arguments(1, 2, 3, 4, 5));

// *******************************************
// Catatan : - Arguments != Array
//           - Arguments tidak bisa diulang dengan reduce dan forEach, 
//             forEach dan reduce bisa digunakan untuk array
// ====================================================================================