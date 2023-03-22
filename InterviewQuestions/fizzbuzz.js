   //Write a method that returns array of all the numbers from 1 to an integer argument. 
//But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. 
//For numbers which are multiples of both three and five use “FizzBuzz”.

//My solution is writing a funcation by taking one agruement to pass the number we wish to pass
function fizzBuzz(number) {
  ////variable of an empty array
	let arr = []
  //define a for loop
	for (let i = 1; i < number + 1; i++) {
    //if both 3 and 5 are divisible say FizzBuzz
		if (i % 3 == 0 && i % 5 == 0) {
			arr.push('FizzBuzz')
    //if 3 divisible say Fizz
		} else if (i % 3 == 0) {
			arr.push('Fizz')
     //if 5 divisible say Buzz
		} else if (i % 5 == 0) {
			arr.push('Buzz')
     //default place number in array
		} else {
			arr.push(i)
		}
	}
  //show the restuls
	return arr;
}
