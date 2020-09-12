// Opening
console.log('Opening :');
console.log('Dasar Javascript - Bahasa pemrograman tingkat tinggi dan dinamis yang secara umum dapat berjalan pada browser.');
console.log('Javascript - Is a single-threaded, non-blocking, asynchronus and concurrent language.');
console.log('v8 engine heap and stack');
console.log('');
// End of Opening

// Must Remember
console.log('Must Remember');
console.log('http://latenflip.com/loupe/');
console.log('by. Phillip Roberts');
console.log('https://www.youtube.com/watch?v=8aGhZQkoFbQ');
console.log('What the heck is the event loop anyway?');
console.log('- (Heap - [ Stack -> Web API -> Callback Queue -> Event Loop -> Repeat ])');
console.log('');
// End of Must Remember

// Code
console.log('Code :');

// First Code
console.log('> First code');
console.log('satu');
console.log('dua');
console.log('tiga');
// End of First Code

// Second Code
console.log('> Second Code');

function kalikan(a, b) {
    return a * b;
}

function hitungLuas(sisi) {
    return kalikan(sisi, sisi);
}

function cetakLuasKotak(sisi) {
    const luas = hitungLuas(sisi);
    console.log(luas);
}

cetakLuasKotak(5);
// End of Second Code

// Third Code (Asynchronous JS)
console.log('> Third Code (Asynchronous JS)');
console.log('satu');
setTimeout(() => console.log('dua'), 2000)
console.log('tiga');
// End of Third Code

// End of Code