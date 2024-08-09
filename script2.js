let article = document.querySelectorAll(".image");

let imageLand = article[6];

function changeImageV1() {
    imageLand.src = 'finalimages/point950.jpg'
}

function changeImageV2() {
    imageLand.src = 'finalimages/2point950.jpg'
}

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

btn1.onclick = changeImageV1;
btn2.onclick = changeImageV2;