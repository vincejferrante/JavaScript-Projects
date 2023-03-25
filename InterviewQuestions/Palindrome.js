//Given a word, create a function that checks whether it is a palindrome.

function checkPalindrome(str) {
	return str == str.split('').reverse().join('')
}
