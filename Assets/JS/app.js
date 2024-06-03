const baseURL = 'https://api.mastth.dk/wp-json/wp/v2';

function fetchURL(baseURL){
fetch(baseURL)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log("Error", err))
}

function getWinePosts(){

}

function getEventPosts(){

}

function renderWinePosts(){

}

function rendereEventPosts(){

}