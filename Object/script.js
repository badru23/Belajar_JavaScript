// Object pada JavaScript
// 1.Object Literal  

// let mahasiswa1 =  {
//     nama : "Badrukamal",
//     energi : 30 ,
//     makan : function(porsi){
//         this.energi = this.energi + porsi ;
//         console.log (`halo  ${this.nama}, selamat makan`);
//     }
// }


// let mahasiswa2 =  {
//     nama : "Kamal",
//     energi : 10 ,
//     makan : function(porsi){
//         this.energi = this.energi + porsi ;
//         console.log (`halo  ${this.nama}, selamat makan`);
//     }
// }

// 2.Function Declaration
    // function mahasiswa (nama ,energi) {
    //     let mahasiswa = {};
    //         mahasiswa.nama = nama;
    //         mahasiswa.energi =  energi;

    //         mahasiswa.makan = function(porsi){
    //             this.energi += porsi;
    //             console.log (`Hallo ${this.nama} Selamat Makan!`);
    //         }
    //         mahasiswa.main = function(jam){
    //             this.energi -= jam;
    //             console.log (`Hallo ${this.nama} Selamat Bermain`); 
    //           }
    //         return mahasiswa ;
    // }

    // let Badrukamal = mahasiswa ('Badrukamal', 2);


// 3.Constructor Function
// function mahasiswa (nama ,energi) {
//     let Mahasiswa = {};
//         this.nama = nama;
//         this.energi =  energi;

//         this.makan = function(porsi){
//             this.energi += porsi;
//             console.log (`Hallo ${this.nama} Selamat Makan!`);
//         }
//         this.main = function(jam){
//             this.energi -= jam;
//             console.log (`Hallo ${this.nama} Selamat Bermain`); 
//           }
// }

// let Badrukamal = new mahasiswa ('Badrukamal', 2);

// 4.Object.Create()
const methodmahasiswa = {
    makan : function(porsi){
        this.energi += porsi;
        console.log (`Hallo ${this.nama} Selamat Makan!`);
    },
    main : function(jam){
        this.energi -= jam;
        console.log (`Hallo ${this.nama} Selamat Bermain`); 
      }
};


function Mahasiswa (nama ,energi) {
    let mahasiswa = Object.create(methodmahasiswa);
        mahasiswa.nama = nama;
        mahasiswa.energi =  energi;

        return mahasiswa;
}
let Badrukamal = Mahasiswa ('Badrukamal', 2);
let Allisha = Mahasiswa ('Allisha' , 3);


