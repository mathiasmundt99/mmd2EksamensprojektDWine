const burgerMenu = document.querySelector(".burgerMenu");
const navMenu = document.querySelector(".navMenu");

burgerMenu.addEventListener("click", ()=>{
    burgerMenu.classList.toggle("active")
   navMenu.classList.toggle("active")
})

document.querySelectorAll(".navLink").forEach(closenav => closenav.addEventListener("click", ()=>{
    burgerMenu.classList.remove("active")
   navMenu.classList.remove("active")
}))

const baseURL = 'https://api.mastth.dk/wp-json/wp/v2';


fetch(baseURL + '/posts')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log("Error", err))



function getWinePosts(){

}

function getEventPosts(){

}

function renderWinePosts(){

}

function rendereEventPosts(){

}