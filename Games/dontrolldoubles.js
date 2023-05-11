//Don't Roll Doubles!
//The rules are as follows.

//Roll two dice.
//Add the numbers on the dice together.
//Add the total to your overall score.
//Repeat this for three rounds.
//But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

Create a function which takes in a matrix as input, and return John's score after his game has ended.

function diceGame(arr) {
	let diceRoll = arr[0][1] == arr[0][0] || arr[1][1] == arr[1][0] || arr[2][1] == arr[2][0]
	if (diceRoll == true) {
		return 0;
	} 
	return arr.flat(Infinity).reduce((x, y) => x + y)
}
