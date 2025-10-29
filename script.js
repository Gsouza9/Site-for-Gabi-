const openBtn = document.getElementById("openBtn");
const backBtn = document.getElementById("backBtn");
const welcome = document.getElementById("welcome");
const letter = document.getElementById("letter");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {
  welcome.classList.remove("active");
  letter.classList.add("active");
  music.play();
});

backBtn.addEventListener("click", () => {
  letter.classList.remove("active");
  welcome.classList.add("active");
  music.pause();
  music.currentTime = 0;
});

// Corações flutuando
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);
