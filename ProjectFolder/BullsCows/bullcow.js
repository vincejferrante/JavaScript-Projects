

function startGame() {
    const btnPush = document.querySelector("button")
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let array_sorted_random = array.sort((a) => 0.5 - Math.random())
    let secertNumber = [array_sorted_random[1], array_sorted_random[2], array_sorted_random[3], array_sorted_random[4]].join('')
    let attempt = 0;

    console.log(secertNumber);
    btnPush.addEventListener("click", () => {
        let guessInput = document.querySelector("input").value;
        let guess = guessInput
        

        if (guess === '' || guess.length != 4) {
            alert("Please input a four dight number");
        }
        
        if (guess === secertNumber) {
            alert("You Win!");
        }
        
        let bulls = 0;
        let cows = 0;
        
        for(let i = 0; i < guess.length; i++) {
            const index = secertNumber.indexOf(guess[i]);
            if (index === i) {
                bulls++;
            } else if (index > -1) {
                    cows++;
            }
        }
        attempt++;
        let cowsOutput = document.querySelector(".cows");
        let BullOutput = document.querySelector(".bulls");
        cowsOutput.innerHTML = `${cows}`
        BullOutput.innerHTML = `${bulls}`


        let results = document.querySelector(".result");
        let para = results.appendChild(document.createElement("p"))
        para.innerHTML = ` Attempt: ${attempt} <br> Guess: ${guess}`;

        document.querySelector("input").value = '';  


    })

}


startGame()
