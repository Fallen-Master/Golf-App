// Input score for each hole and save locally
const numberDisplay = document.getElementById('numberDisplay');
const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const saveButton = document.getElementById('saveButton');

let number = 0;
numberDisplay.textContent = number;

function incrementNumber() {
    number++;
    numberDisplay.textContent = number;
}

function decrementNumber() {
    if (number > 0) {
        number--;
        numberDisplay.textContent = number;
    }
}

plusButton.addEventListener('click', incrementNumber);
minusButton.addEventListener('click', decrementNumber);

function saveNumberLocally() {
    localStorage.setItem('savedNumber', number.toString());
    alert('score saved');
}

saveButton.addEventListener('click', saveNumberLocally);
   



