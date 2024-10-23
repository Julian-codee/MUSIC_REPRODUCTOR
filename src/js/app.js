import { playList } from "./playList.js";

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');



play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
rewind.addEventListener('click', () => audio.currentTime -= 10);
forward.addEventListener('click', () => audio.currentTime += 10);

stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});


const prev = document.getElementById('prev');
const next = document.getElementById('next');



let currentSong = 0;

function skipSong(){
    const loadSong = playList[currentSong];

    document.getElementById('imgArtist').src = loadSong.img;
    document.getElementById('nameSong').textContent = loadSong.title;
    document.getElementById('nameArtist').textContent = loadSong.artist;
    document.getElementById('audioSong').src = loadSong.Song;
    document.getElementById('audio').load();

}

skipSong();



