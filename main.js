const playTownButton = document.getElementById('town');
const playTavernButton = document.getElementById('tavern');
const playDungeonButton = document.getElementById('dungeon');
const playNatureButton = document.getElementById('nature');
const townMusic = document.getElementById('townMusic');
const townAmbience = document.getElementById('townAmbience');
const tavernMusic = document.getElementById('tavernMusic');
const tavernAmbience = document.getElementById('tavernAmbience');
const dungeonMusic = document.getElementById('dungeonMusic');
const dungeonAmbience = document.getElementById('dungeonAmbience');
const natureMusic = document.getElementById('natureMusic');
const natureAmbience = document.getElementById('natureAmbience');

const musicVolume = document.querySelector("#musicVolume");
const ambienceVolume = document.querySelector("#ambienceVolume");

let isPlaying = false;
let isTownPlaying = false;
let isTavernPlaying = false;
let isDungeonPlaying = false;
let isNaturePlaying = false;

playTownButton.addEventListener('click', () => {
    const townIcon = document.getElementById('townIcon');

    console.log("I've been clicked! :o");

    if (!isTownPlaying) {

        resetMusic();

        townMusic.play();
        townAmbience.play();
        townIcon.src = "pause.svg";

        isTownPlaying = true;
    }
    else {
        townMusic.pause();
        townAmbience.pause();
        townIcon.src = "play.svg";
        isTownPlaying = false;
    }
});

playTavernButton.addEventListener('click', () => {
    const tavernIcon = document.getElementById('tavernIcon');

    if (!isTavernPlaying) {

        resetMusic();

        tavernMusic.play();
        tavernAmbience.play();
        tavernIcon.src = "pause.svg";

        isTavernPlaying = true;
    }
    else {
        tavernMusic.pause();
        tavernAmbience.pause();
        tavernIcon.src = "play.svg";
        isTavernPlaying = false;
    }
});

playDungeonButton.addEventListener('click', () => {
    const dungeonIcon = document.getElementById('dungeonIcon');

    if (!isDungeonPlaying) {

        resetMusic();

        dungeonMusic.play();
        dungeonAmbience.play();
        dungeonIcon.src = "pause.svg";

        isDungeonPlaying = true;
    }
    else {
        dungeonMusic.pause();
        dungeonAmbience.pause();
        dungeonIcon.src = "play.svg";
        isDungeonPlaying = false;
    }
});

playNatureButton.addEventListener('click', () => {
    const natureIcon = document.getElementById('natureIcon');

    if (!isNaturePlaying) {

        resetMusic();

        natureMusic.play();
        natureAmbience.play();
        natureIcon.src = "pause.svg";

        isNaturePlaying = true;
    }
    else {
        natureMusic.pause();
        natureAmbience.pause();
        natureIcon.src = "play.svg";
        isNaturePlaying = false;
    }
});


musicVolume.addEventListener("change", function(e) {
    townMusic.volume = e.currentTarget.value / 100;
    tavernMusic.volume = e.currentTarget.value / 100;
    dungeonMusic.volume = e.currentTarget.value / 100;
    natureMusic.volume = e.currentTarget.value / 100;
});

ambienceVolume.addEventListener("change", function(e) {
    townAmbience.volume = e.currentTarget.value / 100;
    tavernAmbience.volume = e.currentTarget.value / 100;
    dungeonAmbience.volume = e.currentTarget.value / 100;
    natureAmbience.volume = e.currentTarget.value / 100;
});

function resetMusic() {
    townIcon.src = "play.svg";
    tavernIcon.src = "play.svg";
    dungeonIcon.src = "play.svg";
    natureIcon.src = "play.svg";
    townMusic.pause();
    townAmbience.pause();
    tavernMusic.pause();
    tavernAmbience.pause();
    dungeonMusic.pause();
    dungeonAmbience.pause();
    natureMusic.pause();
    natureAmbience.pause();
    isTownPlaying = false;
    isTavernPlaying = false;
    isDungeonPlaying = false;
    isNaturePlaying = false;
}