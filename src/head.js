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
        home.classList.add('active-clr')
        home.textContent = "Home";
    
      homeCnt.appendChild(home);

        const span1 = document.createElement('div');
        span1.classList.add("span1");
        span1.classList.add('active')

        homeCnt.appendChild(span1);

    nav.appendChild(homeCnt);


      const menuCnt = document.createElement('div');
      menuCnt.classList.add("menuCnt");

        const menu = document.createElement('button');
        menu.classList.add("menu");
        menu.textContent = "menu";

      menuCnt.appendChild(menu);

        const span2 = document.createElement('div');
        span2.classList.add("span2");

      menuCnt.appendChild(span2);

    nav.appendChild(menuCnt);

      const reservationCnt = document.createElement('div');
      reservationCnt.classList.add("reservationCnt");

        const reservation = document.createElement('button');
        reservation.classList.add("reservation");
        reservation.textContent = "reservation";

      reservationCnt.appendChild(reservation);

        const span3 = document.createElement('div');
        span3.classList.add("span3");

      reservationCnt.appendChild(span3);

    nav.appendChild(reservationCnt);
   

      const aboutCnt = document.createElement('div');
      aboutCnt.classList.add("aboutCnt");

        const about = document.createElement('button');
        about.classList.add("about");
        about.textContent = "About";

      aboutCnt.appendChild(about);

        const span4 = document.createElement('div');
        span4.classList.add("span4");

      aboutCnt.appendChild(span4);

    nav.appendChild(aboutCnt);
  
  header.appendChild(nav);

main.appendChild(header);
}