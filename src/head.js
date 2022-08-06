 export const createHead = () => {



    const header = document.createElement("div");
    header.classList.add("header");

    const name =  document.createElement('div');
    name.classList.add("name");
    name.textContent = "ICHIRAKU";

    header.appendChild(name);

    const nav = document.createElement('div');
    nav.classList.add("nav");

    const home = document.createElement('button');
    home.classList.add("home");
    home.textContent = "Home";

    nav.appendChild(home);

    const menu = document.createElement('button');
    menu.classList.add("menu");
    menu.textContent = "menu";

    nav.appendChild(menu);

    const reservation = document.createElement('button');
    reservation.classList.add("reservation");
    reservation.textContent = "reservation";

    nav.appendChild(reservation)

    const contact = document.createElement('button');
    contact.classList.add("contact");
    contact.textContent = "contact";

    nav.appendChild(contact);

    header.appendChild(nav);

   main.appendChild(header);
 }