//Import Playlist
import { playList } from "./playList.js";

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');


//Eventos 'click'
play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
rewind.addEventListener('click', () => audio.currentTime -= 10);
forward.addEventListener('click', () => audio.currentTime += 10);

stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

let currentSong = 0;

  const albumimg = document.getElementById('imgArtist');
  const nameSong = document.getElementById('nameSong');
  const nameArtist = document.getElementById('nameArtist');
  const audioSong = document.getElementById('audioSong');
  const audioElement = document.getElementById('audio');

function skipSong(songIndex){
    const loadSong = playList[songIndex];
    albumimg.src = loadSong.img;
    nameSong.textContent = loadSong.title;
    nameArtist.textContent = loadSong.artist;
    audioSong.src = loadSong.song;
    audioElement.src = loadSong.song;
    

}

skipSong(currentSong);
    

document.getElementById('prev').addEventListener('click', () =>{
    currentSong = (currentSong -1 + playList.length) % playList.length;
    skipSong(currentSong);
})


document.getElementById('next').addEventListener('click', () =>{
    currentSong = (currentSong + 1)% playList.length;
    skipSong(currentSong);
})


