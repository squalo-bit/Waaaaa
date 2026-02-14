
const city1 = { lat: 15.0343, lon: 120.6844 }; 
const city2 = { lat: 14.5176, lon: 121.0509 }; 

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(0);
}

document.addEventListener("DOMContentLoaded", () => {
  const distance = calculateDistance(
    city1.lat, city1.lon,
    city2.lat, city2.lon
  );
  document.getElementById("distanceKm").textContent = distance;
});


let currentPage = 1;
const bgMusic = document.getElementById("bgMusic");

function nextPage() {
  if (currentPage === 1) {
    fadeInMusic();
  }

  document.getElementById("page" + currentPage).classList.remove("active");

  currentPage++;

  const next = document.getElementById("page" + currentPage);
  next.classList.add("active");

  animatePage(currentPage);
}



function fadeInMusic() {
  bgMusic.volume = 0;
  bgMusic.play();

  let volume = 0;
  const fade = setInterval(() => {
    if (volume < 0.25) {
      volume += 0.01;
      bgMusic.volume = volume;
    } else clearInterval(fade);
  }, 200);
}

function fadeDownMusic() {
  let volume = bgMusic.volume;
  const fade = setInterval(() => {
    if (volume > 0.15) {
      volume -= 0.01;
      bgMusic.volume = volume;
    } else clearInterval(fade);
  }, 200);
}


const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 500 - 100;
    const y = Math.random() * 200 - 50;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
    yesBtn.style.transform = "scale(1.15)";
  });
}

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    document.getElementById("page4").style.display = "none";

    const celebration = document.getElementById("celebration");
    celebration.style.display = "flex";

    fadeDownMusic();
    createHearts();
    typeLetter();
  });
}


function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";
    heart.style.fontSize = "2rem";
    heart.style.animation = "floatUp 3s linear";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }, 300);
}


const loveLetterText = `
I love you babaaa, more than you know. 
Its hard but im trying my best to show it. 
im sorry i coudn't get you flowers today, 
i really wanted to buy some for you and 
give them to you in person but yeh, 
when we see each other in person, 
I'll bring flowers for you i promise.
`;

function typeLetter() {
  const element = document.getElementById("typedLetter");
  let index = 0;
  function type() {
    if (index < loveLetterText.length) {
      element.textContent += loveLetterText.charAt(index);
      index++;
      setTimeout(type, 35);
    }
  }
  type();
}

window.addEventListener("load", () => {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page1").classList.add("active");
  document.getElementById("celebration").style.display = "none";
});


function animatePage(pageNumber) {
  const page = document.getElementById("page" + pageNumber);
  const elements = page.querySelectorAll("h1, p, li, img, .buttons");

  elements.forEach((el, index) => {
    el.classList.add("fade-item");

    setTimeout(() => {
      el.classList.add("show");
    }, index * 600);
  });
}

window.addEventListener("load", () => {
  animatePage(1);
});



const images = document.querySelectorAll(".photo-grid img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("show");
    modalImg.src = img.src;
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("show");
});
