//Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.

function isAnagram(s1, s2) {
	newS2 = s2.toLowerCase().split("").sort().join('')
	newS1 = s1.toLowerCase().split("").sort().join('')
	return newS2 == newS1
}
