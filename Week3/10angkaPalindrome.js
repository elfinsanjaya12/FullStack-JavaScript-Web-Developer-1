function angkaPalindrome(num) {
 var hasil = 0 ; 
 var jikaPalindrome = false ;
 var karenaPalindrome = 0 ;
 var ubahBentuk ='';
 
 while(jikaPalindrome === false ){
     num++;
     ubahBentuk = num.toString();
     reverse = "";
     for (i = ubahBentuk.length -1; i >= 0; i--){
         reverse += ubahBentuk[i];
     }
     karenaPalindrome = parseInt (reverse);
     if(karenaPalindrome == num){
         jikaPalindrome = true ; 
         hasil = num ;
     }
 }
 return hasil;
}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001