//Rock, Paper, Scissors.
//Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner of the game 

//Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according to the following rules:

//If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw".


function rps(p1, p2) {
	if (p1 == p2) {
		return "It's a draw"
	} else if (p1 == "Rock" && p2 == "Paper" || p1 == "Scissors" && p2 == "Rock" ) {
		return "The winner is p2"; 
	} else if (p1 == "Scissors" && p2 == "Paper" || p1 == "Paper" && p2 == "Rock" ) {
		return "The winner is p1";
	} else {
		return 'error'
	}
}
