// Create a function that takes an array of numbers and returns the second largest number.


function secondLargest(arr) {
	let sorted = arr.sort((a, b) => b - a)
	return sorted[1]
}

// Another soultion 

function secondLargest(arr) {
	let [largest, second, ...rest] = arr.sort((a,b) => b - a)
	return second
}
