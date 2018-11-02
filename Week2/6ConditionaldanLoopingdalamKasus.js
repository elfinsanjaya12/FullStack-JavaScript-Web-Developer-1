console.log ('')
console.log ('CONDITIONAL LOOPING')
var i;
for (i=1;i<=100;i++)
  if( i %2==0){
    console.log("counter sekarang "+ i +" GENAP" )
    }else{
      console.log("counter sekarang "+ i +" GANJIL" )
    }
console.log ('')
console.log ('CONDITIONAL LOOPING 2 GENAP')
var i;
for (i=1;i<=100;i+=2)
  if (i %3 ==0){
      console.log(" 3 kelipatan 3  GANJIL" )
      }
    
console.log ('')
console.log ('CONDITIONAL LOOPING 5 GANJIL')
var i;
for (i=1;i<=100;i+=5)
  if (i %6 ==0){
      console.log(" 6 kelipatan 6 GENAP" )
      }
console.log ('')
console.log ('CONDITIONAL LOOPING 9 GANJIL')
var i;
for (i=1;i<=100;i+=9)
  if (i %10 ==0){
      console.log(" 10 kelipatan 10 GENAP" )
      }