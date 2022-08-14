export const createReservation = () => {

    const main = document.getElementById("main");

        const contant = document.createElement("div");
        contant.classList.add("contant");

            const reservationBg = document.createElement("div");
            reservationBg.classList.add("reservation-bg");
                
                const reservationContainer = document.createElement("div");
                reservationContainer.classList.add("reservation-container");

                    const reservationTitle = document.createElement("p");
                    reservationTitle.classList.add("reservation-title");
                    reservationTitle.textContent = "RESERVATION";

                reservationContainer.appendChild(reservationTitle);

                    const reservationIntro = document.createElement("p");
                    reservationIntro.classList.add("reservation-intro");
                    reservationIntro.textContent = "Let's Book a Table";

                reservationContainer.appendChild(reservationIntro);
        
                    const form = document.createElement("form");
                    form.classList.add("form");  

                        const firstNameCtnr = document.createElement("div");
                            const firstNameLbl = document.createElement("label");
                            firstNameLbl.setAttribute("for", "firstName");
                            firstNameLbl.setAttribute("class", "label first-name");  
                            firstNameLbl.textContent = "First Name";

                                let br1 = document.createElement("br");
                            firstNameLbl.appendChild(br1);

                                const firstName = document.createElement("input");
                                firstName.setAttribute("type", "text");
                                firstName.setAttribute("name", "firstName");
                                firstName.setAttribute("id", "firstName"); 
                                firstName.setAttribute("required", ""); 


                            firstNameLbl.appendChild(firstName);
                        firstNameCtnr.appendChild(firstNameLbl);
                    form.appendChild(firstNameCtnr);

                        const lastNameCtnr = document.createElement("div");
                            const lastNameLbl = document.createElement("label");
                            lastNameLbl.setAttribute("for", "lastName");
                            lastNameLbl.setAttribute("class", "label last-name");  
                            lastNameLbl.textContent = "Last Name";

                                let br2 = document.createElement("br");
                            lastNameLbl.appendChild(br2);

                                const lastName = document.createElement("input");
                                lastName.setAttribute("type", "text");
                                lastName.setAttribute("name", "lastName");
                                lastName.setAttribute("id", "lastName");       
                                lastName.setAttribute("required", ""); 


                            lastNameLbl.appendChild(lastName);
                        lastNameCtnr.appendChild(lastNameLbl);
                    form.appendChild(lastNameCtnr);

                        const noofPersonsCtnr = document.createElement("div");
                            const noofPersonsLbl = document.createElement("label");
                            noofPersonsLbl.setAttribute("for", "noofPersons");
                            noofPersonsLbl.setAttribute("class", "label noofPersons");  
                            noofPersonsLbl.textContent = "Guests";

                                let br3 = document.createElement("br");
                            noofPersonsLbl.appendChild(br3);

                                const noofPersons = document.createElement("input");
                                noofPersons.setAttribute("type", "number");
                                noofPersons.setAttribute("name", "persons");
                                noofPersons.setAttribute("id", "noofPersons"); 
                                noofPersons.setAttribute("pattern", "[1-8]{1}"); 
                                noofPersons.setAttribute("required", ""); 


                            noofPersonsLbl.appendChild(noofPersons);
                        noofPersonsCtnr.appendChild(noofPersonsLbl);
                    form.appendChild(noofPersonsCtnr);

                        const phoneNumCtnr = document.createElement("div");
                            const phoneNumLbl = document.createElement("label");
                            phoneNumLbl.setAttribute("for", "phoneNum");
                            phoneNumLbl.setAttribute("class", "label phoneNum");  
                            phoneNumLbl.textContent = "Phone Number";    
                            
                                let br6 = document.createElement("br");
                            phoneNumLbl.appendChild(br6);
                        
                                const phoneNum = document.createElement("input");
                                phoneNum.setAttribute("type", "number");
                                phoneNum.setAttribute("name", "phoneNum");
                                phoneNum.setAttribute("id", "phoneNum"); 
                                phoneNum.setAttribute("required", ""); 


                            phoneNumLbl.appendChild(phoneNum);
                        phoneNumCtnr.appendChild(phoneNumLbl);
                    form.appendChild(phoneNumCtnr);

                        const emailCtnr = document.createElement("div");
                            const emailLbl = document.createElement("label");
                            emailLbl.setAttribute("for", "email");
                            emailLbl.setAttribute("class", "label email");  
                            emailLbl.textContent = "E-mail ";       
                                
                                let br7 = document.createElement("br");
                            emailLbl.appendChild(br7);

                              
      
                        const dateCtnr = document.createElement("div");
                            const dateLbl = document.createElement("label");
                            dateLbl.setAttribute("for", "date");
                            dateLbl.setAttribute("class", "label date");  
                            dateLbl.textContent = "Date";

                                let br4 = document.createElement("br");
                            dateLbl.appendChild(br4);

                    
                                const date = document.createElement("input");
                                date.setAttribute("type", "date");
                                date.setAttribute("name", "date");
                                date.setAttribute("id", "date"); 

                            dateLbl.appendChild(date);
                        dateCtnr.appendChild(dateLbl);
                    form.appendChild(dateCtnr);

                        const timeCtnr = document.createElement("div");
                            const timeLbl = document.createElement("label");
                            timeLbl.setAttribute("for", "time");
                            timeLbl.setAttribute("class", " label time");  
                            timeLbl.textContent = "Time";     
                                
                                let br5 = document.createElement("br");
                            timeLbl.appendChild(br5);

                                const time = document.createElement("input");
                                time.setAttribute("type", "time");
                                time.setAttribute("name", "time");
                                time.setAttribute("id", "time"); 

                            timeLbl.appendChild(time);
                        timeCtnr.appendChild(timeLbl);
                        
                    form.appendChild(timeCtnr);

                        

                        const email = document.createElement("input");
                            email.setAttribute("type", "email");
                            email.setAttribute("name", "email");
                            email.setAttribute("id", "email"); 

                            emailLbl.appendChild(email);
                        emailCtnr.appendChild(emailLbl);        
                    form.appendChild(emailCtnr);

                        const checkBtn = document.createElement("button");
                            checkBtn.setAttribute("type", "submit");
                            checkBtn.setAttribute("class", "submit");
                            checkBtn.textContent = "Check For Availability";     
                    form.appendChild(checkBtn);

                reservationContainer.appendChild(form);

                   
                       
            reservationBg.appendChild(reservationContainer);    
            
        contant.appendChild(reservationBg);

    main.appendChild(contant);

}
