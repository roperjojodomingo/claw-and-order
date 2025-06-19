document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("hero-video");
  const playButton = document.querySelector(".play-video-button");

  if (video && playButton) {
    playButton.addEventListener("click", function () {
      video.play();
      playButton.style.display = "none";
    });
  }
});