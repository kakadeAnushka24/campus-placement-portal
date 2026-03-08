// Search Function

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function(){

let searchValue = searchInput.value.toLowerCase();

cards.forEach(card => {

let text = card.innerText.toLowerCase();

if(text.includes(searchValue)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});


// Filter Function

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

document.querySelector(".active").classList.remove("active");
button.classList.add("active");

let category = button.dataset.category;

cards.forEach(card => {

if(category === "all" || card.dataset.category === category){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});

});