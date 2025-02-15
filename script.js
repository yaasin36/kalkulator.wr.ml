// Variables
const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");
const winOutput = document.querySelector("#winOutput");
const loseOutput = document.querySelector("#loseOutput");
const winrateOutput = document.querySelector("#winrateOutput");

// Functions
function validation() {
    const win = parseFloat(document.querySelector("#win").value);
    const lose = parseFloat(document.querySelector("#lose").value);

    if (isNaN(win) || isNaN(lose)) {
        display("Field harus diisi bro.", true);
    } else if (win < 0 || lose < 0) {
        display("Field tidak boleh lebih kecil dari 0", true);
    } else {
        const totalMatches = win + lose;
        const winrate = calculateWinrate(win, totalMatches);
        displayResults(win, lose, winrate);
    }
}

function display(text, isError) {
    resultText.innerHTML = text;
    if (isError) {
        resultText.classList.add('error');
    } else {
        resultText.classList.remove('error');
    }
}

function displayResults(win, lose, winrate) {
    winOutput.textContent = win;
    loseOutput.textContent = lose;
    winrateOutput.textContent = `${winrate.toFixed(2)}%`;
}

function calculateWinrate(win, totalMatches) {
    if (totalMatches === 0) return 0; // Menghindari pembagian dengan 0
    return (win / totalMatches) * 100;
}

// Main
window.addEventListener("load", init);

function init() {
    eventListener();
}

function eventListener() {
    hasil.addEventListener("click", validation);
}