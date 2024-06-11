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
function renderWinePosts(winePosts) {
    winePosts.forEach((winePost) => {
        const articleEl = document.createElement("article");
        sectionVin.append(articleEl);
        
        const title = document.createElement("h3");
        const label = document.createElement("img");
        const image = document.createElement("img");
        const description = document.createElement("p");
        const price = document.createElement("p");
        const buttonMV = document.createElement("div");

        title.textContent = winePost.acf.title;
        label.src = winePost.acf.origin;
        image.src = winePost.acf.image.sizes.large;
        description.textContent = winePost.acf.description;
        price.textContent = "Pris pr. glas: " + winePost.acf.price + ",-";
        // buttonMV.innerHTML = `<a href="${winePost.acf.link_to_webshop}" target="_blank">Læs mere om vinen</a>`;
        buttonMV.innerHTML = `<a href="${winePost.acf.link_to_webshop}" target="_blank">Læs mere om vinen</a>`;
        articleEl.append(title, label, image, description, price, buttonMV);
    });
}

 //funktion til at vise dataen til vinsmagning og events som vi har hentet fra apiet
function renderEventPosts(eventPosts){
    eventPosts.forEach(eventPost =>{
        const articleEvents = document.createElement("article")
        sectionEvents.append(articleEvents)
        const imageEvents = document.createElement("img")
        const titleEvents = document.createElement("h3")
        const date = document.createElement("p")
        const snackDescription = document.createElement("p")
        const buttonEventCta = document.createElement("div")
    
        imageEvents.src = eventPost.acf.image.sizes.medium
        titleEvents.textContent = eventPost.acf.title
        date.textContent = eventPost.acf.location
        snackDescription.textContent = eventPost.acf.snack_description
        buttonEventCta.innerHTML = "<a href = 'specifikEvent.html?id="+eventPost.id + "'>Læs mere om eventet </a>" 
        
        articleEvents.append(imageEvents, titleEvents, date, snackDescription, buttonEventCta)
    })
}

function getIdData(id,specificFunction){     
    fetch(baseURL+`/posts/${id}`)
        .then(res => res.json())
        .then(data=> specificFunction(data))  
        .catch(err => console.log("Error: ",err))
    }

    function getPostIdFromUrl(){
        const queryString = window.location.search
        const urlParameter = new URLSearchParams (queryString)
        const id = urlParameter.get("id")
        return id;
    }


  



