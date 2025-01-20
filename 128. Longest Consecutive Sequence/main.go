package main

func main() {

}

func longestConsecutive(nums []int) int {
	numSet := make(map[int]struct{})
	longest := 0
	for _, num := range nums {
		numSet[num] = struct{}{}
	}

	for num := range numSet {
		if _, found := numSet[num-1]; !found {
			length := 1
			for {
				if _, exists := numSet[num+length]; exists {
					length++
				} else {
					break
				}
			}
			if length > longest {
				longest = length
			}
		}
	}

	return longest
}
