// Dom Selection

// document.getElementById(); -> Element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = "Badrukamal";

// document.getElementsByTagName(); -> HTMLcollector
const p = document.getElementsByTagName('p');
for( let i = 0 ; i < p.length; i++){
    p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName('h1');
h1[0].style.fontSize = "50px";


// document.getElementsByClassName(); -> HTMLcollector
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML ="ini diubah dari javascript";


