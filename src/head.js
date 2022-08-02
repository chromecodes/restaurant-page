 const createHead = () => {

    const main =  document.getElementById("main");

    const header = document.createElement("div");
    header.classList.add("header")

    const name =  document.createElement('div');
    name.classList.add("name")

    const nav = document.createElement('div');
    nav.classList.add("nav")

    const home = document.createElement('div');
    home.classList.add("home")
    home.textContent = "Home";

    const menu = document.createElement('div');
    menu.classList.add("menu")
    menu.textContent = "menu";

    const reservation = document.createElement('div');
    reservation.classList.add("reservation")
    reservation.textContent = "reservation";

    const contact = document.createElement('div');
    contact.classList.add("contact")
    contact.textContent = "contact";

 }