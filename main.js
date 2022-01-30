//Trigger
const toggler = document.getElementById("theme-change");
//Elements that will change styles
const body = document.getElementsByTagName("body")[0],
    firstTitle = document.getElementById("first-title");
    secondTitle = document.getElementById("second-title"),
    cards = document.querySelectorAll(".card");


toggler.addEventListener("input", function(){
    if (toggler.checked == true){
        body.classList.add("body-light");
        firstTitle.classList.add("first-title--light");
        secondTitle.classList.add("second-title--light");

        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add("card--light");
        }
    }
    else{
        body.classList.remove("body-light");
        firstTitle.classList.remove("first-title--light");
        secondTitle.classList.remove("second-title--light");

        for(let i = 0; i < cards.length; i++){
            cards[i].classList.remove("card--light");
        }
    }
})
