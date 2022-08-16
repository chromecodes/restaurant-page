export const createAbout = ()=>{
let tempText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloribus possimus iste quidem explicabo animi reprehenderit porro aspernatur quibusdam amet commodi, delectus temporibus necessitatibus officiis voluptatibus, rem esse quae dignissimos!"

    const main = document.getElementById("main");

        const contant = document.createElement("div");
        contant.classList.add("contant");

            const aboutCnt = document.createElement("div");
            aboutCnt.classList.add("about-cnt");
            
              const aboutSet1 = document.createElement("div");
              aboutSet1.classList.add("about-set1");

                const aboutStryCnt = document.createElement('div');
                aboutStryCnt.classList.add("story-Cnt");
          
                  const aboutStrytil = document.createElement('p');
                  aboutStrytil.classList.add("story-til");
                  aboutStrytil.textContent = "Our Path";
          
                aboutStryCnt.appendChild(aboutStrytil);
          
                  const span1 = document.createElement('div');
                  span1.classList.add("about-span1");
          
                aboutStryCnt.appendChild(span1);
       
                  const aboutStry = document.createElement('p');
                  aboutStry.classList.add("story");
                  aboutStry.textContent = tempText;

                aboutStryCnt.appendChild(aboutStry);

              aboutSet1.appendChild(aboutStryCnt);

                const aboutChfCnt = document.createElement('div');
                aboutChfCnt.classList.add("cheif-Cnt");
                  
                  const aboutChftil = document.createElement('p');
                  aboutChftil.classList.add("cheif-til");
                  aboutChftil.textContent = "Our Cheifs";
        
                aboutChfCnt.appendChild(aboutChftil);
        
                  const span2 = document.createElement('div');
                  span2.classList.add("about-span1");
        
                aboutChfCnt.appendChild(span2);        

                  const aboutChfNam1 = document.createElement('p');
                  aboutChfNam1.classList.add("cheif-nam");
                  aboutChfNam1.textContent = "Name-1";
              
                aboutChfCnt.appendChild(aboutChfNam1);

                  const span3 = document.createElement('div');
                  span3.classList.add("about-span2");
                aboutChfCnt.appendChild(span3);        

                  const aboutChf1 = document.createElement('p');
                  aboutChf1.classList.add("cheif");
                  aboutChf1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

                aboutChfCnt.appendChild(aboutChf1);        

                  const aboutChfNam2 = document.createElement('p');
                  aboutChfNam2.classList.add("cheif-nam");
                  aboutChfNam2.textContent = "Name-1";
              
                aboutChfCnt.appendChild(aboutChfNam2);

                  const span4 = document.createElement('div');
                  span4.classList.add("about-span2");
                aboutChfCnt.appendChild(span4);        

                  const aboutChf2 = document.createElement('p');
                  aboutChf2.classList.add("cheif");
                  aboutChf2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
                  
                aboutChfCnt.appendChild(aboutChf2);        

              aboutSet1.appendChild(aboutChfCnt);

            aboutCnt.appendChild(aboutSet1);

              const aboutSet2 = document.createElement("div");
              aboutSet2.classList.add("about-set2");

                const blur = document.createElement('div');
                blur.classList.add("blur");
                aboutSet2.appendChild(blur);   

            aboutCnt.appendChild(aboutSet2);

            
              const aboutSet3 = document.createElement("div");
              aboutSet3.classList.add("about-set3");

                const timeCnt = document.createElement("div");
                timeCnt.classList.add("time-cnt");
                  
                  const timetil = document.createElement('p');
                  timetil.classList.add("time-til");
                  timetil.textContent = "Opening hours";
        
                timeCnt.appendChild(timetil);

                  const span5 = document.createElement('div');
                  span5.classList.add("about-span3");

                timeCnt.appendChild(span5);        

                  const monThurday = document.createElement('p');
                  monThurday.classList.add("day");
                  monThurday.textContent = "Monday - Thursday";

                timeCnt.appendChild(monThurday);

                  const monThurtime = document.createElement('p');
                  monThurtime.classList.add("time");
                  monThurtime.textContent = "11.30 AM - 10.30 PM";
        
                timeCnt.appendChild(monThurtime);

                  const friSunday = document.createElement('p');
                  friSunday.classList.add("day");
                  friSunday.textContent = "Friday - Sunday";
                          
                timeCnt.appendChild(friSunday);
        
                  const friSuntime = document.createElement('p');
                  friSuntime.classList.add("time");
                  friSuntime.textContent = "11.30 AM - 11.45 PM";

                timeCnt.appendChild(friSuntime);
  
              aboutSet3.appendChild(timeCnt);

                const newsLetterCnt = document.createElement("div");
                newsLetterCnt.classList.add("news-cnt");

                  const newsLetterTil1 = document.createElement('p');
                  newsLetterTil1.classList.add("news-til");
                  newsLetterTil1.textContent = "Get Spicy offers";

                newsLetterCnt.appendChild(newsLetterTil1);

                  const newsLetterTil2= document.createElement('p');
                  newsLetterTil2.classList.add("news-til");
                  newsLetterTil2.textContent = "and Baking updates.";
                newsLetterCnt.appendChild(newsLetterTil2);


                  const newsLetterEmailCnt = document.createElement("div");
                  newsLetterEmailCnt.classList.add("email-cnt");

                    const newsLetterEmailBtn = document.createElement('button');
                    newsLetterEmailBtn.classList.add("email-btn");
                    newsLetterEmailBtn.textContent = "Subcribe";
                  newsLetterEmailCnt.appendChild(newsLetterEmailBtn);

                    const newsLetterEmail = document.createElement('input');
                    newsLetterEmail.classList.add("email");
                    newsLetterEmail.setAttribute("placeholder", "E-mail");
                    newsLetterEmail.setAttribute("required", ""); 
                  newsLetterEmailCnt.appendChild(newsLetterEmail);

                    

                newsLetterCnt.appendChild(newsLetterEmailCnt);

              aboutSet3.appendChild(newsLetterCnt);

                const addressCnt = document.createElement("div");
                addressCnt.classList.add("address-cnt");

                  const addressTil = document.createElement('p');
                  addressTil.classList.add("address-til");
                  addressTil.textContent = "Address";
        
                addressCnt.appendChild(addressTil);

                  const span6 = document.createElement('div');
                  span6.classList.add("about-span4");

                addressCnt.appendChild(span6);        

                  const address = document.createElement('p');
                  address.classList.add("address");
                  address.textContent = "10 Ichiraku street, Konoaha.";
                addressCnt.appendChild(address);   

                  const addressPhoneNum = document.createElement('p');
                  addressPhoneNum.classList.add("address");
                  addressPhoneNum.textContent = "+10 101010101010";
                addressCnt.appendChild(addressPhoneNum);        

                  const addressEmail = document.createElement('p');
                  addressEmail.classList.add("address");
                  addressEmail.textContent = "Ichiraku&izumi@konoaha.com";
                addressCnt.appendChild(addressEmail);        
              
              aboutSet3.appendChild(addressCnt);

            aboutCnt.appendChild(aboutSet3);

              const aboutfoot = document.createElement("div");
              aboutfoot.classList.add("about-foot");

            aboutCnt.appendChild(aboutfoot);

        contant.appendChild(aboutCnt);

    main.appendChild(contant);


}