function hitungHuruf(kata) {
    // you can only write your code here!
    var kataArr = kata.split(' ');
    
    for(var i = 0; i < kataArr.length; i++){
      for(var j = 0; j < kataArr.length; j++){
        if(kataArr[i].lastIndexOf(kataArr[i][j]) !== kataArr[i].indexOf(kataArr[i][j])){
          return kataArr[i];
        } 
      }
    }
  }

  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau