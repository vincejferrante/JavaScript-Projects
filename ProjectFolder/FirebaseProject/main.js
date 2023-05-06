import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings = {
    databaseURL: ""
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const notes = ref(database, "notes")

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add_button");
const result = document.querySelector(".results");

addButtonEl.addEventListener("click", () => {

  if (inputFieldEl.value == '') {
    alert("Please enter something");
  } else if (inputFieldEl.value.length > 80) {
    alert("Please enter a shorter value (less than 80 characters)");
    inputFieldEl.value = "";
  } else {
    let inputValue = inputFieldEl.value
    push(notes, inputValue)
    
  }
  inputFieldEl.value = "";
});

onValue(notes, function(snapshot) {
  if (snapshot.exists()) {
    let notearr = Object.entries(snapshot.val())

    ClearShoppingListEl()
    //console log the database values
    for (let i = 0; i < notearr.length; i++) {
      let currentItem = notearr[i]
      let currentItemID = currentItem[0]
      let currentItemValue = currentItem[1]
  
      appendingItemToShoppingList(currentItem)
    }
  } else {
    result.innerHTML = "No items here...yet";
  }


})

function ClearShoppingListEl() {
    result.innerHTML = "";
}


function appendingItemToShoppingList(item) {
  let itemID = item[0];
  let itemValue = item[1]
  const li = document.createElement("li");
  li.textContent = itemValue;

  li.addEventListener("dblclick", function() {
    let exactLocation = ref(database, `notes/${itemID}`)
    remove(exactLocation)
  })

  li.addEventListener("click", function() {
    let linethrough = li.style.textDecoration = "line-through"
  })

  result.appendChild(li);
}
