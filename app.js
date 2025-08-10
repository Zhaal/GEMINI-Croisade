// ============================
//  Warhammer 40k — Le Promontoire
//  JS COMPLET (5 tours, 15 phases)
// ============================

// --- Données de scénario (5 tours × 3 phases) ---
const phases = [
  // ===== TOUR 1 =====
  { tour: 1, phase: "Phase de Commandement", narration:
    "Les senseurs de la plateforme clignotent à saturation. Des spores mycétiques strient le ciel. Les défenseurs n’ont que quelques instants pour fixer leur première ligne d’action.",
    choix: [
      { texte: "Rediriger toute l’énergie vers les batteries anti-aériennes.",
        effet: { menace: -3, tyr: -2 }, tag: "Faveur majeure" },
      { texte: "Durcir les remparts avec des champs magnétiques.",
        effet: { menace: -1, tyr: -1 }, tag: "Faveur mineure" },
      { texte: "Rappeler les patrouilles extérieures (laisse le ciel libre).",
        effet: { menace: +2, tyr: +3 }, tag: "Défaveur majeure" },
      { texte: "Disperser les troupes pour couvrir plus de zones.",
        effet: { menace: +1, tyr: 0 }, tag: "Défaveur mineure" },
    ]
  },
  { tour: 1, phase: "Phase de Charge", narration:
    "Des silhouettes chitineuses surgissent des dunes. Les couloirs d’accès de la plateforme deviennent des goulots d’étranglement mortels.",
    choix: [
      { texte: "Bloquer les sas secondaires et forcer l’ennemi dans un entonnoir.",
        effet: { menace: -2, tyr: -1 }, tag: "Faveur majeure" },
      { texte: "Déployer des mines à fragmentation sur le pourtour.",
        effet: { menace: -1, tyr: -1 }, tag: "Faveur mineure" },
      { texte: "Contre-charge mal coordonnée, sans appui.",
        effet: { menace: +2, tyr: +2 }, tag: "Défaveur majeure" },
      { texte: "Repli de précaution trop tôt.",
        effet: { menace: +1, tyr: 0 }, tag: "Défaveur mineure" },
    ]
  },
  { tour: 1, phase: "Phase d’Ébranlement", narration:
    "La coque vibre sous l’impact des spores retombées. Les vox saturent de cris et d’ordres entrecoupés.",
    choix: [
      { texte: "Rétablir les boucliers locaux et purger les conduites.",
        effet: { menace: -2, tyr: -1 }, tag: "Faveur majeure" },
      { texte: "Redistribuer les munitions vers les secteurs critiques.",
        effet: { menace: -1, tyr: 0 }, tag: "Faveur mineure" },
      { texte: "Ignorer les alarmes d’intégrité de coque.",
        effet: { menace: +3, tyr: +2 }, tag: "Défaveur majeure" },
      { texte: "Reporter la maintenance des canons AA.",
        effet: { menace: +1, tyr: +1 }, tag: "Défaveur mineure" },
    ]
  },

  // ===== TOUR 2 =====
  { tour: 2, phase: "Phase de Commandement", narration:
    "La première vague a révélé des bioformes tunnelières. Des vibrations profondes annoncent un assaut par en-dessous.",
    choix: [
      { texte: "Inonder les vides sanitaires avec des agents incendiaires.",
        effet: { menace: -3, tyr: -1 }, tag: "Faveur majeure" },
      { texte: "Renforcer les planchers techniques par des étais blindés.",
        effet: { menace: -1, tyr: -1 }, tag: "Faveur mineure" },
      { texte: "Ignorer l’intrusion souterraine, concentrer tout au sommet.",
        effet: { menace: +2, tyr: +2 }, tag: "Défaveur majeure" },
      { texte: "Décaler les réserves loin des secousses (zones clefs moins couvertes).",
        effet: { menace: +1, tyr: 0 }, tag: "Défaveur mineure" },
    ]
  },
  { tour: 2, phase: "Phase de Charge", narration:
    "Des Béhémoths percent le sable; leurs gueules crachent des nuées de gaunts. Les murs résonnent sous l’impact.",
    choix: [
      { texte: "Feu concentré sur les Béhémoths, ignorer les écrans.",
        effet: { menace: -2, tyr: -2 }, tag: "Faveur majeure" },
      { texte: "Piéger les rampes d’accès avec des charges à retardement.",
        effet: { menace: -1, tyr: -1 }, tag: "Faveur mineure" },
      { texte: "Sortie précipitée dans la plaine pour intercepter.",
        effet: { menace: +3, tyr: +2 }, tag: "Défaveur majeure" },
      { texte: "Ordres contradictoires : tir/charge en simultané.",
        effet: { menace: +1, tyr: +1 }, tag: "Défaveur mineure" },
    ]
  },
  { tour: 2, phase: "Phase d’Ébranlement", narration:
    "Les conduits d’aération exhalent des spores corrosives. Les optics crépitent; la visibilité chute.",
    choix: [
      { texte: "Déployer des scrubs atmosphériques et sceller les ponts ouverts.",
        effet: { menace: -2, tyr: -1 }, tag: "Faveur majeure" },
      { texte: "Rediriger la circulation du personnel par des couloirs sûrs.",
        effet: { menace: -1, tyr: 0 }, tag: "Faveur mineure" },
      { texte: "Laisser ouverts les ponts pour ‘gagner du temps’.",
        effet: { menace: +2, tyr: +2 }, tag: "Défaveur majeure" },
      { texte: "Pénurie de filtres : réemploi de cartouches.",
        effet: { menace: +1, tyr: 0 }, tag: "Défaveur mineure" },
    ]
  },

  // ===== TOUR 3 =====
  { tour: 3, phase: "Phase de Commandement", narration:
    "Un dôme de nuées gargouillantes obscurcit l’astre. Des bio-canons s’ajustent au loin.",
    choix: [
      { texte: "Synchroniser AA + artillerie lourde sur tirs croisés.",
        effet: { menace: -3, tyr: -2 }, tag: "Faveur majeure" },
      { texte: "Activer les projecteurs aveuglants sur l’approche.",
        effet: { menace: -1, tyr: -1 }, tag: "Faveur mineure" },
      { texte: "Éteindre l’AA pour économiser l’énergie.",
        effet: { menace: +3, tyr: +2 }, tag: "Défaveur majeure" },
      { texte: "Geler les rotations d’équipage (fatigue).",
        effet: { menace: +1, tyr: 0 }, tag: "Défaveur mineure" },
    ]
  },
  { tour: 3, phase: "Phase de Charge", narration:
    "Des monstres à carapace luisante percent les lignes, escortés par des essaims rapides.",
    choix: [
      { texte: "Priorité aux monstres : canons laser et fuseurs en tir ciblé.",
        effet: { menace: -2, tyr: -2 }, tag: "Faveur majeure" },
      { texte: "Écrans d’infanterie en défensive serrée.",
        effet: { menace: -1, tyr: -1 }, tag: "Faveur mineure" },
      { texte: "Charge frontale contre les carapaces lourdes.",
        effet: { menace: +2, tyr: +3 }, tag: "Défaveur majeure" },
      { texte: "Tirs non coordonnés, gaspillage de munitions.",
        effet: { menace: +1, tyr: +1 }, tag: "Défaveur mineure" },
    ]
  },
  { tour: 3, phase: "Phase d’Ébranlement", narration:
    "Les vox hurlent : « Brèche sectorielle ! » Les pict-feeds deviennent neige.",
    choix: [
      { texte: "Colmater la brèche avec unités rapides + champs provisoires.",
        effet: { menace: -2, tyr: -1 }, tag: "Faveur majeure" },
      { texte: "Évacuer les civils restants vers le noyau central.",
        effet: { menace: -1, tyr: 0 }, tag: "Faveur mineure" },
      { texte: "Ignorer la brèche pour tenir les lignes actuelles.",
        effet: { menace: +2, tyr: +2 }, tag: "Défaveur majeure" },
      { texte: "Détourner des équipes de réparation vers d’autres tâches.",
        effet: { menace: +1, tyr: 0 }, tag: "Défaveur mineure" },
    ]
  },

  // ===== TOUR 4 =====
  { tour: 4, phase: "Phase de Commandement", narration:
    "Les bio-synapses s’intensifient : une intelligence froide et implacable dirige l’assaut.",
    choix: [
      { texte: "Contre-guerre électronique : brouillage ciblé des relais synaptiques.",
        effet: { menace: -3, tyr: -1 }, tag: "Faveur majeure" },
      { texte: "Tirs de contre-batterie sur créatures relais.",
        effet: { menace: -1, tyr: -1 }, tag: "Faveur mineure" },
      { texte: "Éteindre les relais internes (perte de coordination).",
        effet: { menace: +2, tyr: +2 }, tag: "Défaveur majeure" },
      { texte: "Mutualiser les fréquences (risque d’interférences).",
        effet: { menace: +1, tyr: 0 }, tag: "Défaveur mineure" },
    ]
  },
  { tour: 4, phase: "Phase de Charge", narration:
    "Des bio-plasma lacère les parapets; les troupes cherchent un abri tandis que l’ennemi se rue.",
    choix: [
      { texte: "Déclencher le ‘Rideau de feu’ sur les ponts d’accès.",
        effet: { menace: -2, tyr: -2 }, tag: "Faveur majeure" },
      { texte: "Tirer, décrocher, réengager (harcèlement).",
        effet: { menace: -1, tyr: -1 }, tag: "Faveur mineure" },
      { texte: "Tenir à découvert pour maintenir la cadence.",
        effet: { menace: +3, tyr: +2 }, tag: "Défaveur majeure" },
      { texte: "Ordre tardif : contre-attaque sans appui.",
        effet: { menace: +1, tyr: +1 }, tag: "Défaveur mineure" },
    ]
  },
  { tour: 4, phase: "Phase d’Ébranlement", narration:
    "Les conduites de refroidissement sifflent; une surchauffe globale menace la centrale.",
    choix: [
      { texte: "Purge thermique et réduction temporaire de charge.",
        effet: { menace: -2, tyr: -1 }, tag: "Faveur majeure" },
      { texte: "Redondance manuelle des circuits critiques.",
        effet: { menace: -1, tyr: 0 }, tag: "Faveur mineure" },
      { texte: "Ignorer les alertes pour garder la pleine puissance.",
        effet: { menace: +2, tyr: +2 }, tag: "Défaveur majeure" },
      { texte: "Reporter la purge : coup de chaleur localisé.",
        effet: { menace: +1, tyr: 0 }, tag: "Défaveur mineure" },
    ]
  },

  // ===== TOUR 5 =====
  { tour: 5, phase: "Phase de Commandement", narration:
    "Le ciel se fissure d’un grondement titanesque : l’Alpha de la nuée approche. C’est l’heure du dernier pari.",
    choix: [
      { texte: "Concentrer tout sur l’Alpha : priorités absolues.",
        effet: { menace: -3, tyr: -2 }, tag: "Faveur majeure" },
      { texte: "Évacuation ciblée des blessés et rotation des lignes.",
        effet: { menace: -1, tyr: -1 }, tag: "Faveur mineure" },
      { texte: "Laisser l’Alpha pour ‘nettoyer’ les petits.",
        effet: { menace: +3, tyr: +2 }, tag: "Défaveur majeure" },
      { texte: "Diviser les forces par secteurs autonomes.",
        effet: { menace: +1, tyr: 0 }, tag: "Défaveur mineure" },
    ]
  },
  { tour: 5, phase: "Phase de Charge", narration:
    "L’Alpha brise la dune : une masse de crocs et d’os qui ruine tout ce qu’elle touche.",
    choix: [
      { texte: "Guider l’Alpha dans un couloir de tir pré-saturé.",
        effet: { menace: -2, tyr: -2 }, tag: "Faveur majeure" },
      { texte: "Empêtrer l’Alpha avec câbles et charges adhésives.",
        effet: { menace: -1, tyr: -1 }, tag: "Faveur mineure" },
      { texte: "Duel héroïque au corps à corps (téméraire).",
        effet: { menace: +2, tyr: +3 }, tag: "Défaveur majeure" },
      { texte: "Tirs dispersés par panique.",
        effet: { menace: +1, tyr: +1 }, tag: "Défaveur mineure" },
    ]
  },
  { tour: 5, phase: "Phase d’Ébranlement", narration:
    "Les alarmes hurlent toutes à la fois. La poussière, le sang et les spores forment un rideau opaque. C’est la dernière décision.",
    choix: [
      { texte: "Ralliement général, contre-poussée synchronisée.",
        effet: { menace: -3, tyr: -1 }, tag: "Faveur majeure" },
      { texte: "Verrouillage de la plateforme et tir de saturation final.",
        effet: { menace: -1, tyr: -1 }, tag: "Faveur mineure" },
      { texte: "Rompre le contact pour ‘sauver’ l’essentiel.",
        effet: { menace: +2, tyr: +2 }, tag: "Défaveur majeure" },
      { texte: "Silence radio, chacun pour soi.",
        effet: { menace: +1, tyr: 0 }, tag: "Défaveur mineure" },
    ]
  },
];

// --- État ---
let menace = 0;
let tyr = 0;
let phaseIndex = 0;

// --- Éléments DOM ---
const narrationEl   = document.getElementById("narration");
const phaseTitleEl  = document.getElementById("phaseTitle");
const choicesEl     = document.getElementById("choices");
const menaceValEl   = document.getElementById("menaceVal");
const menaceFillEl  = document.getElementById("menaceFill");
const tyrValEl      = document.getElementById("tyrVal");
const tyrFillEl     = document.getElementById("tyrFill");
const hudPhaseEl    = document.getElementById("hudPhase");
const lastTagEl     = document.getElementById("lastTag");
const modal         = document.getElementById("modal");
const modalTitle    = document.getElementById("modalTitle");
const modalText     = document.getElementById("modalText");
const modalMeta     = document.getElementById("modalMeta");
const modalOk       = document.getElementById("modalOk");
const nextBtn       = document.getElementById("nextBtn");
const skipBtn       = document.getElementById("skipBtn");
const restartBtn    = document.getElementById("restartBtn");
const logEl         = document.getElementById("log");
const badgeTourEl   = document.getElementById("badgeTour");
const badgePhaseEl  = document.getElementById("badgePhase");

// --- Utils ---
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function percentFrom(val, scale = 25) { // 25 => 25 pts ≈ 100%
  return clamp(Math.round((clamp(val, 0, scale) / scale) * 100), 0, 100);
}

// --- Initialisation ---
function init() {
  menace = 0;
  tyr = 0;
  phaseIndex = 0;
  logEl.innerHTML = "";
  lastTagEl.textContent = "—";
  updateHUD();
  afficherPhase();
}
init();

// --- Affichage d’une phase ---
function afficherPhase() {
  const p = phases[phaseIndex];
  if (!p) return finDePartie();

  // Texte & badges
  narrationEl.textContent = p.narration;
  phaseTitleEl.textContent = p.phase;
  badgeTourEl.textContent = `Tour ${p.tour}`;
  badgePhaseEl.textContent = p.phase;
  hudPhaseEl.textContent = `${phaseIndex + 1} / ${phases.length}`;

  // Choix mélangés
  const choixMelanges = [...p.choix].sort(() => Math.random() - 0.5);
  choicesEl.innerHTML = "";
  choixMelanges.forEach((c) => {
    const btn = document.createElement("div");
    btn.className = "choice";
    btn.innerHTML = `<div class="c-title">${c.texte}</div>`;
    btn.addEventListener("click", () => choisir(c));
    choicesEl.appendChild(btn);
  });

  nextBtn.disabled = true;
}

// --- Application d’un choix ---
function choisir(choix) {
  const p = phases[phaseIndex];

  // Appliquer effets
  menace += choix.effet.menace || 0;
  tyr    += choix.effet.tyr    || 0;
  updateHUD();

  // Journal
  const line = document.createElement("div");
  line.innerHTML = `Tour <b>${p.tour}</b> — <i>${p.phase}</i> : ${choix.texte} <span class="meta">(${choix.tag})</span>`;
  logEl.appendChild(line);
  logEl.scrollTop = logEl.scrollHeight;

  // Modal
  modalTitle.textContent = "Résolution";
  const eff = [];
  if (choix.effet.menace) eff.push(`Menace ${choix.effet.menace > 0 ? "+" : ""}${choix.effet.menace}`);
  if (choix.effet.tyr)    eff.push(`Arrivées Tyranides ${choix.effet.tyr > 0 ? "+" : ""}${choix.effet.tyr}`);
  modalText.textContent = eff.length ? `Effets appliqués : ${eff.join(" | ")}` : "Aucun effet notable.";
  modalMeta.textContent = `Tag : ${choix.tag} — Totaux → Menace ${menace} | Arrivées ${tyr}`;
  lastTagEl.textContent = choix.tag;
  showModal(true);

  nextBtn.disabled = false;
}

// --- HUD ---
function updateHUD() {
  menaceValEl.textContent = menace;
  tyrValEl.textContent = tyr;
  menaceFillEl.style.width = percentFrom(menace, 25) + "%";
  tyrFillEl.style.width    = percentFrom(tyr, 25) + "%";
}

// --- Navigation / Modale ---
function showModal(state) {
  modal.classList.toggle("show", !!state);
}
modalOk.addEventListener("click", () => showModal(false));
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && modal.classList.contains("show")) showModal(false);
});

nextBtn.addEventListener("click", () => {
  if (phaseIndex < phases.length - 1) {
    phaseIndex++;
    afficherPhase();
  } else {
    finDePartie();
  }
});

skipBtn.addEventListener("click", () => {
  // Remélange sans changer la phase
  afficherPhase();
});

restartBtn.addEventListener("click", init);

// --- Fin de partie ---
function finDePartie() {
  narrationEl.textContent =
    "La bataille s’achève. Le sable retombe en pluie terne sur le promontoire.";
  phaseTitleEl.textContent = "Fin de la bataille";
  badgePhaseEl.textContent = "Fin";
  choicesEl.innerHTML = "";

  const verdict =
    menace <= 0 && tyr <= 0
      ? "Victoire éclatante — La plateforme demeure imprenable."
      : menace <= 5 && tyr <= 5
      ? "Victoire — L’ennemi recule en lambeaux."
      : menace <= 10 && tyr <= 10
      ? "Match nul sanglant — La plateforme tient, mais à quel prix."
      : "Défaite — L’essaim submerge le promontoire.";

  const resume = `Bilan final → Menace ${menace} | Arrivées Tyranides ${tyr}.`;
  logEl.innerHTML += `<div><b>Fin :</b> ${verdict} <span class="meta">(${resume})</span></div>`;

  // Afficher un dernier panneau récapitulatif
  modalTitle.textContent = "Bilan de Campagne";
  modalText.textContent = verdict;
  modalMeta.textContent = resume;
  showModal(true);

  nextBtn.disabled = true;
}
