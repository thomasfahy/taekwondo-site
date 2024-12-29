import "../styles/slider.css";

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

// Function to show slides
function showSlides() {
    // Remove 'active' class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Make the current slide active
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');

    // Move the slider container to show the next slide
    const slideWidth = slides[0].clientWidth;
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

// Automatically switch slides every 7 seconds
function startSlideInterval() {
    slideInterval = setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length; // Move to the next slide, loop back to 0 when end
        showSlides();
    }, 7000);
}

// Call the function to start the automatic slide transition
startSlideInterval();

// Dot navigation (clicking on a dot will show the corresponding slide)
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index; // Set the slideIndex to the clicked dot's index
        showSlides(); // Update the slide to match the clicked dot

        // Clear the current interval and restart the auto-slide
        clearInterval(slideInterval);
        startSlideInterval(); // Restart the interval for auto-sliding
    });
});

showSlides();
