let slideIndex = 0;
showSlides();



// Kilde https://www.w3schools.com/howto/howto_js_slideshow.asp
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slidesImg");
    let dots = document.getElementsByClassName("dot");
    //Her ittereres igennem alle slides, og der sættes display= none på slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    // Her kører et loop som kontrolere om slideIndex er større end slide.lenght
    // Hvis/Når den bliver større end .lentgh sættes slideIndex tilbage til 1
    // Hvilket giver et loop hvor den køre hele tiden
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    // Her ittereres igennem alle dots og fjerner "active"
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Her sættes slide til display = block, baseret på slideIndex
    slides[slideIndex-1].style.display = "block";  
    // Her sættes dots igen til active baseret på slideIndex
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3500); 
  }