export const createHomePage = () =>{

    const main =  document.getElementById("main");

    const contant = document.createElement('contant');
    contant.classList.add('contant');


    const left = document.createElement('div');
    left.classList.add('left');

    contant.appendChild(left);

    const right = document.createElement('div');
    right.classList.add('right');

    const imgs = document.createElement('div');
    imgs.classList.add('imgs');

    const p1 = document.createElement('img');
    p1.classList.add('pic');
    p1.setAttribute('src','../src/img/p1.png');

    imgs.appendChild(p1);

    right.appendChild(imgs);

    const slider = document.createElement('div');
    slider.classList.add('slider');

    right.appendChild(slider);

    contant.appendChild(right);

    main.appendChild(contant);
}