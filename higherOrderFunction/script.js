// =====================
// Higher Order Function
// =====================
// Abstraksi =  Membuat kode yang kita buat jadi lebih
//              simple, Karena ketika kita mengguanakan 
//              function kita menyembunyikan kerumitan.
// Semakin simple programnya, semakin kecil ada kesalahan didalamnya

// // ----------
// // Contoh 1 |
// // --------------------------------------------------------
// function kerjakanTugas(matakuliah, selesai) {
//     console.log(`Selamat mengerjakan tugas ${matakuliah}`);
//     selesai();
// }

// function selesai() {
//     alert('Terimakasih sudah mengerjakan tugas');
// }

// kerjakanTugas('Web Programming', selesai);
// // --------------------------------------------------------

// // ----------
// // Contoh 2 |
// // ----------------------------------
// function angka() {
//     a = 1;
//     setInterval(() => {
//         if (a != 'selesai') {
//             console.log(this.a++);
//             if (this.a === 11) {
//                 return a = 'selesai';
//             }
//         }
//     }, 1000);
// }
// angka();
// setTimeout(() => {
//     console.log('Yeay 10 detik');
// }, 10000);
// // ----------------------------------

// // ----------
// // Contoh 3 |
// // ------------------------------------------------
// const contoh3 = document.querySelector('.contoh3');
// contoh3.addEventListener('click', function () {
//     console.log('Tombol Contoh 3 ditekan');
// })
// // ------------------------------------------------

// // ----------
// // Contoh 4 |
// // ---------------------------------------------
// function selamat(aksi) {
//     return function (nama) {
//         console.log(`Selamat ${aksi}, ${nama}`);
//     }
// }
// let nama = selamat('Makan');
// nama('Jays');
// // ---------------------------------------------

// // ----------
// // Contoh 5 |
// // -------------------------------
// // // Before HOF
// let total = 0,
//     count = 1;
// while (count <= 10) {
//     total += count;
//     count++;
// }
// console.log(total);

// // // After HOF
// function sum(range) {
//     function range(c, b) {
//         let total = 0,
//             count = c;
//         while (count <= b) {
//             total += count;
//             count++;
//         }
//     }
// }
// console.log(sum(range(1, 10)));
// // -------------------------------

// ----------
// Contoh 6 |
// --------------------------------------
// // Before HOF
// for (let i = 0; i < 10; i++) {
//     console.log(i);

// }

// // After HOF
// function forResult(index, action) {
//     for (let i = 0; i < index; i++) {
//         action(i);
//     }
// }
// forResult(10, console.log);
// forResult(3, alert);
// --------------------------------------


// ==============================================
// Higher Order Function : Filter, Map dan Reduce
// ==============================================

// // --------
// // Filter |
// // ---------------------------------------------
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// // // With For
// // const angkaNew = [];
// // for (let i = 0; i < angka.length; i++) {
// //     if (angka[i] >= 3) {
// //         angkaNew.push(angka[i]);
// //     }
// // }
// // console.log(angkaNew);

// // // With Filter
// // const angkaNew = angka.filter(function (a) {
// //     return a >= 3;
// // });
// // console.log(angkaNew);

// // // With Filter (Arrow Function)
// // const angkaNew = angka.filter(a => a >= 3);
// // console.log(angkaNew);
// // ---------------------------------------------

// // -----
// // Map |
// // ---------------------------------------------
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// // // With Map (Arrow Function)
// const angkaNew = angka.map(a => a * 2);
// console.log(angkaNew);
// // ---------------------------------------------

// // --------
// // Reduce |
// // ---------------------------------------------
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// // // With Reduce (Arrow Function)
// // 0 => initialValue , -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const angkaNew = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(angkaNew);
// // ---------------------------------------------

// // ----------------------------
// // Method Chaining (Berantai) |
// // ---------------------------------------------
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// // // Arrow Function
// const angkaNew = angka.filter(a => a > 5).map(a => a * 3).reduce((acc, curr) => acc + curr, 0);
// console.log(angkaNew);
// // ---------------------------------------------