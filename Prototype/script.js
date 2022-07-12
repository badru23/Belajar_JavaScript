// Prototype

// function Mahasiswa (nama ,energi) {
//         this.nama = nama;
//         this.energi =  energi;
// }
// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Hallo ${this.nama} Selamat Makan!`
// }    
// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Hallo ${this.nama} Selamat Bermain!`
// }    
// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam * 2;
//     return `Hallo ${this.nama} Selamat Tidur!`
// }    

// let Badrukamal = new Mahasiswa ('Badrukamal', 2);

// Menggunakan Versi Class
class Mahasiswa {
    constructor(nama , energi){
        this.nama = nama;
        this.energi =  energi;
}
makan (porsi){
    this.energi += porsi;
    return `Hallo ${this.nama} Selamat Makan!`
}    
main(jam){
    this.energi -= jam;
    return `Hallo ${this.nama} Selamat Bermain!`
}    
tidur(jam){
    this.energi += jam * 2;
    return `Hallo ${this.nama} Selamat Tidur!`
    }    
}
let Badrukamal = new Mahasiswa ('Badrukamal', 2);


// let angka = [3,2,1];
//     console.log(angka);
