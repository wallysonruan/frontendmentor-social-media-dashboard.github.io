//Trigger
const toggler = document.getElementById("theme-change");
//Elements that will change styles
const body = document.getElementsByTagName("body")[0],
    firstTitle = document.getElementById("first-title");
    secondTitle = document.getElementById("second-title"),
    cards = document.getElementsByClassName("card");


toggler.addEventListener("aloha", function(){
    if (toggler.checked == true){
        body.classList.add("body-light");
        firstTitle.classList.add("first-title--light");
        secondTitle.classList.add("second-title--light");
    }
    else{
        body.classList.remove("body-light");
        firstTitle.classList.remove("first-title--light");
        secondTitle.classList.remove("second-title--light");

    }
})

console.log(cards[0].classList.add("card--light"))
