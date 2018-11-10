function fpb(angka1, angka2) {
    var nilai1 = 0;
    var nilai2 = 0;
    
    for (var i = 20; i > 0; i--) {
        nilai1 = angka1 % i;
        nilai2 = angka2 % i;

        if( (nilai1 === nilai2) && nilai1 === 0 ) {
            return i;
        } 
    }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1