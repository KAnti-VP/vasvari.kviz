// =========================================================================
// BEÁLLÍTHATÓ PARAMÉTEREK
// =========================================================================
// Ha élesíted a backendet, írd át ezt az URL-t a szervered címére!
// const API_URL = 'http://localhost:3000/api';
const API_URL = "/api";
// =========================================================================
// 1. KÉRDÉSEK ÉS VÁLASZOK ADATBÁZISA
// =========================================================================
const questions = [
  {
    question: "1. Ha kapsz egy szabad délutánt, mit csinálsz legszívesebben?",
    answers: [
      {
        text: "Kitalálok valamit, amit megjavíthatok vagy megoldhatok.",
        type: "P",
      },
      { text: "Új ötleteken gondolkodom, tervezek, alkotok.", type: "Ö" },
      {
        text: "Elmerülök egy játékban, digitális kihívásban vagy technológiában.",
        type: "K",
      },
      {
        text: "Összehozom a barátokat, és megszervezek valami jó programot.",
        type: "SZ",
      },
      {
        text: "Kitalálom, hogyan lehetne pénzt keresni valamivel, amit szeretek.",
        type: "V",
      },
    ],
  },
  {
    question: "2. Egy közös iskolai projektben milyen szerepet vállalnál?",
    answers: [
      { text: "Én keresem a megoldást, ha valami nem működik.", type: "P" },
      { text: "Én találom ki, mi legyen a projekt különlegessége.", type: "Ö" },
      { text: "Én készítem el a digitális részt.", type: "K" },
      {
        text: "Én osztom el a feladatokat, és figyelek a határidőkre.",
        type: "SZ",
      },
      {
        text: "Én találom ki, hogyan lehetne a projektből valódi lehetőség.",
        type: "V",
      },
    ],
  },
  {
    question: "3. Melyik mondat hangzik a leginkább úgy, mintha te mondanád?",
    answers: [
      { text: "„Várjatok, ezt még meg tudom oldani!”", type: "P" },
      { text: "„Van egy ötletem!”", type: "Ö" },
      { text: "„Csak még ezt a hibát kijavítom…”", type: "K" },
      { text: "„Nyugi, már megvan a tervem!”", type: "SZ" },
      { text: "„Ebből még valami nagy dolog lehet!”", type: "V" },
    ],
  },
  {
    question: "4. Melyik kihívást próbálnád ki a legszívesebben?",
    answers: [
      { text: "Egy rejtélyes hiba megtalálását és kijavítását.", type: "P" },
      {
        text: "Egy teljesen új termék vagy szolgáltatás megtervezését.",
        type: "Ö",
      },
      { text: "Egy saját játék vagy alkalmazás elkészítését.", type: "K" },
      { text: "Egy nagy rendezvény vagy esemény megszervezését.", type: "SZ" },
      { text: "Egy saját vállalkozás ötletének kidolgozását.", type: "V" },
    ],
  },
  {
    question: "5. Ha választhatnál egy szuperképességet, melyik lenne az?",
    answers: [
      { text: "Minden problémára azonnal megtalálnám a megoldást.", type: "P" },
      { text: "Bármikor zseniális új ötleteim támadnának.", type: "Ö" },
      {
        text: "Bármilyen digitális eszközt vagy programot megértenék.",
        type: "K",
      },
      {
        text: "Egyetlen pillantással átlátnám az egész rendszert.",
        type: "SZ",
      },
      {
        text: "Minden lehetőségből sikeres vállalkozást tudnék építeni.",
        type: "V",
      },
    ],
  },
];

// =========================================================================
// 2. KARAKTEREK EREDETI KAMPÁNYSZÖVEGEI ÉS KÉPFÁJLNEVEI
// =========================================================================
const characterProfiles = {
  P: {
    title: "🔍 A PROBLÉMAMEGOLDÓ",
    imageFile: "images/problemamegoldo.png", // Ezt a fájlt töltsd fel az images mappába!
    lead: "Nincs lehetetlen küldetés!",
    description: [
      "Te vagy az, aki nem adja fel, amíg meg nem találja a megoldást.",
      "Szeretsz kísérletezni, utánajárni a dolgoknak, hibákat keresni és összefüggéseket felfedezni.",
      "Nem ijedsz meg attól, ha valami elsőre nem sikerül.",
      "Sőt! Téged éppen az motivál, hogy rájöjj, hogyan működik.",
    ],
    trainingsHTML: `
            <h4>Milyen képzés illik hozzád?</h4>
            <div class="training-item">
                <strong>Elsőként ajánljuk: Szoftverfejlesztő és -tesztelő – gazdasági orientáció</strong>
                <p>Az informatika és a gazdasági gondolkodás találkozása. Problémákat oldhatsz meg, programokat tesztelhetsz, és megismerheted, hogyan működnek a digitális megoldások a gazdaság világában.</p>
            </div>
            <div class="training-item">
                <strong>Ezt is érdemes megnézned: Okleveles szoftverfejlesztő és -tesztelő technikusképzés</strong>
            </div>
        `,
    motto:
      "A Vasváriban a kíváncsiságodból tudás, a tudásodból pedig valódi alkotás lehet.",
  },
  Ö: {
    title: "💡 AZ ÖTLETGYÁROS",
    imageFile: "images/O.png", // Ezt a fájlt töltsd fel az images mappába! (Ékezet nélkül)
    lead: "Neked mindig van egy B terved. Meg egy C is!",
    description: [
      "Tele vagy elképzelésekkel, és szeretsz új dolgokat kitalálni.",
      "Gyakran meglátod a lehetőséget ott is, ahol mások még csak egy hétköznapi helyzetet látnak.",
      "Szeretsz tervezni, alkotni, új megoldásokon gondolkodni.",
      "Nálad egy egyszerű ötletből könnyen izgalmas projekt születhet.",
    ],
    trainingsHTML: `
            <h4>Milyen képzés illik hozzád?</h4>
            <div class="training-item">
                <strong>Elsőként ajánljuk: Vállalkozási ügyviteli ügyintéző</strong>
                <p>Megtanulhatod, hogyan működik egy vállalkozás, hogyan születik meg egy üzleti elképzelés, és hogyan lehet az ötletekből megvalósítható terv.</p>
            </div>
            <div class="training-item">
                <strong>Ezt is érdemes megnézned: Szoftverfejlesztő és -tesztelő – gazdasági orientáció</strong>
            </div>
        `,
    motto:
      "A Vasváriban nemcsak ötletelhetsz, hanem ki is próbálhatod, mire vagy képes!",
  },
  K: {
    title: "💻 A KÓDOLÓ",
    imageFile: "images/K.png", // Ezt a fájlt töltsd fel az images mappába!
    lead: "A hibakeresés nálad már életforma.",
    description: [
      "A digitális világ nemcsak érdekel – te alkotni szeretnél benne!",
      "Szereted a technológiát, a játékokat, az alkalmazásokat, és kíváncsi vagy arra, mi történik a háttérben.",
      "Szívesen kipróbálsz új dolgokat, és jó érzés, amikor egy saját fejlesztésű megoldás végre működik.",
    ],
    trainingsHTML: `
            <h4>Milyen képzés illik hozzád?</h4>
            <div class="training-item">
                <strong>Elsőként ajánljuk: Okleveles szoftverfejlesztő és -tesztelő technikusképzés</strong>
                <p>Ha igazán érdekel a programozás és a digitális alkotás, itt mélyebben is elmerülhetsz a szoftverfejlesztés világában.</p>
            </div>
            <div class="training-item">
                <strong>Ezt is érdemes megnézned: Szoftverfejlesztő és -tesztelő – gazdasági orientáció</strong>
            </div>
        `,
    motto:
      "A Vasváriban akár a saját ötletedből is készülhet működő alkalmazás vagy játék.",
  },
  SZ: {
    title: "📋 A SZERVEZŐ",
    imageFile: "images/SZ.png", // Ezt a fájlt töltsd fel az images mappába!
    lead: "Nálad még a káosznak is van rendszere.",
    description: [
      "Te vagy az, aki átlátja a dolgokat, és tudja, mi legyen a következő lépés.",
      "Szeretsz tervezni, rendszerezni, egyeztetni és csapatban dolgozni.",
      "Jó érzéked van ahhoz, hogy összehangold az embereket és a feladatokat.",
      "Ha valaki azt kérdezi, „ki fogja ezt megszervezni?”, valószínűleg már jelentkezel is.",
    ],
    trainingsHTML: `
            <h4>Milyen képzés illik hozzád? – Két izgalmas lehetőség</h4>
            <div class="training-item">
                <strong>Vállalkozási ügyviteli ügyintéző</strong>
                <p>Üzleti folyamatok, ügyintézés, szervezés és vállalkozások mindennapi működése.</p>
            </div>
            <div class="training-item">
                <strong>Idegen nyelvű ipari és kereskedelmi technikus – kereskedelmi logisztika szakmairány</strong>
                <p>Kereskedelem, áruk és folyamatok szervezése, logisztika és idegen nyelvek.</p>
            </div>
        `,
    motto:
      "A Vasváriban megtanulhatod, hogyan lesz a jó szervezőkészségből valódi szakmai tudás.",
  },
  V: {
    title: "🚀 A JÖVŐ VÁLLALKOZÓJA",
    imageFile: "images/V.png", // Ezt a fájlt töltsd fel az images mappába!
    lead: "Miért ne lehetne ebből egy jó üzlet?",
    description: [
      "Te nemcsak álmodozol – azon gondolkodsz, hogyan valósítsd meg az ötleteidet.",
      "Szeretsz kezdeményezni, meglátod a lehetőségeket, és nem félsz új utakra lépni.",
      "Érdekel, hogyan működik az üzleti világ, hogyan születnek vállalkozások, és hogyan lehet egy jó ötletből valami igazán nagy dolog.",
    ],
    trainingsHTML: `
            <h4>Milyen képzés illik hozzád? – Két izgalmas lehetőség</h4>
            <div class="training-item">
                <strong>Vállalkozási ügyviteli ügyintéző</strong>
                <p>Ismerd meg a vállalkozások világát, az üzleti gondolkodást és az ötletek megvalósításának folyamatát.</p>
            </div>
            <div class="training-item">
                <strong>Idegen nyelvű ipari és kereskedelmi technikus – kereskedelmi logisztika szakmairány</strong>
                <p>Ha a kereskedelem, a nemzetközi üzleti világ és a logisztika is érdekel, ez is neked való lehet.</p>
            </div>
        `,
    motto:
      "A Vasváriban nem kell megvárnod, amíg felnősz ahhoz, hogy elkezdj nagyban gondolkodni!",
  },
};

// =========================================================================
// 3. ÁLLAPOTKEZELÉS ÉS DOM ELEMEK
// =========================================================================
let currentQuestionIndex = 0;
let scores = { P: 0, Ö: 0, K: 0, SZ: 0, V: 0 };

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const questionCounter = document.getElementById("question-counter");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");

// Eseményfigyelők
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);

// Kvíz indítása / újraindítása
function startQuiz() {
  currentQuestionIndex = 0;
  scores = { P: 0, Ö: 0, K: 0, SZ: 0, V: 0 };

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  showQuestion();
}

// Aktuális kérdés megjelenítése
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  // Haladásjelző frissítése
  questionCounter.textContent = `${currentQuestionIndex + 1} / ${questions.length}. kérdés`;
  const progressPercent = (currentQuestionIndex / questions.length) * 100;
  progressFill.style.width = `${progressPercent}%`;

  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer.text;
    button.addEventListener("click", () => handleAnswer(answer.type));
    answersContainer.appendChild(button);
  });
}

// Válasz kezelése és pontozás
function handleAnswer(characterType) {
  scores[characterType] += 1;
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    progressFill.style.width = "100%";
    finishQuiz();
  }
}

// Kvíz befejezése, nyertes(ek) kiszámítása és megjelenítése
function finishQuiz() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  // Legmagasabb pontszám meghatározása
  const maxScore = Math.max(...Object.values(scores));

  // Az összes legmagasabb pontszámú karakter kiválasztása (döntetlenkezelés)
  const winners = Object.entries(scores)
    .filter(([character, score]) => score === maxScore)
    .map(([character]) => character);

  renderResults(winners, maxScore);
  sendResultsToBackend(winners);
}

// Eredmények kirajzolása a képernyőre
function renderResults(winners, maxScore) {
  const resultHeader = document.getElementById("result-header");
  const charactersOutput = document.getElementById("characters-output");
  charactersOutput.innerHTML = "";

  // Fejléc szövege holtverseny esetén vs. egyértelmű nyertesnél
  if (winners.length === 1) {
    resultHeader.innerHTML = `
            <p style="text-transform: uppercase; font-weight: bold; color: #6b7280; margin-bottom: 5px;">A te eredményed</p>
            <h2>${characterProfiles[winners[0]].title}</h2>
            <p><strong>${maxScore} / 5 ponttal</strong> ez a karakter illik hozzád a legjobban.</p>
        `;
  } else {
    const typeLabel =
      winners.length === 2 ? "KETTŐS KARAKTER" : "TÖBBSZÖRÖS HOLTVERSENY";
    resultHeader.innerHTML = `
            <p style="text-transform: uppercase; font-weight: bold; color: #f59e0b; margin-bottom: 5px;">${typeLabel}</p>
            <h2>Benned több karakter is találkozott!</h2>
            <p>Azonos, <strong>${maxScore} / 5 pontos</strong> eredménnyel az alábbi karakterek mindegyike jellemző rád:</p>
        `;
  }

  // Minden nyertes karakter kártyájának megjelenítése
  winners.forEach((code) => {
    const profile = characterProfiles[code];
    const card = document.createElement("div");
    card.className = "card character-card";

    const paragraphsHTML = profile.description
      .map((p) => `<p>${p}</p>`)
      .join("");

    // Kép megjelenítése vagy helyőrző, ha a kép még nincs feltöltve
    card.innerHTML = `
            <div class="character-header">
                <div class="character-image-wrapper">
                    <img src="${profile.imageFile}" alt="${profile.title}" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <span style="display: none;">Kép helye:<br><strong>${profile.imageFile}</strong></span>
                </div>
                <div>
                    <h2>${profile.title}</h2>
                    <p style="font-size: 1.15rem; font-weight: bold; color: #2563eb;">${profile.lead}</p>
                </div>
            </div>
            
            ${paragraphsHTML}
            
            <div class="training-box">
                ${profile.trainingsHTML}
            </div>
            
            <p class="closing-motto">${profile.motto}</p>
        `;

    charactersOutput.appendChild(card);
  });
}

// Anonim eredmény elküldése a szervernek
async function sendResultsToBackend(winners) {
  try {
    await fetch(`${API_URL}/results`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ winners }),
    });
  } catch (error) {
    // Ha a backend épp nem elérhető (pl. csak a frontendet teszteled), a felhasználói élmény nem törik meg
    console.warn("Nem sikerült elküldeni a statisztikát a szervernek:", error);
  }
}
