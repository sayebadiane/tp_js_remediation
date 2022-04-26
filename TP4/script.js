const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4= document.getElementById("p4");

function getchrono() {
    const now = new Date().getTime();
    const dateannif = new Date('Apr 12 ,2022').getTime();
    console.log(now, dateannif);
    const distance = dateannif - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minute = Math.floor((((distance % (1000 * 60 * 60 * 24)) %(1000 * 60 * 60))/(1000 * 60)));
    const second = Math.floor(((((distance % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60))) / 1000);
    console.log(days, hours, minute, second);
    p1.innerText = `-${days} `;
    p2.innerText = ` 0-${hours} `;
    p3.innerText = `0-${minute} `;
    p4.innerText= `0-${ second }`;
 
}
getchrono();
 setInterval(() => {
    getchrono();
    
}, 1000);
