function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timeoutId; // Zmienna przechowująca identyfikator timera

function changeBackgroundColor() { // Funkcja zmieniająca kolor tła strony co sekundę
    document.body.style.backgroundColor = getRandomHexColor();
    timeoutId = setTimeout(changeBackgroundColor, 1000); // Ustawienie nowego wywołania funkcji changeBackgroundColor po upływie 1 sekundy i przypisanie identyfikatora timera do zmiennej
}

document.querySelector("[data-start]").addEventListener('click', function () {// Obsługa zdarzenia kliknięcia przycisku "Start"
    this.disabled = true; // Wyłączenie przycisku "Start"
    document.querySelector("[data-stop]").disabled = false; // Włączenie przycisku "Stop"
    changeBackgroundColor(); // Rozpoczęcie zmiany koloru tła
});

document.querySelector("[data-stop]").addEventListener('click', function () {// Obsługa zdarzenia kliknięcia przycisku "Stop"
    this.disabled = true; // Wyłączenie przycisku "Stop"
    document.querySelector("[data-start]").disabled = false; // Włączenie przycisku "Start"
    clearTimeout(timeoutId); // Zatrzymanie timera
});