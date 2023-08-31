console.log("Welcome to Spotify");
// Initialize the variables
let sondIndex = 0;
let audioElement = new Audio('Alan Walker - Faded.mp3');
let masterPlay = document.getElementById('masterPlay');
let myPrograssBar = document.getElementById('myPrograssBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songname: "Alone - Alan walker", filePath: "C:\Users\Harsh\Desktop\Spotify\Alan Walker - Alone.mp3", coverPath: "images/Songs Covers/Alan walker Alone Pt-I.jpeg" },
    { songname: "Darkside - Alan walker", filePath: "C:\Users\Harsh\Desktop\Spotify\Alan Walker - Darkside (feat. AuRa and Tomine Harket).mp3", coverPath: "images/Songs Covers/Alan walker Darkside.jpeg" },
    { songname: "Different World - Alan walker", filePath:"C:\Users\Harsh\Desktop\Spotify\Alan Walker - Different World feat. Sofia Carson, K-391 & CORSAK (Lyric Video).mp3", coverPath: "images/Songs Covers/Alan walker Different world.jpeg" },
    { songname: "Faded - Alan walker", filePath: "C:\Users\Harsh\Desktop\Spotify\Alan Walker - Faded.mp3", coverPath: "images/Songs Covers/Alan walker Faded.jpeg" },
    { songname: "Hero - Alan walker", filePath: "C:\Users\Harsh\Desktop\Spotify\Alan Walker & Sasha Alex Sloan - Hero (Official Music Video).mp3", coverPath: "images/Songs Covers/Alan walker Hero.jpeg" },
    { songname: "K-391 - Alan walker", filePath: "C:\Users\Harsh\Desktop\Spotify\Alan Walker, K-391 & Emelie Hollow - Lily (Lyrics) - Video by _ Five Knights Productions.mp3", coverPath: "images/Songs Covers/Alan walker Lily.jpeg" },
    { songname: "On my way - Alan walker", filePath:"C:\Users\Harsh\Desktop\Spotify\Alan Walker, Sabrina Carpenter & Farruko  - On My Way.mp3", coverPath: "images/Songs Covers/Alan walker On my way.jpeg" },
    { songname: "Alon Pt-II - Alan walker", filePath:"C:\Users\Harsh\Desktop\Spotify\Alan Walker & Ava Max - Alone, Pt. II.mp3", coverPath: "images/Songs Covers/Alan walker Alone Pt-II.jpeg" },
    { songname: "Lily - Alan walker", filePath:"C:\Users\Harsh\Desktop\Spotify\Alan Walker, K-391 & Emelie Hollow - Lily (Lyrics) - Video by _ Five Knights Productions.mp3", coverPath: "images/Songs Covers/Alan walker Ignite.jpeg" },
    { songname: "Lost Control - Alan walker", filePath:"C:\Users\Harsh\Desktop\Spotify\Lost Control.mp3", coverPath: "images/Songs Covers/Alan walker Lost control.jpeg" }
]



songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname
})

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = "1";
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = "0";
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    prograss = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myPrograssBar.value = prograss;

})
myPrograssBar.addEventListener('change', () => {
    audioElement.currentTime = myPrograssBar.value * audioElement.duration / 100;
})

const makeALLPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeALLPlays()
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = "";
        audioElement.currentTime=0;
        audioElement.play();
    })
})
