console.log("===== DATA AWAL ====")
var input =  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/04/1989", "Membaca"]
console.log(input)

console.log("===== DATA SETELAH DI UBAH ====")
var DataHandling2 = [input[0], input[1] +" Elsharawy", "Provinsi " + input[2], "21/05/1989","Membaca"]
console.log(DataHandling2)

console.log("===== DATA SETELAH DI UBAH DAN DI INPUT ====")
DataHandling2.splice(4, 1, "Pria","SMA Internasional Metro");
// inserts at 1st index position
console.log(DataHandling2);

console.log("=== PENGAMBILAN 2 HURUF/ANGKA PADA ELEMEN KE 4 ====")
var splitted = DataHandling2[3].split('/');
console.log(splitted); // [ '21', '05', '1989' ]
console.log("=== ANGKA BULAN YANG DI AMBIL DI UBAH KE STRING ====")
console.log(splitted[1])
console.log("=== ANGKA BULAN YANG BER TYPE DATA STRING DI UBAH KE INTEGER ====")
// di bawah merupakan syntax dari string di ubah ke nilai integer
switch(parseInt(splitted[1])){
  case 1:
  console.log("januari")
  break;
  case 2:
  console.log("Februari")
  break;
  case 3:
  console.log("Maret")
  break;
  case 4:
  console.log("April")
  break;
  case 5:
  console.log("Mei")
  break;
  case 6:
  console.log("Juni")
  break;
  case 7:
  console.log("Juli")
  break;
  case 8:
  console.log("Agustus")
  break;
  case 9:
  console.log("September")
  break;
  case 10:
  console.log("Oktober")
  break;
  case 11:
  console.log("November")
  break;
  default:
  console.log("Desember")
  break;
}
console.log("=== URUTAN TTL DI UBAH KE DESCENDING ====")
/*console.log(splitted)*/
splitted.sort(function(a, b){return b-a});
console.log(splitted)
console.log("=== MENAMBAHKAN TANDA (-) PADA TTL SPLITED ====")
var splitted1 = DataHandling2[3].split('/');
/*console.log(splitted1); // [ '21', '05', '1989' ]*/
var strip = splitted1.join(' - ');
console.log(strip)
console.log("=== MENERAPKAN SLICE PADA ELEMEN KE 2 ====")
/*console.log(input)*/
var selector = input.slice(1,2);
console.log(selector)