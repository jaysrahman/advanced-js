// For In : Creates a loop only iterating over enumerable (Properti pada object)||
// ==============================================================================
const enumerable = {
    name: "Jays Rahman Elfaiz",
    job: "Web Developer"
}

// ==============================
// Mengulang property dari object ||
// ===========================================

// Cara Ribet
// for (const key in enumerable) {
//     if (enumerable.hasOwnProperty(key)) {
//         const element = key;
//         console.log(element);
//     }
// }

// Cara Gampang
// for (const key in enumerable) {
//     console.log(key);
// }

// ===========================================


// ==============================
// Mengulang value dari object ||
// ===========================================

// Cara Ribet
// for (const key in enumerable) {
//     if (enumerable.hasOwnProperty(key)) {
//         const element = enumerable[key];
//         console.log(element);
//     }
// }

// Cara Gampang
// for (const key in enumerable) {
//     console.log(enumerable[key]);
// }

// ===========================================


// ==============================
// Mengulang property dan value dari object ||
// ===========================================

// Cara Ribet
// for (const key in enumerable) {
//     if (enumerable.hasOwnProperty(key)) {
//         const element = `${key} : ${enumerable[key]}`;
//         console.log(element);
//     }
// }

// Cara Gampang
// for (const key in enumerable) {
//     console.log(`${key} : ${enumerable[key]}`);
// }

// ===========================================