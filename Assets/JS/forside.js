//Her laves variabler som skal bruges i senere funktioner
const ForsidebaseURL = 'https://api.mastth.dk/wp-json/wp/v2';
const forsideSectionVin = document.querySelector(".maanedensVine");

//Denne funktion bruges til at fetche data fra ForsidebaseURL og denne funktion skal kaldes til sidst for at vise indholdet sammen med en funktion hvor indholdet er indsat og appendet. 
function getHomePageData(categoryID,specificFunction){     
    fetch(ForsidebaseURL+`/posts?categories=${categoryID}&per_page=3`)
        .then(res => res.json())
        .then(data=> specificFunction(data))  
        .catch(err => console.log("Error: ",err))
    }
        
       //denne funktion bruges til at lave elementerne hvor data kan indsættes, hente dataen og sætte det ind i de elementerne som er lavet og til sidst vises(appendes) i den variabel som vi har lavet øverst på siden
        function renderForsideWinePosts(winePosts) {
            console.log('renderForsideWinePosts:', renderForsideWinePosts)
            winePosts.forEach((winePost) => {
                const articleEl = document.createElement("article");
                forsideSectionVin.append(articleEl);
                
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
                price.textContent = "Pris pr. glas: " + winePost.acf.price + " kr.";
                buttonMV.innerHTML = `<a href="${winePost.acf.link_to_webshop}" target="_blank">Læs mere om vinen</a>`;
        
                articleEl.append(title, label, image, description, price, buttonMV);
            });
        }

        //her kaldes funktion som til sidst indsætter det de 3 vine på forisden ved hjælp af det specifikke id og den funktion hvor indholdet er indsat og appendet via.
        getHomePageData(13,renderForsideWinePosts)

// Kilde https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.querySelectorAll(".heroSectionForside picture img");

    //Her ittereres igennem alle slides, og der sættes display = none på slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    // Her kører et loop som kontrolere om slideIndex er større end slide.lenght
    // Hvis/Når den bliver større end .lentgh sættes slideIndex tilbage til 1
    // Hvilket giver et loop hvor den køre hele tiden
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    

    slides[slideIndex-1].style.display = "block";  
}

setInterval(showSlides, 3000);

showSlides() 


 