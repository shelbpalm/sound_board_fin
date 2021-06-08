// Play Sound
window.addEventListener("keydown", (e) => {
  // check-check
  console.log(e);
  console.log(e.keyCode);

  // Get element
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  // play
  audio.play();
});
