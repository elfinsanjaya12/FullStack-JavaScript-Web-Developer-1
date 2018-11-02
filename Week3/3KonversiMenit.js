// penggunaan

function konversiMenit(menit) {
let jam = Math.floor (menit / 60);
menit = menit % 60;

/*return menit < 10 ? `${jam}:0${menit}` : `${jam}:${menit}`
 atau*/
if(menit < 10){
  return `${jam}:0${menit}`
} else {
  return `${jam}:${menit}`
}

}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
