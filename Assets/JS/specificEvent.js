const eventImg = document.querySelector(".specifikImg")
const eventIntro = document.querySelector(".specifikIntro")
const eventTime = document.querySelector(".specifikTime")
const eventLocation = document.querySelector(".specifikLocation")
const eventPrice = document.querySelector(".specifikPrice")
const eventDescription = document.querySelector(".specfikDescription")


let id = getPostIdFromUrl()

function mediaQuery(specifikImg, event){
    if(window.innerWidth > 1024){
        specifikImg.src = event.acf.image.sizes.large;
    }
    else {
        specifikImg.src = event.acf.image.sizes.medium;
    }
}

    function renderEvents(event){
        const specifikImg = document.createElement("img")
        const specifikMainTitle = document.createElement("h1")
        const specifikSnackDescription = document.createElement("p")
        const specifikTime = document.createElement("p")
        const specifikLocation = document.createElement("p")
        const specifikPrice = document.createElement("p")
        const specifikDescription = document.createElement("p")

        mediaQuery(specifikImg, event)
        window.addEventListener('resize', () => mediaQuery(specifikImg, event));
        
        specifikMainTitle.textContent = event.acf.title
        specifikSnackDescription.textContent = event.acf.snack_description
        specifikTime.textContent = event.acf.date
        specifikLocation.textContent = event.acf.location
        specifikPrice.textContent = event.acf.price + "kr."
        specifikDescription.textContent = event.acf.description
        
        eventImg.append(specifikImg)
        eventIntro.append(specifikMainTitle,specifikSnackDescription)
        eventTime.append(specifikTime)
        eventLocation.append(specifikLocation)
        eventPrice.append(specifikPrice)
        eventDescription.append(specifikDescription)

        };

        getIdData(id, renderEvents)
        