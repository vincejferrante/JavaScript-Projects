// Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).


function highLow(str) {
	let arr = str.split(' ').map(Number)
	let max = Math.max(...arr)
	let min = Math.min(...arr)
	return `${max} ${min}`
}
