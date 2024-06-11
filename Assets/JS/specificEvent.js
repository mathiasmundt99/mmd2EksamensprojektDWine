//her laves variablerne som skal bruges til at indsætte det genererede indhold på siden med specifikke events
const eventImg = document.querySelector(".specifikImg")
const eventIntro = document.querySelector(".specifikIntro")
const eventTime = document.querySelector(".specifikTime")
const eventLocation = document.querySelector(".specifikLocation")
const eventPrice = document.querySelector(".specifikPrice")
const eventDescription = document.querySelector(".specfikDescription")

//id'et fra getPostIdFromUrl() fanges i variablen id og kan bruges i senere funktioner
let id = getPostIdFromUrl()

//denne funktion gør at hvis skærmstørrelsen er større end 1024 i width så vises det store billede fra api'et. hvis skærmstørrelsen er mindre vises det medium billede
function mediaQuery(specifikImg, event){
    if(window.innerWidth > 1024){
        specifikImg.src = event.acf.image.sizes.large;
    }
    else {
        specifikImg.src = event.acf.image.sizes.medium;
    }
}

//denne funktion bruges til at lave elementerne hvor data kan indsættes, hente dataen og sætte det ind i de elementerne som er lavet og til sidst vises(appendes) i de variabler som vi har lavet øverst på siden
    function renderEvents(event){
        const specifikImg = document.createElement("img")
        const specifikMainTitle = document.createElement("h1")
        const specifikSnackDescription = document.createElement("p")
        const specifikTime = document.createElement("p")
        const specifikLocation = document.createElement("p")
        const specifikPrice = document.createElement("p")
        const specifikDescription = document.createElement("p")

        //her kaldes mediaQuery funktionen
        mediaQuery(specifikImg, event)
        //her laves en eventlistener som gør at hvis skærmstørrelsen ændres undervejs, så bliver funktion mediaQuery kaldt og lytter efter ændringer på widthen.
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

        //her kaldes funktion som til sidst indsætter det specifikke event ved hjælp af det specifikke id og den funktion hvor indholdet er indsat og appendet via.
        getIdData(id, renderEvents)
        