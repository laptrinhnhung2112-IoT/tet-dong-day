/* ===== HOA MAI RƠI ===== */
function createFlower() {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.innerText = "🌸";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 3 + Math.random() * 5 + "s";
  flower.style.fontSize = 20 + Math.random() * 20 + "px";
  document.body.appendChild(flower);

  setTimeout(() => flower.remove(), 8000);
}
setInterval(createFlower, 300);

/* ===== COUNTDOWN ===== */
const countdown = document.getElementById("countdown");
const tet = new Date("2026-02-17T00:00:00");

setInterval(() => {
  const now = new Date();
  const diff = tet - now;

  if (diff <= 0) {
    countdown.innerText = "🎆 Chúc Mừng Năm Mới 🎆";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  countdown.innerText = `⏳ ${d} ngày ${h} giờ ${m} phút ${s} giây`;
}, 1000);

/* ===== NHẠC ===== */
const music = document.getElementById("music");
function toggleMusic() {
  music.paused ? music.play() : music.pause();
}

/* ===== PHÁO HOA ===== */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resizeCanvas();

function firework() {
  const x = Math.random() * canvas.width;
  const y = (Math.random() * canvas.height) / 2;

  for (let i = 0; i < 50; i++) {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
    ctx.fill();
  }
}

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  firework();
}, 700);

window.addEventListener("resize", resizeCanvas);
