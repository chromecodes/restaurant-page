export const createReservation = () => {

    const main = document.getElementById("main");

        const contant = document.createElement("div");
        contant.classList.add("contant");
            
            const fourm = document.createElement("fourm");
            fourm.classList.add("fourm");  

                const firstNameCtnr = document.createElement("div");
                    const firstNameLbl = document.createElement("label");
                    firstNameLbl.setAttribute("for", "firstName");
                    firstNameLbl.setAttribute("class", "first-name");  
                
                        const firstName = document.createElement("input");
                        firstName.setAttribute("type", "text");
                        firstName.setAttribute("name", "firstName");
                        firstName.setAttribute("id", "firstName"); 

                    firstNameLbl.appendChild(firstName);
                firstNameCtnr.appendChild(firstNameLbl);
            fourm.appendChild(firstNameCtnr);

                const lastNameCtnr = document.createElement("div");
                    const lastNameLbl = document.createElement("label");
                    lastNameLbl.setAttribute("for", "lastName");
                    lastNameLbl.setAttribute("class", "last-name");  
                
                        const lastName = document.createElement("input");
                        lastName.setAttribute("type", "text");
                        lastName.setAttribute("name", "lastName");
                        lastName.setAttribute("id", "lastName"); 

                    lastNameLbl.appendChild(lastName);
                lastNameCtnr.appendChild(lastNameLbl);
            fourm.appendChild(lastNameCtnr);


                const noofPersonsCtnr = document.createElement("div");
                    const noofPersonsLbl = document.createElement("label");
                    noofPersonsLbl.setAttribute("for", "noofPersons");
                    noofPersonsLbl.setAttribute("class", "noofPersons");  
                
                        const noofPersons = document.createElement("input");
                        noofPersons.setAttribute("type", "number");
                        noofPersons.setAttribute("name", "persons");
                        noofPersons.setAttribute("id", "noofPersons"); 

                    noofPersonsLbl.appendChild(noofPersons);
                noofPersonsCtnr.appendChild(noofPersonsLbl);
            fourm.appendChild(noofPersonsCtnr);

            
                const dateCtnr = document.createElement("div");
                    const dateLbl = document.createElement("label");
                    dateLbl.setAttribute("for", "date");
                    dateLbl.setAttribute("class", "date");  
                
                        const date = document.createElement("input");
                        date.setAttribute("type", "date");
                        date.setAttribute("name", "date");
                        date.setAttribute("id", "date"); 

                    dateLbl.appendChild(date);
                dateCtnr.appendChild(dateLbl);
            fourm.appendChild(dateCtnr);

                const phoneNumCtnr = document.createElement("div");
                    const phoneNumLbl = document.createElement("label");
                    phoneNumLbl.setAttribute("for", "phoneNum");
                    phoneNumLbl.setAttribute("class", "phoneNum");  
                
                        const phoneNum = document.createElement("input");
                        phoneNum.setAttribute("type", "number");
                        phoneNum.setAttribute("name", "phoneNum");
                        phoneNum.setAttribute("id", "phoneNum"); 

                    phoneNumLbl.appendChild(phoneNum);
                phoneNumCtnr.appendChild(phoneNumLbl);
            fourm.appendChild(phoneNumCtnr);

                const emailCtnr = document.createElement("div");
                    const emailLbl = document.createElement("label");
                    emailLbl.setAttribute("for", "email");
                    emailLbl.setAttribute("class", "email");  
                
                        const email = document.createElement("input");
                        email.setAttribute("type", "email");
                        email.setAttribute("name", "email");
                        email.setAttribute("id", "email"); 

                    emailLbl.appendChild(email);
                emailCtnr.appendChild(emailLbl);        
            fourm.appendChild(emailCtnr);

        contant.appendChild(fourm);


    main.appendChild(contant);

}