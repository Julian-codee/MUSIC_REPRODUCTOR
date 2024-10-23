const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');

play.addEventListener('click', () => audio.play);
pause.addEventListener('click', () => audio.pause);
rewind.addEventListener('click', () => audio.currentTime -= 10);
forward.addEventListener('click', () => audio.currentTime += 10);

stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
})

const playList = [
    {
      title: 'Song 1',
      artist: 'Artist 1',
      img: 'ruta de la imagen de la canción',
      song: 'ruta de la cancion'
    },
    {
      title: 'Song 2',
      artist: 'Artist 2',
      img: 'ruta de la imagen de la canción',
      song: 'ruta de la cancion'
    },
    {
      title: 'Song 3',
      artist: 'Artist 3',
      img: 'ruta de la imagen de la canción',
      song: 'ruta de la cancion'
    },
    {
      title: 'Song 4',
      artist: 'Artist 4',
      img: 'ruta de la imagen de la canción',
      song: 'ruta de la cancion'
    },
    {
      title: 'Song 5',
      artist: 'Artist 5',
      img: 'ruta de la imagen de la canción',
      song: 'ruta de la cancion'
    },
  ]
