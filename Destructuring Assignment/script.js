// --> Array <------------------------------|

// Destructing array awal dasar ==>
// const arr = [1, 2];
// const [a, b] = arr;
// console.log(a);
// ==============================>

// Skipping Items ==========>
// const arr = [1, 2, 3, 4];
// const [a, , , d] = arr;
// console.log(d);
// ========================>

// Swap Items =====>
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);
// ===============>

// Return value pada function ==>
// function dest() {
//     return [1, 2];
// }
// const [a, b] = dest();
// console.log(a);
// ============================>

// Rest parameter ============>
// const arr = [1, 2, 3, 4];
// const [a, ...values] = arr;
// console.log(values);
// ==========================>

// ----------------------------------------|


// --> Object <--

// Destructuring object awal dasar ==>
// const obj = {
//     nickname: 'Jays',
//     job: 'Web Developer'
// };
// const {
//     nickname,
//     job
// } = obj;
// console.log(nickname);
// =================================>

// Assignment tanpa deklarasi object ==>
// ({
//     nickname,
//     job
// } = {
//     nickname: 'Jays',
//     job: 'Web Developer'
// });
// console.log(job);
// ===================================>

// Assign ke variable baru ==>
// Ex 1----------------
// const obj = {
//     nickname: 'Jays',
//     job: 'Web Developer'
// };
// const {
//     nickname: n,
//     job: j
// } = obj;
// console.log(n);
// --------------------
// Ex 2-----------------
// ({
//     nickname: n,
//     job: j
// } = {
//     nickname: 'Jays',
//     job: 'Web Developer'
// });
// console.log(j);
// ---------------------
// =========================>

// Memberikan default value =>
// Ex 1----------------
// const obj = {
//     nickname: 'Jays',
//     job: 'Web Developer'
// };
// const {
//     nickname,
//     job,
//     email = 'email@default.com'
// } = obj;
// console.log(email);
// --------------------
// Ex 2-----------------
// ({
//     nickname,
//     job,
//     email = 'email@default.com'
// } = {
//     nickname: 'Jays',
//     job: 'Web Developer'
// });
// console.log(email);
// ---------------------
// =========================>

// Memberi nilai default + assign ke variable baru ==>
// Ex 1----------------
// const obj = {
//     nickname: 'Jays',
//     job: 'Web Developer'
// };
// const {
//     nickname,
//     job,
//     email: e = 'email@default.com'
// } = obj;
// console.log(e);
// --------------------
// Ex 2-----------------
// ({
//     nickname,
//     job: j,
//     email: e = 'email@default.com'
// } = {
//     nickname: 'Jays',
//     job: 'Web Developer'
// });
// console.log(e);
// ---------------------
// =========================>

// Rest parameter ==>
// Ex 1----------------
// const obj = {
//     nickname: 'Jays',
//     job: 'Web Developer',
//     email: 'jaisjezz41@gmail.com'
// };
// const {
//     nickname,
//     ...values
// } = obj;
// console.log(values);
// --------------------
// Ex 2-----------------
// ({
//     nickname,
//     ...values
// } = {
//     nickname: 'Jays',
//     job: 'Web Developer',
//     email: 'jaisjezz41@gmail.com'
// });
// console.log(values);
// ---------------------
// =========================>

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function ==>
// Ex 1----------------
// const obj = {
//     nickname: 'Jays',
//     job: 'Web Developer',
//     email: 'jaisjezz41@gmail.com'
// };

// function objFun({
//     job,
//     nickname
// }) {
//     return nickname;
// }
// console.log(objFun(obj));
// --------------------
// Ex 2-----------------
const obj = {
    nickname: 'Jays',
    job: 'Web Developer',
    email: 'jaisjezz41@gmail.com'
};

function objFun({
    job,
    ...values
}) {
    return values;
}
console.log(objFun(obj));
// ---------------------
// =========================>