const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['tellme', 'oroflash', 'transistor']

// Keep track of the songs
let songIndex = 2

// Initial load song into DOM
loadSong(songs[songIndex])

// Update song details

function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `image/${song}.jpg`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong() {
   songIndex --

   if (songIndex < 0) {
       songIndex = songs.length - 1
   }

   loadSong(songs[songIndex])

   playSong()
}

function nextSong() {
   songIndex ++

   if (songIndex > songs.length - 1) {
       songIndex =  0
   }

    loadSong(songs[songIndex])

    playSong()
}

function updateProgress(e) {
    // console.log(e.srcElement.currentTime);
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
    
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  console.log(clickX);
  

  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

// Change Song event
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

// use html api for audio to get progress bar value
audio.addEventListener('timeupdate', updateProgress)

// when click inside progressBar will bring to that point of the song
progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)