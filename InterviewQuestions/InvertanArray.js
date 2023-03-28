//Create a function that takes an array of numbers arr and returns an inverted array.

//example ([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]

//example ([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]

//example ([]) ➞ []

function invertArray(arr) {
	return (arr.length > 1 ? arr.map(x => x * -1) : arr);
}
