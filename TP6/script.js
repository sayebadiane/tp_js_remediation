const urlid = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52913";
const nomrecette = "https://www.themealdb.com/api/json/v1/1/search.php?s=Brie";
const recettes = document.getElementById("recettes")
var search = document.getElementById("search");
const end = document.getElementById("end");
// const pop_up = document.getElementById("pop_up");


function fet(u) {
    fetch(u).then(res => res.json()).then(data => {
        data.meals.forEach(element => {
            creeplat(element);
            
        });
        
        // console.log(data.meals);
       
    })
}
fet(nomrecette);

function creeplat(tab) {
   
    const end_plat = document.createElement("div");
    end_plat.className = "end_plat";
    var image = document.createElement("img");
    image.src =tab.strMealThumb;

    // var btn = document.createElement("end_btn");
    const end_text = document.createElement("div");
    end_text.className = "end_text";
    const p = document.createElement("p");
    p.innerText = tab.strMeal;
    //var imagecoeur = document.createElement("img");
    var icone = document.createElement("i");
    icone.className = "fa-solid fa-heart-circle-check";    //<i class="fa-solid fa-heart-circle-check"></i>
    icone.addEventListener("click", function ()
    {
        alert("ok")
        document.querySelector("body").classList.add("pop_body")
        const pop_up = document.getElementById("pop_up");
        // pop_up.style.top = "0px";
        pop_up.classList.add("pop_up1")
        pop_up.style.display="block"
        pop_up.classList.add("rec")
        const modal = document.createElement("div")
        modal.className = "modal";
        modal.className = "recettes";
        
        const header = document.createElement("header");
        header.className = "header";
        const header_h2 = document.createElement("h2");
        header_h2.className = "header_h2";
        header_h2.innerText = tab.strMeal;
        const pop_up_label = document.createElement("label");
        pop_up_label.innerHTML = "x";
        //insertion image
        const pop_up_img = document.createElement("img");
        pop_up_img.classList.add("img_popup")
        pop_up_img.src = tab.strMealThumb;
        const pop_up_p = document.createElement("p");
        pop_up_p.classList.add("pop_up_p");
        pop_up_p.innerText = tab.strInstructions;
        const pop_up_span = document.createElement("span");
        header.appendChild(header_h2);
        header.appendChild(pop_up_label);
        modal.appendChild(header);
        modal.appendChild(pop_up_img);
        modal.appendChild(pop_up_p);
        modal.appendChild(pop_up_span);
        // pop_up.innerHTML = "";
        pop_up.appendChild(modal);
       
        
        pop_up_label.addEventListener("click", function ()
        {
            
            // pop_up.style.top = "-1000px";
            pop_up.classList.remove("pop_up1");
            pop_up.style.display = "none";
            document.querySelector("body").classList.remove("pop_body")
            pop_up.removeChild(modal)
        })
       

    })      
    end_plat.appendChild(image);
    end.appendChild(end_plat);
    end_text.appendChild(p);
    end_text.appendChild(icone);
    end.appendChild(end_text);
     
  
}
function searchrecette() {
     search.addEventListener('keyup', function () {
       
         if (search.value) {
             end.innerHTML = "";
             var urle = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`;
            fet(urle);
            
        } else {
            console.log("bakhoule");
        }
        
    })
    
}
searchrecette();







// <div class="recettes pop_up">
//     <div class="header">
//         <h2 id="header_h2">Fresh Sardines</h2>
//         <label for="">x</label>
//     </div>

//     <img src="./image/Saladecesarpoulet.webp" id="pop_up_img" alt="" srcset="">
//         <p id="pop_up_p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam dicta, laudantium quae nisi explicabo cupiditate ipsam aliquid! Modi maxime iure
//             laudantium dolor fugiat, consequuntur nihil dolorem, cum officiis minima necessitatibus.</p>
//         <span id="pop_up_span">
//             <ul>    ingredient
//                 <li>slklkdljf</li>
//                 <li>ladmzlma</li>
//                 <li>lkedlkd</li>
//             </ul>



//         </span>

// </div>















//  < !-- < div class="end_plat" id = "end_plat" >
//                         <img src="./image/Saladecesarpoulet.webp" id="end_plat_image" alt="" srcset="">

//                     </div>
//                     <button class="end_btn">Generer Une Recherche</button>
//                     <div class="end_text">
//                         <p>Fresh Salade</p>
//                         <img src="./image/1200px-Emblem-favorites.svg.png" alt="" srcset="">

//                     </div> -->