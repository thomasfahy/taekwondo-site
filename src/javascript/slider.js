// scripts/slider.js

let slideIndex = 0;

// Function to show the next slide
function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    
    // Loop through slides and reset them
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Loop through dots and reset them
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length - 1) {slideIndex = 0} // Loop back to the first slide
    
    // Display the current slide
    slides[slideIndex].style.display = "block";  
    
    // Activate the corresponding dot
    dots[slideIndex].className += " active";
    
    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}
