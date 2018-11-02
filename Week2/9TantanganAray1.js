function balikString(kata){
var hasilbalik = ''
  for(var i=kata.length-1;i>=0;i--){
  	hasilbalik = hasilbalik + kata[i];
  }
  return hasilbalik
}
console.log(balikString('Hello World!')); // sredoC dna dlroW olleH