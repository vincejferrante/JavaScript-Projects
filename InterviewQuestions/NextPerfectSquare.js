//Create a function which takes a given number n and returns next integral perfect square number. 
//Return null if the given number is not a perfect square.

//example (121) ➞ 144

// example (625) ➞ 676

// example (114) ➞ null
// 114 is not a perfect square

function nextSquare(n) {
	x = (Math.sqrt(n) + 1) ** 2;
	if (x % 1 == 0) {
		return x;
	} else {
		return null;
	}
