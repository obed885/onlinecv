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
function animateCounter(elementId, target, duration) {
      const element = document.getElementById(elementId);
      let start = 0;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
          start += increment;

          if (start >= target) {
              element.textContent = target;
              clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    window.addEventListener("DOMContentLoaded", () => {
        animateCounter("counter", 9, 2000);
        animateCounter("counter2", 2, 2000);
        animateCounter("counter4", 1, 2000);
    });


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
    img: "images/CSS3.svg",
    item: "Css3",
  },

  {
    img: "images/psd.svg",
    item: "Photoshop",
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
    img: "images/mysqldb.svg",
    item: "Mysql",
  },

  {
    img: "images/javascript-logo.svg",
    item: "JavaScript",
  },
  {
    img: "images/PHP.svg",
    item: "PHP",
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
    </div>
          
`;

    scrollproduct.appendChild(disother);
  });
}

scrollproducts();


// Projects



document.addEventListener("DOMContentLoaded", () => {

    const carousel = document.getElementById("projectsCarousel");
    const prevBtn = document.getElementById("prevProject");
    const nextBtn = document.getElementById("nextProject");
    const indicators = document.getElementById("projectIndicators");

    if (!carousel || !prevBtn || !nextBtn || !indicators) return;

    const items = carousel.querySelectorAll(".project-item");

    if (items.length === 0) return;

    let currentIndex = 0;

    function getVisibleItems() {
        if (window.innerWidth <= 576) return 1;
        if (window.innerWidth <= 991) return 2;
        return 4;
    }

    function getMaxIndex() {
        return Math.max(0, items.length - getVisibleItems());
    }

    function getStep() {
        if (items.length === 0) return 0;

        const style = window.getComputedStyle(carousel);
        const gap = parseFloat(style.columnGap) || 20;

        return items[0].getBoundingClientRect().width + gap;
    }

    function updateCarousel() {
        currentIndex = Math.min(currentIndex, getMaxIndex());

        carousel.scrollTo({
            left: currentIndex * getStep(),
            behavior: "smooth"
        });

        updateIndicators();
    }

    function updateIndicators() {
        const dots = indicators.querySelectorAll("span");

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= getMaxIndex();
    }

    function createIndicators() {
        indicators.innerHTML = "";

        for (let i = 0; i <= getMaxIndex(); i++) {
            const dot = document.createElement("span");

            dot.addEventListener("click", () => {
                currentIndex = i;
                updateCarousel();
            });

            indicators.appendChild(dot);
        }

        updateIndicators();
    }

    nextBtn.addEventListener("click", () => {
        if (currentIndex < getMaxIndex()) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    carousel.addEventListener("scroll", () => {
        const step = getStep();

        if (step > 0) {
            currentIndex = Math.round(carousel.scrollLeft / step);
            updateIndicators();
        }
    });

    window.addEventListener("resize", () => {
        createIndicators();
        updateCarousel();
    });

    createIndicators();

});








// Typer
let typed = new Typed("#element", {
  strings: [
    "I'm Front-End juniorDev.",
    "I'm UI/UX Designer",
    "I'm Junior Software Eng.",
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

// footer

const footeryear = () => {
  const year = document.getElementById("year");
  const SetYear = new Date();

  year.textContent = SetYear.getFullYear();
};

footeryear();
