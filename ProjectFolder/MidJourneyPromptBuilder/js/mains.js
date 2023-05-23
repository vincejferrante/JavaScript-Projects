import { characters, background, outfits, emojis, palettes, movies, architecture, techniques, lighting, layouts, textures, colorArray, artists, camera, objects, styles, themes } from './arrays.js';

// Declare globally

const selectedElements = [];
const parameterArray = [];
const selectChange = document.querySelectorAll(".handleSelectionChange");
const pushButtons = document.querySelectorAll(".pushButton");

let userInput = '';
const layoutsBtn = document.querySelector('.layouts');
const texturesBtn = document.querySelector('.textures');
const colorsBtn = document.querySelector('.colors');
const artistsBtn = document.querySelector('.artists');
const cameraBtn = document.querySelector('.camera');
const objectsBtn = document.querySelector('.objects');
const stylesBtn = document.querySelector('.styles');
const themesBtn = document.querySelector('.themes');
const lightingBtn = document.querySelector('.lighting');
const techniquesBtn = document.querySelector('.techniques');
const architectureBtn = document.querySelector('.architecture');
const moviesBtn = document.querySelector('.movies');
const palettesBtn = document.querySelector('.palettes');
const emojisBtn = document.querySelector('.emojis');
const fashionBtn = document.querySelector('.fashion');
const backgroundBtn = document.querySelector('.background');
const charactersBtn = document.querySelector('.characters');
const searchInput = document.querySelector('.searchFeature');
const copyButton = document.querySelector('.copy');
const resetButton = document.querySelector('.reset');  

//Event Listenrs for arrays
charactersBtn.addEventListener('click', () => {
  populateArray(characters.sort());
});
backgroundBtn.addEventListener('click', () => {
  populateArray(background.sort());
});
fashionBtn.addEventListener('click', () => {
  populateArray(outfits.sort());
});
emojisBtn.addEventListener('click', () => {
  populateArray(emojis);
});
palettesBtn.addEventListener('click', () => {
  populateArray(palettes.sort());
});
moviesBtn.addEventListener('click', () => {
  populateArray(movies.sort());
});
architectureBtn.addEventListener('click', () => {
  populateArray(architecture.sort());
});
techniquesBtn.addEventListener('click', () => {
  populateArray(techniques.sort());
});
lightingBtn.addEventListener('click', () => {
  populateArray(lighting.sort());
});
themesBtn.addEventListener('click', () => {
  populateArray(themes.sort());
});
layoutsBtn.addEventListener('click', () => {
  populateArray(layouts.sort());
});
texturesBtn.addEventListener('click', () => {
  populateArray(textures.sort());
});
colorsBtn.addEventListener('click', () => {
  populateArray(colorArray.sort());
});
artistsBtn.addEventListener('click', () => {
  populateArray(artists.sort());
});
cameraBtn.addEventListener('click', () => {
  populateArray(camera.sort());
});
objectsBtn.addEventListener('click', () => {
  populateArray(objects.sort());
});
stylesBtn.addEventListener('click', () => {
  populateArray(styles.sort());
});

//Function to populate arrays using a forEach loop andnoting the selected
function populateArray(filteredArray) {
  let results = document.querySelector('.itemresults');
  results.innerHTML = '';

  filteredArray.forEach(x => {
    let paragraph_node = document.createElement("p");
    results.appendChild(paragraph_node);
    paragraph_node.innerHTML = x;
    paragraph_node.addEventListener('click', () => {
      toggleSelected(paragraph_node);
      updatePromptText();
    });

    // Add 'selected' class to previously selected elements
    if (selectedElements.includes(x)) {
      paragraph_node.classList.add('selected');
    }
  });
}

function toggleSelected(element) {
  element.classList.toggle('selected');
  
  const index = selectedElements.indexOf(element.innerHTML);
  if (index > -1) {
    selectedElements.splice(index, 1);
  } else {
    selectedElements.push(element.innerHTML);
  }
  
  updatePromptText(); // Update the prompt text
}
  
function UserInputToTextField() {
  let input = document.querySelector(".userInput");
  let log = document.getElementById("values");
  
  input.addEventListener("input", updateValue);
  
  function updateValue(e) {
    userInput = e.target.value;
    updatePromptText(); // Update the prompt text
  }
}

pushButtons.forEach((button, index) => {
  button.addEventListener("click", function() {
    const selectedValue = selectChange[index].value;
    const selectedItem = selectChange[index].parentNode.firstChild.textContent.toLocaleLowerCase();
    const specialCode = `--${selectedItem.trim().replace(':', '').replace("ratio", "")}`;
    const formattedValue = `${specialCode} ${selectedValue}`;
    parameterArray.push(formattedValue);
    updatePromptText();
  });
});
  
function updatePromptText() {
  let prompt = document.querySelector('.results');
  let promptText = '/imagine prompt: ';
  
  // Concatenate selectedElements and selectedParameters into a new array
  let mergedArray = selectedElements.concat(parameterArray);
  
  // Add user input to the prompt text
  if (userInput) {
    promptText += userInput;
    if (mergedArray.length > 0) {
      promptText += ', ' + mergedArray.join(', ');
    }
    } else {
      promptText += mergedArray.join(', ');
    }
  
    prompt.textContent = promptText;
}
  
UserInputToTextField();

//***Searh funtion ****
function SearchTheArrays(searchTerm) {
  //Search Array will be filtered 
  const searchArray = [characters, background, outfits, emojis, palettes, movies, 
      architecture, techniques, lighting, layouts, textures, colorArray, artists, 
      camera, objects, styles, themes];
  // Create an empty array to store the filtered elements
  const filteredArray = []; 

  // Loop through each array and find matching elements
  searchArray.forEach(array => {
    const matchingElements = array.filter(element => element.toLowerCase().includes(searchTerm));
    filteredArray.push(...matchingElements);
  });
  // Call the populateArray function with the filtered array
  populateArray(filteredArray); 
}

// Add an event listener to the search input
searchInput.addEventListener('input', function(event) {
  // Get the entered search term
  const searchTerm = event.target.value.toLowerCase(); 
  //calling the search term through the function
  SearchTheArrays(searchTerm); 
});

// Copy String from the Results 
copyButton.addEventListener('click', () => {
  let resultsText = document.querySelector('.results');
  // Create a textarea element dynamically
  const textarea = document.createElement('textarea');
  // Set the value of the textarea to the text in the <p> element
  textarea.value = resultsText.textContent;
  // Append the textarea to the document body
  document.body.appendChild(textarea);
  // Select the content of the textarea
  textarea.select();
  // Copy the selected text to the clipboard
  document.execCommand('copy');
  // Remove the textarea from the document
  document.body.removeChild(textarea);
  // Provide a visual feedback to the user
  copyButton.innerText = 'Copied!';
});

//Clear the results
resetButton.addEventListener('click', () => {

  // Clear the 'selectedElements' array
  selectedElements.length = 0; 
  parameterArray.length = 0;
  let prompt = document.querySelector('.results');
  prompt.innerText = '/imagine prompt: ';
  pushButtons.forEach((button, index) => {
    button.addEventListener("click", function() {
      selectChange[index].value = ""
  
    });
  });
  //clear the paramenters
  const elements = document.querySelectorAll(".handleSelectionChange");
  elements.forEach((element) => {
    element.value = "";
  });
  //clear the text
  document.querySelector(".userInput").value = ""

});

