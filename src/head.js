export const createHead = () => {

  const header = document.createElement("div");
  header.classList.add("header");

    const name =  document.createElement('div');
    name.classList.add("name");
    name.textContent = "ICHIRAKU";

  header.appendChild(name);

    const nav = document.createElement('div');
    nav.classList.add("nav");

      const homeCnt = document.createElement('div');
      homeCnt.classList.add("homeCnt");

        const home = document.createElement('button');
        home.classList.add("home");
        home.textContent = "Home";
    
      homeCnt.appendChild(home);

        const span1 = document.createElement('div');
        span1.classList.add("active-span1");

        homeCnt.appendChild(span1);

    nav.appendChild(homeCnt);


      const menuCnt = document.createElement('div');
      menuCnt.classList.add("menuCnt");

        const menu = document.createElement('button');
        menu.classList.add("menu");
        menu.textContent = "menu";

      menuCnt.appendChild(menu);

        const span2 = document.createElement('div');
        span2.classList.add("active-span2");

      menuCnt.appendChild(span2);

    nav.appendChild(menuCnt);

      const reservationCnt = document.createElement('div');
      reservationCnt.classList.add("reservationCnt");

        const reservation = document.createElement('button');
        reservation.classList.add("reservation");
        reservation.textContent = "reservation";

      reservationCnt.appendChild(reservation);

        const span3 = document.createElement('div');
        span3.classList.add("active-span3");

      reservationCnt.appendChild(span3);

    nav.appendChild(reservationCnt);
   

      const contactCnt = document.createElement('div');
      contactCnt.classList.add("contactCnt");

        const contact = document.createElement('button');
        contact.classList.add("contact");
        contact.textContent = "contact";

      contactCnt.appendChild(contact);

        const span4 = document.createElement('div');
        span4.classList.add("active-span4");

      contactCnt.appendChild(span4);

    nav.appendChild(contactCnt);
  
  header.appendChild(nav);

main.appendChild(header);
}