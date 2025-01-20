package main

import (
	"strings"
	"unicode"
)

func main() {

}

func isPalindrome(s string) bool {

	left, right := 0, len(s)-1
	s = strings.ToLower(s)
	for left < right {
		for left < right && !isAlphanumeric(rune(s[left])) {
			left++
		}
		for left < right && !isAlphanumeric(rune(s[right])) {
			right--
		}

		if s[left] != s[right] {
			return false
		}
		left++
		right--

	}

	return true
}

func isAlphanumeric(c rune) bool {
	return unicode.IsLetter(c) || unicode.IsDigit(c)
}

// func isLetter(r rune) bool {
//     // Check if the rune is within the Unicode range for letters
//     return (r >= 'A' && r <= 'Z') || (r >= 'a' && r <= 'z')
// }

// func isDigit(r rune) bool {
//     // Check if the rune is within the Unicode range for digits
//     return r >= '0' && r <= '9'
// }

// func isAlphanumeric(r rune) bool {
//     return isLetter(r) || isDigit(r)
// }
