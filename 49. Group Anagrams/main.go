package main

import "fmt"

func main() {
	fmt.Println(groupAnagrams([]string{"eat", "tea", "tan", "ate", "nat", "bat"}))
}

func groupAnagrams(strs []string) [][]string {
	mapping := make(map[string][]string)
	var result [][]string

	for _, str := range strs {
		arrMapping := make([]int, 26)
		for _, eachCharacter := range str {
			arrMapping[eachCharacter-'a']++
		}

		//combine string
		combineStr := ""
		for i, arrMap := range arrMapping {
			for arrMap != 0 {
				combineStr += string(rune(i + 'a'))
				arrMap--
			}
		}
		mapping[combineStr] = append(mapping[combineStr], str)
	}

	for _, mapVal := range mapping {
		result = append(result, mapVal)
	}
	return result

}
