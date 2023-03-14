const btnZero = document.querySelector(".zero");
const btnOne = document.querySelector(".one");
const btnTwo = document.querySelector(".two");
const btnThree = document.querySelector(".three");
const btnPlus = document.querySelector(".plus");
const btnFour = document.querySelector(".four");
const btnFive = document.querySelector(".five");
const btnSix = document.querySelector(".six");
const btnMinus = document.querySelector(".minus");
const btnSeven = document.querySelector(".seven");
const btnEight = document.querySelector(".eight");
const btnNine = document.querySelector(".nine");
const btnTimes = document.querySelector(".times");
const btnDiv = document.querySelector(".divison");
const btnEqual = document.querySelector(".equals");
const clear = document.querySelector(".clear");

btnZero.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "0"
})

btnOne.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "1"
})

btnTwo.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "2"
})

btnThree.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "3"
})

btnPlus.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "+"
})

btnFour.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "4"
})

btnFive.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "5"
})

btnSix.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "6"
})

btnMinus.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "-"
})

btnSeven.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "7"
})

btnEight.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "8"
})

btnNine.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "9"
})

btnTimes.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "*"
})

btnDiv.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let results = output.appendChild(document.createElement("li"))
    results.style.display = "inline-block"
    results.innerHTML = "/"
})


btnEqual.addEventListener("click", () => {
    let output = document.querySelector(".output");
    var text = output.textContent
    output.textContent = eval(text)
})
clear.addEventListener("click", () => {
    let output = document.querySelector(".output");
    var text = output.textContent
    output.textContent = ""
})
