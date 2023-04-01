//Create a function that takes a number as an argument and returns true if the number is a valid credit card number, false otherwise.

//Credit card numbers must be between 14-19 digits in length, and pass the Luhn test, described below:

//Remove the last digit (this is the "check digit").
//Reverse the number.
//Double the value of each digit in odd-numbered positions. If the doubled value has more than 1 digit, add the digits together (e.g. 8 x 2 = 16 ➞ 1 + 6 = 7).
//Add all digits.
//Subtract the last digit of the sum (from step 4) from 10. The result should be equal to the check digit from step 1.

function validateCard(num) {
	let numStr = num.toString()
	let checkDigit = parseInt(numStr.slice(-1))
	let numArr = numStr.split('').map(Number).slice(0, numStr.length - 1)
	if (numStr.length % 2 != 0) {
		let luhnOdd = numArr.map((x, y) => {
			if (y % 2 != 0) {
				let z= (x * 2);
				return z >= 10 ? z - 9 : z;
			} else {
				return x
			}
		}).reduce((x, y) => x + y)
		return (luhnOdd + checkDigit) % 10 == 0 && numStr.length < 12 || numStr.length > 19;
	} else {
			let luhnEven = numArr.map((x, y) => {
			if (y % 2 == 0) {
				let z= (x * 2);
				return z >= 10 ? z - 9 : z;
			} else {
				return x
			}
		}).reduce((x, y) => x + y)
		return (luhnEven + checkDigit) % 10 == 0;
	}
}
