// MANIPULASI ELEMENT

// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Document Object Model</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "hello DOM"

// const judul = document.querySelector("#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "salmon";

// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "documentObjectModel");
// const a = document.querySelector("section#a a");

// const p2 = document.querySelector(".p2");
// p2.classList.add("label");
// p2.classList.remove("label");
// p2.classList.toggle("label");
// p2.classList.toggle("label");
// document.body.classList.toggle("bg-lb");
// p2.classList.add("satu");
// p2.classList.add("dua");
// p2.classList.add("tiga");


// MANIPULASI NODE

const pBaru = document.createElement("p");
const textPBaru = document.createTextNode("Paragraf Baru");
// menyimpan ke dalam pragraf
pBaru.appendChild(textPBaru);
// simpan pBaru di akhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

const liBaru = document.createElement("li");
const teksBaru = document.createTextNode("Item Baru");
liBaru.appendChild(teksBaru);
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement("h2");
const teskH2Baru = document.createTextNode("Judul Baru");
h2Baru.appendChild(teskH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';