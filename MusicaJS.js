const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    //durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

music.volume = .1;

const songs = [
    {
        path: 'Musicas/SV - Winter.mp3',
        displayName: 'Winter',
        cover: 'Imagens/SV-ost.jpg',
        artist: 'Eric Barone',
    },
    {
        path: 'Musicas/Minecraft - Sweden.mp3',
        displayName: 'Sweden',
        cover: 'Imagens/minecraft-alpha.jpg',
        artist: 'C418',
    },
    {
        path: 'Musicas/Celest - Awake.mp3',
        displayName: 'Awake',
        cover: 'Imagens/celest-ost.webp',
        artist: 'Lena Raine',
    },
    {
        path: 'Musicas/SV - Dance Of The Moonlight Jellies.mp3',
        displayName: 'Dance Of The...',
        cover: 'Imagens/SV-ost.jpg',
        artist: 'Eric Barone',
    },
    {
        path: 'Musicas/Zelda - night.mp3',
        displayName: 'Zoras Domain',
        cover: 'Imagens/zelda - ost.jpg',
        artist: 'Hajime Wakai',
    }
    
];


let musicIndex = 0;
let isPlaying = false;

function togglePlay(){

    if(isPlaying){
        pauseMusic();
    } else {
        playMusic();
    }

}




function playMusic(){
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    //background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
   // const progressPercent = (currentTime / duration) * 100;
   // progress.style.width = `${progressPercent}%`;



   //isso aqui é a declaração de uma função
    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');



    //durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}


playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
//playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);
