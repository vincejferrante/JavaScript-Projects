const fs = require('fs');

// Read the text file and convert it to lowercase
const text = fs.readFileSync('sh.txt', 'utf-8').toLowerCase();

// Split the text into an array of words using regular expression
const words = text.match(/[a-z]+/g);

// Build trigrams
const trigrams = {};
for (let i = 0; i < words.length - 2; i++) {
  const trigram = `${words[i]} ${words[i + 1]} ${words[i + 2]}`;
  if (trigrams[trigram]) {
    trigrams[trigram].push(words[i + 3]);
  } else {
    trigrams[trigram] = [words[i + 3]];
  }
}

// Generate the next sentence
let sentence = '';
let nextWord = '';
while (sentence.length < 250) {
  const trigramKeys = Object.keys(trigrams);
  const randomTrigram = trigramKeys[Math.floor(Math.random() * trigramKeys.length)];
  const wordsInTrigram = randomTrigram.split(' ');
  nextWord = trigrams[randomTrigram][Math.floor(Math.random() * trigrams[randomTrigram].length)];
  sentence += `${wordsInTrigram[0]} ${wordsInTrigram[1]} ${nextWord} `;
}

console.log(sentence.trim());
