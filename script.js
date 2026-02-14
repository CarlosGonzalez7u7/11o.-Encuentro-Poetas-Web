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
  { number: 5, name: "Alejandro Zapata Espinoza" },
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
  { number: 20, name: "José Carmelo López Velázquez" },
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
  { number: 98, name: "Masiel Monserrat Corona Santos" },
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
  { number: 114, name: "Sergio Roberto Prado Rentería" },
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
          "Alejandro Zapata Espinoza",
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
          "Héctor Vargas Montaña",
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
          "Jaime Fernando Santos Rico",
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
          "José Francisco Cuevas Garibay",
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
          "Juan Carlos Gonzalez Orozco",
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
          "Makario de la Peña",
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
          "María Guadalupe Ávalos Hernández",
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
          "Masiel Monserrat Corona Santos",
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
          "Pedro Yovani Ramos Parra",
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
          "Prisciliano Alvarez Reyes",
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
          "Rubén Sandoval Aguiar",
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
          "Sergio Roberto Prado Rentería",
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
          "José Carmelo López Velázquez",
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
          "Juan Pablo Goñi Capurro",
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

function findPoetMesa(poetName) {
  const norm = normalizeText(poetName);
  for (const dayData of mesasData) {
    for (const mesa of dayData.mesas) {
      for (const name of mesa.poets) {
        if (normalizeText(name) === norm) {
          return { mesa, day: dayData };
        }
      }
    }
  }
  return null;
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

  if (!toggle || !links) return;

  // Toggle mobile menu
  function toggleMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    toggle.classList.toggle("active");
    links.classList.toggle("open");
    document.body.style.overflow = links.classList.contains("open")
      ? "hidden"
      : "";
  }

  // Use both click for desktop and touchstart for better mobile response
  toggle.addEventListener("click", toggleMenu, { passive: false });

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

// ---- SHARE UTILITIES ----
const SITE_URL =
  "https://carlosgonzalez7u7.github.io/11o.-Encuentro-Poetas-Web/";

function getPoetShareText(poetName, mesaInfo) {
  if (mesaInfo) {
    return [
      "¡" +
        poetName +
        " participa en el 11° Encuentro Internacional de Poetas del Cupatitzio 2026!",
      "",
      "◆ Mesa de Lectura " + mesaInfo.mesa.number,
      "◆ " + mesaInfo.day.dayShort,
      "◆ " + mesaInfo.mesa.time,
      "◆ Centro Cultural Fábrica de San Pedro, Uruapan",
      "",
      "26, 27 y 28 de Febrero 2026",
    ].join("\n");
  }
  return [
    "¡" +
      poetName +
      " participa en el 11° Encuentro Internacional de Poetas del Cupatitzio 2026!",
    "",
    "◆ Centro Cultural Fábrica de San Pedro, Uruapan",
    "26, 27 y 28 de Febrero 2026",
  ].join("\n");
}

function getMesaShareText(mesaNumber, dayLabel, time, poetNames) {
  const poetList = poetNames
    .map(function (n) {
      return "  • " + n;
    })
    .join("\n");
  return [
    "Mesa de Lectura " +
      mesaNumber +
      " — 11° Encuentro de Poetas del Cupatitzio 2026",
    "",
    "◆ " + dayLabel,
    "◆ " + time,
    "",
    "Poetas participantes:",
    poetList,
    "",
    "◆ Centro Cultural Fábrica de San Pedro, Uruapan",
  ].join("\n");
}

function shareOnWhatsApp(text) {
  const url = `https://wa.me/?text=${encodeURIComponent(text + "\n" + SITE_URL)}`;
  window.open(url, "_blank");
}

function shareOnFacebook() {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}`;
  window.open(url, "_blank", "width=600,height=400");
}

// Generate a shareable card image using Canvas
function generateShareCard(poetName, mesaInfo) {
  return new Promise(function (resolve) {
    var W = 720,
      H = 480;
    var canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    var ctx = canvas.getContext("2d");

    // Background gradient
    var grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, "#1a1a2e");
    grad.addColorStop(0.5, "#16213e");
    grad.addColorStop(1, "#0f3460");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Decorative accent bar at top
    var accentGrad = ctx.createLinearGradient(0, 0, W, 0);
    accentGrad.addColorStop(0, "#d4a574");
    accentGrad.addColorStop(1, "#c9956b");
    ctx.fillStyle = accentGrad;
    ctx.fillRect(0, 0, W, 6);

    // Event title
    ctx.fillStyle = "#d4a574";
    ctx.font = "bold 18px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText(
      "11° Encuentro Internacional de Poetas del Cupatitzio",
      W / 2,
      50,
    );

    // Year subtitle
    ctx.fillStyle = "rgba(212,165,116,0.7)";
    ctx.font = "14px Georgia, serif";
    ctx.fillText("26, 27 y 28 de Febrero 2026 — Uruapan, Michoacán", W / 2, 75);

    // Divider line
    ctx.strokeStyle = "rgba(212,165,116,0.3)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(100, 95);
    ctx.lineTo(W - 100, 95);
    ctx.stroke();

    // Load poet image
    var img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = finishCard;
    img.onerror = finishCard;
    img.src = getPoetImageSrc(poetName);

    function finishCard() {
      // Poet photo (circle)
      var cx = W / 2,
        cy = 175,
        r = 60;
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      if (img.complete && img.naturalWidth > 0) {
        ctx.drawImage(img, cx - r, cy - r, r * 2, r * 2);
      } else {
        ctx.fillStyle = "#d4a574";
        ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
        ctx.fillStyle = "#1a1a2e";
        ctx.font = "bold 36px Georgia, serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(poetName.charAt(0).toUpperCase(), cx, cy);
      }
      ctx.restore();

      // Circle border
      ctx.strokeStyle = "#d4a574";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy, r + 2, 0, Math.PI * 2);
      ctx.stroke();

      // Poet name
      ctx.fillStyle = "#faf8f5";
      ctx.font = "bold 26px Georgia, serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText(poetName, W / 2, 250);

      // Mesa info
      if (mesaInfo) {
        ctx.fillStyle = "#d4a574";
        ctx.font = "bold 20px Georgia, serif";
        ctx.fillText("Mesa de Lectura " + mesaInfo.mesa.number, W / 2, 295);

        ctx.fillStyle = "rgba(250,248,245,0.85)";
        ctx.font = "17px Georgia, serif";
        ctx.fillText(
          mesaInfo.day.dayShort + "  •  " + mesaInfo.mesa.time,
          W / 2,
          330,
        );
      }

      // Location
      ctx.fillStyle = "rgba(250,248,245,0.6)";
      ctx.font = "14px Georgia, serif";
      ctx.fillText("Centro Cultural Fábrica de San Pedro, Uruapan", W / 2, 375);

      // Bottom accent bar
      ctx.fillStyle = accentGrad;
      ctx.fillRect(0, H - 6, W, 6);

      // Website
      ctx.fillStyle = "rgba(212,165,116,0.6)";
      ctx.font = "12px Georgia, serif";
      ctx.fillText(SITE_URL, W / 2, H - 20);

      canvas.toBlob(function (blob) {
        resolve(blob);
      }, "image/png");
    }
  });
}

// Share with image via Web Share API, fallback to text-only
async function shareWithCard(poetName, mesaInfo, text) {
  if (navigator.share && navigator.canShare) {
    try {
      var blob = await generateShareCard(poetName, mesaInfo);
      var file = new File(
        [blob],
        "poeta-" + poetName.replace(/\s+/g, "-") + ".png",
        { type: "image/png" },
      );
      var shareData = {
        text: text + "\n" + SITE_URL,
        files: [file],
      };
      if (navigator.canShare(shareData)) {
        await navigator.share(shareData);
        return;
      }
    } catch (err) {
      if (err.name === "AbortError") return; // user cancelled
    }
  }
  // Fallback: text-only WhatsApp
  shareOnWhatsApp(text);
}

function createShareButtons(whatsappText, size, poetName, mesaInfo) {
  size = size || "normal";
  const wrap = document.createElement("div");
  wrap.className = `share-buttons ${size === "small" ? "share-buttons-sm" : ""}`;

  const waBtn = document.createElement("button");
  waBtn.className = "share-btn share-btn-wa";
  waBtn.setAttribute("aria-label", "Compartir en WhatsApp");
  waBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>${size === "small" ? "" : " WhatsApp"}`;
  waBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (poetName) {
      shareWithCard(poetName, mesaInfo || null, whatsappText);
    } else {
      shareOnWhatsApp(whatsappText);
    }
  });

  const fbBtn = document.createElement("button");
  fbBtn.className = "share-btn share-btn-fb";
  fbBtn.setAttribute("aria-label", "Compartir en Facebook");
  fbBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>${size === "small" ? "" : " Facebook"}`;
  fbBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    shareOnFacebook();
  });

  wrap.appendChild(waBtn);
  wrap.appendChild(fbBtn);
  return wrap;
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

function renderMesaPoet(poet, highlight = false, mesaInfo = null) {
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

  const infoWrap = document.createElement("div");
  infoWrap.className = "mesa-poet-info";

  const name = document.createElement("span");
  name.className = "mesa-poet-name";
  name.textContent = poet.name;

  infoWrap.appendChild(name);

  // Add small share button for each poet in mesa
  const shareText = getPoetShareText(poet.name, mesaInfo);
  const shareBtn = document.createElement("button");
  shareBtn.className = "share-btn-inline share-btn-wa";
  shareBtn.setAttribute("aria-label", "Compartir en WhatsApp");
  shareBtn.title = "Compartir en WhatsApp";
  shareBtn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
  shareBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    shareWithCard(poet.name, mesaInfo, shareText);
  });
  infoWrap.appendChild(shareBtn);

  div.appendChild(img);
  div.appendChild(infoWrap);
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
        <div class="mesa-share-bar" id="mesa-share-${mesa.number}"></div>
      </div>
    `;

    container.appendChild(card);

    // Add share buttons to mesa card
    const mesaShareText = getMesaShareText(
      mesa.number,
      dayData.dayLabel,
      mesa.time,
      mesa.poets,
    );
    const shareBar = card.querySelector(`#mesa-share-${mesa.number}`);
    shareBar.appendChild(createShareButtons(mesaShareText));

    const mesaInfoForPoets = { mesa, day: dayData };
    const poetsGrid = card.querySelector(`#mesa-poets-${mesa.number}`);
    mesa.poets.forEach((poetName) => {
      const shouldHighlight =
        highlightedPoetName &&
        normalizeText(poetName).includes(normalizeText(highlightedPoetName));
      poetsGrid.appendChild(
        renderMesaPoet({ name: poetName }, shouldHighlight, mesaInfoForPoets),
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

        const resultShareText = getPoetShareText(first.poet.name, {
          mesa: first.mesa,
          day: first.day,
        });
        resultContainer.innerHTML = `
          <div class="mesa-result-card">
            <div class="result-name">${first.poet.name}</div>
            <div class="result-info">
              <span class="result-badge">📖 Mesa ${first.mesa.number}</span>
              <span class="result-badge">📅 ${first.day.dayShort}</span>
              <span class="result-badge">🕐 ${first.mesa.time}</span>
            </div>
            <div class="result-share" id="resultShareBtns"></div>
            ${
              matches.length > 1
                ? `<div style="margin-top:0.75rem;font-size:0.8rem;opacity:0.8">y ${
                    matches.length - 1
                  } resultado(s) más</div>`
                : ""
            }
          </div>
        `;
        // Add share buttons to result card
        const resultShareWrap =
          resultContainer.querySelector("#resultShareBtns");
        if (resultShareWrap)
          resultShareWrap.appendChild(
            createShareButtons(resultShareText, "normal", first.poet.name, {
              mesa: first.mesa,
              day: first.day,
            }),
          );
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

  // Find poet's mesa info for the share text
  const mesaInfo = findPoetMesa(poet.name);
  const shareText = getPoetShareText(poet.name, mesaInfo);
  const shareWrap = createShareButtons(shareText, "small", poet.name, mesaInfo);

  card.appendChild(img);
  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(shareWrap);

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

// Helper function to load image as circular for PDF
function loadImageAsCircular(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const size = Math.min(img.width, img.height);
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      // Create circular clip
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      // Draw image centered
      const offsetX = (img.width - size) / 2;
      const offsetY = (img.height - size) / 2;
      ctx.drawImage(img, offsetX, offsetY, size, size, 0, 0, size, size);

      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

// Helper function to load image as base64 for PDF
function loadImageAsBase64(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
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

  // Load logos for the PDF
  const [logoPoetas, logoCCFS, qrFacebook, qrWeb] = await Promise.all([
    loadImageAsCircular("img/PoetasCupa.png"),
    loadImageAsBase64("img/CCFS.png"),
    loadImageAsBase64(
      "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1JSvw8dcov%2F",
    ),
    loadImageAsBase64(
      "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https%3A%2F%2Fcarlosgonzalez7u7.github.io%2F11o.-Encuentro-Poetas-Web%2F",
    ),
  ]);

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
  const orange = [249, 115, 22];

  let currentY = 0;
  let pageNum = 1;

  function addSmallHeader() {
    doc.setFillColor(...primary);
    doc.rect(0, 0, pageWidth, 12, "F");
    doc.setFillColor(...accent);
    doc.rect(0, 12, pageWidth, 2, "F");

    // Small logos in header corners
    if (logoPoetas) {
      try {
        doc.addImage(logoPoetas, "PNG", 3, 1, 10, 10);
      } catch (e) {}
    }
    if (logoCCFS) {
      try {
        // White background for CCFS logo
        doc.setFillColor(255, 255, 255);
        doc.circle(pageWidth - 8, 6, 5.5, "F");
        doc.addImage(logoCCFS, "PNG", pageWidth - 13, 1, 10, 10);
      } catch (e) {}
    }

    doc.setTextColor(...white);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.text(
      "11o Encuentro Internacional de Poetas del Cupatitzio | 26-28 Feb 2026",
      pageWidth / 2,
      8,
      { align: "center" },
    );
  }

  function addFooter() {
    // Decorative footer with poetic quote
    doc.setFillColor(...accent);
    doc.rect(0, pageHeight - 14, pageWidth, 14, "F");

    // Poetic quote
    doc.setTextColor(...primary);
    doc.setFontSize(6);
    doc.setFont("helvetica", "italic");
    doc.text(
      '"«La poesía es el eco de la melodía del universo en el corazón de los humanos». Rabindranath Tagore"',
      pageWidth / 2,
      pageHeight - 10,
      { align: "center" },
    );

    // Footer info
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Centro Cultural Fábrica de San Pedro | Uruapan, Michoacán",
      margin,
      pageHeight - 4,
    );
    doc.text(
      "Poetas del Cupatitzio | Pag. " + pageNum,
      pageWidth - margin,
      pageHeight - 4,
      {
        align: "right",
      },
    );
  }

  function newPage() {
    addFooter();
    // Add subtle decorative elements
    addPageDecorations();
    doc.addPage();
    pageNum++;
    addSmallHeader();
    currentY = 20;
  }

  // Subtle decorative elements for pages
  function addPageDecorations() {
    // Decorative corner circles with low opacity
    doc.setFillColor(212, 165, 116);
    doc.setDrawColor(212, 165, 116);

    // Bottom corners - small decorative circles
    doc.circle(8, pageHeight - 22, 3, "S");
    doc.circle(pageWidth - 8, pageHeight - 22, 3, "S");
  }

  function ensureSpace(neededHeight) {
    if (currentY + neededHeight > pageHeight - 18) {
      newPage();
      return true;
    }
    return false;
  }

  function getEventHeight(hasDesc) {
    return hasDesc ? 12 : 9;
  }

  function drawDayHeader(dayNum, dayName) {
    doc.setFillColor(...primary);
    doc.roundedRect(margin, currentY, contentWidth, 16, 2, 2, "F");
    doc.setFillColor(...accent);
    doc.circle(margin + 12, currentY + 8, 7, "F");
    doc.setTextColor(...primary);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text(dayNum.toString(), margin + 12, currentY + 10, {
      align: "center",
    });
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
    const eventH = getEventHeight(hasDesc);

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
      case "mesa":
      case "mesas":
      case "lectura":
        bgColor = [255, 247, 237];
        leftColor = orange;
        break;
      default:
        bgColor = [255, 255, 255];
        leftColor = accent;
    }

    doc.setFillColor(...bgColor);
    doc.setDrawColor(220, 220, 220);
    doc.roundedRect(margin + 2, currentY, contentWidth - 4, eventH, 1, 1, "FD");
    doc.setFillColor(...leftColor);
    doc.rect(margin + 2, currentY, 2.5, eventH, "F");
    doc.setTextColor(...leftColor);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text(time, margin + 8, currentY + 5);
    doc.setTextColor(40, 40, 40);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text(title, margin + 26, currentY + 5);
    if (hasDesc) {
      doc.setTextColor(...gray);
      doc.setFontSize(7);
      doc.setFont("helvetica", "normal");
      doc.text(desc, margin + 26, currentY + 9);
    }
    currentY += eventH + 2;
  }

  // Program data structure for intelligent page breaks
  const programData = [
    {
      type: "day",
      dayNum: 26,
      dayName: "Jueves",
      sessions: [
        {
          venue: "GRAN NAVE (Sala de Exposiciones) - Planta Principal",
          sessionLabel: "Sesión Vespertina",
          events: [
            {
              time: "16:30",
              title: "Recepción y Registro de Participantes",
              desc: "Entrega de antologías 2025-2026",
              type: "registro",
            },
            {
              time: "17:00",
              title: "Inauguración Oficial",
              desc: "Ceremonia de apertura del 11o Encuentro",
              type: "inauguracion",
            },
            {
              time: "17:05",
              title: "Presentación de la Antología del Encuentro",
              desc: "Antología Poetas del Cupatitzio 2025-2026",
              type: "presentacion",
            },
            {
              time: "17:15",
              title: "Presentación Musical",
              desc: "",
              type: "musica",
            },
            {
              time: "17:45",
              title: "Mesa de Lectura 01",
              desc: "",
              type: "lectura",
            },
            {
              time: "18:15",
              title: "In Memoriam: Sandra Morales Vázquez",
              desc: "Lectura de poemas por Laura Ramos",
              type: "memoriam",
            },
            {
              time: "18:30",
              title: "In Memoriam: Raúl Ríos Romero",
              desc: "Lectura de poemas por Jesus Garcia",
              type: "memoriam",
            },
            {
              time: "18:45",
              title: "Mesa de Lectura 02",
              desc: "",
              type: "lectura",
            },
            {
              time: "19:15",
              title: "Cierre de la Jornada Vespertina",
              desc: "",
              type: "cierre",
            },
          ],
        },
      ],
    },
    {
      type: "day",
      dayNum: 27,
      dayName: "Viernes",
      sessions: [
        {
          venue: "CRUJIA 6 - Area Posterior",
          sessionLabel: "Sesión Matutina",
          events: [
            {
              time: "10:00",
              title: "Recepción y Registro de Participantes",
              desc: "",
              type: "registro",
            },
            {
              time: "10:30",
              title: "Apertura de Programa",
              desc: "",
              type: "apertura",
            },
            {
              time: "10:35",
              title: "Presentación de Antología Poética",
              desc: "Universidad Don Vasco - Francisco Javier Ramos Ruiz",
              type: "presentacion",
            },
            {
              time: "10:55",
              title: "Mesa de Lectura 03",
              desc: "",
              type: "lectura",
            },
            {
              time: "11:25",
              title: "Mesa de Lectura 04",
              desc: "",
              type: "lectura",
            },
            { time: "11:55", title: "RECESO", desc: "", type: "receso" },
            {
              time: "12:10",
              title: "In Memoriam: Francisco Javier Licea Linares",
              desc: "Lectura de poemas por Martín Paz",
              type: "memoriam",
            },
            {
              time: "12:25",
              title: "Mesa de Lectura 05",
              desc: "",
              type: "lectura",
            },
            {
              time: "12:55",
              title: "In Memoriam: Jose Luis Calderon Vela",
              desc: "Red de Tertulias Guanajuato - Josue Fernando Morales",
              type: "memoriam",
            },
            {
              time: "13:15",
              title: "Mesa de Lectura 06",
              desc: "",
              type: "lectura",
            },
            {
              time: "13:45",
              title: "Cierre Sesión Matutina - Receso",
              desc: "",
              type: "receso",
            },
          ],
        },
        {
          venue: "CRUJIA 6 - Area Posterior",
          sessionLabel: "Sesión Vespertina",
          divider: "Sesión VESPERTINA",
          events: [
            {
              time: "16:00",
              title: "Recepción y Registro de Participantes",
              desc: "",
              type: "registro",
            },
            { time: "16:15", title: "Bienvenida", desc: "", type: "apertura" },
            {
              time: "16:20",
              title: "Mesa de Lectura 07",
              desc: "",
              type: "lectura",
            },
            {
              time: "16:50",
              title: "Mesa de Lectura 08",
              desc: "",
              type: "lectura",
            },
            {
              time: "17:20",
              title: "In Memoriam: Guadalupe Trigueros",
              desc: "Lectura de poemas por Yuritskiri Campos Anguiano",
              type: "memoriam",
            },
            {
              time: "17:50",
              title: "Mesa de Lectura 09",
              desc: "",
              type: "lectura",
            },
            {
              time: "18:20",
              title: "In Memoriam: Gracia Mendoza Bolio",
              desc: "Lectura de poemas por Dra. María Concepción Ramírez Sámano",
              type: "memoriam",
            },
            {
              time: "18:40",
              title: "Traslado de Participantes a la Gran Nave",
              desc: "",
              type: "traslado",
            },
          ],
        },
        {
          venue: "GRAN NAVE (Sala de Exposiciones)",
          sessionLabel: "",
          events: [
            {
              time: "18:40",
              title: "Presentación Musical",
              desc: "",
              type: "musica",
            },
            {
              time: "19:00",
              title: "Conferencia Magistral",
              desc: "Michel Foucault y la Literatura Moderna - Dra. Rosario Herrera Guido",
              type: "conferencia",
            },
            {
              time: "19:50",
              title: "Cierre de la Jornada",
              desc: "",
              type: "cierre",
            },
          ],
        },
      ],
    },
    {
      type: "day",
      dayNum: 28,
      dayName: "Sabado",
      sessions: [
        {
          venue: "CRUJIA 6 - Area Posterior",
          sessionLabel: "Sesión Matutina",
          events: [
            {
              time: "10:00",
              title: "Recepción y Registro de Participantes",
              desc: "",
              type: "registro",
            },
            { time: "10:15", title: "Apertura", desc: "", type: "apertura" },
            {
              time: "10:20",
              title: "Mesa de Lectura 10",
              desc: "",
              type: "lectura",
            },
            {
              time: "10:50",
              title: "Mesa de Lectura 11",
              desc: "",
              type: "lectura",
            },
            {
              time: "11:20",
              title: 'Presentación de Antología "Quinta Luna"',
              desc: "Presenta Maribel Arreola Rivas",
              type: "presentacion",
            },
            {
              time: "11:40",
              title: "Mesa de Lectura 12",
              desc: "",
              type: "lectura",
            },
            {
              time: "12:10",
              title: "Mesa de Lectura - Asociación Red Némesis",
              desc: "Presentada por Juan Contreras",
              type: "lectura",
            },
            {
              time: "12:30",
              title: "In Memoriam: Marco Antonio Herrera Guido",
              desc: "Por Rosario Herrera Guido",
              type: "memoriam",
            },
            {
              time: "12:45",
              title: "Mesa de Lectura 13",
              desc: "",
              type: "lectura",
            },
            {
              time: "13:15",
              title: "Mesa de Lectura 14",
              desc: "",
              type: "lectura",
            },
            {
              time: "13:45",
              title: "Grupo de Danza THIPIKUARETA PURHEMBE",
              desc: "Riqueza Purepecha",
              type: "danza",
            },
            {
              time: "14:15",
              title: "Receso",
              desc: "",
              type: "receso",
            },
          ],
        },
        {
          venue: "GRAN NAVE (Sala de Exposiciones)",
          sessionLabel: "Sesión Vespertina",
          divider: "Sesión VESPERTINA",
          events: [
            {
              time: "16:00",
              title: "Recepción y Registro de Participantes",
              desc: "",
              type: "registro",
            },
            {
              time: "16:30",
              title: "Mesa de Lectura 15",
              desc: "",
              type: "lectura",
            },
            {
              time: "17:00",
              title: "Mesa de Lectura 16",
              desc: "",
              type: "lectura",
            },
            {
              time: "17:30",
              title: "Mesa de Lectura 17",
              desc: "",
              type: "lectura",
            },
            {
              time: "18:00",
              title: "Mesa de Lectura 18",
              desc: "",
              type: "lectura",
            },
            {
              time: "18:30",
              title: "Mesa de Lectura 19",
              desc: "",
              type: "lectura",
            },
            {
              time: "19:00",
              title: "Presentación Musical",
              desc: "Cantante: Nayel Montufar",
              type: "musica",
            },
            {
              time: "19:20",
              title: "Fotografia Oficial",
              desc: "",
              type: "foto",
            },
            {
              time: "19:25",
              title: "CLAUSURA DEL EVENTO",
              desc: "Ceremonia de cierre del 11o Encuentro Internacional de Poetas",
              type: "clausura",
            },
          ],
        },
      ],
    },
  ];

  // Calculate session height
  function calcSessionHeight(session) {
    let h = 0;
    if (session.divider) h += 10;
    h += 13; // venue bar
    for (const ev of session.events) {
      h += getEventHeight(ev.desc && ev.desc.length > 0) + 2;
    }
    return h;
  }

  // ===== COVER PAGE =====
  doc.setFillColor(...primary);
  doc.rect(0, 0, pageWidth, 60, "F");
  doc.setFillColor(...accent);
  doc.rect(0, 60, pageWidth, 4, "F");

  // Decorative circles for logos - positioned at sides
  const leftCircleX = 26;
  const leftCircleY = 30;
  const circleR = 18;

  const rightCircleX = pageWidth - 26;
  const rightCircleY = 30;

  // Dark brown outer circles (decorative border)
  doc.setFillColor(80, 55, 40);
  doc.circle(leftCircleX, leftCircleY, circleR + 2, "F");
  doc.circle(rightCircleX, rightCircleY, circleR + 2, "F");

  // White inner circles for logos
  doc.setFillColor(255, 255, 255);
  doc.circle(leftCircleX, leftCircleY, circleR, "F");
  doc.circle(rightCircleX, rightCircleY, circleR, "F");

  // Add logos - sized to fit within circles (diameter = circleR * 2)
  const logoDiameter = circleR * 2 - 4; // Leave 2mm padding on each side

  if (logoPoetas) {
    try {
      doc.addImage(
        logoPoetas,
        "PNG",
        leftCircleX - logoDiameter / 2,
        leftCircleY - logoDiameter / 2,
        logoDiameter,
        logoDiameter,
      );
    } catch (e) {
      console.log("Error adding PoetasCupa logo:", e);
    }
  }

  if (logoCCFS) {
    try {
      doc.addImage(
        logoCCFS,
        "PNG",
        rightCircleX - logoDiameter / 2,
        rightCircleY - logoDiameter / 2,
        logoDiameter,
        logoDiameter,
      );
    } catch (e) {
      console.log("Error adding CCFS logo:", e);
    }
  }

  // Title text
  doc.setTextColor(...white);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("11o Encuentro Internacional", pageWidth / 2, 20, {
    align: "center",
  });
  doc.setFontSize(18);
  doc.text("de Poetas del Cupatitzio", pageWidth / 2, 29, { align: "center" });
  doc.setTextColor(...accent);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("26, 27 y 28 de Febrero 2026", pageWidth / 2, 40, {
    align: "center",
  });
  doc.setTextColor(200, 200, 200);
  doc.setFontSize(9);
  doc.text("Uruapan, Michoacán, México", pageWidth / 2, 48, {
    align: "center",
  });

  // Schedule badge/title
  doc.setFillColor(...accent);
  doc.roundedRect(pageWidth / 2 - 40, 52, 80, 7, 2, 2, "F");
  doc.setTextColor(...primary);
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("CRONOGRAMA DE ACTIVIDADES", pageWidth / 2, 57, {
    align: "center",
  });

  currentY = 70;
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
    "Miguel Treviño 100, Col. Centro, Uruapan, Michoacán",
    pageWidth / 2,
    currentY + 11,
    { align: "center" },
  );

  // Color legend for event types - organized in two rows
  currentY = 88;
  doc.setFontSize(7);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...primary);
  doc.text("LEYENDA DE ACTIVIDADES:", margin, currentY);

  currentY += 5;
  const legendRow1 = [
    { color: accent, label: "Inauguración/Clausura" },
    { color: orange, label: "Mesas de Lectura" },
    { color: purple, label: "In Memoriam" },
    { color: blue, label: "Conferencia" },
  ];
  const legendRow2 = [
    { color: pink, label: "Música/Danza" },
    { color: green, label: "Presentación" },
    { color: gray, label: "Receso" },
  ];

  // Row 1
  let legendX = margin;
  const legendSpacing = 45;
  legendRow1.forEach((item) => {
    doc.setFillColor(...item.color);
    doc.circle(legendX + 1.5, currentY, 1.5, "F");
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(6);
    doc.setFont("helvetica", "normal");
    doc.text(item.label, legendX + 4, currentY + 1);
    legendX += legendSpacing;
  });

  // Row 2
  currentY += 5;
  legendX = margin;
  legendRow2.forEach((item) => {
    doc.setFillColor(...item.color);
    doc.circle(legendX + 1.5, currentY, 1.5, "F");
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(6);
    doc.setFont("helvetica", "normal");
    doc.text(item.label, legendX + 4, currentY + 1);
    legendX += legendSpacing;
  });

  currentY = 105;

  // ===== RENDER PROGRAM =====
  for (const day of programData) {
    // Check if day header + first session fit, otherwise new page
    const firstSessionHeight =
      day.sessions.length > 0 ? calcSessionHeight(day.sessions[0]) : 0;
    ensureSpace(20 + firstSessionHeight);

    drawDayHeader(day.dayNum, day.dayName);

    for (let i = 0; i < day.sessions.length; i++) {
      const session = day.sessions[i];
      const sessionHeight = calcSessionHeight(session);

      // If session doesn't fit, start new page
      ensureSpace(sessionHeight);

      if (session.divider) {
        drawSessionDivider(session.divider);
      }

      drawVenueBar(session.venue, session.sessionLabel);

      for (const ev of session.events) {
        // Individual events don't force page breaks mid-session
        drawEvent(ev.time, ev.title, ev.desc, ev.type);
      }

      currentY += 4;
    }

    currentY += 4;
  }

  // Final quote box
  ensureSpace(30);
  currentY += 4;
  doc.setFillColor(...lightGray);
  doc.roundedRect(margin, currentY, contentWidth, 20, 3, 3, "F");
  doc.setDrawColor(...accent);
  doc.roundedRect(margin, currentY, contentWidth, 20, 3, 3, "S");
  doc.setTextColor(...primary);
  doc.setFontSize(11);
  doc.setFont("helvetica", "italic");
  doc.text('"Donde hay Poesía, hay esperanza"', pageWidth / 2, currentY + 9, {
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

  addFooter();

  // ===== VIRTUAL TRANSMISSION + QR CODES PAGE =====
  doc.addPage();
  pageNum++;
  addSmallHeader();
  currentY = 22;

  // Virtual Transmission Header
  doc.setFillColor(...primary);
  doc.roundedRect(margin, currentY, contentWidth, 18, 3, 3, "F");
  doc.setTextColor(...white);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("TRANSMISION VIRTUAL", pageWidth / 2, currentY + 8, {
    align: "center",
  });
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...accent);
  doc.text(
    "Domingo 1 de Marzo, 2026 - 9:00 hrs (Horario de Mexico)",
    pageWidth / 2,
    currentY + 14,
    { align: "center" },
  );
  currentY += 24;

  // Virtual info box
  doc.setFillColor(240, 248, 255);
  doc.roundedRect(margin, currentY, contentWidth, 30, 3, 3, "F");
  doc.setDrawColor(...blue);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin, currentY, contentWidth, 30, 3, 3, "S");
  doc.setFillColor(...blue);
  doc.rect(margin, currentY, 3, 30, "F");

  doc.setTextColor(...primary);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Transmision de Videos del Encuentro", margin + 8, currentY + 8);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60);
  doc.text(
    "El domingo 1 de marzo se realizara la transmision de los videos del",
    margin + 8,
    currentY + 14,
  );
  doc.text(
    "11o Encuentro Internacional de Poetas del Cupatitzio por via virtual,",
    margin + 8,
    currentY + 19,
  );
  doc.text(
    "a partir de las 9:00 horas (horario de Mexico).",
    margin + 8,
    currentY + 24,
  );
  currentY += 36;

  // Facebook group info
  doc.setFillColor(248, 245, 255);
  doc.roundedRect(margin, currentY, contentWidth, 16, 3, 3, "F");
  doc.setDrawColor(66, 103, 178);
  doc.roundedRect(margin, currentY, contentWidth, 16, 3, 3, "S");
  doc.setFillColor(66, 103, 178);
  doc.rect(margin, currentY, 3, 16, "F");
  doc.setTextColor(66, 103, 178);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text(
    "Grupo de Facebook: Poetas del Cupatitzio",
    margin + 8,
    currentY + 7,
  );
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(80, 80, 80);
  doc.text(
    "https://www.facebook.com/share/g/1JSvw8dcov/",
    margin + 8,
    currentY + 12,
  );
  currentY += 24;

  // QR Codes section
  doc.setTextColor(...primary);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Codigos QR", pageWidth / 2, currentY, { align: "center" });
  currentY += 4;
  doc.setDrawColor(...accent);
  doc.setLineWidth(0.5);
  doc.line(pageWidth / 2 - 30, currentY, pageWidth / 2 + 30, currentY);
  currentY += 8;

  const qrSize = 50;
  const qrGap = 20;
  const qrStartX1 = pageWidth / 2 - qrSize - qrGap / 2;
  const qrStartX2 = pageWidth / 2 + qrGap / 2;

  // QR 1 - Facebook
  doc.setFillColor(...lightGray);
  doc.roundedRect(
    qrStartX1 - 5,
    currentY - 3,
    qrSize + 10,
    qrSize + 28,
    3,
    3,
    "F",
  );
  doc.setDrawColor(...accent);
  doc.roundedRect(
    qrStartX1 - 5,
    currentY - 3,
    qrSize + 10,
    qrSize + 28,
    3,
    3,
    "S",
  );
  if (qrFacebook) {
    try {
      doc.addImage(qrFacebook, "PNG", qrStartX1, currentY, qrSize, qrSize);
    } catch (e) {}
  }
  doc.setTextColor(...primary);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("Grupo de Facebook", qrStartX1 + qrSize / 2, currentY + qrSize + 6, {
    align: "center",
  });
  doc.setFontSize(6);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...secondary);
  doc.text(
    "Poetas del Cupatitzio",
    qrStartX1 + qrSize / 2,
    currentY + qrSize + 11,
    { align: "center" },
  );
  doc.text(
    "Escanea para unirte",
    qrStartX1 + qrSize / 2,
    currentY + qrSize + 16,
    { align: "center" },
  );

  // QR 2 - Web Page
  doc.setFillColor(...lightGray);
  doc.roundedRect(
    qrStartX2 - 5,
    currentY - 3,
    qrSize + 10,
    qrSize + 28,
    3,
    3,
    "F",
  );
  doc.setDrawColor(...accent);
  doc.roundedRect(
    qrStartX2 - 5,
    currentY - 3,
    qrSize + 10,
    qrSize + 28,
    3,
    3,
    "S",
  );
  if (qrWeb) {
    try {
      doc.addImage(qrWeb, "PNG", qrStartX2, currentY, qrSize, qrSize);
    } catch (e) {}
  }
  doc.setTextColor(...primary);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text(
    "Pagina del Encuentro",
    qrStartX2 + qrSize / 2,
    currentY + qrSize + 6,
    { align: "center" },
  );
  doc.setFontSize(6);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...secondary);
  doc.text(
    "Programa completo en linea",
    qrStartX2 + qrSize / 2,
    currentY + qrSize + 11,
    { align: "center" },
  );
  doc.text(
    "Escanea para visitar",
    qrStartX2 + qrSize / 2,
    currentY + qrSize + 16,
    { align: "center" },
  );

  currentY += qrSize + 34;

  // Final note
  doc.setFillColor(...lightGray);
  doc.roundedRect(margin, currentY, contentWidth, 14, 3, 3, "F");
  doc.setDrawColor(...accent);
  doc.roundedRect(margin, currentY, contentWidth, 14, 3, 3, "S");
  doc.setTextColor(...primary);
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.text('"Donde hay Poesia, hay esperanza"', pageWidth / 2, currentY + 6, {
    align: "center",
  });
  doc.setFontSize(6);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...secondary);
  doc.text(
    "(c) 2026 - 11o Encuentro Internacional de Poetas del Cupatitzio",
    pageWidth / 2,
    currentY + 11,
    { align: "center" },
  );

  addFooter();

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

// ---- DARK MODE ----
function initDarkMode() {
  const toggle = document.getElementById("darkModeToggle");
  if (!toggle) return;

  // Check saved preference or system preference
  const saved = localStorage.getItem("theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  // Listen for system preference changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        document.documentElement.setAttribute(
          "data-theme",
          e.matches ? "dark" : "light",
        );
      }
    });
}

// ---- EQUIPO THANK YOU ----
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/FYlpcUcJgBs99nkcIEXCxv";

function initEquipoThanks() {
  var buttons = document.querySelectorAll(".equipo-thank-btn");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var name = this.getAttribute("data-name");
      var message =
        "Gracias " +
        name +
        " por organizar el 11° Encuentro Internacional de Poetas del Cupatitzio 2026. Su labor es invaluable para la comunidad poetica.";
      var url = WHATSAPP_GROUP_URL; // open group invite so they can send the message there
      // Show visual feedback
      var original = this.innerHTML;
      this.innerHTML =
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> Enviando...';
      this.classList.add("thanked");

      // Open WhatsApp with pre-filled message to the group
      var waUrl = "https://wa.me/?text=" + encodeURIComponent(message);
      window.open(waUrl, "_blank");

      var self = this;
      setTimeout(function () {
        self.innerHTML =
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> ¡Gracias enviada!';
      }, 1500);
    });
  });
}

// ---- INITIALIZE EVERYTHING ----
document.addEventListener("DOMContentLoaded", () => {
  initDarkMode();
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
  initEquipoThanks();
});
