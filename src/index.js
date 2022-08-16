console.log("hiii");
console.log(1);

import './normalize.css';
import './style.css';

import { createHead } from "./head.js";
import { createHomePage} from "./home.js";
import { createMenu} from "./menu.js";
import { createReservation} from "./reservation";
import { createAbout} from "./about";


createHead();
createHomePage();

const main = document.getElementById("main");
const home = document.querySelector(".home");
const span1 = document.querySelector(".span1");
const menu = document.querySelector(".menu");
const span2 = document.querySelector(".span2");
const reservation = document.querySelector(".reservation");
const span3 = document.querySelector(".span3");
const about = document.querySelector(".about");
const span4 = document.querySelector(".span4");

function clearClass() {
    console.log(2);
    home.classList.remove("active-clr");
    span1.classList.remove("active")
    menu.classList.remove("active-clr");
    span2.classList.remove("active")
    reservation.classList.remove("active-clr");
    span3.classList.remove("active")
    about.classList.remove("active-clr");
    span4.classList.remove("active")
}
home.addEventListener("click", ()=>{
    main.removeChild(main.querySelector(".contant"));  
    clearClass();
    home.classList.add("active-clr");
    span1.classList.add("active");
    createHomePage();
})
menu.addEventListener("click", ()=>{
    main.removeChild(main.querySelector(".contant"));  
    clearClass();
    menu.classList.add("active-clr");
    span2.classList.add("active");
    createMenu();
})
reservation.addEventListener("click", ()=>{
    main.removeChild(main.querySelector(".contant"));  
    clearClass();
    reservation.classList.add("active-clr");
    span3.classList.add("active");
    createReservation();
})
about.addEventListener("click", ()=>{
    main.removeChild(main.querySelector(".contant"));  
    clearClass();
    about.classList.add("active-clr");
    span4.classList.add("active");
    createAbout();
})

