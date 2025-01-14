package main

func main() {

}

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	mappingVal := make(map[rune]int)

	for _, c := range s {
		mappingVal[c]++
	}

	for _, c := range t {
		if _, exists := mappingVal[c]; !exists || mappingVal[c] == 0 {
			return false
		}
		mappingVal[c]--
	}
	for _, val := range mappingVal {
		if val != 0 {
			return false
		}
	}
	return true

}

// faster solution
func isAnagram2(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	arr := [26]int{}
	for i := 0; i < len(s); i++ {
		arr[s[i]-'a']++
		arr[t[i]-'a']--
	}

	for _, val := range arr {
		if val != 0 {
			return false
		}
	}
	return true

}
