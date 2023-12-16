const playTownButton = document.getElementById('town');
const townMusic = document.getElementById('townMusic');
const townAmbience = document.getElementById('townAmbience');

const musicVolume = document.querySelector("#musicVolume");
const ambienceVolume = document.querySelector("#ambienceVolume");

let isPlaying = false;

playTownButton.addEventListener('click', () => {
    const townIcon = document.getElementById('townIcon');

    console.log("I've been clicked! :o");

    if (!isPlaying) {

        townMusic.play();
        townAmbience.play();
        townIcon.src = "pause.svg";

        isPlaying = true;
    }
    else {
        townMusic.pause();
        townAmbience.pause();
        townIcon.src = "play.svg";
        isPlaying = false;
    }
})


musicVolume.addEventListener("change", function(e) {
    townMusic.volume = e.currentTarget.value / 100;
})

ambienceVolume.addEventListener("change", function(e) {
    townAmbience.volume = e.currentTarget.value / 100;
})