function faktorialRekursif(angka) {
  // you can only write your code here!
  if (angka === 0) return 1;
  return angka * faktorialRekursif(angka-1);
}

// TEST CASES
console.log(faktorialRekursif(3)); // 6
console.log(faktorialRekursif(4)); // 24
console.log(faktorialRekursif(5)); // 120
console.log(faktorialRekursif(2)); // 2
console.log(faktorialRekursif(1)); // 1