const startBtn = document.getElementById("startBtn");
const randaomnumbtn = document.getElementById("randaomnumbtn");
const tableBody = document.querySelector("#numberTable tbody");
const minInput = document.getElementById("minRange");
const maxInput = document.getElementById("maxRange");

let generatedNumbers = [];
let min = 1;
let max = 100;

startBtn.addEventListener("click", () => {
    // Parse input values
    min = parseInt(minInput.value);
    max = parseInt(maxInput.value);

    // Validate input
    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Please enter a valid range (min < max).");
        return;
    }

    // Reset state
    generatedNumbers = [];
    randaomnumbtn.disabled = false;
    tableBody.innerHTML = ""; // Clear table
});

function limitInputLength(e) {
    if (e.target.value.length > 4) {
        e.target.value = e.target.value.slice(0, 4);
    }
}

document.getElementById("minRange").addEventListener("input", limitInputLength);
document.getElementById("maxRange").addEventListener("input", limitInputLength);


function generateRandomNumber() {
    const totalPossible = max - min + 1;

    if (generatedNumbers.length >= totalPossible) {
        const row = tableBody.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 2;
        cell.textContent = `All numbers from ${min} to ${max} have been generated.`;
        cell.style.fontWeight = "bold";
        randaomnumbtn.disabled = true;
        return;
    }

    let randomNum;
    do {
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (generatedNumbers.includes(randomNum));

    generatedNumbers.push(randomNum);

    const row = tableBody.insertRow();
    const indexCell = row.insertCell();
    const numberCell = row.insertCell();

    indexCell.textContent = generatedNumbers.length;
    numberCell.textContent = randomNum;
}

randaomnumbtn.addEventListener("click", generateRandomNumber);
 
