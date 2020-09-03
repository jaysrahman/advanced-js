// // Without Arrow Function
// const onePiece = function (name) {
//     return `${name} : I Wanna be a pirate king`;
// }
// console.log(onePiece('Luffy'));

// // With Arrow Function 
// const onePiece = (name) => {
//     return `${name} : I Wanna be a pirate king`;
// }
// console.log(onePiece('Luffy'));

// // With Arrow Function (Implisit Return, One Line and One Parameter)
// const onePiece = name => `${name} : I Wanna be a pirate king`
// console.log(onePiece('Luffy'));

// // With Arrow Function (Implisit Return, One Line and Without Parameter)
// const onePiece = () => `Luffy : I Wanna be a pirate king`
// console.log(onePiece());

// // With Arrow Function (Implisit Return, One Line and Two Parameter)
// const onePiece = (name, slogan) => ({
//     name, // In ES6 you can just type the name if his text is same
//     slogan: slogan
// })
// console.table(onePiece('Luffy', 'I Wanna be a pirate king'));
// console.table(onePiece('Zoro', 'I Wanna be a king of sword'));

// // This in Arrow Function
// const onePiece = {
//     name: 'Luffy',
//     role: 'Captain',
//     job: () => {
//         console.log(this.name); // this akan mengembalikan windows
//     }
// }

// // This in Arrow Function (Case Before - This call windows)
// const onePiece = function () {
//     name = 'Luffy'
//     age = 20,
//         setInterval(function () {
//             console.log(this);
//         }, 500);
// }
// onePiece();

// const luffy = new onePiece();

// // This in Arrow Function (Case After - This call onePiece)
// const onePiece = () => {
//     name = 'Luffy'
//     age = 20,
//         setInterval(() => {
//             console.log(this.age++);
//         }, 500);
// }
// onePiece();

// // This in Arrow Function (Case Box)
// const box = document.querySelector('.box');
// box.addEventListener('click', function () {
//     let satu = 'size';
//     let dua = 'caption';
//     if (this.classList.contains(satu)) {
//         // temp = satu;
//         // satu = dua;
//         // dua = temp;
//         [satu, dua] = [dua, satu];
//     }
//     this.classList.toggle(satu);
//     setTimeout(() => {
//         this.classList.toggle(dua);
//     }, 600);
// });