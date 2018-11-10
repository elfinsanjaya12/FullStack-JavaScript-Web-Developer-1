function targetTerdekat(arr) {
  let nilaix = 0;
  let nilaio = 0;
  let arrX = [];

  if(arr.indexOf('x') === -1){
    return 0
  }
  nilaio = arr.indexOf('o');
  nilaix = arr.indexOf('x');
  let selangNilai = (nilaix - nilaio);
  return selangNilai;
  }
//jika nilaio > dari nilaix maka proses nya di balik menjadi nilaio - nilaix DICARI!!!!!!
// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2