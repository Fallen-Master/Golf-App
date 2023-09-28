$(function(){
// Input score for each hole and save locally
const scoreDisplay = $("#scoreDisplay");
const numberDisplay = $('#numberDisplay');
const holeControls = $("#holeControl");
const currentHoleDisplay = $("#currentHoleDisplay");

let number = 0;
numberDisplay.text(number);

if (localStorage.getItem('savedScore') === null)
{ 
  localStorage.setItem('savedScore', number.toString());
  currentHoleDisplay.text('1');
}

if (localStorage.getItem('currentHole') === null)
{
    localStorage.setItem('currentHole','1');
}

currentHoleDisplay.text(localStorage.getItem('currentHole'));

if (localStorage.getItem('savedScore') === '0')
{
    currentHoleDisplay.text('1');
}

function incrementNumber (){
    number++;
    numberDisplay.text(number.toString());
}

function saveCurrentScore() { //THis is the function to workin dane
    console.log('working')
    localStorage.setItem('savedNumber', number.toString());
    alert('score saved');
}

function decrementNumber(){
    if (number > 0) {
        number--;
        numberDisplay.text(number);
    }
}

function nextHole(){
    let hole = parseInt(currentHoleDisplay.text());
    hole++;
    localStorage.setItem('currentHole', hole.toString());
    currentHoleDisplay.text(localStorage.getItem('currentHole'));
    console.log(hole);
    let currentScore = parseInt(localStorage.getItem('savedScore'));
    let newScore = currentScore + number;
    let totalScore = newScore;

    localStorage.setItem('savedScore', totalScore.toString());
    console.log(hole);
    if (hole <= 18) {
        window.location.href = `playingPage.handlebars?hole=${hole}`;
    } else {
        localStorage.setItem('savedScore', '0');
        window.location.href = 'roundOver.handlebars?score=' + totalScore;
    }
}

scoreDisplay.on('click', '.PlusButton', incrementNumber);
scoreDisplay.on('click', '.MinusButton', decrementNumber);
holeControls.on('click', '.nextHole', nextHole);
holeControls.on('click', '.saveRound', saveCurrentScore); 
});


