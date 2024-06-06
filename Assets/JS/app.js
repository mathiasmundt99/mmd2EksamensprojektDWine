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

//variabler hvor vi gemmer baseurl og sektioner hvor den hentede data senere skal placeres i
const baseURL = 'https://api.mastth.dk/wp-json/wp/v2';
const sectionVin = document.querySelector(".månedensVine");
const sectionEvents = document.querySelector(".eventsCTA")

//Javascript til at fange vores data fra wordpress apiet til månedens vine
    fetch(baseURL+`/posts?categories=13&per_page=20`)
    .then(res => res.json())
    .then(data=> renderWinePosts(data))  
    .catch(err => console.log("Error: ",err))

//funktion til at vise dataen til månedens vine som vi har hentet fra apiet
function renderWinePosts(winePosts){
winePosts.forEach(winePost =>{
    const articleEl = document.createElement("article")
    sectionVin.append(articleEl)
    const title = document.createElement("h3")
    const label = document.createElement("img")
    const image = document.createElement("img")
    const description = document.createElement("p")
    const price = document.createElement("p")
    const buttonMV = document.createElement("button")

    title.textContent = winePost.acf.title
    label.src = winePost.acf.origin
    image.src = winePost.acf.image.sizes.large
    description.textContent = winePost.acf.description
    price.textContent = "Pris pr. glas:"+ winePost.acf.price
    buttonMV.textContent = "Læs mere om vinen"

    articleEl.append(title,label,image,description,price, buttonMV)

})
}


//Javascript til at fange vores data fra wordpress apiet til vinsmagning og events
    fetch(baseURL+`/posts?categories=14&per_page=20`)
    .then(res => res.json())
    .then(data=> renderEventPosts(data))  
    .catch(err => console.log("Error: ",err))

 //funktion til at vise dataen til vinsmagning og events som vi har hentet fra apiet
function renderEventPosts(eventPosts){
    eventPosts.forEach(eventPost =>{
        const articleEvents = document.createElement("article")
        sectionEvents.append(articleEvents)
        const imageEvents = document.createElement("img")
        const titleEvents = document.createElement("h3")
        const date = document.createElement("p")
        const snackDescription = document.createElement("p")
        const buttonEventCta = document.createElement("button")
    
        imageEvents.src = eventPost.acf.image.sizes.medium
        titleEvents.textContent = eventPost.acf.title
        date.textContent = eventPost.acf.location
        snackDescription.textContent = eventPost.acf.snack_description
        buttonEventCta.textContent = "Læs mere om eventet"
    
        articleEvents.append(imageEvents, titleEvents, date, snackDescription, buttonEventCta)
    })
}




// function getWinePosts(){

// }

// function getEventPosts(){

// }

// function renderWinePosts(){

// }

// function rendereEventPosts(){

// }