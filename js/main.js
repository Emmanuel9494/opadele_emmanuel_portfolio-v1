///JS Menu Content
// 1. // Mobile Menu Icon Toggle
// 2. // Globe Icon Switch On Hover

console.log("JS is Running, Try Catching It")


// -VARIABLES-
// (1.) Mobile Menu Icon Toggle//////////
let Menubutton = document.querySelector(".container-mobile-top-logo");
// (2.) Globe Icon Switch On Hover
const globeIcon = document.getElementById('globe-icon');
const originalSrc = 'images/icon-globe.svg';
const hoverSrc = 'images/icon-red-globe.svg';


// -FUNCTIONS-
// (1.) Function to toggle hamburger menu
function swapMenuIcon() {
    Menubutton.classList.toggle("container-mobile-top-logo-swap");
    console.log("Menu Triggered");
}
// (2.) Globe Icon Switch On mouseover Hover
function changeGlobeIcon() {
    globeIcon.style.opacity = 0;

    setTimeout(function() {
        globeIcon.src = hoverSrc; 
        globeIcon.style.opacity = 1; }, 300); 
}

function resetGlobeIcon() {
    globeIcon.style.opacity = 0;

    setTimeout(function() {
        globeIcon.src = originalSrc; 
        globeIcon.style.opacity = 1; }, 300); 
}



// -EVENTS-
// (1.) Adding event listeners
Menubutton.addEventListener("click", swapMenuIcon, false);
// (2.) Globe Icon Switch On Hover
globeIcon.addEventListener('mouseover', changeGlobeIcon);
globeIcon.addEventListener('mouseout', resetGlobeIcon);



