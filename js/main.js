///JS Menu Content
// 1. // Mobile Menu Icon Toggle
// 2. // Globe Icon Switch On Hover
// 3. // Custom Video Controls
// 4. // video Count Down 

console.log("JS is Running, Try Catching It")


// -VARIABLES-
// (1.) Mobile Menu Icon Toggle//////////
let Menubutton = document.querySelector(".container-mobile-top-logo");
// (2.) Globe Icon Switch On Hover
const globeIcon = document.getElementById('globe-icon');
const originalSrc = 'images/icon-globe.svg';
const hoverSrc = 'images/icon-red-globe.svg';
// (3. ) Custom Video Variables
const player = document.querySelector('video');
const videoControls = document.querySelector('#video-controls');
const playerButton = document.querySelector('#play-button');
const pauseButton = document.querySelector('#pause-button');
const stopButton = document.querySelector('#stop-button');
// 4. // video Count Down 
const video = document.getElementById('video-player');
const countdownText = document.getElementById('countdown-text');
let countdownInterval;
let timeRemaining = 0;


// -FUNCTIONS-
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
//// (3.) Custom video control 
player.controls = false;
videoControls.classList.remove('hidden');


// Functions
function playVideo(){
    console.log("Play Button Clicked")
    player.play();
    startCountdown();
}

function pauseVideo(){
    console.log("Pause button Clicked")
    player.pause();
    clearInterval(countdownInterval); 
}

function stopVideo(){
    console.log("Stop button Clicked")
    player.pause();
    player.currentTime = 1;
    video.currentTime = 0;
    clearInterval(countdownInterval);
    timeRemaining = Math.floor(video.duration); // Reset countdown to full duration
    countdownText.textContent = timeRemaining;
}

function screenPause(){
player.pause();
}
// 4. // video Count Down
// Countdown timer
function startCountdown() {
    clearInterval(countdownInterval); // Ensure no multiple intervals
    countdownInterval = setInterval(() => {
      timeRemaining = Math.floor(video.duration - video.currentTime);
      countdownText.textContent = timeRemaining;
      
      if (timeRemaining <= 0) {
        clearInterval(countdownInterval); // Stop countdown when the video ends
      }
    }, 1000); // Update every second
  }
// Load video metadata to get the video duration
video.addEventListener('loadedmetadata', () => {
    timeRemaining = Math.floor(video.duration); // Get total video duration in seconds
    countdownText.textContent = timeRemaining; // Display the initial duration in the circle
  });


// -EVENTS-
// -EVENTS-
// (1.) Adding event listeners
Menubutton.addEventListener("click", swapMenuIcon, false);
// (2.) Globe Icon Switch On Hover
globeIcon.addEventListener('mouseover', changeGlobeIcon);
globeIcon.addEventListener('mouseout', resetGlobeIcon);
// (3.) Custom video control 
playerButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
stopButton.addEventListener("click", stopVideo);
player.addEventListener("click", screenPause);



