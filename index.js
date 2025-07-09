document.addEventListener("DOMContentLoaded", function () {
  const songTitle = document.querySelector(".song-title");
  const songAuthor = document.querySelector(".song-author");
  const playbtn = document.querySelector(".play-button");
  const pausebtn = document.querySelector(".pause-button");
  const nextbtn = document.querySelector(".next-button");
  const previousbtn = document.querySelector(".previous-button");

  const songs = [
     {
       title: "Starship - Nothing's Gonna Stop Us Now",
       author: "Starship",
       url: "sounds/NothingGoingToStopUsNow.mp3",
     },
    {
      title:
        "SHAUN feat. Conor Maynard - Way Back Home (Lyrics) Sam Feldt Edit",
      author: "SHAUN feat. Conor Maynard",
      url: "sounds/waybackhome.mp3",
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
    audio.currentTime = 0;
    currentSong = (currentSong + 1) % songs.length;
    audio = new Audio(songs[currentSong].url);
    audio.play();
    songTitle.textContent = songs[currentSong].title;
    songAuthor.textContent = songs[currentSong].author;

  });

  

});
