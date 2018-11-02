var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", " 21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", " 6/4/1970", "Berkebun"],
] 
var DataHandling =[
["Nomor ID: "+input [0][0],"Nama Lengkap: "+input [0][1], "TTL: "+input [0][2]+ input[0][3], "Hobi: "+input [0][4]],
["Nomor ID: "+input [1][0],"Nama Lengkap: "+input [1][1], "TTL: "+input [1][2]+ input[1][3], "Hobi: "+input [1][4]],
["Nomor ID: "+input [2][0],"Nama Lengkap: "+input [2][1], "TTL: "+input [2][2]+ input[2][3], "Hobi: "+input [3][4]],
["Nomor ID: "+input [3][0],"Nama Lengkap: "+input [3][1], "TTL:  "+input [3][2]+ input[3][3], "Hobi: "+input [3][4]],
]

var contoh1 = [DataHandling[0][0], DataHandling [0][1]] // untuk mengambil 2 element pada 1 deret array

var n= 0
while(n<5){
  n = n +1
  console.log("Looping " + n)
  console.log(DataHandling[1])
  console.log("=======================")
  console.log(contoh1) // output [ 'Nomor ID: 0001', 'Nama Lengkap: Roman Alamsyah' ]
}