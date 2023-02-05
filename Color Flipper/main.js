const Push = document.querySelector("button");

Push.addEventListener("click", () => {
   let a = Math.floor(Math.random() * 255);
   let b = Math.floor(Math.random() * 255);
   let c = Math.floor(Math.random() * 255);
   document.body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
   document.querySelector("h2").innerHTML = `rgb(${a}, ${b}, ${c})`;

})

//"rgb(" + a + ", " + b + ", " + c + ")";