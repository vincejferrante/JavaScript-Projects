//reate a function which returns the number of true values there are in an array.


function countTrue(arr) {
	if (arr.length == 0) return 0;
	let sum = 0;
	for (const i in arr) {
		 sum += (arr[i] == true) ? 1 : 0;
	}
	return sum;
}
