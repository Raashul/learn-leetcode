package main

import "sort"

func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	result := [][]int{}

	for index, val := range nums {
		if val > 0 {
			break
		}
		if index > 0 && val == nums[index-1] {
			continue
		}

		left := index + 1
		right := len(nums) - 1

		for left < right {
			sum := val + nums[left] + nums[right]

			if sum > 0 {
				right--
			} else if sum < 0 {
				left++
			} else {
				result = append(result, []int{val, nums[left], nums[right]})
				left++

				for left < right && nums[left] == nums[left-1] {
					left++
				}
			}
		}

	}
	return result
}
