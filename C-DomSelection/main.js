// Dom Selection

// getElementById -> element
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "#ccc";
// judul.innerHTML = "TEXT INI DI UBAH MENGGUNAKAN DOM";

// getElementByTagName -> HTMLCOllections
// const pp = document.getElementsByTagName("p");
// for(let i = 0; i < pp.length; i++){
//     pp[i].style.backgroundColor = "lightblue";
// }
// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "30px";

// getElementByClassName -> HTMLCollection
// const p1 = document.getElementsByClassName("p1");
// p1[0].innerHTML = "Diubah menggunakan javascript DOM";

// querySelector -> element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";
// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";

// querySelectorAll -> Node List
// const p = document.querySelectorAll("p");
// for(let i = 0; i<p.length; i++){
//     p[i].style.backgroundColor = "lightblue"
// }


const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName("p")[0];
p4.style.backgroundColor = "lightblue";