const steps = ["start", "intro", "consent", "questions", "scenarios", "submit", "confirmation"];
const scaledQuestions = [
  {
    id: 1,
    category: "Adózás",
    text: "Aki sokkal többet keres, annak arányaiban is többet kellene visszaadnia a közösbe.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 2,
    category: "Adózás",
    text: "Az emberek jobban bánnak a saját pénzükkel, mint az állam, ezért inkább alacsonyabb adókra lenne szükség.",
    xDirection: "right",
    yDirection: "individual"
  },
  {
    id: 3,
    category: "Adózás",
    text: "Nem igazságtalan, ha a sikeresebbek nagyobb részt visznek a közös terhekből, mert többet is profitálnak a rendszerből.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 4,
    category: "Adózás",
    text: "Egy bizonyos pont után a magas adó már inkább bünteti a teljesítményt, mintsem igazságot teremt.",
    xDirection: "right",
    yDirection: "individual"
  },
  {
    id: 5,
    category: "Öröklés és vagyon",
    text: "A nagy örökség túl nagy előnyt ad azoknak, akik eleve jó helyre születnek.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 6,
    category: "Öröklés és vagyon",
    text: "Amit valaki megkeresett, felépített vagy megvásárolt, azt joga van a családjára hagyni komolyabb állami beleszólás nélkül.",
    xDirection: "right",
    yDirection: "individual"
  },
  {
    id: 7,
    category: "Öröklés és vagyon",
    text: "Nem baj, ha vannak gazdag családok, amíg a vagyonuk törvényesen keletkezett.",
    xDirection: "right",
    yDirection: "individual"
  },
  {
    id: 8,
    category: "Öröklés és vagyon",
    text: "Egy igazságos társadalomban nem számíthatna ennyire, hogy ki milyen családba születik.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 9,
    category: "Egyéni felelősség",
    text: "A legtöbb ember életében hosszú távon nagyobb szerepe van a saját döntéseinek, mint a körülményeknek.",
    xDirection: "right",
    yDirection: "individual"
  },
  {
    id: 10,
    category: "Egyéni felelősség",
    text: "Sokan nem azért nem jutnak előre, mert nem akarnak, hanem mert eleve rosszabb lapokat kaptak.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 11,
    category: "Egyéni felelősség",
    text: "A túl sok segítség könnyen hozzászoktatja az embereket ahhoz, hogy másoktól várják a megoldást.",
    xDirection: "right",
    yDirection: "individual"
  },
  {
    id: 12,
    category: "Egyéni felelősség",
    text: "Egy erős társadalom nem hagyhatja, hogy valaki egy rossz indulás miatt egész életére hátrányban maradjon.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 13,
    category: "Állam szerepe",
    text: "Az államnak aktív szerepet kell vállalnia abban, hogy az embereknek legyen esélyük tisztességes életet élni.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 14,
    category: "Állam szerepe",
    text: "Minél több dolgot akar az állam megoldani, annál drágább, lassabb és kevésbé hatékony lesz a rendszer.",
    xDirection: "right",
    yDirection: "individual"
  },
  {
    id: 15,
    category: "Állam szerepe",
    text: "Vannak alapvető területek, például oktatás, egészségügy és lakhatás, ahol a piac önmagában nem elég igazságos.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 16,
    category: "Állam szerepe",
    text: "Az állam feladata inkább a szabályok betartatása, nem az, hogy minden élethelyzetre megoldást adjon.",
    xDirection: "right",
    yDirection: "individual"
  },
  {
    id: 17,
    category: "Oktatás",
    text: "Az állami iskolák minőségének javítása fontosabb társadalmi cél, mint hogy a jobb helyzetű családok magániskolákba menekülhessenek.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 18,
    category: "Oktatás",
    text: "A szülőknek joguk van magániskolát választani, ha úgy érzik, ott jobb lehetőséget kap a gyerekük.",
    xDirection: "right",
    yDirection: "individual"
  },
  {
    id: 19,
    category: "Oktatás",
    text: "Nem egészséges, ha a jó tanárok és a tehetősebb családok kivonulnak az állami oktatásból, mert ezzel tovább nőnek a társadalmi különbségek.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 20,
    category: "Oktatás",
    text: "Ha egy hátrányos helyzetű térségben nagyobb szükség van tanárokra, akkor az államnak joga lehet oda irányítani pedagógusokat, akár a tanárok kényelme ellenére is.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 21,
    category: "Oktatás",
    text: "A tanárokat nem lehet egyszerűen oda vezényelni, ahol az állam szerint nagyobb szükség van rájuk; nekik is joguk van eldönteni, hol akarnak dolgozni.",
    xDirection: "right",
    yDirection: "individual"
  },
  {
    id: 22,
    category: "Lakhatás",
    text: "A lakhatás nem lehet pusztán befektetési termék, mert az emberek otthonáról van szó.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 23,
    category: "Lakhatás",
    text: "Ha valaki lakást vesz és kockázatot vállal, joga van azt piaci áron kiadni vagy eladni.",
    xDirection: "right",
    yDirection: "individual"
  },
  {
    id: 24,
    category: "Lakhatás",
    text: "Az államnak erősebben be kellene avatkoznia, ha a fiatalok és átlagkeresetűek számára elérhetetlenné válik a lakhatás.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 25,
    category: "Egészségügy",
    text: "Az egészségügyben nem lenne szabad, hogy a pénz döntse el, ki milyen gyorsan kap ellátást.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 26,
    category: "Egészségügy",
    text: "Elfogadható, hogy aki külön fizet, gyorsabb vagy kényelmesebb egészségügyi szolgáltatást kapjon.",
    xDirection: "right",
    yDirection: "individual"
  },
  {
    id: 27,
    category: "Egészségügy",
    text: "Egy normális országban az alapvető egészségügyi ellátásnak mindenkinek jó színvonalon kellene járnia.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 28,
    category: "Közlekedés és város",
    text: "A városokat inkább az emberekhez kellene igazítani, nem az autókhoz.",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: 29,
    category: "Közlekedés és város",
    text: "Az autóhasználat szabadságát nem szabad túl könnyen korlátozni, mert sok ember életében ez valódi szükséglet.",
    xDirection: "right",
    yDirection: "individual"
  },
  {
    id: 30,
    category: "Környezet és jövő",
    text: "A környezetvédelem miatt néha akkor is szükség van korlátozásokra vagy plusz költségekre, ha ez rövid távon kényelmetlen.",
    xDirection: "left",
    yDirection: "community"
  }
];

const scenarioQuestions = [
  {
    id: "education_talent",
    category: "Oktatás és tehetséggondozás",
    title: "A tehetséges gyerek és a bezárt iskola",
    text: "A gyereked kimagasló tehetséget mutat zenében. Ösztöndíjat kap egy speciális iskolába, ahol profi zenészek, kis létszámú csoportok és külön fejlesztési program segítenék a fejlődését. Pont amikor elkezdené az iskolát, az állam bejelenti, hogy ezt a programot bezárja. Az indoklás szerint túl sok pénz jut kevés, eleve jó helyzetű vagy különösen tehetséges gyerekre, miközben sok hátrányos helyzetű iskola alapvető működési gondokkal küzd. A felszabaduló pénzt ezért hátrányos helyzetű térségek iskoláinak támogatására csoportosítják át. Mennyire értesz egyet ezzel a döntéssel?",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: "healthcare_private_capacity",
    category: "Egészségügy és magánellátás",
    title: "A családtag műtétje és a magánklinika",
    text: "Egy közeli családtagodnak sürgős, de nem életmentő műtétre lenne szüksége. Az állami rendszerben a várólista hat hónap. Egy magánklinikán két héten belül meg tudnák műteni, de nagyon magas áron. Az állam új szabályt vezet be: a magánklinikák kapacitásának egy részét kötelezően át kell adni az állami várólisták csökkentésére. Emiatt a fizetős magánbetegeknek is többet kell várniuk, viszont az állami betegek gyorsabban jutnak ellátáshoz. Mennyire értesz egyet ezzel a szabályozással?",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: "housing_rent_control",
    category: "Lakhatás és tulajdon",
    title: "A kiadott lakás és a bérleti díj korlátozása",
    text: "Van egy lakásod, amit évek óta kiadsz. Ez fontos része a családi megtakarításodnak. A környéken azonban nagyon megemelkedtek az albérletárak, és a fiatalok, tanárok, ápolók már alig tudnak ott lakást bérelni. Az önkormányzat ezért bevezet egy szabályt: bizonyos városrészekben maximálja az albérleti díjakat, és korlátozza, mennyivel lehet évente emelni a bérleti díjat. Ez neked konkrét bevételkiesést jelent, de több helyi családnak megfizethetőbbé teszi a lakhatást. Mennyire értesz egyet ezzel az intézkedéssel?",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: "inheritance_tax",
    category: "Adózás és családi vagyon",
    title: "A családi örökség és az új öröklési adó",
    text: "A szüleid egész életükben dolgoztak, spóroltak, és felépítettek egy jelentős családi vagyont. Ezt rád és a testvéreidre szeretnék hagyni. Az állam új öröklési szabályt vezet be: egy bizonyos értékhatár felett a nagy örökségeket magasabb adó terheli. Az ebből származó pénzt első lakáshoz jutó fiatalok támogatására és szegényebb családok gyerekeinek oktatására fordítják. A családod így kevesebbet örökölne, de sok olyan ember kapna támogatást, aki semmit nem örököl. Mennyire értesz egyet ezzel az öröklési adóval?",
    xDirection: "left",
    yDirection: "community"
  },
  {
    id: "car_free_city",
    category: "Közlekedés, környezet és szabadság",
    title: "Az autómentes belváros",
    text: "A városban, ahol élsz, egyre nagyobb a forgalom, rosszabb a levegő, és sok gyerekes család panaszkodik, hogy az utcák veszélyesek és zajosak. A városvezetés ezért új szabályt vezet be: a belváros nagy részéből kitiltják az autókat, jelentősen csökkentik a parkolóhelyeket, és a helyükön bicikliutakat, gyalogos zónákat és zöldterületeket alakítanak ki. A tömegközlekedést fejlesztik, de azoknak, akik munkához, gyereklogisztikához vagy idősebb családtagok ellátásához autót használnak, az élet érezhetően nehezebb lesz. Mennyire értesz egyet ezzel a döntéssel?",
    xDirection: "left",
    yDirection: "community"
  }
];

const stepButtons = Array.from(document.querySelectorAll("button[data-step]"));
const backButtons = Array.from(document.querySelectorAll("button[data-back]"));
const displayNameInput = document.getElementById("displayName");
const summaryName = document.getElementById("summaryName");
const scaledForm = document.getElementById("scaledForm");
const scenarioForm = document.getElementById("scenarioForm");
const submitButton = document.getElementById("submitButton");
const introVideo = document.getElementById("introVideo");
const outroVideo = document.getElementById("outroVideo");
const introStartButton = document.getElementById("introStartButton");

const RESULTS_CODE = "Leababa2023!";
const openResultsButton = document.getElementById("openResults");
const adminEntryButton = document.getElementById("adminEntry");
const resultsGate = document.getElementById("resultsGate");
const resultsContent = document.getElementById("resultsContent");
const resultsCodeInput = document.getElementById("resultsCode");
const unlockButton = document.getElementById("unlockResults");
const resultsError = document.getElementById("resultsError");
const resultsChart = document.getElementById("resultsChart");
const resultsList = document.getElementById("resultsList");
const clearResultsButton = document.getElementById("clearResults");

function createScaledQuestions() {
  scaledQuestions.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "question-card";
    wrapper.innerHTML = `
      <div class="question-meta"><span class="pill">${item.category}</span></div>
      <h3>${item.id}. ${item.text}</h3>
      <div class="range-row">
        <input type="range" name="scaled-${index}" min="0" max="100" step="10" value="50" />
        <div class="range-labels">
          <span>0 – kevésbé értek egyet</span>
          <span>100 – teljesen egyetértek</span>
        </div>
      </div>
    `;
    scaledForm.appendChild(wrapper);
  });
}

function createScenarioQuestions() {
  scenarioQuestions.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "question-card scenario-card";
    wrapper.innerHTML = `
      <div class="question-meta"><span class="pill">${item.category}</span></div>
      <h3 class="scenario-title">${item.title}</h3>
      <p class="scenario-text">${item.text}</p>
      <div class="range-row">
        <div class="slider-line">
          <input type="range" name="scenario-${index}" min="0" max="100" step="1" value="50" data-range="${index}" />
          <output class="range-value" data-value="${index}">50</output>
        </div>
        <div class="range-labels">
          <span>Egyáltalán nem értek egyet</span>
          <span>Teljesen egyetértek</span>
        </div>
      </div>
    `;
    scenarioForm.appendChild(wrapper);
  });
}

function tryPlayVideo(video) {
  if (!video) return;
  const attempt = video.play();
  if (attempt && typeof attempt.catch === "function") {
    attempt.catch(() => {
      /* autoplay blocked by the browser; the user can press play manually */
    });
  }
}

function stopAllVideos() {
  document.querySelectorAll("video").forEach((video) => {
    video.pause();
    try {
      video.currentTime = 0;
    } catch (err) {
      /* currentTime may not be settable until metadata loads; ignore */
    }
  });
}

function enterFromStart() {
  // Triggered by the start-screen button click, so we are allowed to play
  // with sound. Move to the intro page, then unmute and play.
  showStep("intro");
  if (!introVideo) return;
  introVideo.muted = false;
  introVideo.volume = 1;
  const attempt = introVideo.play();
  if (attempt && typeof attempt.catch === "function") {
    attempt.catch(() => {
      /* play may still be rejected; the user can use the native controls */
    });
  }
}

function showStep(stepId) {
  [...steps, "results"].forEach((step) => {
    const section = document.getElementById(step);
    if (!section) return;
    section.classList.toggle("active", step === stepId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });

  // On the start screen show nothing but the entry button.
  document.body.classList.toggle("start-active", stepId === "start");

  stopAllVideos();
  if (stepId === "confirmation") {
    tryPlayVideo(outroVideo);
  }
}

function collectScaledAnswers() {
  return scaledQuestions.map((_, index) => {
    const input = scaledForm.querySelector(`input[name="scaled-${index}"]`);
    return Number(input?.value ?? 50);
  });
}

function collectScenarioAnswers() {
  return scenarioQuestions.map((_, index) => {
    const input = scenarioForm.querySelector(`input[name="scenario-${index}"]`);
    return Number(input?.value ?? 50);
  });
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function computeCoordinate(values, axis) {
  const selected = values.map((value, index) => {
    const item = scaledQuestions[index];
    if (!item) return 50;
    if (axis === "x") {
      return item.xDirection === "left" ? 100 - value : value;
    }
    return item.yDirection === "community" ? value : 100 - value;
  });
  const sum = selected.reduce((acc, value) => acc + value, 0);
  const avg = selected.length ? sum / selected.length : 50;
  return Math.round(avg);
}

function getProfileLabel(x, y) {
  if (x <= 40 && y <= 40) return "Baloldali autonómia";
  if (x <= 40 && y >= 60) return "Baloldali közösség";
  if (x >= 60 && y <= 40) return "Jobboldali szabadság";
  if (x >= 60 && y >= 60) return "Jobboldali szolidaritás";
  return "Kiegyensúlyozott szemlélet";
}

function getAdminSummary(x, y, answers) {
  const economy = x <= 40 ? "inkább az állami szerepet" : x >= 60 ? "inkább a piaci megoldásokat" : "vegyes gazdasági nézeteket";
  const responsibility = y <= 40 ? "az egyéni felelősség felé hajlik" : y >= 60 ? "a közösségi állami felelősséget tartja fontosabbnak" : "középutat talál az egyéni és közösségi felelősség között";
  const strong = Math.max(...answers);
  const weak = Math.min(...answers);
  const tension = strong - weak;
  const note = tension > 50 ? "Erős különbség látszik a személyes és közösségi vélemények között." : "Viszonylag kiegyensúlyozottabb a szemlélet.";
  return `A profil ${economy}, és ${responsibility}. ${note}`;
}

function getCampingSentence(label) {
  return `A táborban izgalmas lesz megbeszélni, hogy a csoport mennyire találkozik a "${label}" jellegű nézetekkel.`;
}

function getFormattedTime() {
  return new Date().toLocaleString("hu-HU", {
    dateStyle: "medium",
    timeStyle: "short"
  });
}

function syncSummary() {
  summaryName.textContent = displayNameInput.value.trim() || "–";
}

function handleStepButton(event) {
  const step = event.target.dataset.step;
  if (!step) return;
  if (step === "intro") {
    showStep("consent");
    return;
  }
  if (step === "consent") {
    const name = displayNameInput.value.trim();
    if (!name) {
      displayNameInput.focus();
      displayNameInput.style.borderColor = "var(--accent)";
      return;
    }
    syncSummary();
    showStep("questions");
    return;
  }
  if (step === "questions") {
    showStep("scenarios");
    return;
  }
  if (step === "scenarios") {
    showStep("submit");
    return;
  }
  if (step === "restart") {
    showStep("start");
    return;
  }
}

function saveResult() {
  const name = displayNameInput.value.trim() || "Ismeretlen";
  const scaledAnswers = collectScaledAnswers();
  const scenarioAnswers = collectScenarioAnswers();

  const baseX = computeCoordinate(scaledAnswers, "x");
  const baseY = computeCoordinate(scaledAnswers, "y");

  const scenarioXraw = average(scenarioAnswers.map((answer) => 100 - answer));
  const scenarioYraw = average(scenarioAnswers.map((answer) => answer));
  const scenarioX = Math.round(scenarioXraw);
  const scenarioY = Math.round(scenarioYraw);

  const finalX = Math.round(baseX * 0.75 + scenarioXraw * 0.25);
  const finalY = Math.round(baseY * 0.75 + scenarioYraw * 0.25);

  const profileLabel = getProfileLabel(finalX, finalY);
  const adminSummary = getAdminSummary(finalX, finalY, scaledAnswers);
  const campingSentence = getCampingSentence(profileLabel);

  const record = {
    displayName: name,
    scaledAnswers,
    scenarioAnswers,
    baseX,
    baseY,
    scenarioX,
    scenarioY,
    finalX,
    finalY,
    profileLabel,
    adminSummary,
    campingSentence,
    timestamp: getFormattedTime()
  };
  const existing = JSON.parse(localStorage.getItem("anonymusResults") || "[]");
  existing.push(record);
  localStorage.setItem("anonymusResults", JSON.stringify(existing));
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
  });
}

function lockResults() {
  if (resultsContent) resultsContent.hidden = true;
  if (resultsGate) resultsGate.hidden = false;
  if (resultsCodeInput) resultsCodeInput.value = "";
  if (resultsError) resultsError.textContent = "";
}

function openResults() {
  lockResults();
  showStep("results");
  if (resultsCodeInput) resultsCodeInput.focus();
}

function unlockResults() {
  const code = resultsCodeInput ? resultsCodeInput.value : "";
  if (code !== RESULTS_CODE) {
    if (resultsError) resultsError.textContent = "Hibás kód. Próbáld újra.";
    if (resultsCodeInput) {
      resultsCodeInput.focus();
      resultsCodeInput.select();
    }
    return;
  }
  if (resultsError) resultsError.textContent = "";
  if (resultsGate) resultsGate.hidden = true;
  if (resultsContent) resultsContent.hidden = false;
  renderResults();
}

function clampScore(value) {
  const score = Number(value);
  if (Number.isNaN(score)) return 50;
  return Math.max(0, Math.min(100, score));
}

function buildCompass(results) {
  const points = results
    .map((record) => {
      const x = clampScore(record.finalX ?? record.x);
      const y = clampScore(record.finalY ?? record.y);
      const cx = 8 + (x / 100) * 84;
      const cy = 8 + ((100 - y) / 100) * 84; // közösség (magas Y) felül
      const name = escapeHtml(record.displayName || "");
      return `
        <g class="compass-point">
          <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="1.5" />
          <text x="${(cx + 2.2).toFixed(1)}" y="${(cy + 1).toFixed(1)}">${name}</text>
        </g>`;
    })
    .join("");

  return `
    <svg class="compass" viewBox="0 0 100 100" role="img" aria-label="Politikai kompasz">
      <rect class="compass-field" x="8" y="8" width="84" height="84" />
      <line class="compass-axis" x1="50" y1="8" x2="50" y2="92" />
      <line class="compass-axis" x1="8" y1="50" x2="92" y2="50" />
      <text class="compass-label" x="50" y="5.4" text-anchor="middle">KÖZÖSSÉG</text>
      <text class="compass-label" x="50" y="97.5" text-anchor="middle">EGYÉN</text>
      <text class="compass-label" x="6.4" y="51" text-anchor="end">BAL</text>
      <text class="compass-label" x="93.6" y="51" text-anchor="start">JOBB</text>
      ${points}
    </svg>`;
}

function renderResults() {
  if (!resultsList) return;
  const results = JSON.parse(localStorage.getItem("anonymusResults") || "[]");
  if (resultsChart) resultsChart.innerHTML = results.length ? buildCompass(results) : "";
  resultsList.innerHTML = "";
  if (!results.length) {
    resultsList.innerHTML = '<p class="note">Nincs még elmentett eredmény.</p>';
    return;
  }

  results.forEach((record, index) => {
    const card = document.createElement("div");
    card.className = "result-card";
    const scaledRows = (record.scaledAnswers || [])
      .map((value, i) => {
        const category = scaledQuestions[i] ? scaledQuestions[i].category : `${i + 1}.`;
        return `<li><span>${i + 1}. ${escapeHtml(category)}</span><b>${value}</b></li>`;
      })
      .join("");
    const scenarioRows = (record.scenarioAnswers || [])
      .map((value, i) => {
        const title = scenarioQuestions[i] ? scenarioQuestions[i].title : `${i + 1}.`;
        return `<p><strong>${i + 1}. ${escapeHtml(title)}</strong><br /><b>${value}</b> / 100</p>`;
      })
      .join("");

    card.innerHTML = `
      <h3>${index + 1}. ${escapeHtml(record.displayName)}</h3>
      <div class="result-meta">
        <p><strong>Időpont:</strong> ${escapeHtml(record.timestamp || record.dateTime || "")}</p>
        <p><strong>Profil:</strong> ${escapeHtml(record.profileLabel || "")}</p>
        <p><strong>Alap X / Y:</strong> ${record.baseX} / ${record.baseY}</p>
        <p><strong>Helyzet X / Y:</strong> ${record.scenarioX} / ${record.scenarioY}</p>
        <p><strong>Végső X / Y:</strong> ${record.finalX} / ${record.finalY}</p>
      </div>
      <p class="result-summary">${escapeHtml(record.adminSummary || "")}</p>
      <p class="result-summary">${escapeHtml(record.campingSentence || "")}</p>
      <details class="result-detail">
        <summary>Skálázott válaszok (30)</summary>
        <ol class="answer-list">${scaledRows}</ol>
      </details>
      <details class="result-detail">
        <summary>Élethelyzetek (5)</summary>
        <div class="scenario-answers">${scenarioRows}</div>
      </details>
    `;
    resultsList.appendChild(card);
  });
}

function init() {
  createScaledQuestions();
  createScenarioQuestions();
  scenarioForm.addEventListener("input", (event) => {
    const slider = event.target.closest('input[type="range"]');
    if (!slider) return;
    const output = scenarioForm.querySelector(`output[data-value="${slider.dataset.range}"]`);
    if (output) output.textContent = slider.value;
  });

  stepButtons.forEach((button) => button.addEventListener("click", handleStepButton));
  backButtons.forEach((button) =>
    button.addEventListener("click", () => showStep(button.dataset.back))
  );
  if (introStartButton) {
    introStartButton.addEventListener("click", enterFromStart);
  }

  displayNameInput.addEventListener("input", syncSummary);
  submitButton.addEventListener("click", () => {
    saveResult();
    showStep("confirmation");
  });

  if (openResultsButton) openResultsButton.addEventListener("click", openResults);
  if (adminEntryButton) adminEntryButton.addEventListener("click", openResults);
  if (unlockButton) unlockButton.addEventListener("click", unlockResults);
  if (resultsCodeInput) {
    resultsCodeInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        unlockResults();
      }
    });
  }
  if (clearResultsButton) {
    clearResultsButton.addEventListener("click", () => {
      localStorage.removeItem("anonymusResults");
      renderResults();
    });
  }

  if (location.hash === "#kronika") {
    openResults();
  } else {
    showStep("start");
  }
}

init();
