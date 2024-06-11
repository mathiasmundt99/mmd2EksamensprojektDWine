const ForsidebaseURL = 'https://api.mastth.dk/wp-json/wp/v2';
const forsideSectionVin = document.querySelector(".månedensVine");

function getHomePageData(categoryID,specificFunction){     
    console.log('getHomePageData:', getHomePageData)
    fetch(ForsidebaseURL+`/posts?categories=${categoryID}&per_page=3`)
        .then(res => res.json())
        .then(data=> specificFunction(data))  
        .catch(err => console.log("Error: ",err))
    }
        
        //funktion til at vise dataen til månedens vine som vi har hentet fra apiet
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

        getHomePageData(13,renderForsideWinePosts)

 