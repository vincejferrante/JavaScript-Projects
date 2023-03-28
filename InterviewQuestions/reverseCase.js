//Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

//reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

//reverseCase("MANY THANKS") ➞ "many thanks"

//reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"

function reverseCase(str) {
	let arr = str.split("")
	return arr.map(v => {
		if (v == v.toLowerCase()) {
			return v.toUpperCase()
		} else {
			return v.toLowerCase()
		}
	}).join("");
}
