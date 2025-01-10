// https://leetcode.com/problems/two-sum/?envType=problem-list-v2&envId=rabvlt31
package mai

func twoSum(nums []int, target int) []int {
	numsMapping := make(map[int]int)

	for index, num := range nums {
		requiredVal := target - num

		if prevIndex, ok := numsMapping[requiredVal]; ok {
			return []int{prevIndex, index}
		}
		numsMapping[num] = index

	}
	return []int{}
}
