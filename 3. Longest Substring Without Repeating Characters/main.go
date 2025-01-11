package main

func main() {
	lengthOfLongestSubstring("abcabcbb")
}

func lengthOfLongestSubstring(s string) int {
	firstPointer := 0
	secondPointer := 0
	uniqueElements := make(map[byte]bool)

	maxLength := 0

	for secondPointer < len(s) {
		if firstPointer == secondPointer {
			char := s[firstPointer]
			uniqueElements[char] = true
			secondPointer++
		} else if !uniqueElements[s[secondPointer]] {
			uniqueElements[s[secondPointer]] = true
			secondPointer++
		} else {
			maxLength = max(maxLength, len(uniqueElements))
			delete(uniqueElements, s[firstPointer])
			firstPointer++
		}
		maxLength = max(maxLength, len(uniqueElements))
	}
	return maxLength

}

// Utility function to get the maximum of two integers
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
