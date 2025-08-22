// Blur no scroll

const header = document.querySelector('.header');
const maxBlur = 7;
const maxOpacity = 0.8;
const fadeStart = 0;
const fadeEnd = 300;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  let progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
  progress = Math.min(Math.max(progress, 0), 1);
  header.style.backdropFilter = `blur(${progress * maxBlur}px)`;
  header.style.backgroundColor = `rgba(255, 255, 255, ${progress * maxOpacity})`;
});

// Fundo personalizado

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const size = Math.random() * 40 + 10;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = Math.random() * window.innerWidth + "px";
  bubble.style.bottom = "0px";
  bubble.animate([
    { transform: `translateY(0px) scale(1)`, opacity: 0.5 },
    { transform: `translateY(-${window.innerHeight + size}px) scale(1.3)`, opacity: 0 }
  ], {
    duration: Math.random() * 10000 + 8000,
    easing: "linear",
    iterations: 1,
    fill: "forwards"
  });

  document.getElementById("bg").appendChild(bubble);
  setTimeout(() => bubble.remove(), 20000);
}
setInterval(createBubble, 500);

// Carrossel

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop:true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: true,
  },
  autoplay:{

    delay:3000,
    disableOnInteraction:false,
  }
});