function ubahKapital(kalimat) {
  // you can only write your code here!
  var stringArr = kalimat.split(' ');
  
  for(var i = 0; i < stringArr.length; i++){
    var arrBaru = stringArr[i].split('');
    arrBaru[0] = arrBaru[0].toUpperCase();
    stringArr[i] = arrBaru.join('');
  }
  return stringArr.join(' ');
}

// TEST CASES
console.log(ubahKapital('saya makan sushi')); // Saya Makan Sushi
console.log(ubahKapital('programming adalah hobi saya')); // Programming Adalah Hobi Saya
console.log(ubahKapital('menjadi developer adalah cita-cita saya')); // Menjadi Developer Adalah Cita-cita Saya
console.log(ubahKapital('i have a dream')); // I Have A Dream
console.log(ubahKapital('coding is fun')); // Coding Is Fun