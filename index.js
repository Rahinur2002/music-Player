document.addEventListener("DOMContentLoaded", function () {
  const songTitle = document.querySelector(".song-title");
  const songAuthor = document.querySelector(".song-author");
  const playbtn = document.querySelector(".play-button");
  const pausebtn = document.querySelector(".pause-button");
  const nextbtn = document.querySelector(".next-button");
  const previousbtn = document.querySelector(".previous-button");
  const progressBar = document.querySelector(".progress-bar");
  const volumeSlider = document.querySelector(".volume-slider");


  const songs = [
    {
      title: "Nothing's Gonna Stop Us Now",
      author: "Starship",
      url: "sounds/NothingGoingToStopUsNow.mp3",
    },
    {
      title:
        "Way Back Home",
      author: "SHAUN feat. Conor Maynard",
      url: "sounds/waybackhome.mp3",
    },
    {
      title:
        "Like A Prayer",
      author: "Madonna",
      url: "sounds/likeaprayer.mp3",
    },
  ];

  let currentSong = 0;

  let audio = new Audio(songs[currentSong].url);

  songTitle.textContent = songs[currentSong].title;
  songAuthor.textContent = songs[currentSong].author;

  playbtn.addEventListener("click", function () {
    audio.play();
  });

  nextbtn.addEventListener("click", function () {
    audio.pause();
    audio.currentTime = 50;
    currentSong = (currentSong + 1) % songs.length;
    audio = new Audio(songs[currentSong].url);
    audio.play();
    songTitle.textContent = songs[currentSong].title;
    songAuthor.textContent = songs[currentSong].author;
  });
  pausebtn.addEventListener("click", function () {
    audio.pause();
  });
  previousbtn.addEventListener("click", function () {
    audio.pause();
    audio.currentTime = 0;
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    audio = new Audio(songs[currentSong].url);
    audio.play();
    songTitle.textContent = songs[currentSong].title;
    songAuthor.textContent = songs[currentSong].author;
  });

  audio.addEventListener("timeupdate", function() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress || 0;
  });
  volumeSlider.addEventListener("input", function () {
  audio.volume = volumeSlider.value;
});

});
