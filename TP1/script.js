// const button1 = document.getElementById("button1");
// const button2 = document.getElementById("button2");
// const button3 = document.getElementById("button4");
// const button4 = document.getElementById("button1");
const buttons = document.querySelectorAll("input");
const notifi = document.getElementById("notifi");
// console.log(buttons[0]);
for (i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function () {
        var color = window.getComputedStyle(this);
        var style = color.backgroundColor;
        let div1 = document.createElement('div');
        div1.className = `div1`;
        // console.log(div1.className);
        let p = document.createElement("p");
        p.innerText = "Mon projet";
        div1.style.backgroundColor = style;
        div1.appendChild(p);
        notifi.appendChild(div1);
        setTimeout(() => {
            div1.remove();
            
        }, 1000);
            
       

    })
}



// button.addEventListener("click", function () {
    
        
   
//     div1 = document.createElement('div');
//     div1.className = "div1";
//     p = document.createElement("p");
//     p.innerText
// })