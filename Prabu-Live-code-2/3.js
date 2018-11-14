/*
==================================
Array Mastery: Pair Up
==================================

Nama:________

[INSTRUKSI]
Setiap student ditugaskan untuk membuat tim project dengan komposisi tim dua orang.
Kita membutuhkan sebuah program untuk membuat tim-tim tersebut.

Function pairUp akan menerima satu parameter berupa array yang berisi string nama student.
Function ini akan mengelompokkan setiap dua nama menjadi satu kelompok, dan apabila tersisa satu student, student terakhir akan bersama instruktur.
Hasil pengelompokkan adalah sebuah array yang berisi string berupa nama dua orang student sebagai satu tim.
Formatnya adalah <Nama Student 1> dan <Nama Student 2>.
[CONTOH]
input: ['Budi', 'Badu', 'Indra', 'Indri']
output: ['Budi dan Badu', 'Indra dan Indri']

input: ['Budi', 'Badu', 'Indra', 'Indri', 'James']
output: ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']

input: []
output: []

[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!
*/


function pairUp(students) {
  // Code here
let arrayKosong = [];
let tambahan = '';
  for (let i=0; i<=students.length-1; i+=2){
    if (students[i+1]===undefined){
      tambahan = students[i]+' dan Instruktur';
      arrayKosong.push(tambahan);
    }else{
      tambahan = students[i]+' dan '+students[i+1];
      arrayKosong.push(tambahan);
    }
  }
    return arrayKosong;
}
  
// TEST CASES
console.log(pairUp(['Budi', 'Badu'])); // ['Budi dan Badu']
console.log(pairUp(['Budi'])); // ['Budi dan Instruktur']
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri'])); // ['Budi dan Badu', 'Indra dan Indri']
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri', 'James'])); // ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
console.log(pairUp([])); // []
