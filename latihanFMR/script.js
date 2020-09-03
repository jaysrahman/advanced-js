// // =================>> Jays <<=================== //
// // --> Jumlah Video
// const video = Array.from(document.querySelectorAll("li[data-duration]")); // Array.form : untuk mengubah menjadi array

// // // > ForEach
// // const jumlahVideo = [];
// // video.forEach(function (liText) {
// //     if (liText.outerText.includes("JAVASCRIPT LANJUTAN")) {
// //         jumlahVideo.push(liText.outerText);
// //     }
// // });

// // // > filter (Without Arrow Function)
// // const jumlahVideo = video.filter(function (a) {
// //     if (a.outerText.includes("JAVASCRIPT LANJUTAN")) {
// //         return a.outerText;
// //     }
// // });

// // > filter (With Arrow Function)
// const jumlahVideo = video.filter(a => a.outerText.includes("JAVASCRIPT LANJUTAN"));

// let hasilJumlahVideo = document.querySelector('.jumlah-video');
// hasilJumlahVideo.innerHTML = jumlahVideo.length + " Video.";

// // --> Total Durasi
// const totalDurasi = [];
// video.forEach(function (liText) {
//     if (liText.outerText.includes("JAVASCRIPT LANJUTAN")) {
//         totalDurasi.push(liText.dataset.duration);
//     }
// });

// const oldMenit = [];
// const oldDetik = [];
// totalDurasi.forEach(function (a) {
//     oldMenit.push(parseInt(a.split(":")[0]));
//     oldDetik.push(parseInt(a.split(":")[1]));
// })
// // console.log(menit);
// // console.log(detik);
// const newDetik = oldDetik.reduce((prev, curr) => prev + curr);
// const newMenit = oldMenit.map(a => a * 60).reduce((prev, curr) => prev + curr, newDetik);

// let jam = 0,
//     menit = 0,
//     detik = newMenit,
//     sisa = 0;

// jam = detik / 3600;
// sisa = detik % 3600;
// menit = sisa / 60;
// sisa = sisa % 60;

// let hasilTotalDurasi = document.querySelector('.total-durasi');
// hasilTotalDurasi.innerHTML = Math.floor(jam) + " Jam, " + Math.floor(menit) + " Menit, " + Math.floor(sisa) + " Detik.";
// // =====================================================================================================================


// =================>> Sandika Galih <<=================== //
// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya yang JavaScript lanjutan
let jsLanjut = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN"))

    // Ambil durasi masing-masing video
    .map(item => item.dataset.duration)

    // Ubah durasi menjadi flot, ubah menit menjadi detik
    .map(waktu => {
        const parts = waktu.split(":").map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

    // Jumlahkan semua detik
    .reduce((total, detik) => total + detik);

// Ubah formatnya jadi jam, menit dan detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// Simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlVideo = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`;