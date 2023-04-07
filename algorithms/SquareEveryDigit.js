/Create a function that squares every digit of a number.
//Examples
//squareDigits(9119) ➞ 811181
//squareDigits(2483) ➞ 416649
//squareDigits(3212) ➞ 9414


function squareDigits(n) {
	let x = n.toString().split('').map(x => x * x).join('')
	return parseInt(x)
}
