function kaliTerusRekursif(angka) {
  // you can only write your code here!
  if (angka<10){
  return angka
  }
  let arr = String(angka);
  let angkaBaru = 1;
  for (let i = 0 ; i<arr.length ; i++){
    angkaBaru = angkaBaru * Number(arr[i])
  }
  return kaliTerusRekursif(angkaBaru)
} 

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0 
console.log(kaliTerusRekursif(123193)); // 6
