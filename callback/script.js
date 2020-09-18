// Callback
console.log('Callback');
console.log('- Function yang dikirimkan sebagai parameter pada function yang lain -moz');
console.log('- Function yang dieksekusi setelah function lain selesai dijalankan ');
console.log('');

// Try
console.log('Try');
// Synchronous Callback
console.log('- Synchronous Callback - Normal code');
function halo1(nama) {
    alert(`Halo, nama saya ${nama}`);
}
function tampilkanPesan1(callback1) {
    const nama = prompt(`Masukkan Nama : `);
    callback1(nama);
}
console.log('NB : Run the execute function code behind this, and see an outuput in browser');
// Run to execute here
// tampilkanPesan1(halo1);
console.log('- Synchronous Callback - Arrow function');
function tampilkanPesan2(callback2) {
    const nama = prompt(`Masukkan Nama : `);
    callback2(nama);
}
console.log('NB : Run the execute function code behind this, and see an outuput in browser');
// Run to execute
// tampilkanPesan2(nama => alert(`Halo, nama saya ${nama}`) );
console.log('- Make an array with datas');
const datas = [
    {
        'id':1,
        'name':'Jays Rahman Elfaiz',
        'nim':191021400083,
        'class':'02TPLM001'
    },
    {
        'id':2,
        'name':'Elrahman Faiz',
        'nim':191021400085,
        'class':'02TPLM001'
    }
];
console.log(datas);
console.log('mulai');
datas.forEach(data => {
    // Run to execute
    // for (let index = 0; index < 10000000; index++) {
    //     let date = new Date;
    // } 
    console.log(data.name)
});
console.log('selesai');

// Asynchronous
console.log('- Asynchronous');
console.log('(With Vanilla JS)');

console.log('NB : Run the code in text editor');
// function ajaxNative(url, success, error) {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState == 4) {
//             if (xhr.status == 200) {
//                 success(xhr.response);
//             } else if (xhr.status == 404) {
//                 error(xhr.responseText);
//             }
//         }
//     };
//     xhr.open(`GET`, url);
//     xhr.send();   
// }

// function error() {
    
// }

// console.log('start');
// ajaxNative(`data.json`, results => {
//     const datas = JSON.parse(results);
//     datas.forEach(data => console.log(data.name));
// }, results => console.log(results));
// console.log('end');

console.log('(With Ajax - jQuery)');

console.log('NB : Run the code in text editor');
// console.log('start');
// $.ajax({
//     url:'data.json',
//     success: (result) => { result.forEach(data => console.log(data.name)); },
//     error: (e) => console.log(e.responseText)
// });
// console.log('end');

