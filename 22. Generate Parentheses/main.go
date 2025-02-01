func generateParenthesis(n int) []string {
	result := make([]string, 0)
	result = append(result, "()")
	index := 1

	for index < n {
		temp := make(map[string]bool)
		for _, res := range result {
			for i := 0; i < len(res); i++ {
				if res[i] == '(' {
					tempStr := res[:i+1] + "()" + res[i+1:]
					temp[tempStr] = true
				}
			}
			temp[fmt.Sprintf("()%s", res)] = true
			temp[fmt.Sprintf("%s()", res)] = true
		}

		// Convert map to slice and sort it
		keys := make([]string, 0, len(temp))
		for k := range temp {
			keys = append(keys, k)
		}
		sort.Strings(keys)

		result = keys
		index++
	}

	return result
}