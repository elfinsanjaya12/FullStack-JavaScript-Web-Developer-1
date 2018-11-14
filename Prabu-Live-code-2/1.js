/*
==================================
Array Mastery: Love Me Not
==================================

Nama: Prabu Santoso

[INSTRUKSI]
Seorang perempuan sedang menggalaui apakah seseorang menyukai dia atau tidak. Ketimbang mencabut kelopak bunga untuk menghitung jika dia 
suka atau tidak, perempuan tersebut membuat sebuah program.

Function loveMeNot akan menerima satu parameter berupa array yang berisikan boolean.
Apabila jumlah true dalam array lebih besar dari jumlah false, maka function akan mereturn "HE LOVES ME!". Jika tidak, maka return "HE DOES NOT LOVE ME :(".
Jika jumlah true dan false sama, maka function akan me-return "GALAU".
Mudah bukan? :)

[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/

function loveMeNot(decisions) {
  let kondisiTrue = 0;
  let kondisiFalse = 0;
  for(let i=0; i <= decisions.length-1; i++){
    if (decisions[i] === true){
      kondisiTrue += 1;
    }else if(decisions[i] === false){
      kondisiFalse +=1;
    }
  }
  if (kondisiTrue > kondisiFalse){
    return 'HE LOVES ME!';
  }else if(kondisiTrue < kondisiFalse){
    return 'HE DOES NOT LOVE ME :(';
  }else if(kondisiTrue === kondisiFalse){
    return 'GALAU';
  }
}
  
// TEST CASES
console.log(loveMeNot([true, false, false])); // "HE DOES NOT LOVE ME :("
console.log(loveMeNot([true, true, false, false, true])); // "HE LOVES ME!"
console.log(loveMeNot([true, false])); // "GALAU"
console.log(loveMeNot([])); // "GALAU"
console.log(loveMeNot([false])); // "HE DOES NOT LOVE ME :("

