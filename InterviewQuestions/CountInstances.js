//Create a function that takes two strings as arguments and 
//returns the number of times the first string (the single character) is found in the second string.


function charCount(myChar, str) {
	var letter = str.split("");
	return letter.filter(x => x == myChar).length;
}
