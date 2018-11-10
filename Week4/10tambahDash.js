function tambahDash(str) {
// you can only write your code here!
  var indexDash = '';
  
  for(var i = 0; i < str.length; i ++) {
//console.log(str[i]);
//pengecekan angka ganjil setelah angka ganjil dan 0 bukan angka ganjil
    if(str[i]%2 !== 0 && str[i+1]%2 === 1 && str[i] !== 0) {
//pemberian dash setelah angka ganjil jika berikutnya ganjil
      indexDash += str[i] + '-';
    }
    else {
      indexDash += str[i];
    }
  }
  return indexDash;
}

// TEST CASES
console.log(tambahDash('454793')); // '4547-9-3'
console.log(tambahDash('1739028')); // '1-7-3-9028'
console.log(tambahDash('891829')); // '89-1829'
console.log(tambahDash('10192')); // '101-92'
console.log(tambahDash('222222')); // '222222'