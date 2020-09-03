// Tagged Templates
const name = 'Jays Rahman Elfaiz';
const nickname = 'Jays';
const age = 19;
const address = 'Jl. Bumi Mentari Mas, Blok k2/2, Rt 04/13, Pondok Petir, Bojongsari, Depok';

function bioFun(strings, ...values) {
    return strings.reduce((result, string, i) => `${result}${string}<span class="hl">${values[i] || ''}</span>`, '');
}

const bio = bioFun `Halo, nama saya ${name}, biasa dipanggil ${nickname}, saya berumur ${age} tahun, alamat lengkap saya adalah ${address}`;
document.querySelector('.tt').innerHTML = bio;

// Sanitize
function sanitize(strings, ...values) {
    const dirty = strings.reduce((prev, next, i) => `${prev}${next}${values[i] || ''}`, '');
    console.log(dirty);
    console.log(aboutMe);
    return DOMPurify.sanitize(aboutMe);
}

const name2 = 'petyr baelish';
const aboutMe = `I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('I hacked you. Haha');" />`;

const html = sanitize `
    <h3>${name2}</h3>
    <p>${aboutMe}</p>
  `;
document.querySelector('.s').innerHTML = html;