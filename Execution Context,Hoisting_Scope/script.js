// Executing Context , Hoisting dan Scope



// console.log(nama);
//  var nama = "Badrukamal";
// ====================================================

// var nama = "Badrukamal";
// var umur = 30 ;

// console.log(Sayhallo());
// function Sayhallo(){
//     return `Hallo nama saya ${nama}. saya ${umur} tahun`;
// }

// ====================================================

// var nama = "Badru kamal";
// var username = "@bdrkml23";

// function Cetakurl(username){
//     var InstagramUrl = "https://Instagram.com/"
//     return InstagramUrl + username;
// }
// console.log(Cetakurl(username));

function satu(){
    var nama = "Badrukamal";
    console.log(nama);
}                           // local Frame

function dua(){
    console.log(nama);
}


console.log(nama);
var nama = "Kamal";      //Global Frame
satu();
dua("dude");            //Scope
console.log(nama);