class mobil{
  constructor(merek, harga, warna, bahanBakar, jumlahroda)
  {
    this.merek = merek;
    this.harga = harga;
    this.warna = warna;
    this.bahanBakar = bahanBakar;
    this.jumlahRoda = jumlahroda;
  }
  getSpesifikasi(){
    return 'Mobil saya bermerek '+ this.merek + 'dengan harga '+ this.harga + ' rupiah, berwarna ' + this.warna + ' , bahanBakar ' + this.bahanBakar +', dan beroda '+ this.jumlahRoda;
  }
  gethargaMobil(){
    return 'Harga Mobil yang saya beli di kurangi 20% = '+ (this.harga - (this.harga*0.2)) ;
  }
}
let mobilSaya = new mobil('Hando',300000000,'Merah','Solar',4);

console.log(mobilSaya.getSpesifikasi());
console.log(mobilSaya.gethargaMobil() + ' rupiah');