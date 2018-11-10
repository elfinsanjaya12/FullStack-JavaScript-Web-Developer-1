function cariMedian(arr) {
  // you can only write your code here!
  let nilaimedian = arr.length / 2;
  let nilaimediantengah = (arr.length-1) / 2;
 // console.log('nilaimedian = ' + nilaimedian)
 if (arr.length%2 === 0) {
   return (arr[nilaimedian] + arr[nilaimedian-1])/2; 
 } 
 else {
   // console.log('blok b run')
   return arr[nilaimediantengah];
 }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

//ketika mencari nilai variable maka  nilai median 