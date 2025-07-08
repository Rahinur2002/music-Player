document.addEventListener("DOMContentLoaded", function () {
  const songTitle = document.querySelector(".song-title");
  const songAuthor = document.querySelector(".song-author");
  const playbtn = document.querySelector(".play-button");
  const pausebtn = document.querySelector(".pause-button");
  const nextbtn = document.querySelector(".next-button");
  const previousbtn = document.querySelector(".previous-button");

  const songs = [
    {
      title: "Nothings going to stop us now",
      author: "starship",
      url: "sounds/NothingGoingToStopUsNow.mp3"
    },

  ];

  let currentSong = 0;
  let audio = new Audio(songs[currentSong].url);

  songTitle.textContent = songs[currentSong].title;
  songAuthor.textContent = songs[currentSong].author;

  playbtn.addEventListener("click", function() {
    audio.play();
  })

});
