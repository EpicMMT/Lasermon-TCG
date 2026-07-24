const database = [
  {
    id: "valen",
    category: "character",
    name: "Valen",
    element: "Normale",
    typeColor: "var(--type-normale)", // Richiama il CSS
    cost: 0,
    img: "../img/Characters/Valen/valen1.png", // Immagine usata nell'editor/copertina
    imgPhase1: "../img/Characters/Valen/valen1.png",
    imgPhase2: "../img/Characters/Valen/valen2.png",
    moves: [
      { cost: 3, effect: "[BADGE NON ABILITATO] Blinda l'ingresso: l'avversario subisce 'Tornello Bloccato' e non può fare Switch nel turno successivo." }
    ]
  },
  {
    id: "nyssa",
    category: "character",
    name: "Nyssa",
    element: "Fuoco",
    typeColor: "var(--type-fuoco)",
    cost: 1,
    img: "../img/Characters/Nyssa/nyssa1.png",
    imgPhase1: "../img/Characters/Nyssa/nyssa1.png",
    imgPhase2: "../img/Characters/Nyssa/nyssa2.png",
    moves: [
      { cost: 3, effect: "[CONSEGNA IN ANTICIPO] Danno base. Se nemico è Erba/Ghiaccio: +3 danni extra e blocca le carte Strumento nemiche." }
    ]
  },
  {
    id: "cassian",
    category: "character",
    name: "Cassian",
    element: "Acqua",
    typeColor: "var(--type-acqua)",
    cost: 1,
    img: "../img/Characters/Cassian/cassian1.png",
    imgPhase1: "../img/Characters/Cassian/cassian1.png",
    imgPhase2: "../img/Characters/Cassian/cassian2.png",
    moves: [
      { cost: 3, effect: "[VERBALE DI NON CONFORMITÀ] -2 a tutti i danni subiti. Se attaccato da Fuoco, riflette 2 danni e azzera barriere." }
    ]
  },
  {
    id: "kiora",
    category: "character",
    name: "Kiora",
    element: "Erba",
    typeColor: "var(--type-erba)",
    cost: 1,
    img: "../img/Characters/Kiora/kiora1.png",
    imgPhase1: "../img/Characters/Kiora/kiora1.png",
    imgPhase2: "../img/Characters/Kiora/kiora2.png",
    moves: [
      { cost: 3, effect: "[PAVIMENTO APPENA LAVATO] Cancella i buff ATK del nemico. Se Terra/Acqua, gli vieta di attaccare il turno successivo." }
    ]
  },
  {
    id: "zareen",
    category: "character",
    name: "Zareen",
    element: "Elettro",
    typeColor: "#f1c40f", // Giallo Elettro
    cost: 1,
    img: "../img/Characters/Zareen/zareen1.png",
    imgPhase1: "../img/Characters/Zareen/zareen1.png",
    imgPhase2: "../img/Characters/Zareen/zareen2.png",
    moves: [
      { cost: 3, effect: "[SPAM NOTIFICHE] Ignora abilità Tank Acqua/Volante. Blocca accumulo Gettoni del bersaglio nel turno successivo." }
    ]
  },
  {
    id: "elys",
    category: "character",
    name: "Elys",
    element: "Ghiaccio",
    typeColor: "#00d2d3", // Ciano Ghiaccio
    cost: 1,
    img: "../img/Characters/Elys/elys1.png",
    imgPhase1: "../img/Characters/Elys/elys1.png",
    imgPhase2: "../img/Characters/Elys/elys2.png",
    moves: [
      { cost: 3, effect: "[TERMOSTATO SOTTO ZERO] -2 Danni Speciali subiti. Impedisce lo Switch ai nemici di tipo Terra, Erba o Volante." }
    ]
  },
  {
    id: "lucien",
    category: "character",
    name: "Lucien",
    element: "Lotta",
    typeColor: "#c0392b", // Rosso Scuro Lotta
    cost: 0,
    img: "../img/Characters/Lucien/lucien1.png",
    imgPhase1: "../img/Characters/Lucien/lucien1.png",
    imgPhase2: "../img/Characters/Lucien/lucien2.png",
    moves: [
      { cost: 3, effect: "[SPEDIZIONE EXPRESS] Contro Terra/Ghiaccio: +2 danni e scarta 1 carta a caso dalla mano avversaria." }
    ]
  },
  {
    id: "vesper",
    category: "character",
    name: "Vesper",
    element: "Veleno",
    typeColor: "#8e44ad", // Viola Veleno
    cost: 1,
    img: "../img/Characters/Vesper/vesper1.png", // Come da tuo esempio
    imgPhase1: "../img/Characters/Vesper/vesper1.png",
    imgPhase2: "../img/Characters/Vesper/vesper2.png",
    moves: [
      { cost: 3, effect: "[REVISIONE PERFORMANCE] Bersaglio perde -2 HP a turno. Se va KO così, scarta il primo Manager Aiuto in mano." }
    ]
  },
  {
    id: "ryden",
    category: "character",
    name: "Ryden",
    element: "Terra",
    typeColor: "#d35400", // Arancione Terra
    cost: 1,
    img: "../img/Characters/Ryden/ryden1.png",
    imgPhase1: "../img/Characters/Ryden/ryden1.png",
    imgPhase2: "../img/Characters/Ryden/ryden2.png",
    moves: [
      { cost: 3, effect: "[BLOCCO ACCESSI] Contro Elettro/Veleno: +3 danni. Costringe l'avversario a fare uno Switch forzato in Panchina." }
    ]
  },
  {
    id: "van",
    category: "character",
    name: "Van",
    element: "Vento",
    typeColor: "#bdc3c7", // Grigio Vento
    cost: 0,
    img: "../img/Characters/Van/van1.png",
    imgPhase1: "../img/Characters/Van/van1.png",
    imgPhase2: "../img/Characters/Van/van2.png",
    moves: [
      { cost: 3, effect: "[SPARECCHIATURA] Se colpisce, puoi fare uno Switch Tattico gratuito (0 Gettoni) per tornare in panchina." }
    ]
  },
  {
    id: "mireya",
    category: "character",
    name: "Mireya",
    element: "Psico",
    typeColor: "#fd79a8", // Rosa Psico
    cost: 1,
    img: "../img/Characters/Mireya/mireya1.png",
    imgPhase1: "../img/Characters/Mireya/mireya1.png",
    imgPhase2: "../img/Characters/Mireya/mireya2.png",
    moves: [
      { cost: 3, effect: "[RISPOSTA IN LOOP] Manda in loop il nemico colpito: non può usare attacchi di categoria FISICO nel suo turno." }
    ]
  },
  {
    id: "darius",
    category: "character",
    name: "Darius",
    element: "Drago",
    typeColor: "#2980b9", // Blu Drago
    cost: 1,
    img: "../img/Characters/Darius/darius1.png",
    imgPhase1: "../img/Characters/Darius/darius1.png",
    imgPhase2: "../img/Characters/Darius/darius2.png",
    moves: [
      { cost: 3, effect: "[MONOPOLIO SOCIETARIO] +3 danni base. Se l'attacco manda KO, il nemico perde 1 Gettone Evocazione al prossimo turno." }
    ]
  },
  {
    id: "rivena",
    category: "character",
    name: "Rivena",
    element: "Folletto",
    typeColor: "#ff9ff3", // Rosa Chiaro Folletto
    cost: 1,
    img: "../img/Characters/Rivena/rivena1.png",
    imgPhase1: "../img/Characters/Rivena/rivena1.png",
    imgPhase2: "../img/Characters/Rivena/rivena2.png",
    moves: [
      { cost: 3, effect: "[CATERING BENVENUTO] Finché attiva, il nemico non può usare abilità supreme di carte Lotta, Drago o Buio." }
    ]
  },
  {
    id: "icer",
    category: "character",
    name: "Icer",
    element: "Ghiaccio",
    typeColor: "#00d2d3",
    cost: 0,
    img: "../img/Characters/Icer/icer1.png",
    imgPhase1: "../img/Characters/Icer/icer1.png",
    imgPhase2: "../img/Characters/Icer/icer2.png",
    moves: [
      { cost: 3, effect: "[RESTO NON DISPONIBILE] Congela la cassa nemica: usare carte Manager Strumento costa +1 Gettone extra." }
    ]
  },
  {
    id: "evren",
    category: "character",
    name: "Evren",
    element: "Acqua",
    typeColor: "var(--type-acqua)",
    cost: 0,
    img: "../img/Characters/Evren/evren1.png",
    imgPhase1: "../img/Characters/Evren/evren1.png",
    imgPhase2: "../img/Characters/Evren/evren2.png",
    moves: [
      { cost: 3, effect: "[RESPIRAZIONE] Quando entra, cura di +3 HP un alleato in panchina e gli pulisce i malus se è a Costo 0." }
    ]
  },
  {
    id: "maelis",
    category: "character",
    name: "Maelis",
    element: "Drago",
    typeColor: "#2980b9",
    cost: 1,
    img: "../img/Characters/Maelis/maelis1.png",
    imgPhase1: "../img/Characters/Maelis/maelis1.png",
    imgPhase2: "../img/Characters/Maelis/maelis2.png",
    moves: [
      { cost: 3, effect: "[FUSIONE E ACQUISIZIONE] Sottrae 1 Gettone Abilità al nemico e lo trasferisce a un tuo dipendente in Panchina." }
    ]
  }
];

// Se stai usando i moduli, mantieni l'export. Altrimenti basta la const "database" dichiarata sopra per farla leggere agli altri script.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = database;
}