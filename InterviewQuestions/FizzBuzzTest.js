//Write a method that returns array of all the numbers from 1 to an integer argument. 
//But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. 
//For numbers which are multiples of both three and five use “FizzBuzz”.


function fizzBuzz(number) {
	let arr = []
	for (let i = 1; i < number + 1; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			arr.push('FizzBuzz')
		} else if (i % 3 == 0) {
			arr.push('Fizz')
		} else if (i % 5 == 0) {
			arr.push('Buzz')
		} else {
			arr.push(i)
		}
	}
	return arr;
}
