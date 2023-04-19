
// Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin.
// Return the converted temperature values in an array.


function tempConversion(celsius) {
	let c = celsius * 9/5 + 32
	let k = celsius + 273.15
	let total = [c.toFixed(2), k.toFixed(2)]
	let arr = total.map(Number)
	if (arr[1] < 0) {
		return `Invalid`
	}
	return arr
}
