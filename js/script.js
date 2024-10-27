// ========== Navbar Visibility ===========

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 40) { // Change background on a little scroll
        navbar.style.backgroundColor = '#ffffffe2';
        navbar.style.color = '#000'; // Change text color to black
        navbar.style.boxShadow = '0 4px 5px rgba(0, 0, 0, 0.1)'; // Add shadow on scroll

        // Change link colors to black
        const links = navbar.querySelectorAll('a');
        links.forEach(link => {
            link.style.color = '#000'; // Change link color to black
        });
    } else {
        navbar.style.backgroundColor = '#0000006f';
        navbar.style.color = '#ffffffe2'; 
        navbar.style.boxShadow = 'none'; // Remove shadow

        // Reset link colors to white
        const links = navbar.querySelectorAll('a');
        links.forEach(link => {
            link.style.color = 'white'; // Reset link color to white
        });
    }
});

// ============ Side Bar =============

const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('closeButton');

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // Open the sidebar
    closeButton.classList.remove('rotate'); // Reset rotation when opening
});

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open'); // Close the sidebar
    closeButton.classList.toggle('rotate'); // Rotate on close
    setTimeout(() => {
        closeButton.classList.remove('rotate'); // Reset rotation after close animation
    }, 500); // Duration should match the transition time
});

// ====================================

const videoContainer = document.getElementById("ourStoryVideoContainer");
const video = document.getElementById("ourStoryVideo");
const section = document.querySelector(".our-story-video-section");

// Scroll event listener
window.addEventListener("scroll", () => {
    // Calculate the scroll trigger point (20% of section height)
    const sectionTop = section.offsetTop;
    const triggerPoint = sectionTop + section.offsetHeight * 0.2;
    const scrollPosition = window.scrollY + window.innerHeight;

    // Check if user has scrolled to 20% into the section
    if (scrollPosition > triggerPoint) {
        videoContainer.classList.add("enlarged"); // Apply enlarged class
    } else {
        videoContainer.classList.remove("enlarged"); // Remove enlarged class
        video.pause(); // Pause video when out of range
    }
});

// Play video after transition ends and only when enlarged
videoContainer.addEventListener("transitionend", () => {
    if (videoContainer.classList.contains("enlarged")) {
        video.play();
    }
});


// ====================================

/*
let currentIndex = 0;
const totalImages = document.querySelectorAll('.carousel-images img').length;
const carouselIntervalTime = 3000; // Set interval time in milliseconds (e.g., 3000ms = 3 seconds)
let carouselInterval;

// Function to scroll images
function scrollCarousel(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex += direction;

    // Loop around images
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // Update carousel position
    const offset = currentIndex * -450; // Adjust offset based on image width and margin
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;

    // Update image brightness and opacity
    images.forEach((img, index) => {
        if (index === currentIndex) {
            img.classList.add('main-image');
            img.style.filter = 'brightness(100%)'; // Full brightness for the main image
            img.style.opacity = '1';
        } else {
            img.classList.remove('main-image');
            img.style.filter = 'brightness(45%)'; // Lower brightness for other images
            img.style.opacity = '1'; // Optional: small opacity for dim effect
        }
    });
}

// Set up auto-scrolling
function startAutoScroll() {
    carouselInterval = setInterval(() => {
        scrollCarousel(1); // Automatically scroll to the next image
    }, carouselIntervalTime);
}

// Restart the auto-scrolling after a manual scroll
function resetAutoScroll() {
    clearInterval(carouselInterval); // Clear existing interval
    startAutoScroll(); // Restart auto-scrolling
}

// Start auto-scroll initially
startAutoScroll();

// Optional: Attach event listeners for manual scrolling buttons
document.querySelector('.carousel-next').addEventListener('click', () => {
    scrollCarousel(1);
    resetAutoScroll(); // Reset interval after manual scroll
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    scrollCarousel(-1);
    resetAutoScroll(); // Reset interval after manual scroll
});

*/


const container = document.querySelector('.snipts-container');
let scrollAmount = 0;
const scrollStep = 380; // Adjust scroll step based on card width
const pauseTime = 3500; // Pause duration in milliseconds (1.5 seconds)

// Function to handle automatic sudden scrolling
function autoScroll() {
    scrollAmount += scrollStep;
    
    // If we've scrolled past the content, reset to the start
    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
    }
    
    // Scroll to the calculated position instantly
    container.scrollTo({
        left: scrollAmount,
        behavior: "auto" // Instant jump scroll (no smooth scrolling)
    });
}

// Set up interval for auto-scrolling
setInterval(autoScroll, pauseTime);
