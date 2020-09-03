// Template Literal

// ----------------->
// Multi-line String
const multiLineString = `Assalamualaikum Wr.Wb.
Selamat Pagi Pak.
Saya hadir dan ingin mengerjakan latihan di Pertemuan 14 ini.

Nama                : Jays Rahman Elfaiz
NIM                    : 191021400083
Kelas / Ruang   : 02TPLM001 / V.506`;
console.log(multiLineString);
// ---------------------------------------------------------->

// --------------------------------->
// Multi-line String (HTML Fragments)
const mlHTMLFragments = {
    nama: 'Jays Rahman Elfaiz',
    nim: '191021400083',
    kelas: '02TPLM001'
};
const mlHTMLFragmentsEx = `<div class="biodata">
<ul>
    <li>${mlHTMLFragments.nama}</li>
    <li>${mlHTMLFragments.nim}</li>
    <li>${mlHTMLFragments.kelas}</li>
</ul>
</div>`;
console.log(mlHTMLFragmentsEx);
// --------------------------------------------->

// ------------------------->
// Embedded Expression
const nama = 'Jays Rahman Elfaiz';
const nim = '191021400083';
const kelas = '02TPLM001';
const embeddedExpression = `Halo guys, nama saya ${nama}, nim saya ${nim}, saya berada di kelas ${kelas}`;
console.log(embeddedExpression);
// ---------------------------------------------------------------------------------------------->

// --------------->
// Expression Interpolation
const a = 5;
const b = 8;
const expressionInterpolation = `${a} + ${b} = ${a + b}`;
console.log(expressionInterpolation);
// ------------------------------------------------------->

// ----->
// Other
function outHey() {
    console.log('oke deh');
}
const alertFunc = `${outHey('Haloooo')}`;

const chooseNum = 7;
const ternaryOp = `${(chooseNum % 2 == 0) ? 'Genap' : 'Ganjil'}`;
console.log(ternaryOp);
// -------------------------------------------------------------->