//Create a function that takes an array of numbers and return "Boom!"
//if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

function sevenBoom(arr) {
	return (/7/g.test(arr) ? "Boom!" : 'there is no 7 in the array')
}
