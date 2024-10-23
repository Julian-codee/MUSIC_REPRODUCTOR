//Import Playlist
import { playList } from "./playList.js";

//Creacion de las constantes

const audio = document.getElementById('audioSong');
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

//Evento parar cancion
stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});


//Creacion donde se lanza el evento
let currentSong = 0;

//Creacion de las constantes
  const imgArtist = document.getElementById('imgArtist');
  const nameSong = document.getElementById('nameSong');
  const nameArtist = document.getElementById('nameArtist');
  const audioSong = document.getElementById('audioSong');
  const audioElement = document.getElementById('audio');

function skipSong(songIndex){
    const loadSong = playList[songIndex];
    imgArtist.src = loadSong.img;
    nameSong.textContent = loadSong.title;
    nameArtist.textContent = loadSong.artist;
    audioSong.src = loadSong.song;
    audioElement.src = loadSong.song;
}

//Utilizacion de la funcion
skipSong(currentSong);
    
//Metodos para cambiar de cancion

document.getElementById('prev').addEventListener('click', () =>{
    currentSong = (currentSong -1 + playList.length) % playList.length;
    skipSong(currentSong);//Cancion previa
})


document.getElementById('next').addEventListener('click', () =>{
    currentSong = (currentSong + 1)% playList.length;
    skipSong(currentSong);//Cancion Siguiente
})


