// ============================
//  Warhammer 40k — Le Promontoire
//  JS COMPLET (5 tours, 15 phases) avec fluff détaillé
// ============================

// Effets numériques approximatifs selon le tag
const effMap = {
  "Faveur majeure": { menace: -2, tyr: -2 },
  "Faveur mineure": { menace: -1, tyr: -1 },
  "Défaveur mineure": { menace: +1, tyr: +1 },
  "Défaveur majeure": { menace: +2, tyr: +2 },
};

// --- Données de scénario (5 tours × 3 phases) ---
const phases = [
  // ===== TOUR 1 =====
  {
    tour: 1,
    phase: "Phase de Commandement",
    narration: `Les capteurs du promontoire s’affolent. Dans le ciel ardent, des spores mycétiques percent la lumière comme une pluie empoisonnée. Le vent du désert soulève des nuages de sable, brouillant les capteurs et la vue. Les défenseurs doivent choisir leur première manœuvre stratégique.`,
    choix: [
      {
        texte: "Rediriger toute l’énergie vers les batteries anti-aériennes",
        fluff: `Les canons fendent le ciel, abattant une pluie de spores enflammées.`,
        bonus: `-D3 unités Tyranides ce tour, mais toutes les unités ennemies gagnent +1 pour blesser à distance contre vos unités (boucliers hors ligne).`,
        tag: "Faveur majeure",
        effet: { ...effMap["Faveur majeure"] },
      },
      {
        texte: "Renforcer les murs de pierre avec des champs magnétiques",
        fluff: `Le promontoire tremble sous une barrière invisible qui crépite dans l’air sec.`,
        bonus: `+1 sauvegarde aux bâtiments et véhicules alliés ce tour, mais -1 Attaque avec vos armes lourdes.`,
        tag: "Faveur mineure",
        effet: { ...effMap["Faveur mineure"] },
      },
      {
        texte: "Envoyer des éclaireurs à travers les dunes pour intercepter les nœuds synaptiques",
        fluff: `Une patrouille disparaît dans la tempête, revenant mutilée.`,
        bonus: `Retirez 1 unité d’Infanterie alliée, mais réduisez d’équivalent en points l’arrivée Tyranide au prochain tour.`,
        tag: "Défaveur mineure",
        effet: { ...effMap["Défaveur mineure"] },
      },
      {
        texte: "Ignorer l’approche",
        fluff: `Les réserves sont intactes, mais l’ennemi avance librement.`,
        bonus: `+2 unités Tyranides immédiatement, mais vos tirs relancent les 1 pour toucher ce tour.`,
        tag: "Défaveur majeure",
        effet: { ...effMap["Défaveur majeure"] },
      },
    ],
  },
  {
    tour: 1,
    phase: "Phase de Charge",
    narration: `Des silhouettes massives se détachent des tourbillons. Carnifex et Hormagaunts gravissent les pentes rocailleuses du promontoire.`,
    choix: [
      {
        texte: "Concentrer toutes les armes lourdes sur une unité",
        fluff: `Un mur de feu écrase une cible.`,
        bonus: `Détruisez 1 unité Tyranide à 12" ou retirez 12 PV à un monstre à 12".`,
        tag: "Faveur majeure",
        effet: { ...effMap["Faveur majeure"] },
      },
      {
        texte: "Déployer les défenses avancées",
        fluff: `Des tourelles jaillissent des dunes.`,
        bonus: `+1 pour toutes les Attaques d’Overwatch ce tour.`,
        tag: "Faveur mineure",
        effet: { ...effMap["Faveur mineure"] },
      },
      {
        texte: "Piéger l’accès principal avec des mines",
        fluff: `Les premiers assaillants explosent dans un nuage de chitine.`,
        bonus: `1D3 BM à chaque unité Tyranide qui charge, mais ces zones deviennent Terrain difficile pour vos unités aussi.`,
        tag: "Défaveur mineure",
        effet: { ...effMap["Défaveur mineure"] },
      },
      {
        texte: "Se recentrer sur le cœur défensif",
        fluff: `Les lignes se resserrent, mais l’ennemi progresse.`,
        bonus: `D3 dégâts à toutes les unités ciblées par des charges réussies.`,
        tag: "Défaveur majeure",
        effet: { ...effMap["Défaveur majeure"] },
      },
    ],
  },
  {
    tour: 1,
    phase: "Phase d’Ébranlement",
    narration: `Les ondes psychiques des Tyranides traversent les esprits comme un souffle brûlant.`,
    choix: [
      {
        texte: "Rallier les troupes par un discours galvanisant",
        fluff: `La voix du commandant perce la tempête.`,
        bonus: `Avance gratuite de 6" à toutes les unités alliées à 18" d’un général.`,
        tag: "Faveur majeure",
        effet: { ...effMap["Faveur majeure"] },
      },
      {
        texte: "Promettre renforts et extraction",
        fluff: `Un souffle d’espoir parcourt les lignes.`,
        bonus: `D3 PV rendus aux unités alliées à 18" d’un général.`,
        tag: "Faveur mineure",
        effet: { ...effMap["Faveur mineure"] },
      },
      {
        texte: "Punir les lâches publiquement",
        fluff: `L’ordre est rétabli par le sang.`,
        bonus: `D3 dégâts sur les unités alliées à 9" d’un général.`,
        tag: "Défaveur mineure",
        effet: { ...effMap["Défaveur mineure"] },
      },
      {
        texte: "Ignorer la panique",
        fluff: `Les nerfs craquent.`,
        bonus: `Échec automatique des tests d’ébranlement pour toutes les unités à 12" d’un général.`,
        tag: "Défaveur majeure",
        effet: { ...effMap["Défaveur majeure"] },
      },
    ],
  },

  // ===== TOUR 2 =====
  {
    tour: 2,
    phase: "Phase de Commandement",
    narration: `Les spores qui ont survécu à l’assaut initial se fendent et libèrent des nuées voraces qui escaladent les pentes rocheuses. Les alarmes du promontoire saturent les canaux.`,
    choix: [
      {
        texte: "Inonder les ravines d’accès avec du prométhéum",
        fluff: `Les canyons s’embrasent.`,
        bonus: `2D3 BM à toutes les unités Tyranides arrivant en renfort ce tour.`,
        tag: "Faveur majeure",
        effet: { ...effMap["Faveur majeure"] },
      },
      {
        texte: "Activer les projecteurs longue portée",
        fluff: `Les cibles se détachent nettement dans la poussière.`,
        bonus: `Les armes alliées ignorent les malus de Couvert ce tour.`,
        tag: "Faveur mineure",
        effet: { ...effMap["Faveur mineure"] },
      },
      {
        texte: "Récupérer des munitions dans les soutes extérieures",
        fluff: `Opération risquée.`,
        bonus: `+1 unité Tyranide ce tour, mais +1 Attaque pour toutes les armes à distance alliées.`,
        tag: "Défaveur mineure",
        effet: { ...effMap["Défaveur mineure"] },
      },
      {
        texte: "Percée vers l’ancien puits minier",
        fluff: `Offensive téméraire.`,
        bonus: `Perdez 1 véhicule allié, mais réduisez de 200 pts l’arrivée Tyranide au prochain tour.`,
        tag: "Défaveur majeure",
        effet: { ...effMap["Défaveur majeure"] },
      },
    ],
  },
  {
    tour: 2,
    phase: "Phase de Charge",
    narration: `Les dunes tremblent sous les pas de monstres, escortés d’essaims rapides.`,
    choix: [
      {
        texte: "Déployer des tourelles automatiques",
        fluff: `Le sable se hérisse de canons.`,
        bonus: `+1 tir pour toutes les armes stationnaires alliées ce tour.`,
        tag: "Faveur mineure",
        effet: { ...effMap["Faveur mineure"] },
      },
      {
        texte: "Concentrer tous les tirs sur le plus gros monstre",
        fluff: `Feu à volonté.`,
        bonus: `Infligez 2D6 PV à une seule créature monstrueuse.`,
        tag: "Faveur majeure",
        effet: { ...effMap["Faveur majeure"] },
      },
      {
        texte: "Utiliser les réacteurs d’appoint",
        fluff: `Avancer en tirant.`,
        bonus: `Avance et Tir sans malus ce tour, mais -1 à la sauvegarde jusqu’à la fin du tour.`,
        tag: "Défaveur mineure",
        effet: { ...effMap["Défaveur mineure"] },
      },
      {
        texte: "Se replier derrière les défenses internes",
        fluff: `Abandon des lignes extérieures.`,
        bonus: `Retirez D3 unités alliées, mais les Tyranides perdent leur Charge ce tour.`,
        tag: "Défaveur majeure",
        effet: { ...effMap["Défaveur majeure"] },
      },
    ],
  },
  {
    tour: 2,
    phase: "Phase d’Ébranlement",
    narration: `Les ondes synaptiques saturent l’air chaud.`,
    choix: [
      {
        texte: "Ordres cris de sang-froid",
        fluff: `Discipline de fer.`,
        bonus: `Relance gratuite des sauvegardes ratées à 6" d’un général ce tour.`,
        tag: "Faveur mineure",
        effet: { ...effMap["Faveur mineure"] },
      },
      {
        texte: "Encouragement par les actes",
        fluff: `Charge héroïque.`,
        bonus: `Doublez les Attaques d’une unité alliée ce tour.`,
        tag: "Faveur majeure",
        effet: { ...effMap["Faveur majeure"] },
      },
      {
        texte: "Confier l’onde aux psykers",
        fluff: `Barrière mentale.`,
        bonus: `D3 BM à chaque Psyker allié, mais annulez une capacité psychique Tyranide ce tour.`,
        tag: "Défaveur mineure",
        effet: { ...effMap["Défaveur mineure"] },
      },
      {
        texte: "Tenir coûte que coûte",
        fluff: `Sacrifice assumé.`,
        bonus: `Retirez 1 unité alliée à 6" d’un général, mais +2 aux tests de moral ce tour.`,
        tag: "Défaveur majeure",
        effet: { ...effMap["Défaveur majeure"] },
      },
    ],
  },

  // ===== TOUR 3 =====
  {
    tour: 3,
    phase: "Phase de Commandement",
    narration: `Le sol sec craque. Plusieurs menaces titanesques approchent en même temps.`,
    choix: [
      {
        texte: "Tir orbital coordonné",
        fluff: `Les rochers explosent sous la frappe.`,
        bonus: `Infligez 3D6 PV à une unité monstrueuse ou retirez une unité ≤ 200 pts.`,
        tag: "Faveur majeure",
        effet: { ...effMap["Faveur majeure"] },
      },
      {
        texte: "Renforcer les générateurs de champ déflecteur",
        fluff: `L’air crépite autour des défenseurs.`,
        bonus: `+1 à toutes les invulnérables alliées ce tour.`,
        tag: "Faveur mineure",
        effet: { ...effMap["Faveur mineure"] },
      },
      {
        texte: "Raid derrière les lignes ennemies",
        fluff: `Contre-attaque dans le désert.`,
        bonus: `Retirez 1 unité rapide ou véhicule, mais les renforts ennemis du prochain tour perdent 1D3 unités.`,
        tag: "Défaveur mineure",
        effet: { ...effMap["Défaveur mineure"] },
      },
      {
        texte: "Réorganiser autour du noyau énergétique",
        fluff: `Défense du centre.`,
        bonus: `+2 unités Tyranides immédiatement, mais les alliés à 6" du noyau ignorent les BM ce tour.`,
        tag: "Défaveur majeure",
        effet: { ...effMap["Défaveur majeure"] },
      },
    ],
  },
  {
    tour: 3,
    phase: "Phase de Charge",
    narration: `Les Tyranides forcent les accès, les petits essaims infiltrent les crevasses.`,
    choix: [
      {
        texte: "Verrouiller portes et accès",
        fluff: `Barrières activées.`,
        bonus: `-2" au Mouvement de Charge ennemi ce tour.`,
        tag: "Faveur mineure",
        effet: { ...effMap["Faveur mineure"] },
      },
      {
        texte: "Rideau d’artillerie sur un flanc",
        fluff: `Déluge explosif.`,
        bonus: `2D3 BM à chaque unité ennemie dans un quart de table choisi.`,
        tag: "Faveur majeure",
        effet: { ...effMap["Faveur majeure"] },
      },
      {
        texte: "Contre-attaque prématurée",
        fluff: `Offensive risquée.`,
        bonus: `Charge après Avance, mais -1 pour toucher au CàC.`,
        tag: "Défaveur mineure",
        effet: { ...effMap["Défaveur mineure"] },
      },
      {
        texte: "Faire exploser des dépôts de munitions",
        fluff: `Dévastation totale.`,
        bonus: `D6 BM à toutes les unités dans 6", retirez 1 artillerie alliée.`,
        tag: "Défaveur majeure",
        effet: { ...effMap["Défaveur majeure"] },
      },
    ],
  },
  {
    tour: 3,
    phase: "Phase d’Ébranlement",
    narration: `Les visions psychiques deviennent insupportables.`,
    choix: [
      {
        texte: "Signal psychique brouilleur",
        fluff: `Silence dans l’esprit.`,
        bonus: `Annulez une Synapse ennemie et forcez D3 unités Tyranides à tester le moral.`,
        tag: "Faveur majeure",
        effet: { ...effMap["Faveur majeure"] },
      },
      {
        texte: "Soins concentrés",
        fluff: `Médecins de campagne.`,
        bonus: `Restaurez D3+1 PV à 3 unités alliées.`,
        tag: "Faveur mineure",
        effet: { ...effMap["Faveur mineure"] },
      },
      {
        texte: "Renvoyer les convalescents au front",
        fluff: `Dernier recours.`,
        bonus: `Replacez une unité détruite à moitié effectif, mais -1 à sa sauvegarde.`,
        tag: "Défaveur mineure",
        effet: { ...effMap["Défaveur mineure"] },
      },
      {
        texte: "Tenir par la menace directe",
        fluff: `Autorité brutale.`,
        bonus: `Retirez D3 figurines dans chaque unité à 6" d’un officier, mais immunité à l’ébranlement ce tour.`,
        tag: "Défaveur majeure",
        effet: { ...effMap["Défaveur majeure"] },
      },
    ],
  },

  // ===== TOUR 4 =====
  {
    tour: 4,
    phase: "Phase de Commandement",
    narration: `Les Tyranides franchissent les pentes et se déversent sur le plateau du promontoire.`,
    choix: [
      {
        texte: "Inonder les couloirs de gaz incendiaire",
        fluff: `Les boyaux rocheux brûlent.`,
        bonus: `Infligez 2D6 BM réparties sur les unités ennemies à l’intérieur.`,
        tag: "Faveur majeure",
        effet: { ...effMap["Faveur majeure"] },
      },
      {
        texte: "Sceller les compartiments menacés",
        fluff: `Portes verrouillées.`,
        bonus: `-2" au Mouvement des unités ennemies à l’intérieur.`,
        tag: "Faveur mineure",
        effet: { ...effMap["Faveur mineure"] },
      },
      {
        texte: "Contre-offensive blindée dans les couloirs",
        fluff: `Charges meurtrières.`,
        bonus: `1D3 BM à 3 unités ennemies au centre, mais détruisez 1 véhicule allié.`,
        tag: "Défaveur mineure",
        effet: { ...effMap["Défaveur mineure"] },
      },
      {
        texte: "Détourner l’énergie vers les boucliers internes",
        fluff: `Dernière ligne.`,
        bonus: `+3 unités Tyranides à l’extérieur, mais +1 sauvegarde aux alliés à l’intérieur.`,
        tag: "Défaveur majeure",
        effet: { ...effMap["Défaveur majeure"] },
      },
    ],
  },
  {
    tour: 4,
    phase: "Phase de Charge",
    narration: `Les essaims convergent par tous les accès vers le sommet.`,
    choix: [
      {
        texte: "Déployer des sentinelles de combat",
        fluff: `Robots en première ligne.`,
        bonus: `Alliés à 6" d’un point d’accès ont +1 pour toucher au tir ce tour.`,
        tag: "Faveur mineure",
        effet: { ...effMap["Faveur mineure"] },
      },
      {
        texte: "Artillerie intérieure sur point critique",
        fluff: `Cible neutralisée.`,
        bonus: `Retirez une unité ≤ 200 pts à l’intérieur.`,
        tag: "Faveur majeure",
        effet: { ...effMap["Faveur majeure"] },
      },
      {
        texte: "Faire exploser un réacteur auxiliaire",
        fluff: `Souffle de feu.`,
        bonus: `2D3 BM à toutes les unités dans 6" de l’accès ciblé.`,
        tag: "Défaveur mineure",
        effet: { ...effMap["Défaveur mineure"] },
      },
      {
        texte: "Tenir coûte que coûte",
        fluff: `Corps-à-corps furieux.`,
        bonus: `Relance pour toucher au CàC, mais D3 pertes automatiques après combats.`,
        tag: "Défaveur majeure",
        effet: { ...effMap["Défaveur majeure"] },
      },
    ],
  },
  {
    tour: 4,
    phase: "Phase d’Ébranlement",
    narration: `Les communications sont saturées, la roche tremble.`,
    choix: [
      {
        texte: "Message de ralliement général",
        fluff: `Ordre global.`,
        bonus: `Toutes les unités alliées effectuent un mouvement normal de 6".`,
        tag: "Faveur majeure",
        effet: { ...effMap["Faveur majeure"] },
      },
      {
        texte: "Redéploiement vers zones critiques",
        fluff: `Déplacement tactique.`,
        bonus: `Déplacez une unité alliée de 12" sans Overwatch ennemi.`,
        tag: "Faveur mineure",
        effet: { ...effMap["Faveur mineure"] },
      },
      {
        texte: "Sacrifice pour gagner du temps",
        fluff: `Un dernier rempart.`,
        bonus: `Retirez une unité alliée à l’intérieur ; aucun mouvement ennemi dans cette zone ce tour.`,
        tag: "Défaveur mineure",
        effet: { ...effMap["Défaveur mineure"] },
      },
      {
        texte: "Ignorer l’évacuation médicale",
        fluff: `Tout pour le combat.`,
        bonus: `Retirez D6 figurines des unités blessées, mais +1 Attaque pour toutes les autres.`,
        tag: "Défaveur majeure",
        effet: { ...effMap["Défaveur majeure"] },
      },
    ],
  },

  // ===== TOUR 5 =====
  {
    tour: 5,
    phase: "Phase de Commandement",
    narration: `Les boucliers vacillent. Les renforts n’arriveront pas. C’est le moment de décider.`,
    choix: [
      {
        texte: "Déclencher l’arsenal de sécurité final",
        fluff: `Dernière frappe.`,
        bonus: `Infligez 4D6 BM réparties sur les Tyranides.`,
        tag: "Faveur majeure",
        effet: { ...effMap["Faveur majeure"] },
      },
      {
        texte: "Activer le protocole de confinement total",
        fluff: `Fermeture complète.`,
        bonus: `Retirez D3 unités alliées à l’extérieur, mais aucun ennemi n’entre ce tour.`,
        tag: "Faveur mineure",
        effet: { ...effMap["Faveur mineure"] },
      },
      {
        texte: "Tout pour les armes lourdes",
        fluff: `Feu massif.`,
        bonus: `+1 pour blesser à distance pour les alliés, mais -1 à leur sauvegarde.`,
        tag: "Défaveur mineure",
        effet: { ...effMap["Défaveur mineure"] },
      },
      {
        texte: "Rediriger vers les systèmes de survie",
        fluff: `Évacuation prioritaire.`,
        bonus: `Aucun tir allié ce tour, mais évacuez 200 pts d’unités alliées.`,
        tag: "Défaveur majeure",
        effet: { ...effMap["Défaveur majeure"] },
      },
    ],
  },
  {
    tour: 5,
    phase: "Phase de Charge",
    narration: `Les monstres sont partout. Frapper ou tout détruire.`,
    choix: [
      {
        texte: "Autodestruction de sections",
        fluff: `Tout s’effondre.`,
        bonus: `Choisissez deux zones et retirez toutes les unités qui s’y trouvent.`,
        tag: "Faveur majeure",
        effet: { ...effMap["Faveur majeure"] },
      },
      {
        texte: "Charge désespérée vers la sortie",
        fluff: `Percée finale.`,
        bonus: `Déplacez 3 unités alliées de 12" et engagez le CàC si possible.`,
        tag: "Faveur mineure",
        effet: { ...effMap["Faveur mineure"] },
      },
      {
        texte: "Faire sauter les conduits de carburant",
        fluff: `Explosion cataclysmique.`,
        bonus: `2D6 BM à toutes les unités dans un rayon de 9" du centre.`,
        tag: "Défaveur mineure",
        effet: { ...effMap["Défaveur mineure"] },
      },
      {
        texte: "Tout concentrer sur le plus grand monstre",
        fluff: `Duel final.`,
        bonus: `Infligez D6+3 PV à un monstre, mais +3 unités ennemies arrivent ce tour.`,
        tag: "Défaveur majeure",
        effet: { ...effMap["Défaveur majeure"] },
      },
    ],
  },
  {
    tour: 5,
    phase: "Phase d’Ébranlement",
    narration: `Dernières forces, derniers choix.`,
    choix: [
      {
        texte: "Sacrifice héroïque du commandement",
        fluff: `Geste ultime.`,
        bonus: `Retirez le général allié ; toutes les unités alliées font un mouvement gratuit de 9".`,
        tag: "Faveur majeure",
        effet: { ...effMap["Faveur majeure"] },
      },
      {
        texte: "Concentration sur la survie",
        fluff: `Défense totale.`,
        bonus: `+1 sauvegarde et +1 PV temporaire à toutes les unités alliées jusqu’à la fin.`,
        tag: "Faveur mineure",
        effet: { ...effMap["Faveur mineure"] },
      },
      {
        texte: "Abréger les souffrances",
        fluff: `Retraite accélérée.`,
        bonus: `Retirez D3 figurines blessées par unité ; +3" au Mouvement allié.`,
        tag: "Défaveur mineure",
        effet: { ...effMap["Défaveur mineure"] },
      },
      {
        texte: "Refus absolu de reculer",
        fluff: `Ténacité inhumaine.`,
        bonus: `Immunité au moral pour le reste, mais D3 BM à chaque fin de phase sur vos unités.`,
        tag: "Défaveur majeure",
        effet: { ...effMap["Défaveur majeure"] },
      },
    ],
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
function percentFrom(val, scale = 25) {
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

  narrationEl.textContent = p.narration;
  phaseTitleEl.textContent = p.phase;
  badgeTourEl.textContent = `Tour ${p.tour}`;
  badgePhaseEl.textContent = p.phase;
  hudPhaseEl.textContent = `${phaseIndex + 1} / ${phases.length}`;

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

  menace += choix.effet.menace || 0;
  tyr    += choix.effet.tyr    || 0;
  updateHUD();
  const eff = [];
  if (choix.effet.menace) eff.push(`Menace ${choix.effet.menace > 0 ? "+" : ""}${choix.effet.menace}`);
  if (choix.effet.tyr)    eff.push(`Arrivées Tyranides ${choix.effet.tyr > 0 ? "+" : ""}${choix.effet.tyr}`);
  const effStr = eff.length ? `Effets : ${eff.join(" | ")}` : "";

  const line = document.createElement("div");
  line.innerHTML = `Tour <b>${p.tour}</b> — <i>${p.phase}</i> : ${choix.texte}<div class="meta">${choix.fluff}</div><div class="meta"><em>${choix.bonus}</em></div>${effStr ? `<div class="meta">${effStr}</div>` : ""}`;
  logEl.appendChild(line);
  logEl.scrollTop = logEl.scrollHeight;

  modalTitle.textContent = choix.texte;
  modalText.innerHTML = `<p id="fluff" class="wow">${choix.fluff}</p><p id="bonus" class="wow hidden"><em>${choix.bonus}</em></p>`;
  modalMeta.textContent = "";
  lastTagEl.textContent = eff.length ? eff.join(" | ") : "—";
  showModal(true);
  setTimeout(() => document.getElementById("bonus").classList.remove("hidden"), 4000);

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

  modalTitle.textContent = "Bilan de Campagne";
  modalText.textContent = verdict;
  modalMeta.textContent = resume;
  showModal(true);

  nextBtn.disabled = true;
}
