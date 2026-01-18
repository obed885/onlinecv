// preloader
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 800);
});
// nav
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// count
let count = 0;
const counterElement = document.getElementById("counter");

// Intervalle pour incrémenter automatiquement
const interval = setInterval(() => {
  count += 1; // augmente de 1 à chaque fois
  counterElement.textContent = count;

  // Stop à 1000 (optionnel)
  if (count >= 30) {
    clearInterval(interval);
  }
}, 100); // toutes les 100ms

// counter 2
const counter2 = document.getElementById("counter2");

// Intervalle pour incrémenter automatiquement
const space = setInterval(() => {
  count += 1; // augmente de 1 à chaque fois
  counter2.textContent = count;

  // Stop à 1000 (optionnel)
  if (count >= 2) {
    clearInterval(space);
  }
}, 100); // toutes les 100ms

// counter 3
const counter3 = document.getElementById("counter3");

// Intervalle pour incrémenter automatiquement
const space3 = setInterval(() => {
  count += 1; // augmente de 1 à chaque fois
  counter3.textContent = count;

  // Stop à 1000 (optionnel)
  if (count >= 20) {
    clearInterval(space3);
  }
}, 100); // toutes les 100ms

// counter 4
const counter4 = document.getElementById("counter4");

// Intervalle pour incrémenter automatiquement
const space4 = setInterval(() => {
  count += 1; // augmente de 1 à chaque fois
  counter4.textContent = count;

  // Stop à 1000 (optionnel)
  if (count >= 30) {
    clearInterval(space4);
  }
}, 100); // toutes les 100ms

// hero img

const imagefuction = () => {
  const hero = document.getElementById("hero-img");

  const heroimage = [
    {
      img: "images/hero-img.png",
    },
  ];

  const imgdis = document.createElement("div");

  heroimage.forEach((e) => {
    imgdis.innerHTML = `
      <img src="${e.img}" id="hero" class="img-fluid"  />
    `;
  });

  hero.appendChild(imgdis);
};

imagefuction();

// workexperience
const items = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 },
);

items.forEach((item) => observer.observe(item));

// projects
const proj = [
  {
    img: "images/HTML5.svg",
    item: "Html5",
  },
  {
    img: "images/CSS3.svg",
    item: "Css3",
  },

  {
    img: "images/psd.svg",
    item: "Photoshop",
  },
  {
    img: "images/javaScript.svg",
    item: "JavaScript",
  },

  {
    img: "images/MySQL.svg",
    item: "Mysql",
  },

  {
    img: "images/SQLite.png",
    item: "Sql",
  },

  {
    img: "images/python.svg",
    item: "Python",
  },

  {
    img: "images/React.svg",
    item: "React",
  },

  {
    img: "images/Bootstrap.svg",
    item: "Bootstrap",
  },

  {
    img: "images/cshp.svg",
    item: "C#",
  },
];

const containersc = document.getElementById("scrollContainer");
const btnLeft = document.getElementById("scrollLeft");
const btnRight = document.getElementById("scrollRight");
const scrollproduct = document.getElementById("scrollpro");

function scrollproducts() {
  btnLeft.addEventListener("click", () => {
    containersc.scrollBy({ left: -300, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    containersc.scrollBy({ left: 300, behavior: "smooth" });
  });

  proj.forEach((el) => {
    const disother = document.createElement("div");
    disother.className = " col-6 col-md-4 col-lg-3 justify-content-center";
    disother.innerHTML = `
    <div class='text-center' id="card">
    
    
        <img src="${el.img}" id="tech" class="img-fluid">
        <h5 id="itemelang">${el.item}</h5>

       
        <div id='starelement' class='text-center'>
        
        <span>
          <i class='bi bi-star-fill'></i>
          <i class='bi bi-star-fill'></i>
          <i class='bi bi-star-fill'></i>
        </span>
          
          <i class='bi bi-star'></i>
          <i class='bi bi-star'></i>

        </div>

        <a href="#" id="icone"><i  class="bi bi-github"></i></a>
        <a href="#" id="icone"><i  class="bi bi-youtube"></i></a>
        <a href="#" id="icone"><i  class="bi bi-git"></i></a>
        
    </div>
          
`;

    scrollproduct.appendChild(disother);
  });
}

scrollproducts();

// Typer
let typed = new Typed("#element", {
  strings: [
    "I'm Front-End juniorDev.",
    "I'm UI/UX Designer",
    "I'm Junior Software Engineer",
  ],
  typeSpeed: 100,
  backSpeed: 180,
  loop: true,
});

const rainBg = document.getElementById("hero-section");

function createDrop() {
  const drop = document.createElement("div");
  drop.classList.add("drop");

  // Position horizontale random
  drop.style.left = Math.random() * window.innerWidth + "px";

  // Durée random
  const duration = Math.random() * 1 + 0.5;
  drop.style.animationDuration = duration + "s";

  // Taille random
  drop.style.height = Math.random() * 30 + 20 + "px";

  rainBg.appendChild(drop);

  // Supprimer après animation
  setTimeout(() => {
    drop.remove();
  }, duration * 1000);
}

// Générer la pluie
setInterval(createDrop, 50);

// scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    scrollUpBtn.style.display = "flex";
  } else {
    scrollUpBtn.style.display = "none";
  }
});

// Retour en haut au clic
scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Animation

const obsever = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".global-animation");
hiddenElements.forEach((el) => obsever.observe(el));
