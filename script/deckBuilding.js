// === STATO DEL DECKBUILDING ===
let decks = []; // Max 3 array (ogni array ha 30 elementi null o l'id della carta)
let currentDeckIndex = -1;
let selectedSlotType = '';
let selectedSlotIndex = -1;

// Struttura fissa del deck vuoto (30 slot totali)
const DECK_STRUCTURE = {
    'character': 6,
    'evolution': 2,
    'trainer_hs': 10,
    'trainer_item': 12
};

// === LOGICA DECK LIST ===
function renderDeckList() {
    const container = document.getElementById('deck-list-container');
    container.innerHTML = '';

    decks.forEach((deck, index) => {
        const deckDiv = document.createElement('div');
        deckDiv.className = 'deck-slot created';
        // Imposta la copertina scelta
        deckDiv.style.backgroundImage = `url('${deck.coverImage}')`;
        deckDiv.style.backgroundSize = 'cover';
        deckDiv.style.backgroundPosition = 'center';
        deckDiv.style.display = 'flex';
        deckDiv.style.alignItems = 'flex-end'; // Allinea il nome in basso
        
        // Inserisce il nome del mazzo
        deckDiv.innerHTML = `<div class="deck-name-label">${deck.name}</div>`;
        deckDiv.onclick = () => openDeckEditor(index);
        container.appendChild(deckDiv);
    });

    if (decks.length < 3) {
        const addDiv = document.createElement('div');
        addDiv.className = 'deck-slot';
        addDiv.innerHTML = '+';
        addDiv.onclick = createNewDeck;
        container.appendChild(addDiv);
    }
}

function createNewDeck() {
    const newDeck = {
        name: `Mazzo ${decks.length + 1}`, // Nome di default
        coverImage: "https://via.placeholder.com/200x300/333333/FFFFFF?text=Cover", // Immagine base
        'character': Array(DECK_STRUCTURE.character).fill(null),
        'evolution': Array(DECK_STRUCTURE.evolution).fill(null),
        'trainer_hs': Array(DECK_STRUCTURE.trainer_hs).fill(null),
        'trainer_item': Array(DECK_STRUCTURE.trainer_item).fill(null)
    };
    decks.push(newDeck);
    renderDeckList();
}

function openDeckEditor(index) {
    currentDeckIndex = index;
    
    // Inserisce il nome attuale nel campo input
    const nameInput = document.getElementById('deck-name-input');
    if (nameInput) {
        nameInput.value = decks[index].name;
    }
    
    renderDeckEditor();
    if (typeof showScreen === 'function') {
        showScreen('deck-editor-menu');
    }
}

// Funzione richiamata quando scrivi nel campo input
function updateDeckName(newName) {
    if (currentDeckIndex !== -1) {
        decks[currentDeckIndex].name = newName;
    }
}

// === SCELTA IMMAGINE COPERTINA MAZZO ===
function openCoverSelector() {
    const deck = decks[currentDeckIndex];
    const modal = document.getElementById('card-selector-modal');
    const listContainer = document.getElementById('modal-card-list');
    listContainer.innerHTML = '';

    // Trova tutte le carte personaggio ATTUALMENTE INSERITE nel mazzo
    let charsInDeck = [];
    deck.character.forEach(cardId => {
        if (cardId !== null) {
            const cardData = database.find(c => c.id === cardId);
            if (cardData) charsInDeck.push(cardData);
        }
    });

    // Se non ci sono personaggi nel mazzo, avvisa l'utente
    if (charsInDeck.length === 0) {
        alert("Aggiungi almeno un personaggio al mazzo per poterne usare l'immagine come copertina!");
        return;
    }

    // Mostra le carte del mazzo per fargliele cliccare
    charsInDeck.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'selectable-card';
        cardDiv.innerHTML = buildCardHTML(card);
        
        // Quando clicca la carta, aggiorna l'immagine di copertina
        cardDiv.onclick = () => {
            deck.coverImage = card.img; // Salva l'immagine della carta come copertina
            closeModal();
            alert(`Immagine di copertina aggiornata con ${card.name}!`);
        };
        listContainer.appendChild(cardDiv);
    });

    // Riutilizziamo lo stesso modale di selezione carte
    modal.style.display = 'flex';
}

// === LOGICA DECK EDITOR ===
function renderDeckEditor() {
    const deck = decks[currentDeckIndex];
    
    // Funzione helper per renderizzare ogni sezione della griglia
    const renderSection = (category, containerId) => {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        
        deck[category].forEach((cardId, slotIndex) => {
            const slotBtn = document.createElement('div');
            slotBtn.className = 'card-slot-btn';
            slotBtn.onclick = () => openCardSelector(category, slotIndex);

            if (cardId === null) {
                slotBtn.innerHTML = '+';
            } else {
                // Trova la carta nel database.js e la renderizza
                const card = database.find(c => c.id === cardId);
                slotBtn.innerHTML = buildCardHTML(card);
            }
            container.appendChild(slotBtn);
        });
    };

    renderSection('character', 'grid-character');
    renderSection('evolution', 'grid-evolution');
    renderSection('trainer_hs', 'grid-trainer-hs');
    renderSection('trainer_item', 'grid-trainer-item');
}

// === GENERAZIONE HTML DELLE CARTE ===
function buildCardHTML(card) {
    if (card.category === 'character') {
        // Genera il blocco HTML per ogni mossa
        let movesHtml = card.moves.map(m => `
            <div class="fullart-move-block">
                <div class="cost-indicator">
                    <span>${m.cost}</span>
                </div>
                <div class="fullart-move-text">${m.effect}</div>
            </div>
        `).join('');

        // Genera l'HTML della carta a immagine intera
        return `
        <div class="card-character-fullart" style="background-image: url('${card.img}'); border-color: ${card.typeColor};">
            <div class="fullart-header">
                <div class="cost-indicator">
                    <span>${card.cost}</span>
                </div>
                <div class="fullart-name">${card.name}</div>
            </div>
            <div class="fullart-moves">
                ${movesHtml}
            </div>
        </div>`;
        
    } else {
        // Grafica per Evoluzioni e Carte Trainer (rimane la grafica classica)
        return `
        <div class="card-render card-trainer">
            <div class="trainer-top-bar">
                <span>${card.cost} 🪙</span>
                <span>${card.name}</span>
            </div>
            <div class="trainer-img" style="background-image: url('${card.img}');"></div>
            <div class="trainer-bottom">
                ${card.effect}
            </div>
        </div>`;
    }
}

// === SELEZIONE CARTA E REGOLE ANTICHEAT ===
function openCardSelector(category, slotIndex) {
    selectedSlotType = category;
    selectedSlotIndex = slotIndex;
    
    const modal = document.getElementById('card-selector-modal');
    const listContainer = document.getElementById('modal-card-list');
    listContainer.innerHTML = '';

    // Mostra solo le carte appartenenti alla categoria selezionata (pescate da database.js)
    const availableCards = database.filter(c => c.category === category);

    const currentDeck = decks[currentDeckIndex];
    
    // Se c'è già una carta nello slot, mostra l'opzione per rimuoverla
    if (currentDeck[category][slotIndex] !== null) {
        const removeBtn = document.createElement('div');
        removeBtn.className = 'card-slot-btn selectable-card';
        removeBtn.style.borderColor = 'red';
        removeBtn.style.color = 'red';
        removeBtn.innerHTML = 'RIMUOVI<br>CARTA';
        removeBtn.onclick = () => selectCard(null);
        listContainer.appendChild(removeBtn);
    }

    // Renderizza le opzioni disponibili
    availableCards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'selectable-card';
        cardDiv.innerHTML = buildCardHTML(card);
        cardDiv.onclick = () => selectCard(card);
        listContainer.appendChild(cardDiv);
    });

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('card-selector-modal').style.display = 'none';
}

// === SELEZIONE CARTA (LIMITI RIMOSSI) ===
function selectCard(card) {
    const currentDeck = decks[currentDeckIndex];

    if (card !== null) {
        // Nessun controllo su copie massime o rarità.
        // Inserisce liberamente l'ID della carta nello slot selezionato
        currentDeck[selectedSlotType][selectedSlotIndex] = card.id;
    } else {
        // Svuota lo slot se si sceglie di rimuovere la carta
        currentDeck[selectedSlotType][selectedSlotIndex] = null;
    }

    closeModal();
    renderDeckEditor();
}