function perpangkatanDua(str) {
let i = 0
while(str >= 2){
  str /= 2
  i++
}
  if(str === 1){
  return i
  }else if(str > 1){
  return -1
  }else if(i === 0){
  return 0
  }
}

// TEST CASES
console.log(perpangkatanDua(64)); // 6
console.log(perpangkatanDua(22)); // -1
console.log(perpangkatanDua(16)); // 4
console.log(perpangkatanDua(222)); // -1
console.log(perpangkatanDua(1)); // 0