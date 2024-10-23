// Importar Playlist
import { playList } from "./playList.js";

//Creacion de las constantes
const audio = document.getElementById('audioSong');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');

// Elementos de progreso y tiempo
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('total-duration');

//Creacion donde se lanza el evento
let currentSong = 0;

// Elementos adicionales para mostrar datos de la canción
const imgArtist = document.getElementById('imgArtist');
const nameSong = document.getElementById('nameSong');
const nameArtist = document.getElementById('nameArtist');

// Función para cargar la canción
function loadSong(songIndex) {
    const song = playList[songIndex];
    imgArtist.src = song.img;
    nameSong.textContent = song.title;
    nameArtist.textContent = song.artist;
    audio.src = song.song;
}

// Cargar la primera canción
loadSong(currentSong);

// Evento para actualizar la duración total cuando se carga la canción
audio.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audio.duration);
});

// Evento para actualizar el tiempo
audio.addEventListener('timeupdate', () => {
    // Actualizar el tiempo actual
    currentTimeDisplay.textContent = formatTime(audio.currentTime);

    // Actualizar la barra de progreso
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
});

// Controlar el clic en la barra de progreso
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

// Formatear el tiempo en minutos y segundos
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

//Eventos 'click'
play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
rewind.addEventListener('click', () => audio.currentTime -= 10);
forward.addEventListener('click', () => audio.currentTime += 10);

stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

// Función para cambiar de canción
function skipSong(songIndex) {
    loadSong(songIndex);
    audio.play();
}

//Metodos para cambiar de cancion
document.getElementById('prev').addEventListener('click', () => {
    currentSong = (currentSong - 1 + playList.length) % playList.length;
    skipSong(currentSong);
});

document.getElementById('next').addEventListener('click', () => {
    currentSong = (currentSong + 1) % playList.length;
    skipSong(currentSong);
});

// Evento automática cuando termina una canción
audio.addEventListener('ended', () => {
    currentSong = (currentSong + 1) % playList.length;
    skipSong(currentSong);
});
