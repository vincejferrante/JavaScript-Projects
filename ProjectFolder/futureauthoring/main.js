// Define an array of categories and their order
const categories = [
  "Your Ideal Future",
  "One Thing to do Better",
  "What is Something to Learn",
  "Improve Habits",
  "Social Life",
  "Leisure Activity",
  "Famil yLife",
  "Career",
  "Qualities You Admire",
  "Future To Avoid",
  "Ideal Future Summary",
  "Goal Setting",
];

// Define an object to store the user's responses
const futureAuthoring = {};

// Function to create and display the prompt for a given category
function displayPrompt(category) {
  const container = document.getElementById("futureAuthoringContainer");
  container.innerHTML = ""; // Clear previous content

  const categoryHeader = document.createElement("h3");
  categoryHeader.textContent = category;

  const responseInput = document.createElement("textarea");
  responseInput.setAttribute("rows", "4");
  responseInput.setAttribute("cols", "50");

  const backButton = document.createElement("button");
  backButton.textContent = "Back";
  backButton.addEventListener("click", () => navigate(-1));

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.addEventListener("click", () => navigate(1));

  container.appendChild(categoryHeader);
  container.appendChild(responseInput);
  container.appendChild(backButton);
  container.appendChild(nextButton);

  responseInput.focus();
}

// Function to navigate to the previous or next prompt
function navigate(step) {
  const currentCategoryIndex = categories.indexOf(currentCategory);
  const nextCategoryIndex = currentCategoryIndex + step;

  if (nextCategoryIndex >= 0 && nextCategoryIndex < categories.length) {
    const responseInput = document.querySelector("textarea");
    futureAuthoring[currentCategory] = responseInput.value;
    currentCategory = categories[nextCategoryIndex];
    displayPrompt(currentCategory);
  } else if (nextCategoryIndex === categories.length) {
    const responseInput = document.querySelector("textarea");
    futureAuthoring[currentCategory] = responseInput.value;
    displaySummary();
  }
}

// Function to display the summary
function displaySummary() {
  const container = document.getElementById("futureAuthoringContainer");
  container.innerHTML = ""; // Clear previous content

  const summaryHeader = document.createElement("h2");
  summaryHeader.textContent = "Summary";

  const summaryList = document.createElement("ul");

  for (const category in futureAuthoring) {
    const response = futureAuthoring[category];

    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${category}</strong>: ${response}`;

    summaryList.appendChild(listItem);
  }

  container.appendChild(summaryHeader);
  container.appendChild(summaryList);
}

let currentCategory = categories[0];
displayPrompt(currentCategory);
