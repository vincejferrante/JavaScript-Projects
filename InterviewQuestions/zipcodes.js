//Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

//Must only contain numbers (no non-digits allowed).
//Must not contain any spaces.
//Must not be greater than 5 digits in length.

function zipcode(zip) {
	let num = Number(zip)
	return !isNaN(num) && zip.length == 5
}

//shorter way to write the same code
function zipcode(zip) {
	return zip.length == 5 && !isNaN(zip);
}
