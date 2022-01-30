//Trigger
const toggler = document.getElementById("theme-change");
//Elements that will change styles
const body = document.getElementsByTagName("body")[0],
    firstTitle = document.getElementById("first-title");
    secondTitle = document.getElementById("second-title"),
    cards = document.querySelectorAll(".card"),
    firstSectionNumbers = document.getElementsByClassName("followers__number"),
    secondSectionNumbers = document.getElementsByClassName("card-secondary__number");


toggler.addEventListener("input", function(){
    if (toggler.checked == true){
        body.classList.add("body-light");
        firstTitle.classList.add("first-title--light");
        secondTitle.classList.add("second-title--light");

        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add("card--light");
        }

        
        for(let i = 0; i < firstSectionNumbers.length; i++){
            firstSectionNumbers[i].classList.add("followers__number--light");
        }

        for(let i = 0; i < secondSectionNumbers.length; i++){
            secondSectionNumbers[i].classList.add("card-secondary__number--light");
        }
    }
    else{
        body.classList.remove("body-light");
        firstTitle.classList.remove("first-title--light");
        secondTitle.classList.remove("second-title--light");

        for(let i = 0; i < cards.length; i++){
            cards[i].classList.remove("card--light");
        }

        for(let i = 0; i < firstSectionNumbers.length; i++){
            firstSectionNumbers[i].classList.remove("followers__number--light");
        }
    }
})
