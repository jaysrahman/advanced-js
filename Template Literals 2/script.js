function subjects(semester) {
    if (semester == 2) {
        return ['Algoritma dan Pemrograman 2', 'Komunikasi Data', 'Lab Algoritma'];
    } else if (semester == 6) {
        return ['Rekayasa Web', 'Database dan Struktur'];
    } else if (semester == 4) {
        return ['Logika Informatika', 'Struktur Elektronika'];
    }
}


const students = [{
        name: 'Jays Rahman Elfaiz',
        nim: '191021400083',
        class: '02TPLM001',
        subjects: `${subjects(2)}`

    },
    {
        name: 'Muhammad Alkatiri',
        nim: '191039294929',
        class: '04TPLM013',
        subjects: `${subjects(4)}`
    },
    {
        name: 'Chika Nabila Husnyyah',
        nim: '191011402149',
        class: '02TPLM012',
        subjects: `${subjects(2)}`
    },
    {
        name: 'Harris Ramadan',
        nim: '161054372987',
        class: '06TPLM013',
        subjects: `${subjects(6)}`
    }
];

function studentsFunc() {
    func = students.map(student => `<tr>
    <td>${student.name}</td>
    <td>${student.nim}</td>
    <td>${student.class}</td>
    <td>${student.subjects}</td>
    </tr>`).join('');
    return func;
}

studentsTable = `<div class="students">
    <h1>Student's Bio</h1>
    <table border="1">
    <tr>
        <td>Name</td>
        <td>NIM</td>
        <td>Class</td>
        <td>Subjects</td>
    </tr>
        ${studentsFunc()}
    </table>
</div>`;

document.body.innerHTML = studentsTable;