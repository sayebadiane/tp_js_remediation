const search = document.getElementById("search");
var midle = document.getElementById("midle");
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";


function getmovise(url) {
    fetch(url).then(res => res.json()).then(data => {
        createelement(data.results);
        
    })
}
function createelement(data) {

    data.forEach(element => {
        const div1 = document.createElement("div");
        div1.className = "movie";
        var img1 = document.createElement("img");
        img1.className = "image0";
        img1.src = `${IMGPATH + element.poster_path}`;
        const overview = document.createElement("div");
        overview.className = 'overviews';
        overview.id = "overviews";
        overview.innerHTML = `${element.overview}`;
        var info = document.createElement("div");
        info.className = "movie_info";
        info.id = "movie_info";
        img1.addEventListener("mouseover", function () {
            div1.classList.toggle("film");   
        })
        img1.addEventListener("mouseleave", function () {
            div1.classList.remove("film");
        })
        const h33 = document.createElement("h3")
        h33.innerText = `${element.title}`;
        h33.id = "h3";
        const span1 = document.createElement("span");
        span1.className = "green";
        span1.id = "green";
        span1.innerHTML = `${element.vote_average}`;
        
        info.appendChild(h33);
        info.appendChild(span1);
        div1.appendChild(img1);
        div1.appendChild(overview);
        div1.appendChild(info);


        midle.appendChild(div1);



        
    });
   
}
function searchsaisie() {
    search.addEventListener('keyup', function () {
        const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search.value};`
        if (search.value) {
            midle.innerHTML = '';
            getmovise(SEARCHAPI);

        }
        else {
            midle.innerHTML = '';
            getmovise(APIURL);

        }
                        
            
    })
    
}
searchsaisie();

getmovise(APIURL);






