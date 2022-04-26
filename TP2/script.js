const question = document.getElementById("question");
const burger = document.getElementById("burger");
const sousmain = document.getElementById("sousmain");
const sousmaine = document.getElementsByName("sousmaine");
// console.log(sousmaine);
const tabmenu = [
    {
        "icone1": "fa-solid fa-gauge",
        "test": "Dashboard",
        "icone2": "",
        "icone3": "fa-solid fa-angle-left",
        
    },
    {
        "icone1": "fa-solid fa-table-cells", 
        "test": "Widgets",
        "icone2": "",
        "icone3": ""
    },
    {
        "icone1": "fa-solid fa-copy", 
        "test": "Layout Options",    
        "icone2": "",
        "icone3": "fa-solid fa-angle-left",
        
    },
    {
        "icone1": "fa-solid fa-chart-pie",
        "test": "Charts",
        "icone2": "",
        "icone3": "fa-solid fa-angle-down"  

    },
    {
        "icone1": "fa-solid fa-tree",
        "test": "Ui Element",
        "icone2": "",
        "icone3": "fa-solid fa-angle-left"  

    },
    {
        "icone1": "fa-solid fa-calendar-check",   
        "test": "Forms",
        "icone2": "",
        "icone3": "fa-solid fa-angle-left"

    },
    {
        "icone1": "fa-solid fa-table",
        "test": "Tables",
        "icone2": "",
        "icone3": "fa-solid fa-angle-left"

    },
]
function ajoutnotif() {        
    tabmenu.forEach(element => {
        var div1 = document.createElement("div");
        div1.className = "notif";
        var i1 = document.createElement("i");
        i1.className = element.icone1;
        var p = document.createElement("p");
        p.innerText = element.test;
        var i2 = document.createElement("i");
        i2.className = element.icone2;
        var i3 = document.createElement("i");
        i3.className = element.icone3;
        div1.appendChild(i1);
        div1.appendChild(p);
        div1.appendChild(i2);
        div1.appendChild(i3);
        question.appendChild(div1);

    });
}
ajoutnotif();
burger.addEventListener("click", function () {
    sousmaine.className = "sous_main";
    

})






// tabmenus.forEach(element => {
//     console.log(element.icone1);
//     console.log(element.test);
//     console.log(element.icone2);
//     console.log(element.icone3);
//     console.log(element.sousmenu);


// });






// console.log(tabmenus[0].test); 
// console.log(tabmenus[0].icone1);
// function ajoutnotif(menus) {
//     const img = document.createElement("img");
//     img.src = ("menus['icone1']") ;
//     const test = document.createElement("p");
//     test.innerText = "(menus['test'])";
//     const img2 = document.createElement("img2");
//     img2.src = "icone2";
//     // var tabsousmenu = new Array();
//     // "tabsousmenu" = "menu"
//     question.appendChild(img);
//     question.appendChild(test);
//     question.appendChild(img2);
// }



// ajoutnotif();



























// function cree_onclet1(){
//     var onclet = document.createElement("div");
//     onclet.className = "onclet";
//     var icone_horloge = document.createElement("div");
//     icone_horloge.className = "icone_horloge";
//     var image = document.createElement("img");
//     image.src ="./image/gauge-solid.svg";
//     var text1 = document.createElement("div");
//     text1.className = "text1";
//     var p = document.createElement("p");
//     p.innerText = "Dashboard";
//     var para1 = document.createElement("div");
//     para1.className = "para1";
//     var p2 = document.createElement("p");
//     p2.innerText = "<";
//     icone_horloge.appendChild(image);
//     para1.appendChild(p2);
//     text1.appendChild(p);
//     onclet.appendChild(icone_horloge);
//     onclet.appendChild(icone_horloge);
//     onclet.appendChild(text1);
//     onclet.appendChild(para1);
//     question.appendChild(onclet);
//     para1.addEventListener("click", function () {
//         console.log("bonjour");
//     })

// }

// function cree_onclet2() {
//     var onclet = document.createElement("div");
//     onclet.className = "onclet";
//     var icone_horloge = document.createElement("div");
//     icone_horloge.className = "icone_horloge";
//     var image = document.createElement("img");
//     image.src = "./image/17704.png";
//     var text1 = document.createElement("div");
//     text1.className = "text1";
//     var p = document.createElement("p");
//     p.innerText = "Widgets";
//     var para1 = document.createElement("div");
//     para1.className = "para1";
//     var image1 = document.createElement("img");
//     image1.src = "./image/new.pnj";
//     icone_horloge.appendChild(image);
//     para1.appendChild(image1);
//     text1.appendChild(p);
//     onclet.appendChild(icone_horloge);
//     onclet.appendChild(icone_horloge);
//     onclet.appendChild(text1);
//     onclet.appendChild(para1);
//     question.appendChild(onclet);

// }
// function cree_onclet3(){
//     var onclet = document.createElement("div");
//     onclet.className = "onclet";
//     var icone_horloge = document.createElement("div");
//     icone_horloge.className = "icone_horloge";
//     var image = document.createElement("img");
//     image.src = "./image/icons8-file-64.png";
//     var text1 = document.createElement("div");
//     text1.className = "text1";
//     var p = document.createElement("p");
//     p.innerText = "Layout Option";
//     var para1 = document.createElement("div");
//     para1.className = "para1";
//     var image1 = document.createElement("img");
//     image1.src = "./image/new.pnj";
//     var para2 = document.createElement("div");
//     para2.className = "para2";
//     //  para2.className = "para1";
//     var p2 = document.createElement("p");
//     p2.innerText = "<";
//     para2.appendChild(p2);
//     icone_horloge.appendChild(image);
//     para1.appendChild(image1);
//     text1.appendChild(p);
//     onclet.appendChild(icone_horloge);
//     onclet.appendChild(icone_horloge);
//     onclet.appendChild(text1);
//     onclet.appendChild(para1);
//     onclet.appendChild(para2);
//     question.appendChild(onclet);

// }
// function cree_onclet4() {
//     var onclet = document.createElement("div");
//     onclet.className = "onclet";
//     var icone_horloge = document.createElement("div");
//     icone_horloge.className = "icone_horloge";
//     var image = document.createElement("img");
//     image.src = "./image/chart-pie-solid.svg";
//     var text1 = document.createElement("div");
//     text1.className = "text1";
//     var p = document.createElement("p");
//     p.innerText = "Charts";
//     var para1 = document.createElement("div");
//     para1.className = "para1";
//     var p2 = document.createElement("p");
//     p2.innerText = "<";
//     icone_horloge.appendChild(image);
//     para1.appendChild(p2);
//     text1.appendChild(p);
//     onclet.appendChild(icone_horloge);
//     onclet.appendChild(icone_horloge);
//     onclet.appendChild(text1);
//     onclet.appendChild(para1);
//     question.appendChild(onclet);
//     para1.addEventListener("click", function () {
//         const Charsjs = document.getElementById("div");
//         var pCharsjs = document.createElement("p");
//         pCharsjs.innerText ="Charsjs"
//         const Flot = document.getElementById("div");
//         var pFlot = document.createElement("p");
//         pFlot.innerText = "Flot";
//         const Inline = document.getElementById("div");
//         var pInline = document.createElement("p");
//         pInline.innerText = "Inline";
//         const uPlot = document.getElementById("div");
//         var puPlot = document.createElement("p");
//         puPlot.innerText = "Plot";
//         Charsjs.appendChild(pCharsjs);
//         onclet.appendChild(Charsjs);
//         Flot.appendChild(pFlot);
//         onclet.appendChild(Flot);
//         Inline.appendChild(pInline);
//         onclet.appendChild(Inline);
//         uPlot.appendChild(puPlot);
//         onclet.appendChild(uPlot);
        
//     })
// }
// function cree_onclet5(){
//     var onclet = document.createElement("div");
//     onclet.className = "onclet";
//     var icone_horloge = document.createElement("div");
//     icone_horloge.className = "icone_horloge";
//     var image = document.createElement("img");
//     image.src = "./image/gauge-solid.svg";
//     var text1 = document.createElement("div");
//     text1.className = "text1";
//     var p = document.createElement("p");
//     p.innerText = "UI Element";
//     var para1 = document.createElement("div");
//     para1.className = "para1";
//     var p2 = document.createElement("p");
//     p2.innerText = "<";
//     icone_horloge.appendChild(image);
//     para1.appendChild(p2);
//     text1.appendChild(p);
//     onclet.appendChild(icone_horloge);
//     onclet.appendChild(icone_horloge);
//     onclet.appendChild(text1);
//     onclet.appendChild(para1);
//     question.appendChild(onclet);

// }
// function cree_onclet6() {
//     var onclet = document.createElement("div");
//     onclet.className = "onclet";
//     var icone_horloge = document.createElement("div");
//     icone_horloge.className = "icone_horloge";
//     var image = document.createElement("img");
//     image.src = "./image/chart-pie-solid.svg";
//     var text1 = document.createElement("div");
//     text1.className = "text1";
//     var p = document.createElement("p");
//     p.innerText = "Formes";
//     var para1 = document.createElement("div");
//     para1.className = "para1";
//     var image1 = document.createElement("img");
//     image1.src = "./image/new.pnj";
//     icone_horloge.appendChild(image);
//     para1.appendChild(image1);
//     text1.appendChild(p);
//     onclet.appendChild(icone_horloge);
//     onclet.appendChild(icone_horloge);
//     onclet.appendChild(text1);
//     onclet.appendChild(para1);
//     question.appendChild(onclet);

// }
// function cree_onclet7(){
//     var onclet = document.createElement("div");
//     onclet.className = "onclet";
//     var icone_horloge = document.createElement("div");
//     icone_horloge.className = "icone_horloge";
//     var image = document.createElement("img");
//     image.src = "./image/gauge-solid.svg";
//     var text1 = document.createElement("div");
//     text1.className = "text1";
//     var p = document.createElement("p");
//     p.innerText = "Tables";
//     var para1 = document.createElement("div");
//     para1.className = "para1";
//     var p2 = document.createElement("p");
//     p2.innerText = "<";
//     icone_horloge.appendChild(image);
//     para1.appendChild(p2);
//     text1.appendChild(p);
//     onclet.appendChild(icone_horloge);
//     onclet.appendChild(icone_horloge);
//     onclet.appendChild(text1);
//     onclet.appendChild(para1);
//     question.appendChild(onclet);

// }
// cree_onclet1();
// cree_onclet2();
// cree_onclet3();
// cree_onclet4();
// cree_onclet5();
// cree_onclet6();
// cree_onclet7()
