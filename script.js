const increasebtn = document.querySelector(".increase");
const decreasebtn = document.querySelector(".decrease");
const resetbtn = document.querySelector(".reset");

let screen = document.getElementById("disc");
let num = 0;
screen.innerHTML = num;
increasebtn.onclick=()=>{
    num = num+1;
    screen.innerHTML = num;
}
decreasebtn.onclick=()=>{
    num=num-1;
    screen.innerHTML = num;
}
resetbtn.onclick=()=>{
    num=0;
    screen.innerHTML =num;
}