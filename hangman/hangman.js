const words = ["dates", "really", "unneutral", "backup", "booth", "bytes", "honeydew", "risks", "mills", "canal", "smoke", "murder", "spies", "tight", "object", "attend", "others", "discs", "aircraft", "toward", "casualty", "chorus", "couple", "agreed", "rooms", "novels", "viral", "google", "trips", "addition", "comics", "silent", "future", "joint", "sales", "palmer", "losing", "overload", "caused", "notebook", "heads", "proper", "cache", "saints", "error", "ballet", "talks", "voices", "backed", "crime", "python", "vessel", "songs", "later", "plains", "tooth", "yield", "unwrap", "murphy", "advice", "subtle", "mixed", "south", "shades", "banned", "nerve", "wealth", "lambda", "realty", "honey", "lyrics", "hentai", "criminal", "forum", "brick", "queen", "signed", "camera", "notice", "facing", "adjust", "strength", "trains", "script", "retain", "roller", "tribal", "drums", "chorus", "shucks", "database", "relax", "treaty", "vendor", "solely", "betty", "races", "reset", "coach", "herbs", "match", "shade", "towers", "rejoice", "blacks", "superb", "argue", "aware", "abuse", "chase", "aurora", "stealing", "clause", "dozen", "merge", "gather", "although", "times", "season", "narrow", "youth", "kodak", "merit", "deaths", "needle", "meets", "panel", "comedy", "palmer", "yield", "fancy", "money", "motels", "forget", "wordsmith", "horror"];

let word;
let userGuessedLetters = [];
let incorrectGuesses = 0;
let img = new Image();
img.src = 'hangman-0.png';
document.body.appendChild(img);

// Generate a random word from the list of words
function randomWord() {
  let randNum = Math.floor(Math.random() * words.length);
  word = words[randNum];
  console.log(word);
}

//Display the word with blank spaces for unguessed letters
function displayWord() {
  let wordLen = word.length;
  let result = document.getElementById('word')
  let displayString = '';
  for (let i = 1; i <= wordLen; i++) {
    displayString += '  __  ';
  }
  result.innerHTML = displayString;
  console.log(wordLen);
}


//Handle the user's guess
function guessLetter() {
    let UserGuess = document.getElementById('guess-input').value;
  
    if (UserGuess === '') {
      return;
    } else if (UserGuess.length > 1) {
      alert("too many charters")
      return;
    }
  
    if (userGuessedLetters.includes(UserGuess)) {
      alert("You already guessed this letter.")
      return;
    } else {
      userGuessedLetters.push(UserGuess);
    }
  
    let displayString = '';
    let wordArr = word.split('');
    let matchLetters = userGuessedLetters.every(val => wordArr.includes(val));
    let allLettersGuessed = true; // flag to check if all letters are guessed
    for (let i = 0; i < wordArr.length; i++) {
      if (userGuessedLetters.includes(wordArr[i])) {
        displayString += ` ${wordArr[i]} `;
      } else {
        displayString += ' __ ';
        allLettersGuessed = false;
        //incorrectGuesses++; // set flag to false if a letter is not guessed
      }
    }
    if (!matchLetters) {
      incorrectGuesses++; // Increment the count of wrong guesses
      img.src = `hangman-${incorrectGuesses}.png`;
    }
  
    document.getElementById('word').innerHTML = displayString;
    document.getElementById('guess-input').value = "";
  
  
    // Check if the game is over
    if (allLettersGuessed) {
      alert("Congratulations! You have guessed the word.");
  
    }
    if (incorrectGuesses === 6) {
      // Display a message to the user and disable the input field
      let result = document.querySelector('.results');
      result.innerHTML = "You lose! The word was " + word;
      UserGuess.disabled = true;
    }
  }
  
 
function resetGame(){
    location.reload();
}

  
guessLetter();
window.onload=function(){
  randomWord();
  displayWord();
};
