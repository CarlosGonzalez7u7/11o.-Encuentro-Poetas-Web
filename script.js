// Lista completa de poetas
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
  { number: 11, name: "Arturo Reyes Martínez" },
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
  { number: 67, name: "José Luis Gutierrez Peña" },
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
  { number: 105, name: "Rogeri Caldeyro Vazquez" },
  { number: 106, name: "Rosaura Tamayo Ochoa" },
  { number: 107, name: "Rubén Sandoval Aguiar" },
  { number: 108, name: "Rubén Falcón Márquez" },
  { number: 109, name: "Ruth Sáenz Naranjo" },
  { number: 110, name: "Sandra Isabel Martinez Martinez" },
  { number: 111, name: "Santiago Mate Cisneros" },
  { number: 112, name: "Saúl Martínez Aceves" },
  { number: 113, name: "Sergio Roberto Prado Renteria" },
  { number: 114, name: "Silvia Torres Paleo" },
  { number: 115, name: "Teresita del niño Jesús Vega Campa" },
  { number: 116, name: "Teresita Gretey Rangel Dadda" },
  { number: 117, name: "Verónica Salazar García" },
  { number: 118, name: "Victoria Martinez Barrón" },
  { number: 119, name: "Virginia López López" },
  { number: 120, name: "Ximena Quintero Uribe" },
  { number: 121, name: "Xitlali Becerra Pedraza" },
  { number: 122, name: "Yuritskiri Campos Anguiano" },
  { number: 123, name: "Zully Jannet Dávalos Dueñas" },
];

// Función para normalizar texto (quitar acentos y convertir a minúsculas)
function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Función para crear una tarjeta de poeta
function createPoetCard(poet) {
  const card = document.createElement("div");
  card.className = "poet-card";

  const img = document.createElement("img");
  img.className = "poet-image";
  // Intenta cargar primero .jpg, si falla intenta .png
  img.src = `img/${poet.name}.jpg`;
  img.alt = poet.name;
  img.loading = "lazy";

  // Si la imagen .jpg no se encuentra, intenta con .png
  img.onerror = function () {
    if (this.src.endsWith(".jpg")) {
      this.src = `img/${poet.name}.png`;
    } else {
      // Si tampoco existe .png, usa un placeholder con las iniciales
      this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
        poet.name
      )}&size=200&background=d4a574&color=2c1810&bold=true`;
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

// Función para renderizar poetas
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

    poetsToRender.forEach((poet) => {
      grid.appendChild(createPoetCard(poet));
    });
  }

  countElement.textContent = poetsToRender.length;
}

// Función de búsqueda
function searchPoets(searchTerm) {
  const normalizedSearch = normalizeText(searchTerm);

  if (normalizedSearch === "") {
    renderPoets(poets);
    return;
  }

  const filtered = poets.filter((poet) => {
    const normalizedName = normalizeText(poet.name);
    return normalizedName.includes(normalizedSearch);
  });

  renderPoets(filtered);
}

// Event listener para el input de búsqueda
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (e) => {
  searchPoets(e.target.value);
});

// Renderizar todos los poetas al cargar la página
renderPoets(poets);
