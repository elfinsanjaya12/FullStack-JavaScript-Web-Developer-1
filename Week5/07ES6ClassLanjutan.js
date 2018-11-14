class student{
    constructor(nama, age, dateOfBirth, gender, studentId, hobby){
      this.name = nama;
      this.age = age;
      this.dateOfBirth = dateOfBirth;
      this.gender = gender;
      this.studentId = studentId;
      this.hobby = hobby;
    }
    setName (namaStudent){
      this.name = namaStudent;
    }
    setAge (umurStudent){
      this.age = umurStudent;
    }
    SetDateOfBirth (tanggalLahirStudent){
      this.dateOfBirth = tanggalLahirStudent;
    }
    SetGender (genderStudent){
      if(genderStudent === 'Male' || genderStudent === 'Female'){
        this.gender = genderStudent;
      }
    }
    addHobby (newHobby) {
      this.hobby.push(newHobby);
    }
    removeHobby (deleteHobby) {
      this.hobby.splice(this.hobby.indexOf(deleteHobby), 1);
    }
    
    getData(){
      return 'Nama saya ' + this.name + ',jenis kelamin saya ' + this.gender + ' ,umur saya ' + this.age + '. Saya juga memiliki hobby ' + this.hobby + ' tidak lupa juga kode id saya : ' + this.studentId ;
    }
  }
  let studentNew = new student('Prabu Santoso',23, '20 November 1995', 'Male', '13312442', ['Makan', 'Nonton', 'Bermain Game Online']);
  
  studentNew.removeHobby('Nonton') //menghapus data hobby pada variabel student 
  console.log(studentNew.getData());
  