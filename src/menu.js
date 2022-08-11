const menuBook = {
    Ramen : [
        "Ramen",
        {
        name : "Ichiraku Miso Pork Ramen",
        price: "$15",
        content: "Contains Pork Slices, Narutomaki, Eggs."
        },

        {
            name : "Ichiraku Miso Chicken Ramen",
            price: "$15",
            content: "Contains Chicken Slices, Narutomaki, Eggs."
        },
        
        {
            name : "Ichiraku Veg Ramen",
            price: "$15",
            content: "Contains Mushroom Slices, Bok Choy."
        },
    ],

    Sushi : [
        "Sushi",
        {
            name : "Ebi Sushi",
            price: "$15",
            content: "Shrimp Sushi"
        },
        
        {
            name : "Sake Sushi",
            price: "$15",
            content: "Smoked Salmon Sushi"
        },
        {
            name : "Kani Sushi",
            price: "$15",
            content: "Crab Sushi"
        },
    ],
    Burger : [
        "Burger",
        {
        name : "Chicken Burger",
        price: "$15",
        content: "Contains Chicken, cheese, ketchup and mustard."
        },

        {
            name : "Cheese Burger",
            price: "$15",
            content: "Contains Extra cheese, ketchup and mustard."
        },
        
        {
            name : "Veg Burger",
            price: "$15",
            content: "Contains leattes, tomato Slices, ketchup and mustard."
        },
    ],
    Cakes : [
        "Cakes",
        {
        name : "Iori Cherry Cake",
        price: "$15",
        content: "Fluffy Cake With cherry Toppings."
        },

        {
            name : "Iori Cholocate Cake",
            price: "$15",
            content: "Cholocate Cake With Cream Topping."
        },
        
        {
            name : "Iori Vanillia Cake",
            price: "$15",
            content: "Vanillia Cake With Cholocate and Cream Topping."
        },
    ],
    Desserts : [
        "Desserts",
        {
        name : "Strawberry Ice cream",
        price: "$15",
        content: "Strawberry flavour with nuts Toppings."
        },

        {
            name : "Rolled Ice cream",
            price: "$15",
            content: "Five different types of flavour."
        },
        
        {
            name : "Frozen Yogurt Ice cream",
            price: "$15",
            content: "Flavoured Yougurt with fresh berry Toppings."
        },
    ],
    Drinks : [
        "Drinks",
        {
        name : "Green Punch",
        price: "$15",
        content: "Blend of Greens with Nut milk."
        },

        {
            name : "Cholocate Ice cream Shake",
            price: "$15",
            content: "Cholocate flavour shake with Cholocate chips toppings."
        },
        
        {
            name : "Yogurt Punch",
            price: "$15",
            content: "Blend of Yougurt with fresh berry Toppings."
        },
    ],
}


export const createMenu = () => {

    const main = document.getElementById("main");

        const contant = document.createElement("div");
        contant.classList.add("contant");
        
            const menuContainer = document.createElement("div");
            menuContainer.classList.add("menu-container");

                const menuTitle = document.createElement("p");
                menuTitle.classList.add("menu-title");
                menuTitle.textContent = "MENU";

            menuContainer.appendChild(menuTitle);

                const menuIntro = document.createElement("p");
                menuIntro.classList.add("menu-intro");
                menuIntro.textContent = "Discover your taste";

            menuContainer.appendChild(menuIntro);

                const menu = document.createElement("div");
                menu.classList.add("menu-page");


                menu.appendChild(createMenu(menuBook.Ramen));
                menu.appendChild(createMenu(menuBook.Sushi));

                menu.appendChild(createMenu(menuBook.Burger));
                menu.appendChild(createMenu(menuBook.Cakes));

                menu.appendChild(createMenu(menuBook.Desserts));
                menu.appendChild(createMenu(menuBook.Drinks));
                

                    



                        


            menuContainer.appendChild(menu);

        contant.appendChild(menuContainer);
    main.appendChild(contant);

    
    function createMenu (obj) {

        let tempCntr = document.createElement("div");
            tempCntr.classList.add('menuLine-cntr');

                let tempTite = document.createElement("div");
                tempTite.classList.add('menuLine-title');
                tempTite.textContent = obj[0];

                tempCntr.appendChild(tempTite);

                for (let i = 1; i<4; i++){
                    let tempWapr = document.createElement('div');
                    tempWapr.classList.add('menuLines-wrap');
                    let temp1 = document.createElement("span");
                        temp1.classList.add("menuLine-1");
                        temp1.textContent = obj[i].name;
                    tempWapr.appendChild(temp1);
                    let tempHr = document.createElement("hr");
                    tempWapr.appendChild(tempHr);
                    let temp2 = document.createElement("span");
                        temp2.classList.add("menuLine-2");
                        temp2.textContent = obj[i].price;
                    tempWapr.appendChild(temp2);
               
                tempCntr.appendChild(tempWapr);
                    let temp3 = document.createElement("p");
                    temp3.classList.add("menuLine-3");
                    temp3.textContent = obj[i].content;
                tempCntr.appendChild(temp3);
                }
        return(tempCntr);
    }

}