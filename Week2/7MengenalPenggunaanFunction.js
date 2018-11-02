/* Membuat sebuah fungsi */
// global scope
var shoutOut = "Halo Function!";

function testshoutOut() {
   // local scope
  var example = "Halo Function! Local";
  return example; 
}

console.log(shoutOut); // Global 
console.log(testshoutOut()); // Local 

console.log('============================================================')

/*
 BUATLAH KODE FUNCTION DISINI
Mengenal Penggunaan Function */

var num1 = 5;
var num2 = 6;

function calculateMultiply(num1,num2){
return num1*num2;
}
var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

console.log('============================================================')

var name = "Prabu ";
var age = 23;
var address = " Jln. Teuku Umar Gg.Banten No 27, Bandar Lampung ";
var hobby = " Makan Tidur Dan Bermain Game Online ! ";

function processSentence(name,age,address,hobby){
  return " Nama saya "+ name + " umur saya " + age + " alamat saya di " +
address + "saya punya hobby yaitu " + hobby ;
}

var fullSentence = processSentence(name,age,address,hobby);

console.log(fullSentence);
