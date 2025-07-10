document.addEventListener("DOMContentLoaded", function () {
  const songTitle = document.querySelector(".song-title");
  const songAuthor = document.querySelector(".song-author");
  const playbtn = document.querySelector(".play-button");
  const pausebtn = document.querySelector(".pause-button");
  const nextbtn = document.querySelector(".next-button");
  const previousbtn = document.querySelector(".previous-button");
  const shufflebtn = document.querySelector(".shuffle-button");
  const progressBar = document.querySelector(".progress-bar");
  const volumeSlider = document.querySelector(".volume-slider");

  const songs = [
    {
      title: "Nothing's Gonna Stop Us Now",
      author: "Starship",
      url: "sounds/NothingGoingToStopUsNow.mp3",
    },
    {
      title: "Way Back Home",
      author: "SHAUN feat. Conor Maynard",
      url: "sounds/waybackhome.mp3",
    },
    {
      title: "Like A Prayer",
      author: "Madonna",
      url: "sounds/likeaprayer.mp3",
    },
  ];

  let currentSong = 0;
  let shuffleMode = false;

  let audio = new Audio(songs[currentSong].url);

  function updateSongDisplay(index) {
    songTitle.textContent = songs[index].title;
    songAuthor.textContent = songs[index].author;
  }

  function loadAndPlay(index) {
    audio.pause();
    audio.currentTime = 0;
    audio = new Audio(songs[index].url);
    audio.volume = volumeSlider.value;
    audio.play();
    updateSongDisplay(index);
  }

  playbtn.addEventListener("click", function () {
    audio.play();
  });

  pausebtn.addEventListener("click", function () {
    audio.pause();
  });

  nextbtn.addEventListener("click", function () {
    if (shuffleMode) {
      let next;
      do {
        next = Math.floor(Math.random() * songs.length);
      } while (next === currentSong);
      currentSong = next;
    } else {
      currentSong = (currentSong + 1) % songs.length;
    }
    loadAndPlay(currentSong);
  });

  previousbtn.addEventListener("click", function () {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadAndPlay(currentSong);
  });

  shufflebtn.addEventListener("click", function () {
    shuffleMode = !shuffleMode;
    shufflebtn.classList.toggle("active");
    shufflebtn.textContent = shuffleMode ? "🔀 On" : "🔀 Off";
  });

  audio.addEventListener("timeupdate", function () {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress || 0;
  });

  volumeSlider.addEventListener("input", function () {
    audio.volume = volumeSlider.value;
  });

  // Set initial song info
  updateSongDisplay(currentSong);
});
