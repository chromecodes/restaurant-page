console.log("hiii");

import './normalize.css';
import './style.css';

import { createHead } from "./head.js";
import { createHomePage} from "./home.js";

createHead();
createHomePage();

const home = document.querySelector(".home");
console.log(home);