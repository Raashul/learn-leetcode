package main

import "math"

func main() {

}

func longestPalindrome(s string) string {
	if len(s) <= 1 {
		return s
	}

	startIndex := 0
	endIndex := 0
	maxLength := -1

	for i := 0; i < len(s); i++ {
		len1 := expandOnCenter(s, i, i)
		len2 := expandOnCenter(s, i, i+1)
		mLength := math.Max(float64(len1), float64(len2))

		if mLength > float64(maxLength) {
			maxLength = int(mLength)
			startIndex = i - (maxLength-1)/2
			endIndex = i + maxLength/2
		}
	}
	return s[startIndex : endIndex+1]

}

func expandOnCenter(s string, left int, right int) int {
	size := 0
	for left >= 0 && right < len(s) && s[left] == s[right] {
		size = right - left + 1 ///add 1 since its indexes
		left--
		right++
	}
	return size
}
