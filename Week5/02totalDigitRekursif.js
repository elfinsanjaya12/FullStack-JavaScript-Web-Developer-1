function totalDigitRekursif(angka) {
  // you can only write your code here!
  let total = angka.toString();
  if(total.length === 1 ){
    return Number(angka)
  }else{
    let perubahan = Number(total[0])
    total = total.slice(1)
    return perubahan + totalDigitRekursif(Number(total))
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5