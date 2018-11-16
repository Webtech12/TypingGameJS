window.addEventListener('load', init)

//global var
let time = 4;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  //initialize game

  function init() {
    //load word
    showWord(words);
    //start matching on word
    wordInput.addEventListener('input', startMatch);
    //call countdown every second
    setInterval(countdown, 1000);
    //check game status
    setInterval(checkStatus, 50);
}

//start match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = 5;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    //if score is -1, display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

//match the current word
function matchWords() {
    if (wordInput.value===currentWord.innerHTML) {
        message.innerHTML = 'correct!!';
        return true;
    }
    else {
        message.innerHTML = '';
        return false;
    }
}

//pick & show random words
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

//countdown timer
function countdown() {
    //time not run out
    if (time> 0) {
        //decrement
        time--;
    }
    else if (time==0) {
        //over
        isPlaying = false;
    }

    //show time
    timeDisplay.innerHTML = time;
}

//check status
function checkStatus() {
    if (!isPlaying && time ===0) {
        message.innerHTML = 'GAME OVER!!!';
        score = -1;
    }
}