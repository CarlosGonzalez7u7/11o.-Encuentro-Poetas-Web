// =============================================
// 11º Encuentro Poetas del Cupatitzio 2026
// Complete Interactive Script
// =============================================

// ---- POET DATA ----
// Mapeo especial para imágenes (nombre mostrado → nombre de archivo)
const imageNameMap = {
  "Roger Caldeyro": "Rogeri Caldeyro Vazquez",
  Lugupe: "José Luis Gutierrez Peña",
  "Arturo Martínez": "Arturo Reyes Martínez",
  "Rosario Herrera Guido": null, // No tiene imagen, usará avatar
};

const poets = [
  { number: 1, name: "Abdías Martínez" },
  { number: 2, name: "Adolfo Vargas Murguia" },
  { number: 3, name: "Adriana Lizbeth Rodriguez Lino" },
  { number: 4, name: "Aldo Cristian Méndez Castillo" },
  { number: 5, name: "Alejandro Zapata Espinosa" },
  { number: 6, name: "Alejandro Bautista Villegas" },
  { number: 7, name: "Alfonso Pérez Molina" },
  { number: 8, name: "Andrea Murillo Heredia" },
  { number: 9, name: "Ángel Alejandro Chàvez Chàvez" },
  { number: 10, name: "Antonio Ávalos Espinoza" },
  { number: 11, name: "Arturo Martínez" },
  { number: 12, name: "Asshly Adalay Delgado Ponce" },
  { number: 13, name: "Belen Bethzaida Ruiz Perez" },
  { number: 14, name: "Benjamin Ureña Campos" },
  { number: 15, name: "Benjamín Rosales Hernández" },
  { number: 16, name: "Bertha Alicia Castillo Quezada" },
  { number: 17, name: "Bruno Arturo Mujica Juárez" },
  { number: 18, name: "Caridad Villicaña Equihua" },
  { number: 19, name: "Carlos Morales Cuevas" },
  { number: 20, name: "Carmelo López Velazquez" },
  { number: 21, name: "Carmen Neri Ceja" },
  { number: 22, name: "Carol Paola Avalos Uribe" },
  { number: 23, name: "Cecilia Ekaterina Cornejo García" },
  { number: 24, name: "Celina Oseguera Yepez" },
  { number: 25, name: "Christian Marlene Paredes Calderon" },
  { number: 26, name: "Claudia Santillán Velázquez" },
  { number: 27, name: "Columba Miranda Salazar" },
  { number: 28, name: "Cristina Curiel Alcantara" },
  { number: 29, name: "Daniela Isidora Medina Calderón" },
  { number: 30, name: "Dario González Rodríguez" },
  { number: 31, name: "Denys Juárez Laina" },
  { number: 32, name: "Edel Zavala Regalado" },
  { number: 33, name: "Elizabeth Robles Hernández" },
  { number: 34, name: "Eulalia Ledesma Álvarez" },
  { number: 35, name: "Evangelina Hernández Carbajal" },
  { number: 36, name: "Evelin Yasmin Bastida Mora" },
  { number: 37, name: "Fátima Ruiz Sotelo" },
  { number: 38, name: "Fátima Michel Bedolla Plancarte" },
  { number: 39, name: "Francisco Javier Licea Linares" },
  { number: 40, name: "Francisco Javier Ramos Ruiz" },
  { number: 41, name: "Frida Mariana Bustos Esquivel" },
  { number: 42, name: "Genaro Isaías Flores Paredes" },
  { number: 43, name: "Gerardo Ramos Ruíz" },
  { number: 44, name: "Gertrudis Hernández López" },
  { number: 45, name: "Graciela Morales Bermúdez" },
  { number: 46, name: "Graciela Osuna García" },
  { number: 47, name: "Graciela Alicia Vizcaino Paz" },
  { number: 48, name: "Guadalupe Campos Pérez" },
  { number: 49, name: "Guadalupe Zavala Guillén" },
  { number: 50, name: "Gustavo Adolfo Vargas Núñez" },
  { number: 51, name: "Héctor Vargas Montaña" },
  { number: 52, name: "Héctor Martín Moreno Dimas" },
  { number: 53, name: "Héctor Raúl Zalapa Ríos" },
  { number: 54, name: "Irma Zuloaga Neri" },
  { number: 55, name: "Jaime Montoya" },
  { number: 56, name: "Jaime Fernando Santos Rico" },
  { number: 57, name: "Javier García Barrera" },
  { number: 58, name: "Jennifer Farias Bustos" },
  { number: 59, name: "Jesús García Rincón" },
  { number: 60, name: "Jesús Alejandro Ramirez Mendoza" },
  { number: 61, name: "Jorge Albarrán Mondragón" },
  { number: 62, name: "Josabel Sarai Gonzalez Morales" },
  { number: 63, name: "José Antonio Guillén Vargas" },
  { number: 64, name: "José Francisco Cuevas Garibay" },
  { number: 65, name: "Jose Guadalupe Saenz Naranjo" },
  { number: 66, name: "José Iván Ceja Durán" },
  { number: 67, name: "Lugupe" },
  { number: 68, name: "Josué Fernando Morales Gómez" },
  { number: 69, name: "Juan Contreras Hernández" },
  { number: 70, name: "Juan García Chávez" },
  { number: 71, name: "Juan Carlos Gonzalez Orozco" },
  { number: 72, name: "Juan Manuel Madrigal Miranda" },
  { number: 73, name: "Juan Pablo Goñi Capurro" },
  { number: 74, name: "Juan Pablo Ramírez Gallardo" },
  { number: 75, name: "Julio Moguel" },
  { number: 76, name: "Julio César Vázquez Morales" },
  { number: 77, name: "Larissa Sanabria Bueno" },
  { number: 78, name: "Laura Estela Ramos Chávez" },
  { number: 79, name: "Leonel Trujillo Anguiano" },
  { number: 80, name: "Leopoldo Josué Espinoza Monroy" },
  { number: 81, name: "Lorenzo Esteban Vital" },
  { number: 82, name: "Luis Eduardo Olivo Moreno" },
  { number: 83, name: "Makario De la Peña" },
  { number: 84, name: "Manuel Alejandro Santibáñez Huitrón" },
  { number: 85, name: "Marco Cesar Talavera Leal" },
  { number: 86, name: "Margarita Gaona Ortiz" },
  { number: 87, name: "María Concepción Ramírez Sámano" },
  { number: 88, name: "María del Carmen Álvarez Aguilar" },
  { number: 89, name: "María Guadalupe Ávalos Hernández" },
  { number: 90, name: "Maria Rita Mata Moncada" },
  { number: 91, name: "María Soledad Álvarez López" },
  { number: 92, name: "Maria Teresa Sauceso Guia" },
  { number: 93, name: "María Teresa Elizabeth Niehus Casillas" },
  { number: 94, name: "Maribel Arreola Rivas" },
  { number: 95, name: "Mario Cruz Palomino" },
  { number: 96, name: "Martín Alarcón Novoa" },
  { number: 97, name: "Martín Paz Hurtado" },
  { number: 98, name: "Masiel Montserrat Corona Santos" },
  { number: 99, name: "Maya Lorena Pérez Ruiz" },
  { number: 100, name: "Paulina Gisele Álvarez Díaz" },
  { number: 101, name: "Pedro Yovani Ramos Parra" },
  { number: 102, name: "Prisciliano Alvarez Reyes" },
  { number: 103, name: "Raúl Duarte Castillo" },
  { number: 104, name: "Rodrigo Rocha Rojas" },
  { number: 105, name: "Roger Caldeyro" },
  { number: 106, name: "Rosario Herrera Guido" },
  { number: 107, name: "Rosaura Tamayo Ochoa" },
  { number: 108, name: "Rubén Sandoval Aguiar" },
  { number: 109, name: "Rubén Falcón Márquez" },
  { number: 110, name: "Ruth Sáenz Naranjo" },
  { number: 111, name: "Sandra Isabel Martinez Martinez" },
  { number: 112, name: "Santiago Mate Cisneros" },
  { number: 113, name: "Saúl Martínez Aceves" },
  { number: 114, name: "Sergio Roberto Prado Renteria" },
  { number: 115, name: "Silvia Torres Paleo" },
  { number: 116, name: "Teresita del niño Jesús Vega Campa" },
  { number: 117, name: "Teresita Gretey Rangel Dadda" },
  { number: 118, name: "Verónica Salazar García" },
  { number: 119, name: "Victoria Martinez Barrón" },
  { number: 120, name: "Virginia López López" },
  { number: 121, name: "Ximena Quintero Uribe" },
  { number: 122, name: "Xitlali Becerra Pedraza" },
  { number: 123, name: "Yuritskiri Campos Anguiano" },
  { number: 124, name: "Zully Jannet Dávalos Dueñas" },
];

// ---- MESA ASSIGNMENTS ----
// 19 mesas spread across 3 days (updated schedule)
const mesasData = [
  {
    day: 1,
    dayLabel: "Jueves 26 de Febrero - Vespertino",
    dayShort: "Jueves 26",
    mesas: [
      {
        number: 1,
        time: "17:45 hrs",
        poets: [
          "Christian Marlene Paredes Calderon",
          "Teresita Gretey Rangel Dadda",
          "Gertrudis Hernández López",
          "Andrea Murillo Heredia",
          "Leopoldo Josué Espinoza Monroy",
        ],
      },
      {
        number: 2,
        time: "18:45 hrs",
        poets: [
          "Teresita del niño Jesús Vega Campa",
          "Javier García Barrera",
          "Rodrigo Rocha Rojas",
          "Martín Alarcón Novoa",
          "Lugupe",
        ],
      },
    ],
  },
  {
    day: 2,
    dayLabel: "Viernes 27 de Febrero - Matutino",
    dayShort: "Viernes 27 AM",
    mesas: [
      {
        number: 3,
        time: "10:55 hrs",
        poets: [
          "Benjamin Ureña Campos",
          "Bruno Arturo Mujica Juárez",
          "Daniela Isidora Medina Calderón",
          "Fátima Ruiz Sotelo",
          "Silvia Torres Paleo",
        ],
      },
      {
        number: 4,
        time: "11:25 hrs",
        poets: [
          "Eulalia Ledesma Álvarez",
          "Evangelina Hernández Carbajal",
          "Evelin Yasmin Bastida Mora",
          "Elizabeth Robles Hernández",
          "Fátima Michel Bedolla Plancarte",
        ],
      },
      {
        number: 5,
        time: "12:25 hrs",
        poets: [
          "Roger Caldeyro",
          "Saúl Martínez Aceves",
          "Juan Manuel Madrigal Miranda",
          "Luis Eduardo Olivo Moreno",
          "Lorenzo Esteban Vital",
        ],
      },
      {
        number: 6,
        time: "13:15 hrs",
        poets: [
          "María Concepción Ramírez Sámano",
          "Carmen Neri Ceja",
          "Jesús García Rincón",
          "Laura Estela Ramos Chávez",
          "María del Carmen Álvarez Aguilar",
        ],
      },
    ],
  },
  {
    day: 3,
    dayLabel: "Viernes 27 de Febrero - Vespertino",
    dayShort: "Viernes 27 PM",
    mesas: [
      {
        number: 7,
        time: "16:20 hrs",
        poets: [
          "Yuritskiri Campos Anguiano",
          "Leonel Trujillo Anguiano",
          "María Soledad Álvarez López",
          "Virginia López López",
          "Xitlali Becerra Pedraza",
        ],
      },
      {
        number: 8,
        time: "16:50 hrs",
        poets: [
          "Carlos Morales Cuevas",
          "Columba Miranda Salazar",
          "Cristina Curiel Alcantara",
          "Graciela Osuna García",
          "Gustavo Adolfo Vargas Núñez",
        ],
      },
      {
        number: 9,
        time: "17:50 hrs",
        poets: [
          "Claudia Santillán Velázquez",
          "Francisco Javier Ramos Ruiz",
          "Raúl Duarte Castillo",
          "Gerardo Ramos Ruíz",
          "José Antonio Guillén Vargas",
          "Ángel Alejandro Chàvez Chàvez",
        ],
      },
    ],
  },
  {
    day: 4,
    dayLabel: "Sábado 28 de Febrero - Matutino",
    dayShort: "Sábado 28 AM",
    mesas: [
      {
        number: 10,
        time: "10:20 hrs",
        poets: [
          "Rosaura Tamayo Ochoa",
          "Verónica Salazar García",
          "Josué Fernando Morales Gómez",
          "Sandra Isabel Martinez Martinez",
          "Paulina Gisele Álvarez Díaz",
        ],
      },
      {
        number: 11,
        time: "10:50 hrs",
        poets: [
          "Cecilia Ekaterina Cornejo García",
          "Guadalupe Campos Pérez",
          "Juan García Chávez",
          "Edel Zavala Regalado",
          "María Teresa Elizabeth Niehus Casillas",
        ],
      },
      {
        number: 12,
        time: "11:40 hrs",
        poets: [
          "Maribel Arreola Rivas",
          "Celina Oseguera Yepez",
          "Jorge Albarrán Mondragón",
          "Genaro Isaías Flores Paredes",
          "Juan Pablo Ramírez Gallardo",
          "Mario Cruz Palomino",
        ],
      },
      {
        number: 13,
        time: "12:45 hrs",
        poets: [
          "Rosario Herrera Guido",
          "Bertha Alicia Castillo Quezada",
          "Verónica Salazar García",
          "Irma Zuloaga Neri",
          "Maria Rita Mata Moncada",
        ],
      },
      {
        number: 14,
        time: "13:15 hrs",
        poets: [
          "Margarita Gaona Ortiz",
          "Caridad Villicaña Equihua",
          "Rubén Falcón Márquez",
          "Larissa Sanabria Bueno",
          "Belen Bethzaida Ruiz Perez",
        ],
      },
    ],
  },
  {
    day: 5,
    dayLabel: "Sábado 28 de Febrero - Vespertino",
    dayShort: "Sábado 28 PM",
    mesas: [
      {
        number: 15,
        time: "16:30 hrs",
        poets: [
          "Graciela Alicia Vizcaino Paz",
          "Adriana Lizbeth Rodriguez Lino",
          "Manuel Alejandro Santibáñez Huitrón",
          "Frida Mariana Bustos Esquivel",
          "Carol Paola Avalos Uribe",
          "Alejandro Bautista Villegas",
        ],
      },
      {
        number: 16,
        time: "17:00 hrs",
        poets: [
          "Aldo Cristian Méndez Castillo",
          "Jennifer Farias Bustos",
          "Ximena Quintero Uribe",
          "Zully Jannet Dávalos Dueñas",
          "Jesús Alejandro Ramirez Mendoza",
          "Héctor Martín Moreno Dimas",
        ],
      },
      {
        number: 17,
        time: "17:30 hrs",
        poets: [
          "Alfonso Pérez Molina",
          "Graciela Morales Bermúdez",
          "Jaime Montoya",
          "Josabel Sarai Gonzalez Morales",
          "José Iván Ceja Durán",
          "Marco Cesar Talavera Leal",
        ],
      },
      {
        number: 18,
        time: "18:00 hrs",
        poets: [
          "Julio César Vázquez Morales",
          "Maria Teresa Sauceso Guia",
          "Asshly Adalay Delgado Ponce",
          "Denys Juárez Laina",
          "Dario González Rodríguez",
        ],
      },
      {
        number: 19,
        time: "18:30 hrs",
        poets: [
          "Julio Moguel",
          "Maya Lorena Pérez Ruiz",
          "Arturo Martínez",
          "Martín Paz Hurtado",
          "Héctor Raúl Zalapa Ríos",
          "Jose Guadalupe Saenz Naranjo",
        ],
      },
    ],
  },
];

// ---- HELPERS ----
function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getImageName(name) {
  // Check if there's a special mapping for this poet
  if (imageNameMap.hasOwnProperty(name)) {
    const mappedName = imageNameMap[name];
    // If mappedName is null, poet has no image
    return mappedName;
  }
  return name;
}

function getPoetImageSrc(name) {
  const imageName = getImageName(name);
  if (!imageName) {
    return getAvatarSrc(name);
  }
  return `img/${imageName}.jpg`;
}

function getFallbackImageSrc(name) {
  const imageName = getImageName(name);
  if (!imageName) {
    return getAvatarSrc(name);
  }
  return `img/${imageName}.png`;
}

function getAvatarSrc(name) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name,
  )}&size=200&background=d4a574&color=2c1810&bold=true&font-size=0.4`;
}

// ---- COUNTDOWN TIMER ----
function initCountdown() {
  const eventDate = new Date("2026-02-26T17:00:00-06:00").getTime();
  const container = document.getElementById("countdown");
  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minutesEl = document.getElementById("cd-minutes");
  const secondsEl = document.getElementById("cd-seconds");

  function update() {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
      container.innerHTML =
        '<div class="countdown-ended">🎉 ¡El Encuentro ha comenzado!</div>';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

// ---- HERO PARTICLES ----
function initParticles() {
  const container = document.getElementById("heroParticles");
  if (!container) return;

  const count = window.innerWidth < 768 ? 15 : 30;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.bottom = -(Math.random() * 20) + "%";
    particle.style.width = Math.random() * 4 + 2 + "px";
    particle.style.height = particle.style.width;
    particle.style.animationDuration = Math.random() * 15 + 10 + "s";
    particle.style.animationDelay = Math.random() * 10 + "s";
    particle.style.opacity = 0;
    container.appendChild(particle);
  }
}

// ---- NAVIGATION ----
function initNavigation() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle mobile menu
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    links.classList.toggle("open");
    document.body.style.overflow = links.classList.contains("open")
      ? "hidden"
      : "";
  });

  // Close menu on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      links.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  // Scroll effects
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    nav.classList.toggle("scrolled", scroll > 50);
    lastScroll = scroll;
  });

  // Active section highlighting
  const sections = document.querySelectorAll("section[id]");
  const observerOptions = { rootMargin: "-40% 0px -60% 0px" };
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove("active"));
        const activeLink = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`,
        );
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }, observerOptions);

  sections.forEach((s) => sectionObserver.observe(s));
}

// ---- SCROLL REVEAL ----
function initScrollReveal() {
  const elements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  elements.forEach((el) => observer.observe(el));
}

// ---- BACK TO TOP ----
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 600);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---- MESAS DE LECTURA ----
let currentDay = 1;
let highlightedPoetName = null;

function findPoetMesa(poetName) {
  const normalized = normalizeText(poetName);
  for (const dayData of mesasData) {
    for (const mesa of dayData.mesas) {
      for (const name of mesa.poets) {
        if (normalizeText(name).includes(normalized)) {
          return {
            poet: { name: name },
            mesa: mesa,
            day: dayData,
          };
        }
      }
    }
  }
  return null;
}

function renderMesaPoet(poet, highlight = false) {
  const div = document.createElement("div");
  div.className = "mesa-poet" + (highlight ? " highlighted" : "");

  const img = document.createElement("img");
  img.className = "mesa-poet-img";
  img.src = getPoetImageSrc(poet.name);
  img.alt = poet.name;
  img.loading = "lazy";
  img.onerror = function () {
    if (this.src.endsWith(".jpg")) {
      this.src = getFallbackImageSrc(poet.name);
    } else if (this.src.endsWith(".png")) {
      this.src = getAvatarSrc(poet.name);
    }
  };

  const name = document.createElement("span");
  name.className = "mesa-poet-name";
  name.textContent = poet.name;

  div.appendChild(img);
  div.appendChild(name);
  return div;
}

function renderMesas(dayNumber) {
  const container = document.getElementById("mesasContainer");
  container.innerHTML = "";

  const dayData = mesasData.find((d) => d.day === dayNumber);
  if (!dayData) return;

  dayData.mesas.forEach((mesa, idx) => {
    const card = document.createElement("div");
    card.className = "mesa-card";
    card.style.animationDelay = idx * 0.15 + "s";

    const poetCount = mesa.poets.length;

    card.innerHTML = `
      <div class="mesa-card-header">
        <div class="mesa-card-title">
          <div class="mesa-number-badge">${mesa.number}</div>
          <div>
            <h3>Mesa de Lectura ${mesa.number}</h3>
            <span>${dayData.dayLabel}</span>
          </div>
        </div>
        <div class="mesa-meta">
          <div class="mesa-meta-item">🕐 ${mesa.time}</div>
          <div class="mesa-meta-item">👥 ${poetCount} poetas</div>
        </div>
      </div>
      <div class="mesa-card-body">
        <div class="mesa-poets-grid" id="mesa-poets-${mesa.number}"></div>
      </div>
    `;

    container.appendChild(card);

    const poetsGrid = card.querySelector(`#mesa-poets-${mesa.number}`);
    mesa.poets.forEach((poetName) => {
      const shouldHighlight =
        highlightedPoetName &&
        normalizeText(poetName).includes(normalizeText(highlightedPoetName));
      poetsGrid.appendChild(
        renderMesaPoet({ name: poetName }, shouldHighlight),
      );
    });
  });
}

function initMesaTabs() {
  const tabs = document.querySelectorAll(".day-tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      currentDay = parseInt(tab.dataset.day);
      renderMesas(currentDay);
    });
  });

  // Initial render
  renderMesas(1);
}

function initMesaSearch() {
  const input = document.getElementById("mesaSearchInput");
  const resultContainer = document.getElementById("mesaSearchResult");
  let debounceTimer;

  input.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = input.value.trim();

      if (query.length < 2) {
        resultContainer.style.display = "none";
        highlightedPoetName = null;
        renderMesas(currentDay);
        return;
      }

      // Find all matching poets
      const matches = [];
      const normalizedQuery = normalizeText(query);

      for (const dayData of mesasData) {
        for (const mesa of dayData.mesas) {
          for (const poetName of mesa.poets) {
            if (normalizeText(poetName).includes(normalizedQuery)) {
              matches.push({ poet: { name: poetName }, mesa, day: dayData });
            }
          }
        }
      }

      if (matches.length > 0) {
        const first = matches[0];
        highlightedPoetName = first.poet.name;

        resultContainer.innerHTML = `
          <div class="mesa-result-card">
            <div class="result-name">${first.poet.name}</div>
            <div class="result-info">
              <span class="result-badge">📖 Mesa ${first.mesa.number}</span>
              <span class="result-badge">📅 ${first.day.dayShort}</span>
              <span class="result-badge">🕐 ${first.mesa.time}</span>
            </div>
            ${
              matches.length > 1
                ? `<div style="margin-top:0.75rem;font-size:0.8rem;opacity:0.8">y ${
                    matches.length - 1
                  } resultado(s) más</div>`
                : ""
            }
          </div>
        `;
        resultContainer.style.display = "block";

        // Switch to matching day and re-render
        const tabs = document.querySelectorAll(".day-tab");
        tabs.forEach((t) => t.classList.remove("active"));
        const matchTab = document.querySelector(
          `.day-tab[data-day="${first.day.day}"]`,
        );
        if (matchTab) matchTab.classList.add("active");
        currentDay = first.day.day;
        renderMesas(currentDay);

        // Scroll the highlighted poet into view
        setTimeout(() => {
          const highlighted = document.querySelector(".mesa-poet.highlighted");
          if (highlighted) {
            highlighted.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 300);
      } else {
        highlightedPoetName = null;
        resultContainer.innerHTML = `<div class="mesa-result-none">No se encontró ningún poeta con ese nombre</div>`;
        resultContainer.style.display = "block";
        renderMesas(currentDay);
      }
    }, 300);
  });
}

// ---- ANTOLOGÍA GRID ----
function createPoetCard(poet, index) {
  const card = document.createElement("div");
  card.className = "poet-card";
  card.style.animationDelay = Math.min(index * 0.03, 1.5) + "s";

  const img = document.createElement("img");
  img.className = "poet-image";
  img.src = getPoetImageSrc(poet.name);
  img.alt = poet.name;
  img.loading = "lazy";
  img.onerror = function () {
    if (this.src.endsWith(".jpg")) {
      this.src = getFallbackImageSrc(poet.name);
    } else if (this.src.endsWith(".png")) {
      this.src = getAvatarSrc(poet.name);
    }
  };

  const number = document.createElement("div");
  number.className = "poet-number";
  number.textContent = `#${poet.number}`;

  const name = document.createElement("h3");
  name.className = "poet-name";
  name.textContent = poet.name;

  card.appendChild(img);
  card.appendChild(number);
  card.appendChild(name);

  return card;
}

function renderPoets(poetsToRender) {
  const grid = document.getElementById("poetsGrid");
  const noResults = document.getElementById("noResults");
  const countElement = document.getElementById("count");

  grid.innerHTML = "";

  if (poetsToRender.length === 0) {
    noResults.style.display = "block";
    grid.style.display = "none";
  } else {
    noResults.style.display = "none";
    grid.style.display = "grid";

    poetsToRender.forEach((poet, i) => {
      grid.appendChild(createPoetCard(poet, i));
    });
  }

  countElement.textContent = poetsToRender.length;
}

function initPoetSearch() {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    const term = normalizeText(e.target.value);
    if (term === "") {
      renderPoets(poets);
    } else {
      const filtered = poets.filter((p) =>
        normalizeText(p.name).includes(term),
      );
      renderPoets(filtered);
    }
  });

  // Initial render
  renderPoets(poets);
}

// ---- SMOOTH SCROLL FOR ANCHOR LINKS ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// ---- PROGRAMA TABS ----
function initProgramaTabs() {
  const tabs = document.querySelectorAll(".programa-tab");
  const contents = document.querySelectorAll(".programa-day-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const day = tab.dataset.programaDay;

      // Remove active from all
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      // Add active to selected
      tab.classList.add("active");
      document.getElementById(`programa-day-${day}`).classList.add("active");
    });
  });
}

// ---- PDF GENERATOR ----
function initPDFDownload() {
  const btn = document.getElementById("downloadPdfBtn");
  if (!btn) return;

  btn.addEventListener("click", generateProgramPDF);
}

async function generateProgramPDF() {
  const btn = document.getElementById("downloadPdfBtn");
  const originalText = btn.innerHTML;
  btn.innerHTML =
    '<svg class="spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="32"/></svg> Generando PDF...';
  btn.disabled = true;

  // Load jsPDF dynamically
  if (!window.jspdf) {
    await loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
    );
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 12;
  const contentWidth = pageWidth - margin * 2;

  // Colors
  const primary = [44, 24, 16];
  const accent = [212, 165, 116];
  const secondary = [139, 111, 71];
  const white = [255, 255, 255];
  const gray = [100, 100, 100];
  const lightGray = [245, 243, 240];
  const purple = [139, 92, 246];
  const blue = [59, 130, 246];
  const pink = [236, 72, 153];
  const green = [16, 185, 129];

  // ===== HELPER FUNCTIONS =====
  let currentY = 0;

  function checkNewPage(neededHeight) {
    if (currentY + neededHeight > pageHeight - 20) {
      doc.addPage();
      addSmallHeader();
      currentY = 22;
      return true;
    }
    return false;
  }

  function addSmallHeader() {
    doc.setFillColor(...primary);
    doc.rect(0, 0, pageWidth, 12, "F");
    doc.setFillColor(...accent);
    doc.rect(0, 12, pageWidth, 2, "F");
    doc.setTextColor(...white);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text(
      "11o Encuentro Internacional de Poetas del Cupatitzio | 26, 27 y 28 de Febrero 2026",
      pageWidth / 2,
      8,
      { align: "center" },
    );
  }

  function addFooter(pageNum) {
    doc.setFillColor(...accent);
    doc.rect(0, pageHeight - 10, pageWidth, 10, "F");
    doc.setTextColor(...primary);
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Centro Cultural Fabrica de San Pedro | Uruapan, Michoacan, Mexico",
      margin,
      pageHeight - 4,
    );
    doc.text("Pagina " + pageNum, pageWidth - margin, pageHeight - 4, {
      align: "right",
    });
  }

  function drawDayHeader(dayNum, dayName, fullDate) {
    checkNewPage(20);
    // Background bar
    doc.setFillColor(...primary);
    doc.roundedRect(margin, currentY, contentWidth, 16, 2, 2, "F");

    // Day circle
    doc.setFillColor(...accent);
    doc.circle(margin + 12, currentY + 8, 7, "F");
    doc.setTextColor(...primary);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text(dayNum.toString(), margin + 12, currentY + 10, {
      align: "center",
    });

    // Day text
    doc.setTextColor(...white);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text(
      dayName + " " + dayNum + " de Febrero, 2026",
      margin + 26,
      currentY + 10,
    );

    currentY += 20;
  }

  function drawVenueBar(venue, session) {
    checkNewPage(12);
    doc.setFillColor(...secondary);
    doc.roundedRect(margin, currentY, contentWidth, 10, 2, 2, "F");
    doc.setTextColor(...white);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.text("[SEDE] " + venue, margin + 4, currentY + 6);
    if (session) {
      doc.setFont("helvetica", "italic");
      doc.text(session, pageWidth - margin - 4, currentY + 6, {
        align: "right",
      });
    }
    currentY += 13;
  }

  function drawSessionDivider(text) {
    checkNewPage(12);
    doc.setDrawColor(...accent);
    doc.setLineWidth(0.5);
    doc.line(margin + 20, currentY + 3, pageWidth - margin - 20, currentY + 3);
    doc.setFillColor(...white);
    doc.rect(pageWidth / 2 - 22, currentY, 44, 6, "F");
    doc.setTextColor(...accent);
    doc.setFontSize(7);
    doc.setFont("helvetica", "bold");
    doc.text(text, pageWidth / 2, currentY + 4, { align: "center" });
    currentY += 10;
  }

  function drawEvent(time, title, desc, type) {
    const hasDesc = desc && desc.length > 0;
    const eventH = hasDesc ? 12 : 9;
    checkNewPage(eventH + 2);

    // Determine colors based on type
    let bgColor = lightGray;
    let leftColor = accent;

    switch (type) {
      case "inauguracion":
      case "clausura":
        bgColor = [255, 250, 235];
        leftColor = accent;
        break;
      case "memoriam":
        bgColor = [248, 245, 255];
        leftColor = purple;
        break;
      case "conferencia":
        bgColor = [240, 248, 255];
        leftColor = blue;
        break;
      case "musica":
      case "danza":
        bgColor = [255, 245, 250];
        leftColor = pink;
        break;
      case "presentacion":
        bgColor = [240, 255, 248];
        leftColor = green;
        break;
      case "receso":
        bgColor = [248, 248, 248];
        leftColor = gray;
        break;
      default:
        bgColor = [255, 255, 255];
        leftColor = accent;
    }

    // Event box
    doc.setFillColor(...bgColor);
    doc.setDrawColor(220, 220, 220);
    doc.roundedRect(margin + 2, currentY, contentWidth - 4, eventH, 1, 1, "FD");

    // Left color bar
    doc.setFillColor(...leftColor);
    doc.rect(margin + 2, currentY, 2.5, eventH, "F");

    // Time
    doc.setTextColor(...leftColor);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text(time, margin + 8, currentY + 5);

    // Title
    doc.setTextColor(40, 40, 40);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text(title, margin + 26, currentY + 5);

    // Description
    if (hasDesc) {
      doc.setTextColor(...gray);
      doc.setFontSize(7);
      doc.setFont("helvetica", "normal");
      doc.text(desc, margin + 26, currentY + 9);
    }

    currentY += eventH + 2;
  }

  // ===== PAGE 1: COVER + DAY 1 =====

  // Header
  doc.setFillColor(...primary);
  doc.rect(0, 0, pageWidth, 55, "F");
  doc.setFillColor(...accent);
  doc.rect(0, 55, pageWidth, 4, "F");

  // Decorative circles
  doc.setFillColor(60, 40, 30);
  doc.circle(30, 25, 40, "F");
  doc.circle(180, 35, 30, "F");

  // Title
  doc.setTextColor(...white);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("11o Encuentro Internacional", pageWidth / 2, 22, {
    align: "center",
  });
  doc.setFontSize(20);
  doc.text("de Poetas del Cupatitzio", pageWidth / 2, 32, { align: "center" });

  // Date
  doc.setTextColor(...accent);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("26, 27 y 28 de Febrero 2026", pageWidth / 2, 44, {
    align: "center",
  });

  // Location
  doc.setTextColor(180, 180, 180);
  doc.setFontSize(10);
  doc.text("Uruapan, Michoacan, Mexico", pageWidth / 2, 52, {
    align: "center",
  });

  // Sede box
  currentY = 65;
  doc.setFillColor(...lightGray);
  doc.roundedRect(margin, currentY, contentWidth, 14, 3, 3, "F");
  doc.setDrawColor(...accent);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin, currentY, contentWidth, 14, 3, 3, "S");

  doc.setTextColor(...primary);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text(
    "SEDE: CENTRO CULTURAL FABRICA DE SAN PEDRO",
    pageWidth / 2,
    currentY + 6,
    { align: "center" },
  );
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...secondary);
  doc.text(
    "Miguel Trevino 100, Col. Centro, Uruapan, Michoacan",
    pageWidth / 2,
    currentY + 11,
    { align: "center" },
  );

  currentY = 85;

  // DAY 1
  drawDayHeader(26, "Jueves", "Febrero 2026");
  drawVenueBar(
    "GRAN NAVE (Sala de Exposiciones) - Planta Principal",
    "Sesion Vespertina",
  );

  drawEvent(
    "16:30",
    "Recepcion y Registro de Participantes",
    "Entrega de antologias 2025-2026",
    "registro",
  );
  drawEvent(
    "17:00",
    "Inauguracion Oficial",
    "Ceremonia de apertura del 11o Encuentro",
    "inauguracion",
  );
  drawEvent("17:15", "Presentacion Musical", "", "musica");
  drawEvent("17:45", "Mesa de Lectura 01", "", "lectura");
  drawEvent(
    "18:15",
    "In Memoriam: Sandra Morales Vazquez",
    "Lectura de poemas por Laura Ramos",
    "memoriam",
  );
  drawEvent(
    "18:30",
    "In Memoriam: Raul Rios Romero",
    "Lectura de poemas por Jesus Garcia",
    "memoriam",
  );
  drawEvent("18:45", "Mesa de Lectura 02", "", "lectura");
  drawEvent("19:15", "Cierre de la Jornada Vespertina", "", "cierre");

  currentY += 6;

  // DAY 2 - Morning
  drawDayHeader(27, "Viernes", "Febrero 2026");
  drawVenueBar("CRUJIA 6 - Area Posterior", "Sesion Matutina");

  drawEvent("10:00", "Recepcion y Registro de Participantes", "", "registro");
  drawEvent("10:30", "Apertura de Programa", "", "apertura");
  drawEvent(
    "10:35",
    "Presentacion de Antologia Poetica",
    "Universidad Don Vasco - Francisco Javier Ramos Ruiz",
    "presentacion",
  );
  drawEvent("10:55", "Mesa de Lectura 03", "", "lectura");
  drawEvent("11:25", "Mesa de Lectura 04", "", "lectura");
  drawEvent("11:55", "RECESO", "", "receso");
  drawEvent(
    "12:10",
    "In Memoriam: Francisco Javier Licea Linares",
    "",
    "memoriam",
  );
  drawEvent("12:25", "Mesa de Lectura 05", "", "lectura");

  addFooter(1);

  // ===== PAGE 2 =====
  doc.addPage();
  addSmallHeader();
  currentY = 20;

  drawEvent(
    "12:55",
    "In Memoriam: Jose Luis Calderon Vela",
    "Red de Tertulias Guanajuato - Josue Fernando Morales",
    "memoriam",
  );
  drawEvent("13:15", "Mesa de Lectura 06", "", "lectura");
  drawEvent(
    "13:45",
    "Cierre Sesion Matutina - Receso para Comida",
    "",
    "receso",
  );

  currentY += 4;
  drawSessionDivider("SESION VESPERTINA");

  drawVenueBar("CRUJIA 6 - Area Posterior", "Sesion Vespertina");

  drawEvent("16:00", "Recepcion y Registro de Participantes", "", "registro");
  drawEvent("16:15", "Bienvenida", "", "apertura");
  drawEvent("16:20", "Mesa de Lectura 07", "", "lectura");
  drawEvent("16:50", "Mesa de Lectura 08", "", "lectura");
  drawEvent(
    "17:20",
    "In Memoriam: Guadalupe Trigueros",
    "Por Yuritskiri Campos Anguiano",
    "memoriam",
  );
  drawEvent("17:50", "Mesa de Lectura 09", "", "lectura");
  drawEvent(
    "18:20",
    "In Memoriam: Gracia Mendoza Bolio",
    "Por Dra. Maria Concepcion Ramirez Samano",
    "memoriam",
  );
  drawEvent(
    "18:40",
    "Traslado de Participantes a la Gran Nave",
    "",
    "traslado",
  );

  currentY += 4;
  drawVenueBar("GRAN NAVE (Sala de Exposiciones)", "");

  drawEvent("18:40", "Presentacion Musical", "", "musica");
  drawEvent(
    "19:00",
    "Conferencia Magistral",
    "Michel Foucault y la Literatura Moderna - Dra. Rosario Herrera Guido",
    "conferencia",
  );
  drawEvent("19:50", "Cierre de la Jornada", "", "cierre");

  currentY += 6;

  // DAY 3 - Morning
  drawDayHeader(28, "Sabado", "Febrero 2026");
  drawVenueBar("CRUJIA 6 - Area Posterior", "Sesion Matutina");

  drawEvent("10:00", "Recepcion y Registro de Participantes", "", "registro");
  drawEvent("10:15", "Apertura", "", "apertura");
  drawEvent("10:20", "Mesa de Lectura 10", "", "lectura");
  drawEvent("10:50", "Mesa de Lectura 11", "", "lectura");
  drawEvent(
    "11:20",
    'Antologia "Vuelo de la Palabra por la Paz"',
    "Academia Nacional e Internacional de la Poesia - SMGE Michoacan",
    "presentacion",
  );

  addFooter(2);

  // ===== PAGE 3 =====
  doc.addPage();
  addSmallHeader();
  currentY = 20;

  drawEvent("11:40", "Mesa de Lectura 12", "", "lectura");
  drawEvent(
    "12:10",
    "Mesa de Lectura - Asociacion Red Nemesis",
    "Presentada por Juan Contreras",
    "lectura",
  );
  drawEvent(
    "12:30",
    "In Memoriam: Marco Antonio Herrera Guido",
    "Por Rosario Herrera Guido",
    "memoriam",
  );
  drawEvent("12:45", "Mesa de Lectura 13", "", "lectura");
  drawEvent("13:15", "Mesa de Lectura 14", "", "lectura");
  drawEvent(
    "13:45",
    "Grupo de Danza THIPIKUARETA PURHEMBE",
    "Riqueza Purepecha",
    "danza",
  );
  drawEvent("14:15", "Receso para Comida", "", "receso");

  currentY += 4;
  drawSessionDivider("SESION VESPERTINA");

  drawVenueBar("GRAN NAVE (Sala de Exposiciones)", "Sesion Vespertina");

  drawEvent("16:00", "Recepcion y Registro de Participantes", "", "registro");
  drawEvent("16:30", "Mesa de Lectura 15", "", "lectura");
  drawEvent("17:00", "Mesa de Lectura 16", "", "lectura");
  drawEvent("17:30", "Mesa de Lectura 17", "", "lectura");
  drawEvent("18:00", "Mesa de Lectura 18", "", "lectura");
  drawEvent("18:30", "Mesa de Lectura 19", "", "lectura");
  drawEvent("19:00", "Presentacion Musical", "", "musica");
  drawEvent("19:20", "Fotografia Oficial", "", "foto");
  drawEvent(
    "19:25",
    "CLAUSURA DEL EVENTO",
    "Ceremonia de cierre del 11o Encuentro Internacional de Poetas",
    "clausura",
  );

  // Final quote box
  currentY += 8;
  doc.setFillColor(...lightGray);
  doc.roundedRect(margin, currentY, contentWidth, 20, 3, 3, "F");
  doc.setDrawColor(...accent);
  doc.roundedRect(margin, currentY, contentWidth, 20, 3, 3, "S");

  doc.setTextColor(...primary);
  doc.setFontSize(11);
  doc.setFont("helvetica", "italic");
  doc.text('"Donde hay poesia, hay esperanza"', pageWidth / 2, currentY + 9, {
    align: "center",
  });

  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...secondary);
  doc.text(
    "(c) 2026 - 11o Encuentro Internacional de Poetas del Cupatitzio",
    pageWidth / 2,
    currentY + 15,
    { align: "center" },
  );

  addFooter(3);

  // Save the PDF
  doc.save("Programa_11o_Encuentro_Poetas_Cupatitzio_2026.pdf");

  btn.innerHTML = originalText;
  btn.disabled = false;
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// ---- INITIALIZE EVERYTHING ----
document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  initParticles();
  initNavigation();
  initScrollReveal();
  initBackToTop();
  initMesaTabs();
  initMesaSearch();
  initPoetSearch();
  initSmoothScroll();
  initProgramaTabs();
  initPDFDownload();
});
