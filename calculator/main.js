const btnOne = document.querySelector(".one");
const btnPlus = document.querySelector(".plus");
const btnEqual = document.querySelector(".equals");

btnOne.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "1"
})

btnPlus.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "+"
})

btnEqual.addEventListener("click", () => {
    let output = document.querySelector(".output");
    var text = output.textContent
    output.textContent = eval(text)
})
