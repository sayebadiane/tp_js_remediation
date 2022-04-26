const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
let Carousel = document.getElementById("Carousel"); let i = 1;
Carousel.style.backgroundImage = "url('./image/img"+i+".jpeg')";
function Caroussel(i){    
    Carousel.style.backgroundImage = "url('./image/img" + i + ".jpeg')";  
}
setInterval(() => {
    album();
}, 5000);
function album() {
    if (i == 5) {
        Caroussel(i);
        afficheMasquer()
        i = 1;
    }
    if (i <5) {
        Caroussel(i);
        i++;
        afficheMasquer();
    }  
}
btn1.addEventListener("click", function () {
    if (i > 1) {
        i--;
        Caroussel(i);
        afficheMasquer();
    }
})
btn2.addEventListener("click", function () {
    if (i < 5) {
        i++;
        Caroussel(i);
        afficheMasquer();
    }
       
})
function afficheMasquer(){
    if (i == 5) {
        btn2.style.visibility = "hidden";
    }
    else {
        btn2.style.visibility = "visible";
    }
    if (i == 1) {
        btn1.style.visibility = "hidden";
    }
    else {
        btn1.style.visibility = "visible";
    } 
}