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

//Javascript til at fange vores data fra wordpress apiet til månedens vine og vinsmagning og events
function getData(categoryID,specificFunction){     
fetch(baseURL+`/posts?categories=${categoryID}&per_page=20`)
    .then(res => res.json())
    .then(data=> specificFunction(data))  
    .catch(err => console.log("Error: ",err))
}

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

//her udføres funktionen som skal vise månedens vine
getData(13,renderWinePosts)


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

//her udføres funktionen som skal vise vinsmagning og event CTA posts
getData(14,renderEventPosts)


const eventImg = document.querySelector(".specifikImg")
const eventIntro = document.querySelector(".specifikIntro")
const eventTime = document.querySelector(".specifikTime")
const eventLocation = document.querySelector(".specifikLocation")
const eventPrice = document.querySelector(".specifikPrice")
const eventDescription = document.querySelector(".specfikDescription")
const eventButton = document.querySelector(".specifikButton")

// function getUrlParameter(){
// const Getquery = window.location.search;
// const Getid = Getquery.split("=")[1];
// return Getid;
// }

function getSpecificEvents(Getid, specificFunction){
    fetch(baseURL+`/posts/${Getid}`)
    .then(res => res.json())
    .then(data => {
        specificFunction(data)
    })
    .catch(err => console.log(err))
}

function renderID(ids){
ids.forEach(id =>{
    const Getid = id.id
    Getid.href = baseURL+`/posts/${Getid}`
})
}

function renderEvents(event){
const specifikImg = document.createElement("img")
const specifikMainTitle = document.createElement("h1")
const specifikSnackDescription = document.createElement("p")
const specifikTime = document.createElement("p")
const specifikLocation = document.createElement("p")
const specifikPrice = document.createElement("p")
const specifikDescription = document.createElement("p")

specifikImg.src = event.acf.image.sizes.medium
specifikMainTitle.textContent = event.acf.title
specifikSnackDescription.textContent = event.acf.snack_description
specifikTime.textContent = event.acf.date
specifikLocation.textContent = event.acf.location
specifikPrice.textContent = event.acf.price
specifikDescription.textContent = event.acf.description

eventImg.append(specifikImg)
eventIntro.append(specifikMainTitle,specifikSnackDescription)
eventTime.append(specifikTime)
eventLocation.append(specifikLocation)
eventPrice.append(specifikPrice)
eventDescription.append(specifikDescription)
};

eventButton.addEventListener("click",function(e){
    window.location.href = baseURL+`/posts/${id}` 
});

getSpecificEvents(Getid,renderEvents)



