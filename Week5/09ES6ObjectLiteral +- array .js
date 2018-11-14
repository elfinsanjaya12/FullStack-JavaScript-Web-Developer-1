var student = {
    nama : "Prabu Santoso",
    umur : 23,
    dateOfBirth : "20 November 1995",
    gender : "laki-laki",
    studentId : "13312442",
    hobby : [
      "Nonton",
      "Makan",
      "Bermain Game Online",
      "Travelling",
      "Lari Dari Kenyataan",
    ],
  
  setnama: function(nama){
    this.nama = nama;
  },
  setumur : function(umur){
    this.umur = umur;
  },
  SetdateOfBirth : function(dateOfBirth){
    this.dateOfBirth = dateOfBirth;
  },
  SetGender : function(gender){
    if(gender === "laki-laki" || genderStudent === "perempuan"){
      this.gender = gender
    }
  },
  SetstudentId : function(studentId){
    this.studentId = studentId;
  },
  Sethobby : function(hobby){
    this.hobby = hobby;
  },
  addhobby : function(hobby) {
    this.hobby.push(hobby);
  },
  gethobby  : function(){
    return this.hobby;
  },
  removehobby : function(deletehobby) {
    this.hobby.splice(this.hobby.indexOf(deletehobby), 1);
  }
}
student.addhobby("Berenang"); // menambah kan berenang pada array
student.removehobby("Makan"); // menghapus makan dari array

console.log(student.nama)
console.log(student.umur)
console.log(student.dateOfBirth)
console.log(student.gender)
console.log(student.studentId)
console.log(student.hobby)