// javascript til burgermenuen
//Her fanger vi de to klasser .burgerMenu og .navMenu da disse skal bruges til at gøre burgermenuen funktionel
const burgerMenu = document.querySelector(".burgerMenu");
const navMenu = document.querySelector(".navMenu");

//Her tilføjer vi en eventlistener på burgermenuen, så når der trykkes på den toggles klassen active på både .burgermMenu og .navMenu. Toggle betyder at klassen kan slåes fra og til
burgerMenu.addEventListener("click", ()=>{
    burgerMenu.classList.toggle("active")
   navMenu.classList.toggle("active")
})

//her fanges alle links i navigationen, og når der trykkes på et link så fjerner den klassen .active. Denne funktion gør at navigation lukker når der trykkes på et link.
document.querySelectorAll(".navLink").forEach(closenav => closenav.addEventListener("click", ()=>{
    burgerMenu.classList.remove("active")
   navMenu.classList.remove("active")
}))

//Javascript til at fange vores data fra headless cms
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