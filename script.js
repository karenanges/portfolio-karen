// estrelas do botao
document.querySelectorAll(".buttons a").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const numberOfStars = 8;
    const target = this.getAttribute("href");

    for (let i = 0; i < numberOfStars; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;

      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 150 + 50;
      const offsetX = Math.cos(angle) * distance;
      const offsetY = Math.sin(angle) * distance;

      sparkle.style.setProperty('--dx', `${offsetX}px`);
      sparkle.style.setProperty('--dy', `${offsetY}px`);

      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1500);
    }

    setTimeout(() => {
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    }, 300);
  });
});

// esttrelas clicaveis
document.addEventListener("click", function (e) {
  const numberOfStars = 8;

  for (let i = 0; i < numberOfStars; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 150 + 50;
    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;

    sparkle.style.setProperty('--dx', `${offsetX}px`);
    sparkle.style.setProperty('--dy', `${offsetY}px`);

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1500);
  }
});

// Chuva 
const numParticles = 40;

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  const size = randomRange(15, 25);
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  particle.style.top = randomRange(-50, -10) + 'px';
  particle.style.left = randomRange(0, window.innerWidth) + 'px';

  const duration = randomRange(15, 30);
  particle.style.setProperty('--duration', duration + 's');

  const delay = randomRange(0, duration);
  particle.style.setProperty('--delay', '-' + delay + 's');

  document.body.appendChild(particle);

  particle.addEventListener('animationiteration', () => {
    particle.style.top = randomRange(-50, -10) + 'px';
    particle.style.left = randomRange(0, window.innerWidth) + 'px';
  });

  return particle;
}

for (let i = 0; i < numParticles; i++) {
  createParticle();
}





const form = document.getElementById("formContato");
const msg = document.getElementById("mensagemSucesso");

form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  msg.textContent = "Mensagem enviada com sucesso! 💖";

  form.reset();

  setTimeout(() => {
    msg.textContent = "";
  }, 4000);
});








// modo escuro
const darkModeBtn = document.getElementById("toggleDarkMode");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  // icone do botao🌙 / ☀️
  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "☀️";
  } else {
    darkModeBtn.textContent = "🌙";
  }
});












//mouse estrelinahs


const total = 5;
const stars = [];
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;


for (let i = 0; i < total; i++) {
  const star = document.createElement('img');
  star.src = 'estrela.png';
  star.style.position = 'fixed'; 
  star.style.width = `${15 + Math.random() * 15}px`;
  star.style.height = star.style.width;
  star.style.pointerEvents = 'none';
  star.style.opacity = `${0.5 + Math.random() * 0.5}`;
  star.style.zIndex = '9999';
  star.style.left = `${window.innerWidth/2}px`;
  star.style.top = `${window.innerHeight/2}px`;
  document.body.appendChild(star);
  stars.push({el: star, x: window.innerWidth/2, y: window.innerHeight/2});
}


document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});


function animate() {
  let prevX = mouseX;
  let prevY = mouseY;

  stars.forEach((starObj, i) => {
    const speed = 0.15 - i*0.008;
    starObj.x += (prevX - starObj.x) * speed;
    starObj.y += (prevY - starObj.y) * speed;

    starObj.el.style.left = `${starObj.x - parseFloat(starObj.el.style.width)/2}px`;
    starObj.el.style.top = `${starObj.y - parseFloat(starObj.el.style.height)/2}px`;

    prevX = starObj.x;
    prevY = starObj.y;
  });

  requestAnimationFrame(animate);
}

animate();





















const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);


slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  track.appendChild(clone);
});

let speed = 2.0; 
let position = 0;
let animationId; 

function moveCarousel() {
  position -= speed;

  if (position <= -track.scrollWidth / 2) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  animationId = requestAnimationFrame(moveCarousel); 
}


track.parentElement.addEventListener('mouseenter', () => {
  cancelAnimationFrame(animationId);
});


track.parentElement.addEventListener('mouseleave', () => {
  moveCarousel();
});


moveCarousel();
