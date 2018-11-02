  var nama = "Prabu";
  var peran = "Ksatria";
  var tahunlahir = 1995
  var umur = 2018 - tahunlahir
  var playerHealth = tahunlahir * Math.random()
  var monsterHealth = tahunlahir * Math.random()
  var kodeMonster = Math.floor(Math.pow(100, Math.random()))
  

  if(peran == ""){
    peran = "Tidak Bisa Move On"
  }

for(var i = 0; i< tahunlahir; i++){
  if (i % umur === 0){
    console.log (peran + ''+ nama + 'menyerang monster')
    monsterHealth-=umur
  }else if(i % kodeMonster === 0){
    console.log('monster menyerang' + peran + '' + nama + '!' )
    playerHealth-=kodeMonster
  }else if (i % umur === 0 && i % kodeMonster === 0){
    console.log("Health keduanya bertambah")
    playerHealth += kodeMonster
    monsterHealth += umur
  }
}
  if(playerHealth > monsterHealth){
    console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!')
  }else {
    console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...')
  }
    