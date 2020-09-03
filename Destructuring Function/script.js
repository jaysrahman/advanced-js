// --> Destructuring function return value <--

// Dasar ===================================
// function destructFund(a, b) {
//     return [a + b, a - b];
// }

// const [tambah, kurang] = destructFund(3, 2);
// console.log(tambah);
// =========================================

// Banyak ===================================
// function destructFund(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const [tambah, kurang, kali, bagi] = destructFund(3, 2);
// console.log(bagi);
// =========================================

// Nilai Default ========================================================
// function destructFund(a, b) {
//     return [a + b, a - b, a * b];
// }

// const [tambah, kurang, kali, bagi = "Tidak Ada"] = destructFund(3, 2);
// console.log(bagi);
// ======================================================================

// Array harus urut walaupun cuma nama ==================================
// function destructFund(a, b) {
//     return [a + b, a - b, a * b];
// }

// const [kurang, tambah, kali, bagi = "Tidak Ada"] = destructFund(3, 2);
// console.log(kurang);
// ======================================================================

// Kalo mau gak urut return valuenya pake object ========================
// function destructFund(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     };
// }

// const {
//     tambah,
//     kurang,
//     kali,
//     bagi = "Tidak Ada"
// } = destructFund(3, 2);
// console.log(kurang);
// ======================================================================


// --> Destructuring function arguments <--

// menggunakan kurung kurawal untuk membungkus pada argument function =====
// const bio = {
//     name: 'Jays Rahman Elfaiz',
//     score: {
//         exercise: 90,
//         uts: 85,
//         uas: 95
//     }
// }

// function bioSaid({
//     name
// }) {
//     return `Halo, Nama saya ${name}`;
// }

// console.log(bioSaid(bio));
// ========================================================================

// Jika bersarang maka menggunakan titik dua lalu kurung kurawal lagi didalamnya ======================
// const bio = {
//     name: 'Jays Rahman Elfaiz',
//     score: {
//         exercise: 90,
//         uts: 85,
//         uas: 95
//     }
// }

// function bioSaid({
//     name,
//     score: {
//         exercise,
//         uts,
//         uas
//     }
// }) {
//     return `Halo, Nama saya ${name}, nilai tugas saya adalah ${exercise}, uts ${uts}, dan uas ${uas}`;
// }

// console.log(bioSaid(bio));
// ===================================================================================================