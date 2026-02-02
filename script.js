const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = (Math.random() * canvas.height) / 2;

  for (let i = 0; i < 40; i++) {
    particles.push({
      x: x,
      y: y,
      vx: Math.random() * 6 - 3,
      vy: Math.random() * 6 - 3,
      life: 100,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
    });
  }
}

function showWish() {
  document.getElementById("wish").innerHTML =
    "💖 Gia đình luôn mạnh khỏe, hạnh phúc và sum vầy 💖";
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;

    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, 3, 3);

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  });

  requestAnimationFrame(animate);
}

setInterval(createFirework, 700);
animate();
