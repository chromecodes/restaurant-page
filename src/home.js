export const createHomePage = () => {
  const main = document.getElementById("main");

    const contant = document.createElement("div");
    contant.classList.add("contant");

      const left = document.createElement("div");
      left.classList.add("left");

        const intro = document.createElement("div");
        intro.classList.add("intro");

          const line1 = document.createElement("div");
          line1.classList.add("line1");
          line1.textContent = "Discover your taste";

        intro.appendChild(line1);

          const line2 = document.createElement("div");
          line2.classList.add("line2");
          line2.textContent = "Eat tasty and healthy food";

        intro.appendChild(line2);

          const line3 = document.createElement("button");
          line3.classList.add("line3");
          line3.textContent = "Take a look";

        intro.appendChild(line3);

      left.appendChild(intro);

        const homeIcons = document.createElement("div");
        homeIcons.classList.add("home-icons");

          const homeI1 = document.createElement("div")
          homeI1.classList.add("home-icon-1");

        homeIcons.appendChild(homeI1);
        
          const homeI2 = document.createElement("div")
          homeI2.classList.add("home-icon-2");

        homeIcons.appendChild(homeI2);

        const homeI3 = document.createElement("div")
          homeI3.classList.add("home-icon-3");

        homeIcons.appendChild(homeI3);

        const homeI4 = document.createElement("div")
          homeI4.classList.add("home-icon-4");

        homeIcons.appendChild(homeI4);

      left.appendChild(homeIcons);

    contant.appendChild(left);

      const right = document.createElement("div");
      right.classList.add("right");

        const radio1 = document.createElement("input");
        radio1.setAttribute("type", "radio");
        radio1.setAttribute("name", "radio-btn");
        radio1.setAttribute("id", "radio1");
        radio1.checked = true;

      right.appendChild(radio1);

        const radio2 = document.createElement("input");
        radio2.setAttribute("type", "radio");
        radio2.setAttribute("name", "radio-btn");
        radio2.setAttribute("id", "radio2");

      right.appendChild(radio2);

        const radio3 = document.createElement("input");
        radio3.setAttribute("type", "radio");
        radio3.setAttribute("name", "radio-btn");
        radio3.setAttribute("id", "radio3");

      right.appendChild(radio3);

        const radio4 = document.createElement("input");
        radio4.setAttribute("type", "radio");
        radio4.setAttribute("name", "radio-btn");
        radio4.setAttribute("id", "radio4");

      right.appendChild(radio4);

        const radio5 = document.createElement("input");
        radio5.setAttribute("type", "radio");
        radio5.setAttribute("name", "radio-btn");
        radio5.setAttribute("id", "radio5");

      right.appendChild(radio5);

        const radio6 = document.createElement("input");
        radio6.setAttribute("type", "radio");
        radio6.setAttribute("name", "radio-btn");
        radio6.setAttribute("id", "radio6");

      right.appendChild(radio6);

      //   const radio7 = document.createElement("input");
      //   radio7.setAttribute("type", "radio");
      //   radio7.setAttribute("name", "radio-btn");
      //   radio7.setAttribute("id", "radio7");

      // right.appendChild(radio7);

        const slider = document.createElement("div");
        slider.classList.add("slider");

          const label1 = document.createElement("label");
          label1.setAttribute("for", "radio1");
          label1.setAttribute("class", "slider-btn");
          label1.setAttribute("id", "radio-1");

        slider.appendChild(label1);

          const label2 = document.createElement("label");
          label2.setAttribute("for", "radio2");
          label2.setAttribute("class", "slider-btn");
          label2.setAttribute("id", "radio-2");

        slider.appendChild(label2);

          const label3 = document.createElement("label");
          label3.setAttribute("for", "radio3");
          label3.setAttribute("class", "slider-btn");
          label3.setAttribute("id", "radio-3");

        slider.appendChild(label3);

          const label4 = document.createElement("label");
          label4.setAttribute("for", "radio4");
          label4.setAttribute("class", "slider-btn");
          label4.setAttribute("id", "radio-4");

        slider.appendChild(label4);

          const label5 = document.createElement("label");
          label5.setAttribute("for", "radio5");
          label5.setAttribute("class", "slider-btn");
          label5.setAttribute("id", "radio-5");

        slider.appendChild(label5);

          const label6 = document.createElement("label");
          label6.setAttribute("for", "radio6");
          label6.setAttribute("class", "slider-btn");
          label6.setAttribute("id", "radio-6");

        slider.appendChild(label6);

          // const label7 = document.createElement("label");
          // label7.setAttribute("for", "radio7");
          // label7.setAttribute("class", "slider-btn");
          // label7.setAttribute("id", "radio-7");

        // slider.appendChild(label7);

      right.appendChild(slider);

        const imgs = document.createElement("div");
        imgs.classList.add("imgs");

          const picture1 = document.createElement("img");
          picture1.classList.add("pic");
          picture1.classList.add("first");
          picture1.setAttribute("src", "/imgs/p1.png");

        imgs.appendChild(picture1);

          const picture2 = document.createElement("img");
          picture2.classList.add("pic");
          picture2.setAttribute("src", "/imgs/p2.png");

        imgs.appendChild(picture2);

          const picture3 = document.createElement("img");
          picture3.classList.add("pic");
          picture3.setAttribute("src", "/imgs/p3.png");

        imgs.appendChild(picture3);

          const picture4 = document.createElement("img");
          picture4.classList.add("pic");
          picture4.setAttribute("src", "/imgs/p4.png");

        imgs.appendChild(picture4);

          const picture5 = document.createElement("img");
          picture5.classList.add("pic");
          picture5.setAttribute("src", "/imgs/p5.png");

        imgs.appendChild(picture5);

          const picture6 = document.createElement("img");
          picture6.classList.add("pic");
          picture6.setAttribute("src", "/imgs/p6.png");

        imgs.appendChild(picture6);

        //   const picture7 = document.createElement("img");
        //   picture7.classList.add("pic");
        //   picture7.setAttribute("src", "../dist/img/p7.png");

        // imgs.appendChild(picture7);

      right.appendChild(imgs);

    contant.appendChild(right);

  main.appendChild(contant);

  let radios = [radio1, radio2, radio3, radio4, radio5, radio6 ]; 

    let i = 1;
    setInterval(() => {
      if(i === radios.length){
        i = 0;
      }
      radios[i].checked = true;
      i++;
    }, 6000);
};

