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
const globeIcon = document.querySelector('#globe-icon');
const originalSrc = 'images/icon-globe.svg';
const hoverSrc = 'images/icon-red-globe.svg';
// (3. ) Custom Video Variables
const player = document.querySelector('video');
const videoControls = document.querySelector('#video-controls');
const playerButton = document.querySelector('#play-button');
const pauseButton = document.querySelector('#pause-button');
const stopButton = document.querySelector('#stop-button');
const volumeSlider = document.querySelector('#change-vol');
const fullScreen = document.querySelector('#full-screen');
const videoContainer = document.querySelector('#reel-box');
const soundButton = document.querySelector('#volume');
// 4. // video Count Down 
const video = document.querySelector('#video-player');
const countdownText = document.querySelector('#countdown-text');
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

function screenPauseEtPlay(){
    if (player.paused) {
        player.play();  // If video is paused, play it
        startCountdown(); // Start the countdown
      } else {
        player.pause();  // If video is playing, pause it
        clearInterval(countdownInterval); // Stop countdown when the video ends
      }
}
function changeVolume(){
    console.log(volumeSlider.value); 
    console.log('Volume changing');
    player.volume = volumeSlider.value;
    if (volumeSlider.value == 0) {
        player.muted = true; // If slider is set to 0, mute the video
        soundButton.src = 'images/icon-volume-mute.svg'; // Change to muted icon
    } else {
        player.muted = false; // Unmute if slider changes to non-zero
        player.volume = volumeSlider.value; // Set video volume to slider value
        soundButton.src = 'images/ctrl-volume.svg'; // Change back to unmuted icon
    }
}
function toggleFullScreen(){
    console.log('Full Screen Toggled');
    if(document.fullscreenElement){
        document.exitFullscreen();
    } else if(document.webkitFullScreenElement){
        document.webkitexitFullscreen();

    } else if(videoContainer.webkitRequestFullscreen){
        videoContainer.webkitRequestFullscreen();
    } else {
        videoContainer.requestFullscreen();
    }
}
function showControls(){
    console.log('video controls hidden');
    videoControls.classList.remove('hide');
}
function hideControls(){
    if(player.paused){
        return;
    }
    videoControls.classList.add('hide');
}
function muteOrUnmute() {
    
    if (player.muted) {
        player.muted = false; // Unmute the video
        volumeSlider.value = player.volume; // Update slider to current volume
        soundButton.src = 'images/ctrl-volume.svg'; 
        console.log('Sound On');
    } else {
        player.muted = true; // Mute the video
        volumeSlider.value = 0; // Set slider to 0
        soundButton.src = 'images/icon-volume-mute.svg'; 
        console.log('Sound Off');
    }
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
player.addEventListener("click", screenPauseEtPlay);
volumeSlider.addEventListener("change", changeVolume);
fullScreen.addEventListener("click", toggleFullScreen);
videoControls.addEventListener("mouseenter", showControls);
videoControls.addEventListener("mouseleave", hideControls);
player.addEventListener("mouseenter", showControls);
player.addEventListener("mouseleave", hideControls);
soundButton.addEventListener("click", muteOrUnmute);



