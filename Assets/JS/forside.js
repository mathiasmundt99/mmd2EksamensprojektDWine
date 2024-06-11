const baseURL = 'https://api.mastth.dk/wp-json/wp/v2';
const forsideSectionVin = document.querySelector(".homeWineCards");

function getHomePageData(categoryID,specificFunction){     
    fetch(baseURL+`/posts?categories=${categoryID}&per_page=3`)
        .then(res => res.json())
        .then(data=> specificFunction(data))  
        .catch(err => console.log("Error: ",err))
    }

    const winePostsLinks = [
        "https://d-wine.dk/vare/oriol-rossell-reserva-de-la-propietat-rosado-2016/",
        "https://d-wine.dk/vare/llopart-reserva-brut-2019/",
        "https://d-wine.dk/vare/chateau-haut-pougnan-bordeaux-rose-2022/",
        "https://d-wine.dk/vare/schwertfuhrerinnen-chardonnay-2021/",
        "https://d-wine.dk/vare/horny-rose-2023/",
        "https://d-wine.dk/vare/steinbock-grauburgunder-2023/",
        "https://d-wine.dk/vare/trittenheimer-apotheke-laurentiusberg-trocken-gg-2022/",
        "https://d-wine.dk/vare/tresolmos-classic-2022/",
        "https://d-wine.dk/vare/the-cup-rings-albarino-sobre-lias-2019/",
        "https://d-wine.dk/vare/manga-del-brujo-2021/",
        "https://d-wine.dk/vare/dos-dedos-de-frente-2020/",
        "https://d-wine.dk/vare/steinbock-grauburgunder-2023/",
        "https://d-wine.dk/vare/convento-de-las-claras-crianza-2017/",
        "https://d-wine.dk/vare/el-mondongo-2018-2/"
        ]
        
        //funktion til at vise dataen til månedens vine som vi har hentet fra apiet
        function renderForsideWinePosts(winePosts) {
            winePosts.forEach((winePost, linkIndex) => {
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
                buttonMV.innerHTML = `<a href="${winePostsLinks[linkIndex]}" target="_blank">Læs mere om vinen</a>`;
        
                articleEl.append(title, label, image, description, price, buttonMV);
            });
        }

        getHomePageData(13,renderForsideWinePosts)

 