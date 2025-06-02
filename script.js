// Array de preguntas (120 preguntas completas)
const questions = [
    // Ligera (40)
    { id: 1, category: "light", en: "What's your favorite food?", es: "¿Cuál es tu comida favorita?" },
    { id: 2, category: "light", en: "What's a hobby you love?", es: "¿Cuál es un pasatiempo que amas?" },
    { id: 3, category: "light", en: "Where did you last travel?", es: "¿A dónde viajaste por última vez?" },
    { id: 4, category: "light", en: "What's your favorite movie?", es: "¿Cuál es tu película favorita?" },
    { id: 5, category: "light", en: "Do you prefer coffee or tea?", es: "¿Prefieres café o té?" },
    { id: 6, category: "light", en: "What's your favorite season?", es: "¿Cuál es tu estación favorita?" },
    { id: 7, category: "light", en: "What's a book you recommend?", es: "¿Qué libro recomiendas?" },
    { id: 8, category: "light", en: "What's your favorite sport?", es: "¿Cuál es tu deporte favorito?" },
    { id: 9, category: "light", en: "Do you like to cook?", es: "¿Te gusta cocinar?" },
    { id: 10, category: "light", en: "What's your favorite song?", es: "¿Cuál es tu canción favorita?" },
    { id: 11, category: "light", en: "What's a place you want to visit?", es: "¿Qué lugar quieres visitar?" },
    { id: 12, category: "light", en: "Do you have any pets?", es: "¿Tienes mascotas?" },
    { id: 13, category: "light", en: "What's your favorite dessert?", es: "¿Cuál es tu postre favorito?" },
    { id: 14, category: "light", en: "What's a skill you're proud of?", es: "¿Cuál es una habilidad de la que estás orgulloso?" },
    { id: 15, category: "light", en: "What's your favorite holiday?", es: "¿Cuál es tu festividad favorita?" },
    { id: 16, category: "light", en: "What's a TV show you love?", es: "¿Qué serie de TV amas?" },
    { id: 17, category: "light", en: "What's your favorite color?", es: "¿Cuál es tu color favorito?" },
    { id: 18, category: "light", en: "What's a fun weekend activity?", es: "¿Cuál es una actividad divertida para el fin de semana?" },
    { id: 19, category: "light", en: "What's your favorite restaurant?", es: "¿Cuál es tu restaurante favorito?" },
    { id: 20, category: "light", en: "Do you prefer mornings or nights?", es: "¿Prefieres las mañanas o las noches?" },
    { id: 21, category: "light", en: "What's your favorite game?", es: "¿Cuál es tu juego favorito?" },
    { id: 22, category: "light", en: "What's a city you love?", es: "¿Qué ciudad amas?" },
    { id: 23, category: "light", en: "What's your favorite drink?", es: "¿Cuál es tu bebida favorita?" },
    { id: 24, category: "light", en: "What's a fun fact about you?", es: "¿Cuál es un dato curioso sobre ti?" },
    { id: 25, category: "light", en: "What's your favorite app?", es: "¿Cuál es tu aplicación favorita?" },
    { id: 26, category: "light", en: "Do you like to dance?", es: "¿Te gusta bailar?" },
    { id: 27, category: "light", en: "What's your favorite quote?", es: "¿Cuál es tu cita favorita?" },
    { id: 28, category: "light", en: "What's a language you want to learn?", es: "¿Qué idioma quieres aprender?" },
    { id: 29, category: "light", en: "What's your favorite festival?", es: "¿Cuál es tu festival favorito?" },
    { id: 30, category: "light", en: "What's a hobby you'd like to try?", es: "¿Qué pasatiempo te gustaría probar?" },
    { id: 31, category: "light", en: "What's your favorite animal?", es: "¿Cuál es tu animal favorito?" },
    { id: 32, category: "light", en: "What's a place you call home?", es: "¿Qué lugar consideras hogar?" },
    { id: 33, category: "light", en: "What's your favorite snack?", es: "¿Cuál es tu snack favorito?" },
    { id: 34, category: "light", en: "Do you like hiking?", es: "¿Te gusta hacer senderismo?" },
    { id: 35, category: "light", en: "What's your favorite tradition?", es: "¿Cuál es tu tradición favorita?" },
    { id: 36, category: "light", en: "What's a movie you recently watched?", es: "¿Qué película viste recientemente?" },
    { id: 37, category: "light", en: "What's your favorite gadget?", es: "¿Cuál es tu gadget favorito?" },
    { id: 38, category: "light", en: "What's a place you find relaxing?", es: "¿Qué lugar te parece relajante?" },
    { id: 39, category: "light", en: "What's your favorite smell?", es: "¿Cuál es tu olor favorito?" },
    { id: 40, category: "light", en: "What's a gift you love giving?", es: "¿Qué regalo te encanta dar?" },
    // Profunda (40)
    { id: 41, category: "deep", en: "What's a dream you've never told anyone?", es: "¿Cuál es un sueño que nunca le contaste a nadie?" },
    { id: 42, category: "deep", en: "What's your biggest fear?", es: "¿Cuál es tu mayor miedo?" },
    { id: 43, category: "deep", en: "What's a life lesson you learned?", es: "¿Qué lección de vida aprendiste?" },
    { id: 44, category: "deep", en: "What's a goal you're working toward?", es: "¿Cuál es una meta en la que estás trabajando?" },
    { id: 45, category: "deep", en: "What's a memory that shaped you?", es: "¿Qué recuerdo te marcó?" },
    { id: 46, category: "deep", en: "What's something you regret?", es: "¿De qué te arrepientes?" },
    { id: 47, category: "deep", en: "What's your definition of success?", es: "¿Cuál es tu definición de éxito?" },
    { id: 48, category: "deep", en: "What's a challenge you overcame?", es: "¿Qué desafío superaste?" },
    { id: 49, category: "deep", en: "What's a value you hold dear?", es: "¿Qué valor aprecias mucho?" },
    { id: 50, category: "deep", en: "What's a moment you felt truly happy?", es: "¿Cuál fue un momento en que te sentiste realmente feliz?" },
    { id: 51, category: "deep", en: "What's something you're grateful for?", es: "¿Por qué estás agradecido?" },
    { id: 52, category: "deep", en: "What's a belief you changed?", es: "¿Qué creencia cambiaste?" },
    { id: 53, category: "deep", en: "What's a tough decision you made?", es: "¿Qué decisión difícil tomaste?" },
    { id: 54, category: "deep", en: "What's a cause you care about?", es: "¿Qué causa te importa?" },
    { id: 55, category: "deep", en: "What's a skill you want to master?", es: "¿Qué habilidad quieres dominar?" },
    { id: 56, category: "deep", en: "What's a time you felt proud?", es: "¿Cuándo te sentiste orgulloso?" },
    { id: 57, category: "deep", en: "What's a mistake you learned from?", es: "¿Qué error te enseñó algo?" },
    { id: 58, category: "deep", en: "What's your purpose in life?", es: "¿Cuál es tu propósito en la vida?" },
    { id: 59, category: "deep", en: "What's a moment you felt vulnerable?", es: "¿Cuándo te sentiste vulnerable?" },
    { id: 60, category: "deep", en: "What's a hope for your future?", es: "¿Qué esperanza tienes para tu futuro?" },
    { id: 61, category: "deep", en: "What's a time you helped someone?", es: "¿Cuándo ayudaste a alguien?" },
    { id: 62, category: "deep", en: "What's a change you want to see in the world?", es: "¿Qué cambio quieres ver en el mundo?" },
    { id: 63, category: "deep", en: "What's a time you felt inspired?", es: "¿Cuándo te sentiste inspirado?" },
    { id: 64, category: "deep", en: "What's a sacrifice you made?", es: "¿Qué sacrificio hiciste?" },
    { id: 65, category: "deep", en: "What's a moment you felt truly understood?", es: "¿Cuándo te sentiste realmente entendido?" },
    { id: 66, category: "deep", en: "What's a fear you want to conquer?", es: "¿Qué miedo quieres conquistar?" },
    { id: 67, category: "deep", en: "What's a lesson about love you learned?", es: "¿Qué aprendiste sobre el amor?" },
    { id: 68, category: "deep", en: "What's a time you felt lost?", es: "¿Cuándo te sentiste perdido?" },
    { id: 69, category: "deep", en: "What's a dream worth pursuing?", es: "¿Qué sueño vale la pena perseguir?" },
    { id: 70, category: "deep", en: "What's a time you forgave someone?", es: "¿Cuándo perdonaste a alguien?" },
    { id: 71, category: "deep", en: "What's a moment that changed your perspective?", es: "¿Qué momento cambió tu perspectiva?" },
    { id: 72, category: "deep", en: "What's a goal that scares you?", es: "¿Qué meta te asusta?" },
    { id: 73, category: "deep", en: "What's a time you stood up for yourself?", es: "¿Cuándo defendiste tus ideas?" },
    { id: 74, category: "deep", en: "What's a value you'd never compromise?", es: "¿Qué valor no comprometerías?" },
    { id: 75, category: "deep", en: "What's a time you felt truly free?", es: "¿Cuándo te sentiste realmente libre?" },
    { id: 76, category: "deep", en: "What's a legacy you want to leave?", es: "¿Qué legado quieres dejar?" },
    { id: 77, category: "deep", en: "What's a moment you felt connected?", es: "¿Cuándo te sentiste conectado?" },
    { id: 78, category: "deep", en: "What's a question you ask yourself often?", es: "¿Qué pregunta te haces a menudo?" },
    { id: 79, category: "deep", en: "What's a time you took a risk?", es: "¿Cuándo tomaste un riesgo?" },
    { id: 80, category: "deep", en: "What's a hope you have for others?", es: "¿Qué esperanza tienes para los demás?" },
    // Divertida (40)
    { id: 81, category: "fun", en: "If you were an animal, what would you be?", es: "Si fueras un animal, ¿cuál serías?" },
    { id: 82, category: "fun", en: "What's your superhero power?", es: "¿Cuál sería tu superpoder?" },
    { id: 83, category: "fun", en: "What's a movie you’d star in?", es: "¿En qué película actuarías?" },
    { id: 84, category: "fun", en: "If you could time travel, where to?", es: "Si pudieras viajar en el tiempo, ¿a dónde irías?" },
    { id: 85, category: "fun", en: "What's your dream job as a kid?", es: "¿Cuál era tu trabajo soñado de niño?" },
    { id: 86, category: "fun", en: "What's a food combo you’d invent?", es: "¿Qué combinación de comida inventarías?" },
    { id: 87, category: "fun", en: "If you were a cartoon, who’d you be?", es: "Si fueras un dibujo animado, ¿quién serías?" },
    { id: 88, category: "fun", en: "What's a silly fear you have?", es: "¿Cuál es un miedo gracioso que tienes?" },
    { id: 89, category: "fun", en: "What's a talent you wish you had?", es: "¿Qué talento desearías tener?" },
    { id: 90, category: "fun", en: "If you could swap lives, who with?", es: "Si pudieras intercambiar vidas, ¿con quién?" },
    { id: 91, category: "fun", en: "What's a game you’d invent?", es: "¿Qué juego inventarías?" },
    { id: 92, category: "fun", en: "What's a weird food you’ve tried?", es: "¿Qué comida rara probaste?" },
    { id: 93, category: "fun", en: "If you were a color, what would you be?", es: "Si fueras un color, ¿cuál serías?" },
    { id: 94, category: "fun", en: "What's a fictional world you’d live in?", es: "¿En qué mundo ficticio vivirías?" },
    { id: 95, category: "fun", en: "What's a funny nickname for you?", es: "¿Qué apodo gracioso te pondrías?" },
    { id: 96, category: "fun", en: "If you had a theme song, what is it?", es: "Si tuvieras una canción temática, ¿cuál sería?" },
    { id: 97, category: "fun", en: "What's a silly rule you’d make?", es: "¿Qué regla tonta crearías?" },
    { id: 98, category: "fun", en: "What's a prank you’d pull?", es: "¿Qué broma harías?" },
    { id: 99, category: "fun", en: "If you were a dessert, what would you be?", es: "Si fueras un postre, ¿cuál serías?" },
    { id: 100, category: "fun", en: "What's a crazy adventure you’d try?", es: "¿Qué aventura loca probarías?" },
    { id: 101, category: "fun", en: "What's a weird talent you have?", es: "¿Qué talento raro tienes?" },
    { id: 102, category: "fun", en: "If you were a planet, which one?", es: "Si fueras un planeta, ¿cuál?" },
    { id: 103, category: "fun", en: "What's a funny story about you?", es: "¿Qué historia divertida te pasó?" },
    { id: 104, category: "fun", en: "What's a made-up holiday you’d create?", es: "¿Qué festividad inventarías?" },
    { id: 105, category: "fun", en: "If you were a mythical creature, what?", es: "Si fueras una criatura mítica, ¿cuál?" },
    { id: 106, category: "fun", en: "What's a weird habit you have?", es: "¿Qué hábito raro tienes?" },
    { id: 107, category: "fun", en: "What's a fun dance move you’d do?", es: "¿Qué movimiento de baile harías?" },
    { id: 108, category: "fun", en: "If you could talk to an object, what?", es: "Si pudieras hablar con un objeto, ¿cuál?" },
    { id: 109, category: "fun", en: "What's a silly invention you’d make?", es: "¿Qué invento gracioso crearías?" },
    { id: 110, category: "fun", en: "What's a funny name for a pet?", es: "¿Qué nombre divertido le pondrías a una mascota?" },
    { id: 111, category: "fun", en: "If you were a vegetable, what?", es: "Si fueras una verdura, ¿cuál?" },
    { id: 112, category: "fun", en: "What's a crazy party theme?", es: "¿Qué tema loco para una fiesta harías?" },
    { id: 113, category: "fun", en: "What's a funny catchphrase for you?", es: "¿Cuál sería tu frase pegajosa?" },
    { id: 114, category: "fun", en: "If you were a drink, what would you be?", es: "Si fueras una bebida, ¿cuál serías?" },
    { id: 115, category: "fun", en: "What's a wild vacation idea?", es: "¿Qué idea loca para vacaciones tendrías?" },
    { id: 116, category: "fun", en: "What's a funny superpower?", es: "¿Qué superpoder gracioso tendrías?" },
    { id: 117, category: "fun", en: "If you were a toy, what would you be?", es: "Si fueras un juguete, ¿cuál serías?" },
    { id: 118, category: "fun", en: "What's a silly goal you’d set?", es: "¿Qué meta tonta te pondrías?" },
    { id: 119, category: "fun", en: "What's a funny food combo?", es: "¿Qué combinación de comida divertida harías?" },
    { id: 120, category: "fun", en: "If you could be any age forever, what?", es: "Si pudieras tener una edad para siempre, ¿cuál?" }
];

// Variables globales
let participants = [];
let currentTurn = 0;
let currentCategory = "light";
let currentLanguage = "en";
let currentQuestion = null;
let questionChanges = 0; // Contador de cambios de pregunta por turno

// Cargar estado desde localStorage
function loadState() {
    const savedParticipants = localStorage.getItem("participants");
    const savedCategory = localStorage.getItem("category");
    const savedTurn = localStorage.getItem("currentTurn");
    if (savedParticipants) participants = JSON.parse(savedParticipants);
    if (savedCategory) currentCategory = savedCategory;
    if (savedTurn) currentTurn = parseInt(savedTurn);
}

// Guardar estado en localStorage
function saveState() {
    localStorage.setItem("participants", JSON.stringify(participants));
    localStorage.setItem("category", currentCategory);
    localStorage.setItem("currentTurn", currentTurn);
}

// Inicializar formulario
document.getElementById("participants-form").addEventListener("submit", function (event) {
    event.preventDefault();
    participants = document.getElementById("participants").value
        .split(",")
        .map(name => name.trim())
        .filter(name => name);
    if (participants.length < 4 || participants.length > 20) {
        alert("Debes ingresar entre 4 y 20 participantes.");
        return;
    }
    currentCategory = document.getElementById("category").value;
    currentTurn = 0;
    questionChanges = 0;
    saveState();
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
    showCurrentParticipant();
    showQuestion();
});

// Botón cambiar idioma
document.getElementById("toggle-language").addEventListener("click", function () {
    currentLanguage = currentLanguage === "en" ? "es" : "en";
    this.textContent = currentLanguage === "en" ? "Cambiar a Español" : "Change to English";
    updateQuestionText(); // Solo actualiza el texto de la pregunta
});

// Botón cambiar pregunta
document.getElementById("change-question").addEventListener("click", function () {
    questionChanges++;
    if (questionChanges === 2) {
        alert("¡Advertencia! El siguiente cambio de pregunta pasará el turno.");
    } else if (questionChanges >= 3) {
        currentTurn = (currentTurn + 1) % participants.length;
        questionChanges = 0;
        showCurrentParticipant();
    }
    selectNewQuestion();
    saveState();
});

// Botón pasar turno
document.getElementById("next-turn").addEventListener("click", function () {
    currentTurn = (currentTurn + 1) % participants.length;
    questionChanges = 0;
    showCurrentParticipant();
    selectNewQuestion();
    saveState();
});

// Botón volver al menú
document.getElementById("back-to-menu").addEventListener("click", function () {
    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("main-menu").classList.remove("hidden");
});

// Mostrar participante actual y lista
function showCurrentParticipant() {
    document.getElementById("current-participant").textContent = `Turno de: ${participants[currentTurn]}`;
    const list = document.getElementById("participants-list");
    list.innerHTML = "";
    participants.forEach((participant, index) => {
        const li = document.createElement("li");
        li.textContent = participant;
        if (index === currentTurn) li.style.fontWeight = "bold";
        list.appendChild(li);
    });
}

// Seleccionar una nueva pregunta
function selectNewQuestion() {
    const filteredQuestions = currentCategory === "random"
        ? questions
        : questions.filter(q => q.category === currentCategory);
    currentQuestion = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
    showQuestion();
}

// Mostrar pregunta completa (icono, número, texto)
function showQuestion() {
    const card = document.getElementById("question-card");
    const icon = document.getElementById("card-icon");
    const number = document.getElementById("card-number");
    const questionText = document.getElementById("question");

    card.className = `question-card ${currentQuestion.category}`;
    icon.src = {
        light: "icons/chat.png",
        deep: "icons/brain.png",
        fun: "icons/party.png"
    }[currentQuestion.category];
    number.textContent = `Tarjeta #${currentQuestion.id}`;
    questionText.textContent = currentLanguage === "en" ? currentQuestion.en : currentQuestion.es;
}

// Actualizar solo el texto de la pregunta (para cambio de idioma)
function updateQuestionText() {
    const questionText = document.getElementById("question");
    questionText.textContent = currentLanguage === "en" ? currentQuestion.en : currentQuestion.es;
}

// Cargar estado al iniciar
loadState();
if (participants.length >= 4) {
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
    showCurrentParticipant();
    showQuestion();
}