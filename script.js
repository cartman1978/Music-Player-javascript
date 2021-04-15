const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progressContainer')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// Song titles
const songs = ['tellme', 'oroflash', 'transistor']

// Keep track of the songs
let songIndex = 0

// Initial load song into DOM
loadSong(songs[songIndex])

// Update song details

function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `image/${song}.jpg`
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