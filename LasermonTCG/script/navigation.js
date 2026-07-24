// === GESTIONE SCHERMATE (NAVIGAZIONE) ===

function showScreen(screenId) {
    // Nasconde tutte le schermate
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    // Mostra la schermata richiesta
    document.getElementById(screenId).classList.add('active');

    // Se stiamo entrando nel menù del deckbuilding, aggiorniamo la lista grafica dei mazzi.
    // La funzione renderDeckList si trova in deckbuilding.js
    if (screenId === 'deck-list-menu') {
        if (typeof renderDeckList === 'function') {
            renderDeckList();
        }
    }
}